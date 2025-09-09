import { useState } from 'react';
import { MedicalCase } from '../data/medicalData';

interface CaseViewerProps {
  case: MedicalCase;
  onComplete: (caseId: string) => void;
  isCompleted: boolean;
}

export function CaseViewer({
  case: medicalCase,
  onComplete,
  isCompleted,
}: CaseViewerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: number;
  }>({});

  const steps = [
    'presentation',
    'questions',
    'diagnosis',
    'treatment',
    'summary',
  ];

  const stepTitles = {
    presentation: 'عرض الحالة',
    questions: 'الأسئلة التفاعلية',
    diagnosis: 'التشخيص',
    treatment: 'العلاج',
    summary: 'ملخص التعلم',
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onComplete(medicalCase.id);
    setShowResults(true);
  };

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
    <div className="case-viewer">
      <div className="case-header-detailed">
        <div className="case-title-section">
          <h1>{medicalCase.titleAr}</h1>
          <p className="case-title-en">{medicalCase.title}</p>
        </div>

        <div className="case-meta">
          <div
            className="difficulty-badge"
            style={{
              backgroundColor: getDifficultyColor(medicalCase.difficulty),
            }}
          >
            {getDifficultyLabel(medicalCase.difficulty)}
          </div>
          <div className="duration-badge">
            <span className="detail-icon">⏱️</span>
            {medicalCase.duration} دقيقة
          </div>
          {isCompleted && (
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
              مكتملة
            </div>
          )}
        </div>
      </div>

      <div className="progress-steps">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`step ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
          >
            <div className="step-number">{index + 1}</div>
            <span className="step-title">
              {stepTitles[step as keyof typeof stepTitles]}
            </span>
          </div>
        ))}
      </div>

      <div className="case-content">
        {currentStep === 0 && (
          <div className="presentation-section">
            <div className="patient-info">
              <h3>معلومات المريض</h3>
              <div className="patient-details">
                <div className="patient-detail">
                  <strong>العمر:</strong> {medicalCase.patient.age} سنة
                </div>
                <div className="patient-detail">
                  <strong>الجنس:</strong>{' '}
                  {medicalCase.patient.gender === 'male' ? 'ذكر' : 'أنثى'}
                </div>
                <div className="patient-detail">
                  <strong>الشكوى الرئيسية:</strong>{' '}
                  {medicalCase.patient.chiefComplaintAr}
                </div>
              </div>
            </div>

            <div className="history-section">
              <h3>التاريخ المرضي</h3>
              <p>{medicalCase.presentation.historyAr}</p>
            </div>

            <div className="examination-section">
              <h3>الفحص السريري</h3>
              <p>{medicalCase.presentation.examinationAr}</p>
            </div>

            <div className="investigations-section">
              <h3>الفحوصات المطلوبة</h3>
              <ul>
                {medicalCase.presentation.investigationsAr.map(
                  (investigation, index) => (
                    <li key={index}>{investigation}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="questions-section">
            <h3>الأسئلة التفاعلية</h3>
            {medicalCase.questions.map((question, qIndex) => (
              <div key={question.id} className="question-card">
                <h4>السؤال {qIndex + 1}</h4>
                <p className="question-text">{question.questionAr}</p>

                <div className="options-list">
                  {question.optionsAr.map((option, oIndex) => (
                    <button
                      key={oIndex}
                      className={`option-button ${selectedAnswers[question.id] === oIndex ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(question.id, oIndex)}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + oIndex)}
                      </span>
                      <span className="option-text">{option}</span>
                    </button>
                  ))}
                </div>

                {selectedAnswers[question.id] !== undefined && (
                  <div
                    className={`explanation ${selectedAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}
                  >
                    <div className="explanation-header">
                      {selectedAnswers[question.id] ===
                      question.correctAnswer ? (
                        <span className="correct-icon">✅ إجابة صحيحة!</span>
                      ) : (
                        <span className="incorrect-icon">❌ إجابة خاطئة</span>
                      )}
                    </div>
                    <p>{question.explanationAr}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {currentStep === 2 && (
          <div className="diagnosis-section">
            <h3>التشخيص</h3>
            <div className="diagnosis-card">
              <h4>{medicalCase.diagnosisAr}</h4>
              <p className="diagnosis-en">{medicalCase.diagnosis}</p>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="treatment-section">
            <h3>خطة العلاج</h3>
            <div className="treatment-card">
              <p>{medicalCase.treatmentAr}</p>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="summary-section">
            <h3>النقاط التعليمية الرئيسية</h3>
            <ul className="learning-points">
              {medicalCase.learningPointsAr.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {!isCompleted && (
              <button className="complete-button" onClick={handleComplete}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                إكمال الحالة
              </button>
            )}
          </div>
        )}
      </div>

      <div className="navigation-buttons">
        <button
          className="nav-button secondary"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          السابق
        </button>
        <button
          className="nav-button primary"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
        >
          التالي
        </button>
      </div>
    </div>
  );
}
