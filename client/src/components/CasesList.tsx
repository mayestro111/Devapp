import { Specialty, sampleCases } from '../data/medicalData';

interface CasesListProps {
  specialty: Specialty;
  onCaseSelect: (medicalCase: any) => void;
  completedCases: Set<string>;
}

export function CasesList({
  specialty,
  onCaseSelect,
  completedCases,
}: CasesListProps) {
  // Generate sample cases for the specialty
  const cases = Array.from({ length: specialty.casesCount }, (_, index) => ({
    ...sampleCases[0],
    id: `${specialty.id}-case-${index + 1}`,
    specialtyId: specialty.id,
    title: `Case ${index + 1}: ${sampleCases[0].title}`,
    titleAr: `الحالة ${index + 1}: ${sampleCases[0].titleAr}`,
    difficulty: ['beginner', 'intermediate', 'advanced'][index % 3] as
      | 'beginner'
      | 'intermediate'
      | 'advanced',
  }));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '#10B981';
      case 'intermediate':
        return '#F59E0B';
      case 'advanced':
        return '#EF4444';
      default:
        return '#6B7280';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'مبتدئ';
      case 'intermediate':
        return 'متوسط';
      case 'advanced':
        return 'متقدم';
      default:
        return '';
    }
  };

  return (
    <div className="cases-container">
      <div className="specialty-header">
        <div className="specialty-info">
          <span className="specialty-icon-large">{specialty.icon}</span>
          <div>
            <h2>{specialty.nameAr}</h2>
            <p>{specialty.descriptionAr}</p>
          </div>
        </div>
        <div className="specialty-stats-summary">
          <div className="stat">
            <span className="stat-number">{specialty.casesCount}</span>
            <span className="stat-label">حالة</span>
          </div>
          <div className="stat">
            <span className="stat-number">
              {
                Array.from(completedCases).filter((id) =>
                  id.startsWith(specialty.id)
                ).length
              }
            </span>
            <span className="stat-label">مكتملة</span>
          </div>
        </div>
      </div>

      <div className="cases-list">
        {cases.map((medicalCase, index) => (
          <div
            key={medicalCase.id}
            className={`case-card ${completedCases.has(medicalCase.id) ? 'completed' : ''}`}
            onClick={() => onCaseSelect(medicalCase)}
          >
            <div className="case-header">
              <div className="case-number">#{index + 1}</div>
              <div
                className="difficulty-badge"
                style={{
                  backgroundColor: getDifficultyColor(medicalCase.difficulty),
                }}
              >
                {getDifficultyLabel(medicalCase.difficulty)}
              </div>
              {completedCases.has(medicalCase.id) && (
                <div className="completed-badge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            <div className="case-content">
              <h3 className="case-title">{medicalCase.titleAr}</h3>
              <p className="case-title-en">{medicalCase.title}</p>

              <div className="case-details">
                <div className="case-detail">
                  <span className="detail-icon">👤</span>
                  <span>
                    {medicalCase.patient.age} سنة -{' '}
                    {medicalCase.patient.gender === 'male' ? 'ذكر' : 'أنثى'}
                  </span>
                </div>
                <div className="case-detail">
                  <span className="detail-icon">⏱️</span>
                  <span>{medicalCase.duration} دقيقة</span>
                </div>
              </div>

              <p className="chief-complaint">
                {medicalCase.patient.chiefComplaintAr}
              </p>
            </div>

            <div className="case-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
