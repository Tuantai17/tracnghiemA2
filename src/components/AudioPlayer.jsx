import { useRef, useState } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState(false);

  const [isReady, setIsReady] = useState(false);
  
  // --- CẤU HÌNH BẬT/TẮT AUDIO (Sửa giá trị ở đây: true = Bật, false = Tắt) ---
  const isEnabled = false; 

  const formatTime = (time) => {
    if (isNaN(time) || time === Infinity) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!audioRef.current || error || !isEnabled) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => {
        console.error("Audio play error:", e);
        if (e.name === 'NotAllowedError') {
          alert("Trình duyệt chặn tự động phát. Hãy nhấn Play lần nữa.");
        }
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setCurrentTime(current);
    if (dur && dur !== Infinity) {
      setProgress((current / dur) * 100);
    }
  };

  const handleCanPlay = () => {
    setIsReady(true);
    setError(false);
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !isReady || !isEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * audioRef.current.duration;
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  };

  const rewind = () => {
    if (audioRef.current && isReady && isEnabled) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
    }
  };

  const forward = () => {
    if (audioRef.current && isReady && isEnabled) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + 5
      );
    }
  };

  return (
    <div className={`glass-card p-4 mb-6 animate-fade-in-up shadow-lg border transition-all duration-300 ${!isEnabled ? 'opacity-75 grayscale-[0.5] border-warning/10 bg-warning/5' : 'border-white/10 group/player'}`}>
      <audio
        ref={audioRef}
        src={isEnabled ? src : ''}
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handleCanPlay}
        onEnded={handleEnded}
        onError={(e) => {
          if (isEnabled) {
            console.error("Audio element error:", e);
            setError(true);
          }
        }}
        preload="auto"
      />

      {/* Audio label & Status */}
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${!isEnabled ? 'bg-surface-lighter text-text-muted' : isPlaying ? 'bg-primary animate-pulse shadow-primary/40 text-white' : 'bg-gradient-to-br from-primary to-accent shadow-lg text-white'}`}>
          <svg className={`w-4 h-4 transition-transform ${isPlaying ? 'scale-110' : ''}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        
        <div>
          <span className={`text-sm font-semibold block leading-none ${!isEnabled ? 'text-text-muted' : 'text-text-primary'}`}>Audio Listening</span>
          <span className="text-[10px] text-text-muted uppercase tracking-wider">A2 Cambridge</span>
        </div>
        
        <div className="ml-auto">
          {/* Status Badge */}
          {!isEnabled ? (
            <span className="px-2 py-0.5 bg-warning/10 text-warning text-[10px] font-bold rounded-full border border-warning/20 animate-pulse">
              ⚠️ Audio chưa sẵn sàng
            </span>
          ) : error ? (
            <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-[10px] font-bold rounded-full border border-red-500/20">
              ❌ LỖI FILE
            </span>
          ) : !isReady ? (
            <span className="px-2 py-0.5 bg-primary/10 text-primary-light text-[10px] font-bold rounded-full border border-primary/20 flex items-center gap-1">
              <span className="w-1 h-1 bg-primary rounded-full animate-ping"></span>
              ĐANG TẢI...
            </span>
          ) : (
            <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] font-bold rounded-full border border-success/20">
              ĐÃ SẴN SÀNG
            </span>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div
        className={`w-full h-2 rounded-full mb-3 group relative ${!isEnabled ? 'bg-surface-lighter cursor-not-allowed' : 'bg-surface-lighter cursor-pointer'}`}
        onClick={handleProgressClick}
      >
        <div
          className={`h-full rounded-full transition-all duration-150 relative ${!isEnabled ? 'bg-text-muted/20' : 'bg-gradient-to-r from-primary to-accent'}`}
          style={{ width: `${progress}%` }}
        >
          {isEnabled && isReady && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
      </div>

      {/* Controls */}
      <div className={`flex items-center justify-between ${!isEnabled ? 'pointer-events-none' : ''}`}>
        <span className="text-xs text-text-muted font-mono min-w-[40px]">
          {formatTime(currentTime)}
        </span>

        <div className="flex items-center gap-3">
          {/* Rewind 5s */}
          <button
            onClick={rewind}
            disabled={!isEnabled || !isReady}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${!isEnabled || !isReady ? 'bg-surface-lighter text-text-muted' : 'bg-surface-lighter hover:bg-surface-light hover:scale-110 active:scale-95 text-text-secondary'}`}
            title="Lùi 5 giây"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            disabled={!isEnabled || !isReady}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg ${!isEnabled || !isReady ? 'bg-surface-lighter text-text-muted shadow-none' : 'bg-gradient-to-br from-primary to-primary-dark hover:from-primary-light hover:to-primary hover:scale-110 active:scale-95 shadow-primary/30 text-white'}`}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Forward 5s */}
          <button
            onClick={forward}
            disabled={!isEnabled || !isReady}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${!isEnabled || !isReady ? 'bg-surface-lighter text-text-muted' : 'bg-surface-lighter hover:bg-surface-light hover:scale-110 active:scale-95 text-text-secondary'}`}
            title="Tới 5 giây"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.01 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
            </svg>
          </button>
        </div>

        <span className="text-xs text-text-muted font-mono min-w-[40px] text-right">
          {formatTime(duration)}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
