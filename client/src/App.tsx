import { useState } from 'react';
import { Header } from './components/Header';
import { SpecialtiesGrid } from './components/SpecialtiesGrid';
import { CasesList } from './components/CasesList';
import { CaseViewer } from './components/CaseViewer';
import { SearchBar } from './components/SearchBar';
import { ProgressTracker } from './components/ProgressTracker';
import {
  medicalSpecialties,
  type MedicalCase,
  type Specialty,
} from './data/medicalData';

type ViewMode = 'home' | 'specialty' | 'case';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  );
  const [selectedCase, setSelectedCase] = useState<MedicalCase | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [completedCases, setCompletedCases] = useState<Set<string>>(new Set());

  const handleSpecialtySelect = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
    setCurrentView('specialty');
  };

  const handleCaseSelect = (medicalCase: MedicalCase) => {
    setSelectedCase(medicalCase);
    setCurrentView('case');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedSpecialty(null);
    setSelectedCase(null);
    setSearchQuery('');
  };

  const handleBackToSpecialty = () => {
    setCurrentView('specialty');
    setSelectedCase(null);
  };

  const handleCaseComplete = (caseId: string) => {
    setCompletedCases((prev) => new Set([...prev, caseId]));
  };

  const filteredSpecialties = medicalSpecialties.filter(
    (specialty) =>
      specialty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specialty.nameAr.includes(searchQuery)
  );

  return (
    <div className="app">
      <Header
        onBackClick={
          currentView === 'specialty'
            ? handleBackToHome
            : currentView === 'case'
              ? handleBackToSpecialty
              : undefined
        }
        title={
          currentView === 'home'
            ? 'Cases Bank'
            : currentView === 'specialty'
              ? selectedSpecialty?.name || ''
              : selectedCase?.title || ''
        }
      />

      {currentView === 'home' && (
        <>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="ابحث في التخصصات الطبية..."
          />
          <ProgressTracker completedCases={completedCases.size} />
          <SpecialtiesGrid
            specialties={filteredSpecialties}
            onSpecialtySelect={handleSpecialtySelect}
          />
        </>
      )}

      {currentView === 'specialty' && selectedSpecialty && (
        <CasesList
          specialty={selectedSpecialty}
          onCaseSelect={handleCaseSelect}
          completedCases={completedCases}
        />
      )}

      {currentView === 'case' && selectedCase && (
        <CaseViewer
          case={selectedCase}
          onComplete={handleCaseComplete}
          isCompleted={completedCases.has(selectedCase.id)}
        />
      )}
    </div>
  );
}

export default App;
