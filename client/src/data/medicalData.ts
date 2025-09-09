export interface Specialty {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  color: string;
  casesCount: number;
  description: string;
  descriptionAr: string;
}

export interface MedicalCase {
  id: string;
  specialtyId: string;
  title: string;
  titleAr: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  patient: {
    age: number;
    gender: 'male' | 'female';
    chiefComplaint: string;
    chiefComplaintAr: string;
  };
  presentation: {
    history: string;
    historyAr: string;
    examination: string;
    examinationAr: string;
    investigations: string[];
    investigationsAr: string[];
  };
  questions: Array<{
    id: string;
    question: string;
    questionAr: string;
    options: string[];
    optionsAr: string[];
    correctAnswer: number;
    explanation: string;
    explanationAr: string;
  }>;
  diagnosis: string;
  diagnosisAr: string;
  treatment: string;
  treatmentAr: string;
  learningPoints: string[];
  learningPointsAr: string[];
}

export const medicalSpecialties: Specialty[] = [
  {
    id: 'internal-medicine',
    name: 'Internal Medicine',
    nameAr: 'الباطنة العامة',
    icon: '🫀',
    color: '#3B82F6',
    casesCount: 156,
    description: 'Comprehensive care for adult diseases',
    descriptionAr: 'الرعاية الشاملة لأمراض البالغين',
  },
  {
    id: 'surgery',
    name: 'General Surgery',
    nameAr: 'الجراحة العامة',
    icon: '🔪',
    color: '#EF4444',
    casesCount: 134,
    description: 'Surgical procedures and interventions',
    descriptionAr: 'العمليات الجراحية والتدخلات',
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    nameAr: 'طب الأطفال',
    icon: '👶',
    color: '#10B981',
    casesCount: 142,
    description: 'Medical care for infants and children',
    descriptionAr: 'الرعاية الطبية للرضع والأطفال',
  },
  {
    id: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynecology',
    nameAr: 'النساء والتوليد',
    icon: '🤱',
    color: '#F59E0B',
    casesCount: 118,
    description: "Women's reproductive health",
    descriptionAr: 'صحة المرأة الإنجابية',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    nameAr: 'أمراض القلب',
    icon: '❤️',
    color: '#DC2626',
    casesCount: 98,
    description: 'Heart and cardiovascular diseases',
    descriptionAr: 'أمراض القلب والأوعية الدموية',
  },
  {
    id: 'neurology',
    name: 'Neurology',
    nameAr: 'الأعصاب',
    icon: '🧠',
    color: '#7C3AED',
    casesCount: 87,
    description: 'Nervous system disorders',
    descriptionAr: 'اضطرابات الجهاز العصبي',
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    nameAr: 'العظام',
    icon: '🦴',
    color: '#059669',
    casesCount: 112,
    description: 'Musculoskeletal system',
    descriptionAr: 'الجهاز العضلي الهيكلي',
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    nameAr: 'الجلدية',
    icon: '🧴',
    color: '#EC4899',
    casesCount: 76,
    description: 'Skin, hair, and nail conditions',
    descriptionAr: 'أمراض الجلد والشعر والأظافر',
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    nameAr: 'العيون',
    icon: '👁️',
    color: '#0891B2',
    casesCount: 64,
    description: 'Eye and vision disorders',
    descriptionAr: 'أمراض العين والرؤية',
  },
  {
    id: 'ent',
    name: 'ENT',
    nameAr: 'الأنف والأذن والحنجرة',
    icon: '👂',
    color: '#7C2D12',
    casesCount: 58,
    description: 'Ear, nose, and throat conditions',
    descriptionAr: 'أمراض الأنف والأذن والحنجرة',
  },
  {
    id: 'psychiatry',
    name: 'Psychiatry',
    nameAr: 'الطب النفسي',
    icon: '🧘',
    color: '#6366F1',
    casesCount: 92,
    description: 'Mental health and behavioral disorders',
    descriptionAr: 'الصحة النفسية والاضطرابات السلوكية',
  },
  {
    id: 'radiology',
    name: 'Radiology',
    nameAr: 'الأشعة',
    icon: '📡',
    color: '#374151',
    casesCount: 84,
    description: 'Medical imaging and diagnostics',
    descriptionAr: 'التصوير الطبي والتشخيص',
  },
  {
    id: 'emergency',
    name: 'Emergency Medicine',
    nameAr: 'طب الطوارئ',
    icon: '🚨',
    color: '#B91C1C',
    casesCount: 127,
    description: 'Acute care and emergency situations',
    descriptionAr: 'الرعاية الحادة وحالات الطوارئ',
  },
  {
    id: 'anesthesia',
    name: 'Anesthesiology',
    nameAr: 'التخدير',
    icon: '💉',
    color: '#4B5563',
    casesCount: 45,
    description: 'Perioperative care and pain management',
    descriptionAr: 'الرعاية المحيطة بالجراحة وإدارة الألم',
  },
  {
    id: 'pathology',
    name: 'Pathology',
    nameAr: 'علم الأمراض',
    icon: '🔬',
    color: '#059669',
    casesCount: 67,
    description: 'Disease diagnosis through laboratory analysis',
    descriptionAr: 'تشخيص الأمراض من خلال التحليل المخبري',
  },
  {
    id: 'family-medicine',
    name: 'Family Medicine',
    nameAr: 'طب الأسرة',
    icon: '👨‍👩‍👧‍👦',
    color: '#16A34A',
    casesCount: 103,
    description: 'Comprehensive primary healthcare',
    descriptionAr: 'الرعاية الصحية الأولية الشاملة',
  },
];

// Sample cases for demonstration
export const sampleCases: MedicalCase[] = [
  {
    id: 'case-001',
    specialtyId: 'internal-medicine',
    title: 'Chest Pain in a 45-Year-Old Male',
    titleAr: 'ألم في الصدر لرجل يبلغ من العمر 45 عامًا',
    difficulty: 'intermediate',
    duration: 25,
    patient: {
      age: 45,
      gender: 'male',
      chiefComplaint: 'Chest pain for 2 hours',
      chiefComplaintAr: 'ألم في الصدر لمدة ساعتين',
    },
    presentation: {
      history:
        'A 45-year-old male presents with sudden onset of severe chest pain that started 2 hours ago while he was at work. The pain is described as crushing and radiates to his left arm and jaw. He has a history of hypertension and smoking.',
      historyAr:
        'رجل يبلغ من العمر 45 عامًا يعاني من ألم شديد مفاجئ في الصدر بدأ منذ ساعتين أثناء وجوده في العمل. يوصف الألم بأنه ساحق وينتشر إلى ذراعه الأيسر وفكه. لديه تاريخ من ارتفاع ضغط الدم والتدخين.',
      examination:
        'Vital signs: BP 160/95, HR 110, RR 22, O2 sat 96%. Patient appears diaphoretic and anxious. Heart sounds are normal, lungs clear.',
      examinationAr:
        'العلامات الحيوية: ضغط الدم 160/95، معدل ضربات القلب 110، معدل التنفس 22، تشبع الأكسجين 96%. المريض يبدو متعرقًا وقلقًا. أصوات القلب طبيعية، الرئتان صافيتان.',
      investigations: [
        'ECG',
        'Cardiac enzymes',
        'Chest X-ray',
        'Complete blood count',
      ],
      investigationsAr: [
        'تخطيط القلب',
        'إنزيمات القلب',
        'أشعة سينية للصدر',
        'تعداد الدم الكامل',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most likely diagnosis?',
        questionAr: 'ما هو التشخيص الأكثر احتمالاً؟',
        options: [
          'Myocardial infarction',
          'Pulmonary embolism',
          'Aortic dissection',
          'Gastroesophageal reflux',
        ],
        optionsAr: [
          'احتشاء عضلة القلب',
          'انسداد رئوي',
          'تسلخ الأبهر',
          'ارتجاع معدي مريئي',
        ],
        correctAnswer: 0,
        explanation:
          'The presentation of crushing chest pain radiating to the left arm and jaw, along with risk factors (hypertension, smoking), strongly suggests myocardial infarction.',
        explanationAr:
          'يشير ظهور ألم الصدر الساحق الذي ينتشر إلى الذراع الأيسر والفك، إلى جانب عوامل الخطر (ارتفاع ضغط الدم، التدخين)، بقوة إلى احتشاء عضلة القلب.',
      },
    ],
    diagnosis: 'ST-Elevation Myocardial Infarction (STEMI)',
    diagnosisAr: 'احتشاء عضلة القلب مع ارتفاع ST',
    treatment:
      'Immediate reperfusion therapy (PCI or thrombolysis), dual antiplatelet therapy, beta-blockers, ACE inhibitors, statins',
    treatmentAr:
      'العلاج الفوري لإعادة التروية (التدخل التاجي أو الإذابة)، العلاج المضاد للصفائح المزدوج، حاصرات بيتا، مثبطات الإنزيم المحول للأنجيوتنسين، الستاتينات',
    learningPoints: [
      'Early recognition of STEMI is crucial for patient outcomes',
      'Time to reperfusion therapy directly affects mortality',
      'Risk factor modification is essential for secondary prevention',
    ],
    learningPointsAr: [
      'التعرف المبكر على احتشاء عضلة القلب أمر بالغ الأهمية لنتائج المريض',
      'الوقت اللازم للعلاج بإعادة التروية يؤثر مباشرة على الوفيات',
      'تعديل عوامل الخطر ضروري للوقاية الثانوية',
    ],
  },
];
