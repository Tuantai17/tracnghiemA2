const ProgressBar = ({ current, total, label }) => {
  const percent = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-text-secondary font-medium">
          {label || `Câu ${current}/${total}`}
        </span>
        <span className="text-sm text-primary font-bold">
          {Math.round(percent)}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-surface-lighter rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary-light to-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
