interface ProgressTrackerProps {
  completedCases: number;
}

export function ProgressTracker({ completedCases }: ProgressTrackerProps) {
  const totalCases = 1500; // Total cases across all specialties
  const progressPercentage = (completedCases / totalCases) * 100;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>تقدمك في التعلم</h3>
        <span className="progress-stats">
          {completedCases} / {totalCases}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="progress-labels">
        <span>مبتدئ</span>
        <span>متوسط</span>
        <span>متقدم</span>
        <span>خبير</span>
      </div>
    </div>
  );
}
