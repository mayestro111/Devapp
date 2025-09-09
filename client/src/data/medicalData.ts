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

// Comprehensive medical cases database
export const medicalCasesDatabase: MedicalCase[] = [
  // Internal Medicine Cases
  {
    id: 'im-001',
    specialtyId: 'internal-medicine',
    title: 'Acute Myocardial Infarction',
    titleAr: 'احتشاء عضلة القلب الحاد',
    difficulty: 'intermediate',
    duration: 25,
    patient: {
      age: 58,
      gender: 'male',
      chiefComplaint: 'Severe chest pain for 3 hours',
      chiefComplaintAr: 'ألم شديد في الصدر لمدة 3 ساعات',
    },
    presentation: {
      history:
        'A 58-year-old male smoker with diabetes presents with crushing substernal chest pain radiating to left arm and jaw. Pain started 3 hours ago during physical exertion. Associated with nausea, diaphoresis, and shortness of breath.',
      historyAr:
        'رجل يبلغ من العمر 58 عامًا مدخن مصاب بالسكري يعاني من ألم ساحق تحت القص ينتشر إلى الذراع الأيسر والفك. بدأ الألم منذ 3 ساعات أثناء المجهود البدني. مصحوب بغثيان وتعرق وضيق في التنفس.',
      examination:
        'BP 90/60, HR 110, RR 24, O2 sat 92%. Patient appears pale, diaphoretic, and anxious. S4 gallop present. Bilateral basal crackles.',
      examinationAr:
        'ضغط الدم 90/60، معدل ضربات القلب 110، معدل التنفس 24، تشبع الأكسجين 92%. المريض يبدو شاحبًا ومتعرقًا وقلقًا. صوت رابع موجود. خراخر قاعدية ثنائية.',
      investigations: [
        '12-lead ECG',
        'Troponin I',
        'CK-MB',
        'Chest X-ray',
        'Echocardiogram',
      ],
      investigationsAr: [
        'تخطيط القلب 12 قطب',
        'تروبونين I',
        'CK-MB',
        'أشعة سينية للصدر',
        'إيكو القلب',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most appropriate immediate treatment?',
        questionAr: 'ما هو العلاج الفوري الأنسب؟',
        options: [
          'Primary PCI',
          'Thrombolytic therapy',
          'Beta-blockers',
          'Morphine only',
        ],
        optionsAr: [
          'التدخل التاجي الأولي',
          'العلاج الحال للخثرة',
          'حاصرات بيتا',
          'المورفين فقط',
        ],
        correctAnswer: 0,
        explanation:
          'Primary PCI within 90 minutes is the gold standard for STEMI treatment when available.',
        explanationAr:
          'التدخل التاجي الأولي خلال 90 دقيقة هو المعيار الذهبي لعلاج احتشاء عضلة القلب عند توفره.',
      },
    ],
    diagnosis: 'ST-Elevation Myocardial Infarction (STEMI)',
    diagnosisAr: 'احتشاء عضلة القلب مع ارتفاع ST',
    treatment:
      'Primary PCI, dual antiplatelet therapy (aspirin + clopidogrel), atorvastatin, metoprolol, lisinopril',
    treatmentAr:
      'التدخل التاجي الأولي، العلاج المضاد للصفائح المزدوج (أسبرين + كلوبيدوجريل)، أتورفاستاتين، ميتوبرولول، ليسينوبريل',
    learningPoints: [
      'Time is muscle - early reperfusion saves myocardium',
      'STEMI requires immediate catheterization if available',
      'Secondary prevention is crucial for long-term outcomes',
    ],
    learningPointsAr: [
      'الوقت هو العضلة - إعادة التروية المبكرة تنقذ عضلة القلب',
      'احتشاء عضلة القلب يتطلب قسطرة فورية إذا كانت متاحة',
      'الوقاية الثانوية أمر بالغ الأهمية للنتائج طويلة المدى',
    ],
  },
  {
    id: 'im-002',
    specialtyId: 'internal-medicine',
    title: 'Type 2 Diabetes with DKA',
    titleAr: 'السكري النوع الثاني مع الحماض الكيتوني',
    difficulty: 'advanced',
    duration: 30,
    patient: {
      age: 42,
      gender: 'female',
      chiefComplaint: 'Nausea, vomiting, and abdominal pain for 2 days',
      chiefComplaintAr: 'غثيان وقيء وألم في البطن لمدة يومين',
    },
    presentation: {
      history:
        'A 42-year-old obese female with poorly controlled T2DM presents with 2-day history of nausea, vomiting, and abdominal pain. She stopped taking metformin 1 week ago due to GI upset. Recent UTI treated with antibiotics.',
      historyAr:
        'امرأة تبلغ من العمر 42 عامًا تعاني من السمنة مع سكري النوع الثاني سيء التحكم تعاني من غثيان وقيء وألم في البطن لمدة يومين. توقفت عن تناول الميتفورمين منذ أسبوع بسبب اضطراب الجهاز الهضمي. التهاب المسالك البولية الأخير عولج بالمضادات الحيوية.',
      examination:
        'BP 100/70, HR 120, RR 28, Temp 37.8°C. Dehydrated, Kussmaul breathing, fruity breath odor. Abdominal tenderness without guarding.',
      examinationAr:
        'ضغط الدم 100/70، معدل ضربات القلب 120، معدل التنفس 28، درجة الحرارة 37.8°م. جفاف، تنفس كوسماول، رائحة نفس فاكهية. ألم بطني بدون تصلب.',
      investigations: [
        'ABG',
        'Blood glucose',
        'Serum ketones',
        'Basic metabolic panel',
        'Urinalysis',
      ],
      investigationsAr: [
        'غازات الدم الشرياني',
        'جلوكوز الدم',
        'كيتونات المصل',
        'اللوحة الأيضية الأساسية',
        'تحليل البول',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most likely precipitating factor?',
        questionAr: 'ما هو العامل المحفز الأكثر احتمالاً؟',
        options: [
          'UTI infection',
          'Medication non-compliance',
          'Dietary indiscretion',
          'Stress',
        ],
        optionsAr: [
          'عدوى المسالك البولية',
          'عدم الالتزام بالدواء',
          'عدم الانضباط الغذائي',
          'الضغط النفسي',
        ],
        correctAnswer: 0,
        explanation:
          'Infection is the most common precipitating factor for DKA, especially UTI in diabetic patients.',
        explanationAr:
          'العدوى هي العامل المحفز الأكثر شيوعًا للحماض الكيتوني، خاصة التهاب المسالك البولية في مرضى السكري.',
      },
    ],
    diagnosis: 'Diabetic Ketoacidosis (DKA)',
    diagnosisAr: 'الحماض الكيتوني السكري',
    treatment:
      'IV fluids, insulin infusion, electrolyte replacement, treat underlying infection',
    treatmentAr:
      'السوائل الوريدية، تسريب الأنسولين، تعويض الإلكتروليت، علاج العدوى الأساسية',
    learningPoints: [
      'DKA can occur in Type 2 diabetes under stress',
      'Infection is the most common precipitating factor',
      'Careful monitoring of electrolytes during treatment is essential',
    ],
    learningPointsAr: [
      'يمكن أن يحدث الحماض الكيتوني في السكري النوع الثاني تحت الضغط',
      'العدوى هي العامل المحفز الأكثر شيوعًا',
      'المراقبة الدقيقة للإلكتروليت أثناء العلاج أمر ضروري',
    ],
  },

  // Surgery Cases
  {
    id: 'surg-001',
    specialtyId: 'surgery',
    title: 'Acute Appendicitis',
    titleAr: 'التهاب الزائدة الدودية الحاد',
    difficulty: 'beginner',
    duration: 20,
    patient: {
      age: 24,
      gender: 'male',
      chiefComplaint: 'Abdominal pain for 12 hours',
      chiefComplaintAr: 'ألم في البطن لمدة 12 ساعة',
    },
    presentation: {
      history:
        'A 24-year-old male presents with periumbilical pain that migrated to right lower quadrant over 6 hours. Associated with nausea, vomiting, and low-grade fever. No urinary symptoms.',
      historyAr:
        'رجل يبلغ من العمر 24 عامًا يعاني من ألم حول السرة انتقل إلى الربع السفلي الأيمن خلال 6 ساعات. مصحوب بغثيان وقيء وحمى خفيفة. لا توجد أعراض بولية.',
      examination:
        'Temp 38.2°C, HR 95, BP 120/80. McBurney point tenderness, positive Rovsing sign, guarding in RLQ.',
      examinationAr:
        'درجة الحرارة 38.2°م، معدل ضربات القلب 95، ضغط الدم 120/80. ألم في نقطة ماكبرني، علامة روفسينغ إيجابية، تصلب في الربع السفلي الأيمن.',
      investigations: ['CBC', 'CRP', 'Urinalysis', 'CT abdomen', 'Ultrasound'],
      investigationsAr: [
        'تعداد الدم الكامل',
        'البروتين التفاعلي C',
        'تحليل البول',
        'أشعة مقطعية للبطن',
        'الموجات فوق الصوتية',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most appropriate management?',
        questionAr: 'ما هو العلاج الأنسب؟',
        options: [
          'Immediate appendectomy',
          'Conservative management',
          'Antibiotics only',
          'Observation for 24 hours',
        ],
        optionsAr: [
          'استئصال الزائدة الفوري',
          'العلاج التحفظي',
          'المضادات الحيوية فقط',
          'المراقبة لمدة 24 ساعة',
        ],
        correctAnswer: 0,
        explanation:
          'Acute appendicitis requires prompt surgical intervention to prevent complications like perforation.',
        explanationAr:
          'التهاب الزائدة الدودية الحاد يتطلب تدخلاً جراحيًا سريعًا لمنع المضاعفات مثل الانثقاب.',
      },
    ],
    diagnosis: 'Acute Appendicitis',
    diagnosisAr: 'التهاب الزائدة الدودية الحاد',
    treatment: 'Laparoscopic appendectomy, perioperative antibiotics',
    treatmentAr: 'استئصال الزائدة بالمنظار، المضادات الحيوية المحيطة بالجراحة',
    learningPoints: [
      'Classic presentation: periumbilical pain migrating to RLQ',
      'McBurney point tenderness is pathognomonic',
      'Early surgery prevents complications',
    ],
    learningPointsAr: [
      'العرض الكلاسيكي: ألم حول السرة ينتقل إلى الربع السفلي الأيمن',
      'ألم نقطة ماكبرني مميز للمرض',
      'الجراحة المبكرة تمنع المضاعفات',
    ],
  },

  // Pediatrics Cases
  {
    id: 'ped-001',
    specialtyId: 'pediatrics',
    title: 'Febrile Seizure in Toddler',
    titleAr: 'نوبة حموية في طفل صغير',
    difficulty: 'intermediate',
    duration: 20,
    patient: {
      age: 2,
      gender: 'female',
      chiefComplaint: 'Seizure with fever',
      chiefComplaintAr: 'نوبة مع حمى',
    },
    presentation: {
      history:
        'A 2-year-old previously healthy girl presents after a 3-minute generalized tonic-clonic seizure. Parents report fever for 1 day, runny nose, and decreased appetite. No previous seizures.',
      historyAr:
        'طفلة تبلغ من العمر عامين سليمة سابقًا تعرض لنوبة معممة توترية رمعية لمدة 3 دقائق. يفيد الوالدان بوجود حمى لمدة يوم واحد وسيلان في الأنف وانخفاض في الشهية. لا توجد نوبات سابقة.',
      examination:
        'Temp 39.5°C, HR 140, RR 28. Alert and interactive post-ictally. No focal neurological deficits. Throat erythema, no neck stiffness.',
      examinationAr:
        'درجة الحرارة 39.5°م، معدل ضربات القلب 140، معدل التنفس 28. متيقظة وتفاعلية بعد النوبة. لا توجد عجز عصبي بؤري. احمرار في الحلق، لا توجد تصلب في الرقبة.',
      investigations: [
        'Blood glucose',
        'Electrolytes',
        'CBC',
        'Blood culture',
        'Lumbar puncture if indicated',
      ],
      investigationsAr: [
        'جلوكوز الدم',
        'الإلكتروليت',
        'تعداد الدم الكامل',
        'زراعة الدم',
        'البزل القطني إذا لزم الأمر',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most likely diagnosis?',
        questionAr: 'ما هو التشخيص الأكثر احتمالاً؟',
        options: [
          'Simple febrile seizure',
          'Complex febrile seizure',
          'Meningitis',
          'Epilepsy',
        ],
        optionsAr: [
          'نوبة حموية بسيطة',
          'نوبة حموية معقدة',
          'التهاب السحايا',
          'الصرع',
        ],
        correctAnswer: 0,
        explanation:
          'Simple febrile seizure: generalized, <15 minutes, no focal features, age 6 months-5 years.',
        explanationAr:
          'النوبة الحموية البسيطة: معممة، <15 دقيقة، لا توجد ميزات بؤرية، العمر 6 أشهر-5 سنوات.',
      },
    ],
    diagnosis: 'Simple Febrile Seizure',
    diagnosisAr: 'نوبة حموية بسيطة',
    treatment:
      'Fever control with acetaminophen/ibuprofen, parental education, no anticonvulsants needed',
    treatmentAr:
      'السيطرة على الحمى بالأسيتامينوفين/الإيبوبروفين، تثقيف الوالدين، لا حاجة لمضادات الاختلاج',
    learningPoints: [
      'Febrile seizures occur in 2-5% of children',
      'Simple febrile seizures have excellent prognosis',
      'Parental education is key to management',
    ],
    learningPointsAr: [
      'النوبات الحموية تحدث في 2-5% من الأطفال',
      'النوبات الحموية البسيطة لها تشخيص ممتاز',
      'تثقيف الوالدين هو مفتاح العلاج',
    ],
  },

  // Cardiology Cases
  {
    id: 'card-001',
    specialtyId: 'cardiology',
    title: 'Atrial Fibrillation with RVR',
    titleAr: 'الرجفان الأذيني مع استجابة بطينية سريعة',
    difficulty: 'intermediate',
    duration: 25,
    patient: {
      age: 68,
      gender: 'male',
      chiefComplaint: 'Palpitations and shortness of breath',
      chiefComplaintAr: 'خفقان وضيق في التنفس',
    },
    presentation: {
      history:
        'A 68-year-old male with hypertension presents with 6-hour history of palpitations, shortness of breath, and chest discomfort. No previous cardiac history. Takes lisinopril for hypertension.',
      historyAr:
        'رجل يبلغ من العمر 68 عامًا مصاب بارتفاع ضغط الدم يعاني من خفقان وضيق في التنفس وانزعاج في الصدر لمدة 6 ساعات. لا يوجد تاريخ قلبي سابق. يتناول ليسينوبريل لارتفاع ضغط الدم.',
      examination:
        'BP 140/90, HR 150 irregular, RR 24, O2 sat 94%. Irregularly irregular pulse, mild JVD, bilateral basal crackles.',
      examinationAr:
        'ضغط الدم 140/90، معدل ضربات القلب 150 غير منتظم، معدل التنفس 24، تشبع الأكسجين 94%. نبض غير منتظم بشكل غير منتظم، ارتفاع خفيف في الوريد الوداجي، خراخر قاعدية ثنائية.',
      investigations: [
        '12-lead ECG',
        'Chest X-ray',
        'Echocardiogram',
        'TSH',
        'BNP',
      ],
      investigationsAr: [
        'تخطيط القلب 12 قطب',
        'أشعة سينية للصدر',
        'إيكو القلب',
        'TSH',
        'BNP',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the immediate priority?',
        questionAr: 'ما هي الأولوية الفورية؟',
        options: [
          'Rate control',
          'Rhythm control',
          'Anticoagulation',
          'Cardioversion',
        ],
        optionsAr: [
          'السيطرة على المعدل',
          'السيطرة على الإيقاع',
          'مضادات التخثر',
          'تقويم نظم القلب',
        ],
        correctAnswer: 0,
        explanation:
          'Rate control is the immediate priority in hemodynamically stable AF with RVR.',
        explanationAr:
          'السيطرة على المعدل هي الأولوية الفورية في الرجفان الأذيني المستقر ديناميكيًا مع استجابة بطينية سريعة.',
      },
    ],
    diagnosis: 'Atrial Fibrillation with Rapid Ventricular Response',
    diagnosisAr: 'الرجفان الأذيني مع استجابة بطينية سريعة',
    treatment:
      'Metoprolol for rate control, anticoagulation with apixaban, rhythm control if indicated',
    treatmentAr:
      'ميتوبرولول للسيطرة على المعدل، مضادات التخثر بالأبيكسابان، السيطرة على الإيقاع إذا لزم الأمر',
    learningPoints: [
      'AF with RVR requires immediate rate control',
      'CHA2DS2-VASc score guides anticoagulation',
      'Rate vs rhythm control depends on symptoms and patient factors',
    ],
    learningPointsAr: [
      'الرجفان الأذيني مع استجابة سريعة يتطلب السيطرة الفورية على المعدل',
      'نقاط CHA2DS2-VASc توجه مضادات التخثر',
      'السيطرة على المعدل مقابل الإيقاع يعتمد على الأعراض وعوامل المريض',
    ],
  },

  // Neurology Cases
  {
    id: 'neuro-001',
    specialtyId: 'neurology',
    title: 'Acute Ischemic Stroke',
    titleAr: 'السكتة الدماغية الإقفارية الحادة',
    difficulty: 'advanced',
    duration: 30,
    patient: {
      age: 72,
      gender: 'female',
      chiefComplaint: 'Sudden onset weakness and speech difficulty',
      chiefComplaintAr: 'ضعف مفاجئ وصعوبة في الكلام',
    },
    presentation: {
      history:
        'A 72-year-old female with atrial fibrillation (not on anticoagulation) presents with sudden onset of right-sided weakness and aphasia that started 2 hours ago. No head trauma. Last seen normal 3 hours ago.',
      historyAr:
        'امرأة تبلغ من العمر 72 عامًا مصابة بالرجفان الأذيني (لا تتناول مضادات التخثر) تعاني من ضعف مفاجئ في الجانب الأيمن وفقدان القدرة على الكلام بدأ منذ ساعتين. لا توجد إصابة في الرأس. آخر مرة شوهدت طبيعية منذ 3 ساعات.',
      examination:
        'BP 180/100, HR 110 irregular, afebrile. Right hemiparesis, global aphasia, right facial droop, NIHSS score 18.',
      examinationAr:
        'ضغط الدم 180/100، معدل ضربات القلب 110 غير منتظم، لا حمى. شلل نصفي أيمن، فقدان شامل للقدرة على الكلام، تدلي الوجه الأيمن، نقاط NIHSS 18.',
      investigations: [
        'Non-contrast CT head',
        'CT angiogram',
        'ECG',
        'CBC',
        'PT/INR',
        'Glucose',
      ],
      investigationsAr: [
        'أشعة مقطعية للرأس بدون صبغة',
        'أشعة مقطعية للأوعية',
        'تخطيط القلب',
        'تعداد الدم الكامل',
        'PT/INR',
        'الجلوكوز',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most appropriate immediate treatment?',
        questionAr: 'ما هو العلاج الفوري الأنسب؟',
        options: ['IV tPA', 'Mechanical thrombectomy', 'Aspirin', 'Heparin'],
        optionsAr: [
          'tPA وريدي',
          'استخراج الخثرة الميكانيكي',
          'الأسبرين',
          'الهيبارين',
        ],
        correctAnswer: 1,
        explanation:
          'Large vessel occlusion with high NIHSS score is best treated with mechanical thrombectomy within 6-24 hours.',
        explanationAr:
          'انسداد الأوعية الكبيرة مع نقاط NIHSS عالية يُعالج بشكل أفضل باستخراج الخثرة الميكانيكي خلال 6-24 ساعة.',
      },
    ],
    diagnosis: 'Acute Ischemic Stroke - Large Vessel Occlusion',
    diagnosisAr: 'السكتة الدماغية الإقفارية الحادة - انسداد الأوعية الكبيرة',
    treatment:
      'Mechanical thrombectomy, antiplatelet therapy post-procedure, anticoagulation for AF',
    treatmentAr:
      'استخراج الخثرة الميكانيكي، العلاج المضاد للصفائح بعد الإجراء، مضادات التخثر للرجفان الأذيني',
    learningPoints: [
      'Time is brain - every minute counts in stroke',
      'NIHSS score helps determine treatment approach',
      'Mechanical thrombectomy is preferred for large vessel occlusions',
    ],
    learningPointsAr: [
      'الوقت هو الدماغ - كل دقيقة مهمة في السكتة الدماغية',
      'نقاط NIHSS تساعد في تحديد نهج العلاج',
      'استخراج الخثرة الميكانيكي مفضل لانسداد الأوعية الكبيرة',
    ],
  },

  // Obstetrics & Gynecology Cases
  {
    id: 'obgyn-001',
    specialtyId: 'obstetrics-gynecology',
    title: 'Preeclampsia with Severe Features',
    titleAr: 'تسمم الحمل مع ميزات شديدة',
    difficulty: 'advanced',
    duration: 35,
    patient: {
      age: 28,
      gender: 'female',
      chiefComplaint: 'Headache and visual changes at 34 weeks gestation',
      chiefComplaintAr: 'صداع وتغيرات بصرية في الأسبوع 34 من الحمل',
    },
    presentation: {
      history:
        'A 28-year-old G2P1 at 34 weeks gestation presents with severe headache, blurred vision, and epigastric pain for 6 hours. No previous hypertension. Recent weight gain of 5 lbs in 1 week.',
      historyAr:
        'امرأة تبلغ من العمر 28 عامًا حامل للمرة الثانية في الأسبوع 34 من الحمل تعاني من صداع شديد وضبابية في الرؤية وألم في الشرسوف لمدة 6 ساعات. لا يوجد ارتفاع ضغط دم سابق. زيادة وزن حديثة 5 أرطال في أسبوع واحد.',
      examination:
        'BP 170/110, HR 90, proteinuria 3+, hyperreflexia with clonus, epigastric tenderness, fetal heart rate 140 bpm.',
      examinationAr:
        'ضغط الدم 170/110، معدل ضربات القلب 90، بروتين في البول 3+، فرط المنعكسات مع الرمع، ألم في الشرسوف، معدل ضربات قلب الجنين 140 نبضة/دقيقة.',
      investigations: [
        'CBC',
        'Comprehensive metabolic panel',
        'LFTs',
        'Uric acid',
        'LDH',
        'Fetal ultrasound',
      ],
      investigationsAr: [
        'تعداد الدم الكامل',
        'اللوحة الأيضية الشاملة',
        'وظائف الكبد',
        'حمض البوليك',
        'LDH',
        'الموجات فوق الصوتية للجنين',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the definitive treatment?',
        questionAr: 'ما هو العلاج النهائي؟',
        options: [
          'Delivery',
          'Antihypertensive therapy',
          'Magnesium sulfate',
          'Bed rest',
        ],
        optionsAr: [
          'الولادة',
          'العلاج الخافض للضغط',
          'كبريتات المغنيسيوم',
          'الراحة في السرير',
        ],
        correctAnswer: 0,
        explanation:
          'Delivery is the only definitive treatment for preeclampsia, especially with severe features.',
        explanationAr:
          'الولادة هي العلاج النهائي الوحيد لتسمم الحمل، خاصة مع الميزات الشديدة.',
      },
    ],
    diagnosis: 'Preeclampsia with Severe Features',
    diagnosisAr: 'تسمم الحمل مع ميزات شديدة',
    treatment:
      'Magnesium sulfate for seizure prophylaxis, antihypertensives, corticosteroids for fetal lung maturity, delivery',
    treatmentAr:
      'كبريتات المغنيسيوم للوقاية من النوبات، خافضات الضغط، الكورتيكوستيرويدات لنضج رئة الجنين، الولادة',
    learningPoints: [
      'Preeclampsia with severe features requires immediate delivery',
      'Magnesium sulfate prevents eclamptic seizures',
      'Corticosteroids accelerate fetal lung maturity before 34 weeks',
    ],
    learningPointsAr: [
      'تسمم الحمل مع الميزات الشديدة يتطلب ولادة فورية',
      'كبريتات المغنيسيوم تمنع نوبات تسمم الحمل',
      'الكورتيكوستيرويدات تسرع نضج رئة الجنين قبل 34 أسبوعًا',
    ],
  },

  // Orthopedics Cases
  {
    id: 'ortho-001',
    specialtyId: 'orthopedics',
    title: 'Hip Fracture in Elderly',
    titleAr: 'كسر الورك في كبار السن',
    difficulty: 'intermediate',
    duration: 25,
    patient: {
      age: 78,
      gender: 'female',
      chiefComplaint: 'Hip pain after fall',
      chiefComplaintAr: 'ألم في الورك بعد السقوط',
    },
    presentation: {
      history:
        'A 78-year-old female with osteoporosis fell at home and now has severe right hip pain. Unable to bear weight. No loss of consciousness. Takes alendronate weekly.',
      historyAr:
        'امرأة تبلغ من العمر 78 عامًا مصابة بهشاشة العظام سقطت في المنزل وتعاني الآن من ألم شديد في الورك الأيمن. غير قادرة على تحمل الوزن. لا فقدان للوعي. تتناول الأليندرونات أسبوعيًا.',
      examination:
        'Right leg shortened and externally rotated, severe pain with any hip movement, unable to straight leg raise.',
      examinationAr:
        'الساق اليمنى قصيرة ومدارة خارجيًا، ألم شديد مع أي حركة للورك، غير قادرة على رفع الساق مستقيمة.',
      investigations: [
        'Hip X-rays (AP and lateral)',
        'CBC',
        'Basic metabolic panel',
        'PT/INR',
        'Type and screen',
      ],
      investigationsAr: [
        'أشعة سينية للورك (أمامية وجانبية)',
        'تعداد الدم الكامل',
        'اللوحة الأيضية الأساسية',
        'PT/INR',
        'فحص النوع والفرز',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most appropriate treatment?',
        questionAr: 'ما هو العلاج الأنسب؟',
        options: [
          'Surgical fixation',
          'Conservative management',
          'Traction',
          'Physical therapy only',
        ],
        optionsAr: [
          'التثبيت الجراحي',
          'العلاج التحفظي',
          'الشد',
          'العلاج الطبيعي فقط',
        ],
        correctAnswer: 0,
        explanation:
          'Hip fractures in elderly patients require surgical fixation for optimal outcomes and early mobilization.',
        explanationAr:
          'كسور الورك في المرضى كبار السن تتطلب التثبيت الجراحي للحصول على أفضل النتائج والتحرك المبكر.',
      },
    ],
    diagnosis: 'Intertrochanteric Hip Fracture',
    diagnosisAr: 'كسر الورك بين المدورين',
    treatment:
      'ORIF with intramedullary nail, early mobilization, DVT prophylaxis, osteoporosis management',
    treatmentAr:
      'التثبيت الداخلي المفتوح بمسمار داخل النخاع، التحرك المبكر، الوقاية من الجلطات، إدارة هشاشة العظام',
    learningPoints: [
      'Hip fractures require urgent surgical intervention',
      'Early mobilization reduces complications',
      'Address underlying osteoporosis to prevent future fractures',
    ],
    learningPointsAr: [
      'كسور الورك تتطلب تدخلاً جراحيًا عاجلاً',
      'التحرك المبكر يقلل المضاعفات',
      'معالجة هشاشة العظام الأساسية لمنع الكسور المستقبلية',
    ],
  },

  // Emergency Medicine Cases
  {
    id: 'em-001',
    specialtyId: 'emergency',
    title: 'Anaphylactic Shock',
    titleAr: 'الصدمة التأقية',
    difficulty: 'advanced',
    duration: 20,
    patient: {
      age: 35,
      gender: 'male',
      chiefComplaint: 'Difficulty breathing after eating peanuts',
      chiefComplaintAr: 'صعوبة في التنفس بعد تناول الفول السوداني',
    },
    presentation: {
      history:
        'A 35-year-old male with known peanut allergy accidentally ate a cookie containing peanuts 10 minutes ago. Now has difficulty breathing, hives, and feels dizzy.',
      historyAr:
        'رجل يبلغ من العمر 35 عامًا لديه حساسية معروفة من الفول السوداني تناول بالخطأ بسكويت يحتوي على الفول السوداني منذ 10 دقائق. يعاني الآن من صعوبة في التنفس وشرى ودوخة.',
      examination:
        'BP 80/50, HR 120, RR 30, O2 sat 88%. Generalized urticaria, angioedema, stridor, wheezing.',
      examinationAr:
        'ضغط الدم 80/50، معدل ضربات القلب 120، معدل التنفس 30، تشبع الأكسجين 88%. شرى معمم، وذمة وعائية، صرير، أزيز.',
      investigations: [
        'None - clinical diagnosis',
        'Tryptase level (after stabilization)',
        'ABG if needed',
      ],
      investigationsAr: [
        'لا شيء - تشخيص سريري',
        'مستوى التريبتاز (بعد الاستقرار)',
        'غازات الدم إذا لزم الأمر',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the first-line treatment?',
        questionAr: 'ما هو العلاج الأول؟',
        options: [
          'Epinephrine IM',
          'Diphenhydramine IV',
          'Methylprednisolone IV',
          'Albuterol nebulizer',
        ],
        optionsAr: [
          'الإبينفرين عضلي',
          'الديفينهيدرامين وريدي',
          'الميثيل بريدنيزولون وريدي',
          'الألبوتيرول بالبخاخ',
        ],
        correctAnswer: 0,
        explanation:
          'Epinephrine IM is the first-line treatment for anaphylaxis and should be given immediately.',
        explanationAr:
          'الإبينفرين العضلي هو العلاج الأول للتأق ويجب إعطاؤه فورًا.',
      },
    ],
    diagnosis: 'Anaphylactic Shock',
    diagnosisAr: 'الصدمة التأقية',
    treatment:
      'Epinephrine IM, IV fluids, H1/H2 antihistamines, corticosteroids, bronchodilators if needed',
    treatmentAr:
      'الإبينفرين العضلي، السوائل الوريدية، مضادات الهيستامين H1/H2، الكورتيكوستيرويدات، موسعات القصبات إذا لزم الأمر',
    learningPoints: [
      'Anaphylaxis is a clinical diagnosis requiring immediate treatment',
      'Epinephrine is the only first-line treatment',
      'Biphasic reactions can occur 4-12 hours later',
    ],
    learningPointsAr: [
      'التأق تشخيص سريري يتطلب علاجًا فوريًا',
      'الإبينفرين هو العلاج الأول الوحيد',
      'يمكن أن تحدث تفاعلات ثنائية الطور بعد 4-12 ساعة',
    ],
  },

  // Dermatology Cases
  {
    id: 'derm-001',
    specialtyId: 'dermatology',
    title: 'Melanoma',
    titleAr: 'الميلانوما',
    difficulty: 'intermediate',
    duration: 25,
    patient: {
      age: 45,
      gender: 'female',
      chiefComplaint: 'Changing mole on back',
      chiefComplaintAr: 'شامة متغيرة على الظهر',
    },
    presentation: {
      history:
        'A 45-year-old fair-skinned female with history of sunburns presents with a mole on her back that has been changing over the past 3 months. Family history of melanoma in father.',
      historyAr:
        'امرأة تبلغ من العمر 45 عامًا ذات بشرة فاتحة لديها تاريخ من حروق الشمس تعاني من شامة على ظهرها تتغير منذ 3 أشهر. تاريخ عائلي للميلانوما في الأب.',
      examination:
        'Asymmetric pigmented lesion 8mm diameter with irregular borders, color variation (brown, black, red), and recent bleeding.',
      examinationAr:
        'آفة مصطبغة غير متماثلة قطرها 8 مم مع حدود غير منتظمة، تنوع في اللون (بني، أسود، أحمر)، ونزيف حديث.',
      investigations: [
        'Dermoscopy',
        'Excisional biopsy',
        'Sentinel lymph node biopsy if indicated',
      ],
      investigationsAr: [
        'فحص الجلد بالمجهر',
        'خزعة استئصالية',
        'خزعة العقدة الليمفاوية الحارسة إذا لزم الأمر',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What are the ABCDE criteria for melanoma?',
        questionAr: 'ما هي معايير ABCDE للميلانوما؟',
        options: [
          'Asymmetry, Border, Color, Diameter, Evolution',
          'Area, Bleeding, Color, Depth, Elevation',
          'Asymmetry, Bleeding, Crust, Diameter, Erythema',
          'Area, Border, Crust, Depth, Evolution',
        ],
        optionsAr: [
          'عدم التماثل، الحدود، اللون، القطر، التطور',
          'المنطقة، النزيف، اللون، العمق، الارتفاع',
          'عدم التماثل، النزيف، القشرة، القطر، الحمامى',
          'المنطقة، الحدود، القشرة، العمق، التطور',
        ],
        correctAnswer: 0,
        explanation:
          'ABCDE criteria: Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolution/change.',
        explanationAr:
          'معايير ABCDE: عدم التماثل، عدم انتظام الحدود، تنوع اللون، القطر >6 مم، التطور/التغيير.',
      },
    ],
    diagnosis: 'Malignant Melanoma',
    diagnosisAr: 'الميلانوما الخبيثة',
    treatment:
      'Wide local excision, sentinel lymph node biopsy, staging workup, possible adjuvant therapy',
    treatmentAr:
      'الاستئصال الموضعي الواسع، خزعة العقدة الليمفاوية الحارسة، فحص التدريج، العلاج المساعد المحتمل',
    learningPoints: [
      'Early detection of melanoma is crucial for survival',
      'ABCDE criteria help identify suspicious lesions',
      'Breslow thickness determines prognosis and treatment',
    ],
    learningPointsAr: [
      'الكشف المبكر عن الميلانوما أمر بالغ الأهمية للبقاء على قيد الحياة',
      'معايير ABCDE تساعد في تحديد الآفات المشبوهة',
      'سمك بريسلو يحدد التشخيص والعلاج',
    ],
  },

  // Ophthalmology Cases
  {
    id: 'opht-001',
    specialtyId: 'ophthalmology',
    title: 'Acute Angle-Closure Glaucoma',
    titleAr: 'الجلوكوما الحادة مغلقة الزاوية',
    difficulty: 'advanced',
    duration: 25,
    patient: {
      age: 65,
      gender: 'female',
      chiefComplaint: 'Severe eye pain and blurred vision',
      chiefComplaintAr: 'ألم شديد في العين وضبابية في الرؤية',
    },
    presentation: {
      history:
        'A 65-year-old Asian female presents with sudden onset of severe right eye pain, headache, nausea, and vomiting for 4 hours. Vision became blurry and she sees halos around lights.',
      historyAr:
        'امرأة آسيوية تبلغ من العمر 65 عامًا تعاني من ألم شديد مفاجئ في العين اليمنى وصداع وغثيان وقيء لمدة 4 ساعات. أصبحت الرؤية ضبابية وترى هالات حول الأضواء.',
      examination:
        'Right eye: IOP 55 mmHg, corneal edema, mid-dilated fixed pupil, shallow anterior chamber. Left eye normal.',
      examinationAr:
        'العين اليمنى: ضغط العين 55 ملم زئبق، وذمة القرنية، حدقة ثابتة متوسطة التوسع، الحجرة الأمامية ضحلة. العين اليسرى طبيعية.',
      investigations: [
        'Tonometry',
        'Gonioscopy',
        'Fundoscopy',
        'Anterior segment OCT',
      ],
      investigationsAr: [
        'قياس ضغط العين',
        'فحص الزاوية',
        'فحص قاع العين',
        'OCT للقطعة الأمامية',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the most urgent treatment?',
        questionAr: 'ما هو العلاج الأكثر إلحاحًا؟',
        options: [
          'Topical beta-blockers',
          'Laser peripheral iridotomy',
          'Systemic acetazolamide',
          'Immediate surgery',
        ],
        optionsAr: [
          'حاصرات بيتا الموضعية',
          'بضع القزحية المحيطي بالليزر',
          'الأسيتازولاميد الجهازي',
          'الجراحة الفورية',
        ],
        correctAnswer: 2,
        explanation:
          'Systemic acetazolamide rapidly reduces IOP and is the most urgent initial treatment.',
        explanationAr:
          'الأسيتازولاميد الجهازي يقلل ضغط العين بسرعة وهو العلاج الأولي الأكثر إلحاحًا.',
      },
    ],
    diagnosis: 'Acute Angle-Closure Glaucoma',
    diagnosisAr: 'الجلوكوما الحادة مغلقة الزاوية',
    treatment:
      'IV acetazolamide, topical beta-blockers, pilocarpine, laser peripheral iridotomy',
    treatmentAr:
      'الأسيتازولاميد الوريدي، حاصرات بيتا الموضعية، البيلوكاربين، بضع القزحية المحيطي بالليزر',
    learningPoints: [
      'Acute angle-closure is an ophthalmologic emergency',
      'Asian females are at higher risk',
      'Laser iridotomy is definitive treatment',
    ],
    learningPointsAr: [
      'انغلاق الزاوية الحاد حالة طوارئ عينية',
      'النساء الآسيويات أكثر عرضة للخطر',
      'بضع القزحية بالليزر هو العلاج النهائي',
    ],
  },

  // ENT Cases
  {
    id: 'ent-001',
    specialtyId: 'ent',
    title: 'Acute Bacterial Sinusitis',
    titleAr: 'التهاب الجيوب الأنفية البكتيري الحاد',
    difficulty: 'beginner',
    duration: 20,
    patient: {
      age: 32,
      gender: 'male',
      chiefComplaint: 'Facial pain and nasal congestion for 10 days',
      chiefComplaintAr: 'ألم في الوجه واحتقان أنفي لمدة 10 أيام',
    },
    presentation: {
      history:
        'A 32-year-old male presents with worsening facial pain, purulent nasal discharge, and nasal congestion for 10 days following an upper respiratory infection. No improvement with decongestants.',
      historyAr:
        'رجل يبلغ من العمر 32 عامًا يعاني من تفاقم ألم الوجه وإفرازات أنفية قيحية واحتقان أنفي لمدة 10 أيام بعد عدوى الجهاز التنفسي العلوي. لا تحسن مع مزيلات الاحتقان.',
      examination:
        'Maxillary sinus tenderness, purulent nasal discharge, nasal turbinate edema, no fever.',
      examinationAr:
        'ألم في الجيب الفكي العلوي، إفرازات أنفية قيحية، وذمة في المحارات الأنفية، لا حمى.',
      investigations: [
        'Clinical diagnosis',
        'CT sinuses if complications suspected',
        'Nasal culture if recurrent',
      ],
      investigationsAr: [
        'تشخيص سريري',
        'أشعة مقطعية للجيوب إذا اشتبه في مضاعفات',
        'زراعة أنفية إذا كانت متكررة',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the first-line antibiotic treatment?',
        questionAr: 'ما هو العلاج بالمضادات الحيوية الأول؟',
        options: [
          'Amoxicillin-clavulanate',
          'Azithromycin',
          'Ciprofloxacin',
          'Cephalexin',
        ],
        optionsAr: [
          'أموكسيسيلين-كلافولانات',
          'أزيثروميسين',
          'سيبروفلوكساسين',
          'سيفاليكسين',
        ],
        correctAnswer: 0,
        explanation:
          'Amoxicillin-clavulanate covers the most common bacterial pathogens in acute sinusitis.',
        explanationAr:
          'أموكسيسيلين-كلافولانات يغطي أكثر مسببات الأمراض البكتيرية شيوعًا في التهاب الجيوب الحاد.',
      },
    ],
    diagnosis: 'Acute Bacterial Sinusitis',
    diagnosisAr: 'التهاب الجيوب الأنفية البكتيري الحاد',
    treatment:
      'Amoxicillin-clavulanate, nasal decongestants, saline irrigation, analgesics',
    treatmentAr:
      'أموكسيسيلين-كلافولانات، مزيلات الاحتقان الأنفية، الري بالمحلول الملحي، المسكنات',
    learningPoints: [
      'Bacterial sinusitis typically follows viral URI',
      'Symptoms persist >10 days or worsen after initial improvement',
      'Amoxicillin-clavulanate is first-line treatment',
    ],
    learningPointsAr: [
      'التهاب الجيوب البكتيري عادة يتبع عدوى الجهاز التنفسي الفيروسية',
      'الأعراض تستمر >10 أيام أو تسوء بعد التحسن الأولي',
      'أموكسيسيلين-كلافولانات هو العلاج الأول',
    ],
  },

  // Psychiatry Cases
  {
    id: 'psych-001',
    specialtyId: 'psychiatry',
    title: 'Major Depressive Episode',
    titleAr: 'نوبة اكتئاب كبرى',
    difficulty: 'intermediate',
    duration: 30,
    patient: {
      age: 28,
      gender: 'female',
      chiefComplaint: 'Feeling sad and hopeless for 6 weeks',
      chiefComplaintAr: 'الشعور بالحزن واليأس لمدة 6 أسابيع',
    },
    presentation: {
      history:
        'A 28-year-old female presents with persistent sadness, loss of interest in activities, fatigue, poor concentration, and sleep disturbances for 6 weeks. No suicidal ideation. Recent job loss.',
      historyAr:
        'امرأة تبلغ من العمر 28 عامًا تعاني من حزن مستمر وفقدان الاهتمام بالأنشطة والتعب وضعف التركيز واضطرابات النوم لمدة 6 أسابيع. لا توجد أفكار انتحارية. فقدان وظيفة حديث.',
      examination:
        'Depressed mood, psychomotor retardation, poor eye contact, no psychotic features, insight present.',
      examinationAr:
        'مزاج مكتئب، تباطؤ نفسي حركي، تواصل بصري ضعيف، لا توجد ميزات ذهانية، البصيرة موجودة.',
      investigations: [
        'PHQ-9 depression scale',
        'TSH',
        'CBC',
        'Basic metabolic panel',
        'Substance abuse screening',
      ],
      investigationsAr: [
        'مقياس الاكتئاب PHQ-9',
        'TSH',
        'تعداد الدم الكامل',
        'اللوحة الأيضية الأساسية',
        'فحص تعاطي المواد',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the first-line treatment?',
        questionAr: 'ما هو العلاج الأول؟',
        options: [
          'SSRI antidepressant',
          'Benzodiazepine',
          'Antipsychotic',
          'Mood stabilizer',
        ],
        optionsAr: [
          'مضاد اكتئاب SSRI',
          'بنزوديازيبين',
          'مضاد ذهان',
          'مثبت مزاج',
        ],
        correctAnswer: 0,
        explanation:
          'SSRIs are first-line treatment for major depressive disorder due to efficacy and safety profile.',
        explanationAr:
          'مضادات الاكتئاب SSRI هي العلاج الأول لاضطراب الاكتئاب الكبير بسبب الفعالية وملف الأمان.',
      },
    ],
    diagnosis: 'Major Depressive Disorder, Single Episode',
    diagnosisAr: 'اضطراب الاكتئاب الكبير، نوبة واحدة',
    treatment:
      'Sertraline, cognitive behavioral therapy, lifestyle modifications, follow-up in 2 weeks',
    treatmentAr:
      'سيرترالين، العلاج السلوكي المعرفي، تعديلات نمط الحياة، المتابعة خلال أسبوعين',
    learningPoints: [
      'Major depression requires ≥5 symptoms for ≥2 weeks',
      'SSRIs are first-line pharmacotherapy',
      'Combination of medication and psychotherapy is most effective',
    ],
    learningPointsAr: [
      'الاكتئاب الكبير يتطلب ≥5 أعراض لمدة ≥أسبوعين',
      'مضادات الاكتئاب SSRI هي العلاج الدوائي الأول',
      'الجمع بين الدواء والعلاج النفسي هو الأكثر فعالية',
    ],
  },

  // Radiology Cases
  {
    id: 'rad-001',
    specialtyId: 'radiology',
    title: 'Pulmonary Embolism on CT',
    titleAr: 'الانسداد الرئوي في الأشعة المقطعية',
    difficulty: 'intermediate',
    duration: 25,
    patient: {
      age: 55,
      gender: 'female',
      chiefComplaint: 'Chest pain and shortness of breath',
      chiefComplaintAr: 'ألم في الصدر وضيق في التنفس',
    },
    presentation: {
      history:
        'A 55-year-old female post-operative day 3 from hip replacement surgery presents with acute onset chest pain and dyspnea. Recent immobilization and surgery are risk factors.',
      historyAr:
        'امرأة تبلغ من العمر 55 عامًا في اليوم الثالث بعد جراحة استبدال الورك تعاني من ألم حاد في الصدر وضيق في التنفس. عدم الحركة الحديث والجراحة عوامل خطر.',
      examination:
        'Tachypneic, tachycardic, O2 sat 92%, clear lungs, no leg swelling.',
      examinationAr:
        'تسرع في التنفس، تسرع في ضربات القلب، تشبع الأكسجين 92%، رئتان صافيتان، لا انتفاخ في الساق.',
      investigations: [
        'CT pulmonary angiogram',
        'D-dimer',
        'ABG',
        'ECG',
        'Chest X-ray',
      ],
      investigationsAr: [
        'أشعة مقطعية للشرايين الرئوية',
        'D-dimer',
        'غازات الدم الشرياني',
        'تخطيط القلب',
        'أشعة سينية للصدر',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What CT finding confirms pulmonary embolism?',
        questionAr:
          'ما هو الاكتشاف في الأشعة المقطعية الذي يؤكد الانسداد الرئوي؟',
        options: [
          'Filling defect in pulmonary artery',
          'Ground glass opacities',
          'Pleural effusion',
          'Consolidation',
        ],
        optionsAr: [
          'عيب في الامتلاء في الشريان الرئوي',
          'عتامات زجاجية مطحونة',
          'انصباب جنبي',
          'توطد',
        ],
        correctAnswer: 0,
        explanation:
          'Filling defect (thrombus) in pulmonary artery is the classic CT finding for PE.',
        explanationAr:
          'عيب الامتلاء (الخثرة) في الشريان الرئوي هو الاكتشاف الكلاسيكي في الأشعة المقطعية للانسداد الرئوي.',
      },
    ],
    diagnosis: 'Acute Pulmonary Embolism',
    diagnosisAr: 'الانسداد الرئوي الحاد',
    treatment:
      'Anticoagulation with heparin, then warfarin or DOAC, IVC filter if contraindication to anticoagulation',
    treatmentAr:
      'مضادات التخثر بالهيبارين، ثم الوارفارين أو DOAC، مرشح الوريد الأجوف إذا كان هناك موانع لمضادات التخثر',
    learningPoints: [
      'CTPA is gold standard for PE diagnosis',
      'Post-operative patients are high risk for VTE',
      'Anticoagulation is mainstay of treatment',
    ],
    learningPointsAr: [
      'CTPA هو المعيار الذهبي لتشخيص الانسداد الرئوي',
      'المرضى بعد الجراحة معرضون لخطر عالي للجلطات الوريدية',
      'مضادات التخثر هي أساس العلاج',
    ],
  },

  // Family Medicine Cases
  {
    id: 'fm-001',
    specialtyId: 'family-medicine',
    title: 'Hypertension Management',
    titleAr: 'إدارة ارتفاع ضغط الدم',
    difficulty: 'beginner',
    duration: 20,
    patient: {
      age: 52,
      gender: 'male',
      chiefComplaint: 'High blood pressure on routine check',
      chiefComplaintAr: 'ارتفاع ضغط الدم في الفحص الروتيني',
    },
    presentation: {
      history:
        'A 52-year-old male presents for routine physical. BP readings: 150/95, 148/92, 152/96 on three separate visits. No symptoms. Family history of hypertension and diabetes.',
      historyAr:
        'رجل يبلغ من العمر 52 عامًا يحضر للفحص الروتيني. قراءات ضغط الدم: 150/95، 148/92، 152/96 في ثلاث زيارات منفصلة. لا أعراض. تاريخ عائلي لارتفاع ضغط الدم والسكري.',
      examination:
        'BMI 28, otherwise normal physical exam, no target organ damage.',
      examinationAr:
        'مؤشر كتلة الجسم 28، فحص جسدي طبيعي، لا ضرر في الأعضاء المستهدفة.',
      investigations: [
        'Basic metabolic panel',
        'Lipid profile',
        'HbA1c',
        'Urinalysis',
        'ECG',
      ],
      investigationsAr: [
        'اللوحة الأيضية الأساسية',
        'ملف الدهون',
        'HbA1c',
        'تحليل البول',
        'تخطيط القلب',
      ],
    },
    questions: [
      {
        id: 'q1',
        question: 'What is the first-line treatment?',
        questionAr: 'ما هو العلاج الأول؟',
        options: [
          'ACE inhibitor or ARB',
          'Beta-blocker',
          'Calcium channel blocker',
          'Diuretic',
        ],
        optionsAr: [
          'مثبط ACE أو ARB',
          'حاصر بيتا',
          'حاصر قنوات الكالسيوم',
          'مدر البول',
        ],
        correctAnswer: 0,
        explanation:
          'ACE inhibitors or ARBs are first-line for hypertension, especially with diabetes risk.',
        explanationAr:
          'مثبطات ACE أو ARB هي الخط الأول لارتفاع ضغط الدم، خاصة مع خطر السكري.',
      },
    ],
    diagnosis: 'Stage 2 Hypertension',
    diagnosisAr: 'ارتفاع ضغط الدم المرحلة الثانية',
    treatment:
      'Lisinopril, lifestyle modifications (diet, exercise, weight loss), follow-up in 4 weeks',
    treatmentAr:
      'ليسينوبريل، تعديلات نمط الحياة (النظام الغذائي، التمارين، فقدان الوزن)، المتابعة خلال 4 أسابيع',
    learningPoints: [
      'Hypertension diagnosis requires multiple elevated readings',
      'Lifestyle modifications are essential adjunct to medication',
      'Target BP <130/80 for most patients',
    ],
    learningPointsAr: [
      'تشخيص ارتفاع ضغط الدم يتطلب قراءات مرتفعة متعددة',
      'تعديلات نمط الحياة ضرورية مع الدواء',
      'الهدف ضغط الدم <130/80 لمعظم المرضى',
    ],
  },
];

// Helper function to get cases by specialty
export function getCasesBySpecialty(specialtyId: string): MedicalCase[] {
  return medicalCasesDatabase.filter(
    (medicalCase) => medicalCase.specialtyId === specialtyId
  );
}

// Helper function to get random cases for a specialty (for demo purposes)
export function generateCasesForSpecialty(specialty: Specialty): MedicalCase[] {
  const specialtyCases = getCasesBySpecialty(specialty.id);

  if (specialtyCases.length === 0) {
    // If no specific cases exist, generate some based on the first available case
    const baseCases = medicalCasesDatabase.slice(0, 3);
    return Array.from(
      { length: Math.min(specialty.casesCount, 20) },
      (_, index) => {
        const baseCase = baseCases[index % baseCases.length];
        return {
          ...baseCase,
          id: `${specialty.id}-case-${index + 1}`,
          specialtyId: specialty.id,
          title: `${specialty.name} Case ${index + 1}`,
          titleAr: `حالة ${specialty.nameAr} ${index + 1}`,
          difficulty: ['beginner', 'intermediate', 'advanced'][index % 3] as
            | 'beginner'
            | 'intermediate'
            | 'advanced',
        };
      }
    );
  }

  return specialtyCases;
}
