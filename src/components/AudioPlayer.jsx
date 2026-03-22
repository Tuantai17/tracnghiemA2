import { useRef, useState, useEffect } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setError(false);
  }, [src]);

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => setError(true));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const dur = audioRef.current.duration;
    setCurrentTime(current);
    setProgress(dur ? (current / dur) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current) return;
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
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
    }
  };

  const forward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + 5
      );
    }
  };

  return (
    <div className="glass-card p-4 mb-6 animate-fade-in-up">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={() => setError(true)}
      />

      {/* Audio label */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <span className="text-sm text-text-secondary font-medium">Audio Listening</span>
        {error && (
          <span className="text-xs text-warning ml-auto">
            ⚠️ Audio chưa sẵn sàng
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div
        className="w-full h-2 bg-surface-lighter rounded-full cursor-pointer mb-3 group"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-150 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-muted font-mono min-w-[40px]">
          {formatTime(currentTime)}
        </span>

        <div className="flex items-center gap-3">
          {/* Rewind 5s */}
          <button
            onClick={rewind}
            className="w-9 h-9 rounded-full bg-surface-lighter hover:bg-surface-light flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            title="Lùi 5 giây"
          >
            <svg className="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark hover:from-primary-light hover:to-primary flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-lg shadow-primary/30"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Forward 5s */}
          <button
            onClick={forward}
            className="w-9 h-9 rounded-full bg-surface-lighter hover:bg-surface-light flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            title="Tới 5 giây"
          >
            <svg className="w-4 h-4 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
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
