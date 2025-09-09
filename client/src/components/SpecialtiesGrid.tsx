import { Specialty } from '../data/medicalData';

interface SpecialtiesGridProps {
  specialties: Specialty[];
  onSpecialtySelect: (specialty: Specialty) => void;
}

export function SpecialtiesGrid({
  specialties,
  onSpecialtySelect,
}: SpecialtiesGridProps) {
  return (
    <div className="specialties-container">
      <div className="specialties-grid">
        {specialties.map((specialty) => (
          <div
            key={specialty.id}
            className="specialty-card"
            onClick={() => onSpecialtySelect(specialty)}
            style={
              { '--specialty-color': specialty.color } as React.CSSProperties
            }
          >
            <div className="specialty-icon">{specialty.icon}</div>
            <div className="specialty-content">
              <h3 className="specialty-name">{specialty.nameAr}</h3>
              <p className="specialty-name-en">{specialty.name}</p>
              <p className="specialty-description">{specialty.descriptionAr}</p>
              <div className="specialty-stats">
                <span className="cases-count">{specialty.casesCount} حالة</span>
                <div className="difficulty-indicators">
                  <span className="difficulty-dot beginner"></span>
                  <span className="difficulty-dot intermediate"></span>
                  <span className="difficulty-dot advanced"></span>
                </div>
              </div>
            </div>
            <div className="specialty-arrow">
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
