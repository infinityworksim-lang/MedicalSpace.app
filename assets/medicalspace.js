/* No analytics, external requests, forms or tracking. */
(() => {
  'use strict';

  const arabic = {
    skip: 'انتقل إلى المحتوى', byMana: 'أحد منتجات MANA LLC', chooseLanguage: 'لغة الموقع',
    navPlatform: 'عن المنصة', navCare: 'رعاية المرضى', navCommunity: 'المجتمع الطبي', navFaq: 'أسئلة شائعة', getInTouch: 'تواصل معنا',
    heroEyebrow: 'مساحة متكاملة لعمل الطبيب وتواصله', heroLine1: 'ممارستك الطبية.', heroLine2: 'مجتمعك المهني.', heroLine3: 'في مكان واحد.',
    heroDescription: 'من أول موعد إلى النقاش الطبي التالي. اجمع متابعة مرضاك، وتنظيم يومك، والتواصل مع زملائك في مساحة واحدة.',
    explore: 'اكتشف MedicalSpace', seeInside: 'شاهد التطبيق من الداخل', heroFootnote: 'مصمم لأندرويد، حول احتياجات الطبيب اليومية.',
    connectedPractice: 'ممارسة طبية أكثر ترابطًا', connectedPracticeSub: 'مرضى. معرفة. زملاء.', realScreens: 'جولة داخل التطبيق · بيانات تجريبية', heroBottom: 'مساحة واحدة، لكل تفاصيل يومك.',
    platformEyebrow: 'للتفاصيل التي تصنع يوم الطبيب', platformTitle1: 'وقت أقل بين الأدوات.', platformTitle2: 'مساحة أكبر لما يهمك.', platformDescription: 'تنظيم العمل اليومي والتواصل المهني، في تجربة تجمع الجانبين العملي والإنساني للممارسة الطبية.',
    pillarCare: 'رعاية تستمر بين الزيارات', pillarCareText: 'اربط ملفات المرضى بزياراتهم ومواعيد متابعتهم وسجلاتهم الطبية.', discoverCare: 'اكتشف إدارة المرضى',
    pillarNetwork: 'مجتمع يجمعه هدف', pillarNetworkText: 'تبادل الرؤى حول الحالات الطبية وتواصل مع زملائك من الأطباء.', discoverCommunity: 'تعرّف على المجتمع',
    pillarTeam: 'فريقك، بصلاحيات تحددها', pillarTeamText: 'أضف أعضاء فريقك وحدد الصلاحيات التي تناسب دور كل منهم.', discoverTeam: 'اكتشف عمل الفريق',
    tourEyebrow: 'جولة داخل MedicalSpace', tourTitle: 'شاهد كيف تتكامل تفاصيل يومك.', tourDescription: 'استكشف شاشات التطبيق ومعاينة توضيحية للزيارات. اختر القسم الذي تريد التعرّف عليه.',
    tabHome: 'يومك في لمحة', tabHomeSub: 'زيارات ومواعيد متابعة', tabPatients: 'رحلة المريض أمامك', tabPatientsSub: 'ملفات ومتابعة مستمرة',
    tabVisits: 'كل زيارة في سياقها', tabVisitsSub: 'سجل الزيارات والمتابعة', tabNetwork: 'وسّع دائرتك المهنية', tabNetworkSub: 'زملاء وتواصل مهني',
    enlarge: 'اضغط لتكبير الشاشة', screenNote: 'الشاشات باللغة الإنجليزية وببيانات تجريبية، وشاشة الزيارات معاينة توضيحية. قد يختلف توفر المزايا حسب الخطة.',
    careEyebrow: 'صورة أوضح، لرعاية أكثر ترابطًا', careTitle1: 'كل زيارة مهمة.', careTitle2: 'وما بعدها مهم أيضًا.', careDescription: 'قصة المريض لا تبدأ وتنتهي بموعد واحد. احتفظ بتفاصيله مترابطة عبر الزيارات، لتستأنف المتابعة من حيث توقفت.', exploreVisits: 'استكشف مساحة الزيارات',
    journeyHeading: 'رحلة مترابطة لرعاية المريض', illustrative: 'رسم توضيحي لسير العمل', journey1: 'ابدأ بملف المريض', journey1Text: 'بيانات المريض ووسائل التواصل وسجل زياراته في مكان واحد.', journey1Chip: 'ملف المريض',
    journey2: 'وثّق تفاصيل الاستشارة', journey2Text: 'الشكوى، والتشخيص، وخطة العلاج، والوصفات الطبية، والملاحظات المساندة.', journey2Chip: 'سجل الزيارة', journey2Chip2: 'مستندات وملاحظات صوتية',
    journey3: 'أبقِ الخطوة التالية واضحة', journey3Text: 'موعد المتابعة مرتبط بالزيارة، لتبقى التفاصيل جاهزة للاستشارة القادمة.', journey3Chip: 'موعد المتابعة',
    specialty1: 'أمراض القلب', specialty2: 'الأمراض الجلدية', specialty3: 'طب الأعصاب', discussionLabel: 'نقاشات طبية', discussionTitle: 'وجهات نظر متنوعة.\nوالاهتمام بالمريض يجمعنا.', discussionText: 'حالات. أسئلة. تواصل مهني.',
    communityEyebrow: 'المعرفة الطبية تنمو بالمشاركة', communityTitle1: 'خبرتك الطبية.', communityTitle2: 'وحوار يتسع لغيرك.', communityDescription: 'تواصل خارج حدود عيادتك. تعرّف على أطباء من تخصصات مختلفة، وناقش حالات تعليمية، وتبادل الخبرات داخل مجتمع مهني.',
    communityPoint1: 'منشورات وحالات طبية ونقاشات', communityPoint2: 'ملفات أطباء وعلاقات مهنية', communityPoint3: 'مراسلات ومكالمات فيديو', exploreNetwork: 'استكشف شبكة الأطباء',
    toolsEyebrow: 'أدوات مدروسة، ومساندة عملية', toolsTitle1: 'مصممة حول عملك.', toolsTitle2: 'ومتكاملة فيما بينها.',
    teamEyebrow: 'صلاحيات الفريق', teamTitle: 'الصلاحية المناسبة.\nللشخص المناسب.', teamText: 'أضف أعضاء إلى فريقك وحدد صلاحياتهم. وعند ارتباط العضو بأكثر من طبيب، يختار الطبيب أولًا قبل الوصول إلى مرضاه.', roleOwner: 'الطبيب / صاحب الحساب', roleMember: 'عضو الفريق', permissionTag: 'صلاحيات محددة',
    aiEyebrow: 'المساعد الطبي بالذكاء الاصطناعي', aiTitle: 'مساندة لعملك.\nوالقرار الطبي لك.', aiText: 'استفد من التفاعل النصي والوظائف الصوتية المدعومة لتنظيم المعلومات الطبية والمساعدة في توثيق الزيارات.', aiNote: 'الذكاء الاصطناعي أداة مساعدة، ولا يحل محل الحكم الطبي أو التشخيص أو قرارات العلاج. يختلف توفر المزايا حسب الخطة.',
    capability1: 'وصفات طبية ومستندات', capability2: 'ملاحظات صوتية', capability3: 'عرض ملفات DICOM المدعومة', capability4: 'العربية · الإنجليزية · الفرنسية · التركية',
    faqEyebrow: 'إجابات تساعدك على التعرّف علينا', faqTitle1: 'قبل أن تبدأ', faqTitle2: 'رحلتك معنا.', faqIntro: 'لديك سؤال آخر؟ يسعدنا أن نتواصل معك.', contactUs: 'تواصل مع الفريق',
    faq1: 'لمن صُمم MedicalSpace؟', faq1Answer: 'صُمم للأطباء، ولأعضاء فرقهم الذين يمنحونهم صلاحيات للمساعدة في إدارة المرضى والعمل اليومي. كما يجمع التواصل المهني ونقاش الحالات التعليمية داخل التطبيق نفسه.',
    faq2: 'هل يمكن لعضو الفريق العمل مع أكثر من طبيب؟', faq2Answer: 'نعم. عندما يرتبط العضو بأكثر من طبيب، يختار الطبيب قبل الوصول إلى مرضاه. ويتحدد وصوله وفق الصلاحيات الممنوحة له والمزايا المتاحة لحساب الطبيب.',
    faq3: 'ما الأجهزة واللغات المدعومة؟', faq3Answer: 'الإصدار الحالي مصمم لأندرويد. تدعم واجهة التطبيق العربية والإنجليزية والفرنسية والتركية. أما الصور المعروضة في الموقع فتوضح الواجهة الإنجليزية.',
    faq4: 'هل يتخذ الذكاء الاصطناعي قرارات طبية؟', faq4Answer: 'لا. تساعد وظائف الذكاء الاصطناعي في تنظيم المعلومات والتوثيق. وتظل مراجعة النتائج واتخاذ القرارات الطبية مسؤولية المختص المؤهل.',
    faq5: 'من أين يمكن تنزيل التطبيق؟', faq5Answer: "يمكن تنزيل MedicalSpace من الرابط التالي:",
    contactEyebrow: 'خطوة جديدة في ممارستك الطبية', contactTitle1: 'تواصل أوسع.', contactTitle2: 'ومساحة تجمع تفاصيل عملك.', talkToUs: 'لنتحدث عن MedicalSpace', footerDescription: 'مساحة تجمع العمل الطبي والأشخاص الذين يمنحونه معناه.', footerExplore: 'استكشف', footerAbout: 'عن المنصة', footerFeatures: 'المزايا', footerCommunity: 'المجتمع الطبي', footerPatients: 'إدارة المرضى', footerAi: 'المساعد الذكي', footerCompany: 'الشركة والمعلومات القانونية', footerPrivacy: 'سياسة الخصوصية', footerTerms: 'الشروط والأحكام', footerDeletion: 'حذف الحساب والبيانات', footerContact: 'التواصل', manaOwnership: 'MedicalSpace أحد منتجات شركة MANA LLC.', manaLocation: 'كولورادو، الولايات المتحدة', copyright: 'MANA LLC. جميع الحقوق محفوظة.', backTop: 'العودة للأعلى', dialogTitle: 'من داخل MedicalSpace',
  };

  const screens = {
    home: {
      file: 'assets/native-home.svg', index: '01 / 06',
      en: { label: 'YOUR DAILY OVERVIEW', title: 'Start with a clear picture.', description: "See today's visits and follow-ups, the week ahead and open visits, with shortcuts into the work behind each number.", bullets: ["Today's visits and follow-ups", 'The next seven days', 'Open visits and your next appointment'], alt: 'MedicalSpace home screen showing appointments in a demonstration account' },
      ar: { label: 'نظرة شاملة على يومك', title: 'ابدأ يومك بصورة واضحة.', description: 'زيارات اليوم ومواعيد المتابعة، والأيام القادمة، والزيارات المفتوحة، مع انتقال مباشر إلى التفاصيل وراء كل رقم.', bullets: ['زيارات اليوم ومواعيد المتابعة', 'مواعيد الأيام السبعة القادمة', 'الزيارات المفتوحة وموعدك التالي'], alt: 'شاشة الهوم في MedicalSpace تعرض المواعيد بحساب تجريبي' },
    },
    patients: {
      file: 'assets/native-patients.svg', index: '02 / 06',
      en: { label: 'PATIENT CONTINUITY', title: 'The person behind every visit.', description: 'Keep patient profiles and visit history close at hand. See visit and follow-up information, then open the record you need.', bullets: ['Patient profiles and contact details', 'Visit history and follow-up information', 'Search the patient list'], alt: 'MedicalSpace patient list with fictional test patient profiles' },
      ar: { label: 'متابعة مترابطة للمريض', title: 'وراء كل زيارة، مريض له قصة.', description: 'ملفات المرضى وسجل زياراتهم في متناولك. اطّلع على بيانات الزيارات والمتابعة، ثم افتح السجل الذي تحتاجه.', bullets: ['ملفات المرضى وبيانات التواصل', 'سجل الزيارات ومواعيد المتابعة', 'البحث داخل قائمة المرضى'], alt: 'قائمة مرضى MedicalSpace ببيانات اختبارية غير حقيقية' },
    },
    visits: {
      file: 'assets/native-visits.svg', index: '03 / 06',
      en: { label: 'A CONNECTED VISIT HISTORY', title: 'Pick up where you left off.', description: 'See each visit in the context of the patient journey, with its date, follow-up and clinical summary together.', bullets: ['Active and archived visit lists', 'Visit dates and linked follow-ups', 'Access to the clinical visit details'], alt: 'Illustrative MedicalSpace visit list with three fictional medical records' },
      ar: { label: 'سجل زيارات مترابط', title: 'استأنف المتابعة من حيث توقفت.', description: 'شاهد كل زيارة في سياق رحلة المريض، مع تاريخها وموعد متابعتها وملخصها الطبي في مكان واحد.', bullets: ['قوائم الزيارات النشطة والمؤرشفة', 'تواريخ الزيارات ومواعيد متابعتها', 'الوصول إلى التفاصيل الطبية للزيارة'], alt: 'معاينة توضيحية لقائمة زيارات MedicalSpace بثلاثة سجلات طبية افتراضية' },
    },
    network: {
      file: 'assets/native-network.svg', index: '05 / 06',
      en: { label: 'YOUR PROFESSIONAL NETWORK', title: 'Connect beyond your practice.', description: 'Explore professional profiles across specialties and find your next conversation, connection or collaboration.', bullets: ['Doctor profiles and specialties', 'Professional messaging', 'Video-call workflows'], alt: 'MedicalSpace doctor directory showing demonstration professional profiles' },
      ar: { label: 'شبكتك المهنية', title: 'تواصل يتجاوز حدود عيادتك.', description: 'استكشف ملفات أطباء من تخصصات مختلفة، وافتح بابًا لحوار أو علاقة مهنية أو تعاون جديد.', bullets: ['ملفات الأطباء وتخصصاتهم', 'المراسلات المهنية', 'مكالمات الفيديو'], alt: 'دليل الأطباء في MedicalSpace يعرض ملفات مهنية تجريبية' },
    },
  };


  // Original app pixels, captured on the test device.
  const nativeScreens = {
  "home": {
    "file": "assets/current-home.webp",
    "index": "01 / 08"
  },
  "patients": {
    "file": "assets/current-patients.webp",
    "index": "02 / 08",
    "en": {
      "label": "PATIENT FOLLOW-UP",
      "title": "A history that stays connected.",
      "description": "Three dated consultations show one patient’s clinical follow-up.",
      "bullets": [
        "September, October and November visits",
        "Chief complaint and diagnosis",
        "Linked follow-up appointments"
      ],
      "alt": "A history that stays connected. — MedicalSpace app screenshot"
    },
    "ar": {
      "label": "متابعة المريض",
      "title": "سجل مترابط عبر الزيارات.",
      "description": "ثلاث زيارات مؤرخة تعرض تسلسل المتابعة الطبية لنفس المريض.",
      "bullets": [
        "زيارات سبتمبر وأكتوبر ونوفمبر",
        "الشكوى والتشخيص",
        "مواعيد متابعة مرتبطة بالزيارات"
      ],
      "alt": "سجل مترابط عبر الزيارات. — MedicalSpace app screenshot"
    },
    "fr": {
      "label": "SUIVI DU PATIENT",
      "title": "Un historique connecté.",
      "description": "Trois consultations datées retracent le suivi du même patient.",
      "bullets": [
        "Consultations de septembre, octobre et novembre",
        "Motif et diagnostic",
        "Rendez-vous de suivi associés"
      ],
      "alt": "Un historique connecté. — MedicalSpace app screenshot"
    },
    "tr": {
      "label": "HASTA TAKİBİ",
      "title": "Birbirine bağlı bir geçmiş.",
      "description": "Üç tarihli muayene aynı hastanın klinik takibini gösterir.",
      "bullets": [
        "Eylül, ekim ve kasım muayeneleri",
        "Şikâyet ve tanı",
        "Bağlı kontrol randevuları"
      ],
      "alt": "Birbirine bağlı bir geçmiş. — MedicalSpace app screenshot"
    }
  },
  "visits": {
    "file": "assets/current-visits.webp",
    "index": "03 / 08",
    "en": {
      "label": "CLINICAL DOCUMENTATION",
      "title": "The plan and prescription, together.",
      "description": "Review a hypertension consultation with its diagnosis, treatment plan and structured prescription.",
      "bullets": [
        "Clinical diagnosis",
        "Treatment plan",
        "Medication, dose and frequency"
      ],
      "alt": "The plan and prescription, together. — MedicalSpace app screenshot"
    },
    "ar": {
      "label": "التوثيق السريري",
      "title": "الخطة والوصفة في مكان واحد.",
      "description": "استعرض زيارة متابعة ضغط الدم مع التشخيص وخطة العلاج والوصفة المنظمة.",
      "bullets": [
        "التشخيص السريري",
        "خطة العلاج",
        "الدواء والجرعة والتكرار"
      ],
      "alt": "الخطة والوصفة في مكان واحد. — MedicalSpace app screenshot"
    },
    "fr": {
      "label": "DOCUMENTATION CLINIQUE",
      "title": "Plan et ordonnance réunis.",
      "description": "Consultez le diagnostic, le plan et l’ordonnance d’un suivi d’hypertension.",
      "bullets": [
        "Diagnostic clinique",
        "Plan de traitement",
        "Médicament, dose et fréquence"
      ],
      "alt": "Plan et ordonnance réunis. — MedicalSpace app screenshot"
    },
    "tr": {
      "label": "KLİNİK BELGELEME",
      "title": "Tedavi planı ve reçete bir arada.",
      "description": "Hipertansiyon takibinin tanısını, tedavi planını ve düzenli reçetesini inceleyin.",
      "bullets": [
        "Klinik tanı",
        "Tedavi planı",
        "İlaç, doz ve sıklık"
      ],
      "alt": "Tedavi planı ve reçete bir arada. — MedicalSpace app screenshot"
    }
  },
  "feed": {
    "file": "assets/current-feed.webp",
    "index": "06 / 08",
    "en": {
      "label": "IMAGE-LED CASE DISCUSSIONS",
      "title": "Imaging gives the discussion context.",
      "description": "A radiology case pairs clinical history with CT and ultrasound images and a question for colleagues.",
      "bullets": [
        "Clinical presentation",
        "CT and ultrasound attachments",
        "Medical discussion"
      ],
      "alt": "Imaging gives the discussion context. — MedicalSpace app screenshot"
    },
    "ar": {
      "label": "حالات طبية مصوّرة",
      "title": "صور تضيف سياقًا للنقاش.",
      "description": "حالة أشعة تجمع التاريخ السريري وصور الأشعة المقطعية والسونار وسؤالًا للنقاش.",
      "bullets": [
        "وصف الحالة السريري",
        "صور مقطعية وسونار",
        "نقاش بين الأطباء"
      ],
      "alt": "صور تضيف سياقًا للنقاش. — MedicalSpace app screenshot"
    },
    "fr": {
      "label": "CAS CLINIQUES ILLUSTRÉS",
      "title": "Des images pour éclairer les échanges.",
      "description": "Un cas radiologique associe histoire clinique, scanner, échographie et discussion.",
      "bullets": [
        "Présentation clinique",
        "Scanner et échographie",
        "Discussion médicale"
      ],
      "alt": "Des images pour éclairer les échanges. — MedicalSpace app screenshot"
    },
    "tr": {
      "label": "GÖRÜNTÜLÜ KLİNİK VAKALAR",
      "title": "Görüntüler tartışmaya bağlam katar.",
      "description": "Radyoloji vakası klinik öyküyü BT ve ultrason görüntüleriyle birleştirir.",
      "bullets": [
        "Klinik öykü",
        "BT ve ultrason ekleri",
        "Mesleki tartışma"
      ],
      "alt": "Görüntüler tartışmaya bağlam katar. — MedicalSpace app screenshot"
    }
  },
  "prescription": {
    "file": "assets/current-prescription.webp",
    "index": "04 / 08",
    "en": {
      "label": "STRUCTURED PRESCRIPTIONS",
      "title": "Every medication has its place.",
      "description": "Review medication names, doses, frequency, duration and clinical notes.",
      "bullets": [
        "Medication and dose",
        "Frequency and duration",
        "Clinical notes"
      ],
      "alt": "Every medication has its place. — MedicalSpace app screenshot"
    },
    "ar": {
      "label": "الوصفات المنظمة",
      "title": "تفاصيل كل دواء أمامك.",
      "description": "استعرض أسماء الأدوية والجرعات والتكرار والمدة والملاحظات الطبية.",
      "bullets": [
        "الدواء والجرعة",
        "التكرار والمدة",
        "الملاحظات الطبية"
      ],
      "alt": "تفاصيل كل دواء أمامك. — MedicalSpace app screenshot"
    },
    "fr": {
      "label": "ORDONNANCES STRUCTURÉES",
      "title": "Chaque médicament à sa place.",
      "description": "Consultez noms, doses, fréquence, durée et notes cliniques.",
      "bullets": [
        "Médicament et dose",
        "Fréquence et durée",
        "Notes cliniques"
      ],
      "alt": "Chaque médicament à sa place. — MedicalSpace app screenshot"
    },
    "tr": {
      "label": "DÜZENLİ REÇETELER",
      "title": "Her ilacın ayrıntısı bir arada.",
      "description": "İlaç adlarını, dozları, sıklığı, süreyi ve klinik notları inceleyin.",
      "bullets": [
        "İlaç ve doz",
        "Sıklık ve süre",
        "Klinik notlar"
      ],
      "alt": "Her ilacın ayrıntısı bir arada. — MedicalSpace app screenshot"
    }
  },
  "vitals": {
    "file": "assets/current-vitals.webp",
    "index": "05 / 08",
    "en": {
      "label": "VITAL SIGNS",
      "title": "Measurements in their clinical context.",
      "description": "The consultation retains blood pressure, heart rate, oxygen saturation and other recorded measurements.",
      "bullets": [
        "Blood pressure and heart rate",
        "Oxygen saturation and temperature",
        "Weight and glucose measurements"
      ],
      "alt": "Measurements in their clinical context. — MedicalSpace app screenshot"
    },
    "ar": {
      "label": "العلامات الحيوية",
      "title": "قياسات مرتبطة بالزيارة.",
      "description": "احتفظ بضغط الدم والنبض وتشبع الأكسجين وبقية القياسات داخل الزيارة.",
      "bullets": [
        "ضغط الدم والنبض",
        "تشبع الأكسجين والحرارة",
        "الوزن وقياسات السكر"
      ],
      "alt": "قياسات مرتبطة بالزيارة. — MedicalSpace app screenshot"
    },
    "fr": {
      "label": "CONSTANTES VITALES",
      "title": "Les mesures dans leur contexte.",
      "description": "La consultation conserve tension, fréquence cardiaque, saturation et autres mesures.",
      "bullets": [
        "Tension et fréquence cardiaque",
        "Saturation et température",
        "Poids et glycémie"
      ],
      "alt": "Les mesures dans leur contexte. — MedicalSpace app screenshot"
    },
    "tr": {
      "label": "YAŞAMSAL BULGULAR",
      "title": "Ölçümler klinik bağlamında.",
      "description": "Muayene kaydında tansiyon, nabız, oksijen satürasyonu ve diğer ölçümler yer alır.",
      "bullets": [
        "Tansiyon ve nabız",
        "Oksijen satürasyonu ve sıcaklık",
        "Kilo ve glikoz ölçümleri"
      ],
      "alt": "Ölçümler klinik bağlamında. — MedicalSpace app screenshot"
    }
  },
  "imaging": {
    "file": "assets/current-imaging.webp",
    "index": "07 / 08",
    "en": {
      "label": "MEDICAL IMAGING",
      "title": "Look closer at the clinical evidence.",
      "description": "Open a case’s medical images alongside the clinical presentation.",
      "bullets": [
        "Clinical context",
        "Full-size image attachments",
        "Multiple supporting files"
      ],
      "alt": "Look closer at the clinical evidence. — MedicalSpace app screenshot"
    },
    "ar": {
      "label": "الصور الطبية",
      "title": "شاهد التفاصيل التشخيصية.",
      "description": "افتح الصور الطبية المرفقة بالحالة إلى جانب وصفها السريري.",
      "bullets": [
        "السياق السريري",
        "عرض الصور المرفقة بوضوح",
        "ملفات متعددة تدعم الحالة"
      ],
      "alt": "شاهد التفاصيل التشخيصية. — MedicalSpace app screenshot"
    },
    "fr": {
      "label": "IMAGERIE MÉDICALE",
      "title": "Examinez les éléments cliniques.",
      "description": "Retrouvez les images jointes au cas et sa présentation clinique.",
      "bullets": [
        "Contexte clinique",
        "Images jointes en grand format",
        "Plusieurs fichiers associés"
      ],
      "alt": "Examinez les éléments cliniques. — MedicalSpace app screenshot"
    },
    "tr": {
      "label": "TIBBİ GÖRÜNTÜLEME",
      "title": "Klinik bulguları yakından inceleyin.",
      "description": "Vakanın tıbbi görüntülerini klinik öyküyle birlikte açın.",
      "bullets": [
        "Klinik bağlam",
        "Büyük boy görüntü ekleri",
        "Birden fazla destekleyici dosya"
      ],
      "alt": "Klinik bulguları yakından inceleyin. — MedicalSpace app screenshot"
    }
  },
  "network": {
    "file": "assets/current-network.webp",
    "en": {
      "label": "PROFESSIONAL COMMUNITY",
      "title": "Connections across specialties.",
      "description": "Explore professional profiles and the available profile, chat and meeting actions.",
      "bullets": [
        "Professional profiles",
        "Specialty and experience",
        "Chat and meeting actions"
      ],
      "alt": "MedicalSpace professional community screen"
    },
    "ar": {
      "label": "المجتمع المهني",
      "title": "تواصل عبر التخصصات.",
      "description": "استكشف الملفات المهنية وإجراءات عرض الملف والمراسلة والاجتماعات.",
      "bullets": [
        "ملفات مهنية",
        "التخصص وسنوات الخبرة",
        "المراسلة والاجتماعات"
      ],
      "alt": "MedicalSpace professional community screen"
    },
    "fr": {
      "label": "COMMUNAUTÉ PROFESSIONNELLE",
      "title": "Des liens entre spécialités.",
      "description": "Explorez les profils professionnels et les actions de messagerie et de réunion.",
      "bullets": [
        "Profils professionnels",
        "Spécialité et expérience",
        "Messages et réunions"
      ],
      "alt": "MedicalSpace professional community screen"
    },
    "tr": {
      "label": "MESLEKİ TOPLULUK",
      "title": "Uzmanlıklar arasında bağlantılar.",
      "description": "Mesleki profilleri, sohbet ve toplantı seçeneklerini keşfedin.",
      "bullets": [
        "Mesleki profiller",
        "Uzmanlık ve deneyim",
        "Sohbet ve toplantılar"
      ],
      "alt": "MedicalSpace professional community screen"
    },
    "index": "08 / 08"
  }
};
  for (const [name, data] of Object.entries(nativeScreens)) screens[name] = Object.assign(screens[name] || {}, data);


  const refreshedLabels = {"ar": {"tabPatients": "سجل متابعة المريض", "tabPatientsSub": "زيارات مؤرخة ومتابعة", "tabNetwork": "شبكة الأطباء", "tabNetworkSub": "ملفات مهنية وتواصل", "tabPrescription": "الوصفة الطبية", "tabPrescriptionSub": "أدوية وجرعات وملاحظات", "tabVitals": "العلامات الحيوية", "tabVitalsSub": "قياسات مرتبطة بالزيارة", "tourDescription": "استكشف الواجهات الحالية للتطبيق بملفات مرضى افتراضية مكتملة وحالات طبية تعليمية.", "screenNote": "لقطات أصلية من التطبيق باللغة الإنجليزية. سجلات المرضى افتراضية للعرض، والحالات المصورة تعليمية. قد تختلف المزايا حسب الخطة.", "tabImaging": "الصور التشخيصية", "tabImagingSub": "صور طبية وتفاصيل الحالة", "aiSectionTitle": "المساعد الطبي بالذكاء الاصطناعي", "aiCaptureDescription": "شاهد تحليل زيارة فعلية: ملخصًا سريريًا وتشخيصات تفريقية وفحوصًا مقترحة، في سياق المعلومات المسجلة أثناء الاستشارة.", "aiShot1Title": "الملخص السريري", "aiShot1Text": "أهم معلومات الزيارة والنقاط ذات الصلة بالحالة.", "aiShot2Title": "التنبيهات والتشخيصات التفريقية", "aiShot2Text": "اعتبارات للمراجعة مع السياق السريري الداعم لها.", "aiShot3Title": "الفحوص المقترحة", "aiShot3Text": "اقتراحات للفحوص والمتابعة، مرتبة حسب الأولوية.", "teamSectionTitle": "صلاحيات الفريق", "teamCaptureDescription": "حدد وصول كل عضو إلى ملفات المرضى والزيارات والتوثيق السريري والوصفات. لكل جزء من سير العمل صلاحياته المستقلة.", "teamMemberLabel": "العضو المعروض", "teamShot1Title": "ملفات المرضى", "teamShot1Text": "التحكم في عرض ملفات المرضى وإضافتها وتعديلها وحذفها.", "teamShot2Title": "إدارة الزيارات", "teamShot2Text": "صلاحيات مستقلة لتفاصيل الزيارة والإدخال النصي والصوتي والأرشفة.", "teamShot3Title": "التوثيق السريري", "teamShot3Text": "إدارة الوصول إلى الشكوى والتشخيص وخطة العلاج والملاحظات.", "teamShot4Title": "الوصفات والأدوات السريرية", "teamShot4Text": "صلاحيات الوصفات والعلامات الحيوية والملاحظات الصوتية.", "captureEnlarge": "تكبير الصورة", "openOriginal": "فتح الصورة الأصلية", "downloadApp": "تنزيل MedicalSpace", "faq5Answer": "يمكن تنزيل MedicalSpace من الرابط التالي:", "socialChatTitle": "بلغتك أنت، وتصل إليه بلغته.", "socialChatText": "اكتب أو تحدث بلغتك. إذا فعّل المستقبِل الترجمة اللحظية، تصله رسالتك بلغته المختارة تلقائيًا. تدعم المحادثات أيضًا مشاركة المستندات ومسار مكالمات الفيديو.", "communityPoint3": "شات نصي وصوتي مع ترجمة لحظية اختيارية"}, "fr": {"tabPatients": "Historique du patient", "tabPatientsSub": "Consultations et suivi", "tabNetwork": "Réseau professionnel", "tabNetworkSub": "Profils et échanges", "tabPrescription": "Ordonnance", "tabPrescriptionSub": "Médicaments, doses et notes", "tabVitals": "Constantes vitales", "tabVitalsSub": "Mesures liées à la consultation", "tourDescription": "Découvrez les écrans actuels avec des dossiers patients fictifs complets et des cas pédagogiques.", "screenNote": "Captures originales en anglais. Dossiers patients fictifs et cas pédagogiques. Les fonctionnalités varient selon l’offre.", "tabImaging": "Imagerie diagnostique", "tabImagingSub": "Images et contexte clinique", "aiSectionTitle": "Assistant médical IA", "aiCaptureDescription": "Explorez l’analyse réelle d’une consultation : résumé clinique, diagnostics différentiels et examens suggérés, dans le contexte des données saisies.", "aiShot1Title": "Résumé clinique", "aiShot1Text": "Les informations essentielles et les points cliniques pertinents.", "aiShot2Title": "Alertes et diagnostics différentiels", "aiShot2Text": "Des éléments à examiner avec leur contexte clinique.", "aiShot3Title": "Examens suggérés", "aiShot3Text": "Des suggestions d’examens et de surveillance classées par priorité.", "teamSectionTitle": "Autorisations de l’équipe", "teamCaptureDescription": "Définissez l’accès de chaque membre aux dossiers, consultations, documents cliniques et ordonnances. Chaque parcours possède ses propres autorisations.", "teamMemberLabel": "Membre présenté", "teamShot1Title": "Dossiers patients", "teamShot1Text": "Contrôlez la consultation, la création, la modification et la suppression des dossiers.", "teamShot2Title": "Gestion des consultations", "teamShot2Text": "Accès distincts aux détails, à la saisie écrite ou vocale et à l’archivage.", "teamShot3Title": "Documentation clinique", "teamShot3Text": "Gérez l’accès aux motifs, diagnostics, traitements et notes.", "teamShot4Title": "Ordonnances et outils cliniques", "teamShot4Text": "Autorisations pour les ordonnances, constantes et notes vocales.", "captureEnlarge": "Agrandir la capture", "openOriginal": "Ouvrir l’image originale", "downloadApp": "Télécharger MedicalSpace", "faq5Answer": "Vous pouvez télécharger MedicalSpace via ce lien :", "socialChatTitle": "Votre langue, reçue dans la sienne.", "socialChatText": "Écrivez ou parlez dans votre langue. Si le destinataire active la traduction en temps réel, votre message lui parvient automatiquement dans la langue sélectionnée. Les échanges prennent aussi en charge les documents et les appels vidéo.", "communityPoint3": "Messages écrits et vocaux avec traduction en temps réel facultative"}, "tr": {"tabPatients": "Hasta takip geçmişi", "tabPatientsSub": "Tarihli muayeneler ve takip", "tabNetwork": "Hekim ağı", "tabNetworkSub": "Profiller ve bağlantılar", "tabPrescription": "Reçete", "tabPrescriptionSub": "İlaçlar, dozlar ve notlar", "tabVitals": "Yaşamsal bulgular", "tabVitalsSub": "Muayeneye bağlı ölçümler", "tourDescription": "Eksiksiz kurgusal hasta kayıtları ve eğitici vakalarla güncel uygulama ekranlarını keşfedin.", "screenNote": "İngilizce özgün ekran görüntüleri. Hasta kayıtları kurgusaldır; vakalar eğitim amaçlıdır. Özellikler plana göre değişebilir.", "tabImaging": "Tanısal görüntüleme", "tabImagingSub": "Görüntüler ve klinik bağlam", "aiSectionTitle": "Yapay zekâ tıbbi asistanı", "aiCaptureDescription": "Gerçek bir muayene analizini inceleyin: kaydedilen bilgilerle birlikte klinik özet, ayırıcı tanılar ve önerilen tetkikler.", "aiShot1Title": "Klinik özet", "aiShot1Text": "Muayenenin temel bilgileri ve klinik açıdan önemli noktalar.", "aiShot2Title": "Uyarılar ve ayırıcı tanılar", "aiShot2Text": "Klinik bağlamıyla birlikte değerlendirme önerileri.", "aiShot3Title": "Önerilen tetkikler", "aiShot3Text": "Önceliklerine göre düzenlenmiş tetkik ve izlem önerileri.", "teamSectionTitle": "Ekip izinleri", "teamCaptureDescription": "Her üyenin hasta dosyalarına, muayenelere, klinik belgelere ve reçetelere erişimini belirleyin. Her iş akışının ayrı izinleri vardır.", "teamMemberLabel": "Gösterilen üye", "teamShot1Title": "Hasta dosyaları", "teamShot1Text": "Dosyaları görüntüleme, ekleme, düzenleme ve silmeyi yönetin.", "teamShot2Title": "Muayene işlemleri", "teamShot2Text": "Ayrıntılar, metin, ses ve arşivleme için ayrı erişim.", "teamShot3Title": "Klinik belgeleme", "teamShot3Text": "Şikâyet, tanı, tedavi planı ve notlara erişimi yönetin.", "teamShot4Title": "Reçeteler ve klinik araçlar", "teamShot4Text": "Reçete, yaşamsal bulgu ve sesli not izinleri.", "captureEnlarge": "Görüntüyü büyüt", "openOriginal": "Özgün görüntüyü aç", "downloadApp": "MedicalSpace’i indir", "faq5Answer": "MedicalSpace’i bu bağlantıdan indirebilirsiniz:", "socialChatTitle": "Sizin diliniz, onun dilinde.", "socialChatText": "Kendi dilinizde yazın veya konuşun. Alıcı gerçek zamanlı çeviriyi etkinleştirirse mesajınız seçtiği dilde otomatik olarak iletilir. Sohbet ayrıca belge paylaşımını ve görüntülü görüşme akışını destekler.", "communityPoint3": "İsteğe bağlı gerçek zamanlı çeviriyle metin ve sesli sohbet"}};
  const chatCaptureLabels = {"ar": {"chatEyebrow": "الترجمة اللحظية", "chatTitle": "نقاش طبي واحد، بلغتين مختلفتين.", "chatDescription": "يكتب د. أحمد بالعربية، وتقرأ د. أماني بالإنجليزية. ويظهر ردّها الإنجليزي بالعربية لدى د. أحمد، مع تفعيل AI Translation على الجهازين.", "chatPair1": "رسالة أحمد: من العربية إلى الإنجليزية", "chatPair2": "رد أماني: من الإنجليزية إلى العربية", "chatShot1Title": "أحمد يكتب بالعربية", "chatShot1Text": "مناقشة الحالة بلغتها الأصلية على جهاز أحمد.", "chatShot2Title": "أماني تستقبلها بالإنجليزية", "chatShot2Text": "نفس الرسالة مترجمة تلقائيًا إلى لغتها المختارة.", "chatShot3Title": "أماني ترد بالإنجليزية", "chatShot3Text": "ردّها بلغته الأصلية على جهازها.", "chatShot4Title": "أحمد يقرأ الرد بالعربية", "chatShot4Text": "نفس الرد مترجمًا مع اختيار اللغة العربية."}, "fr": {"chatEyebrow": "Traduction en temps réel", "chatTitle": "Une discussion clinique. Deux langues.", "chatDescription": "Le Dr Ahmed écrit en arabe ; le Dr Amany lit en anglais. Sa réponse en anglais apparaît en arabe chez le Dr Ahmed, avec AI Translation activé sur les deux téléphones.", "chatPair1": "Message d’Ahmed : de l’arabe vers l’anglais", "chatPair2": "Réponse d’Amany : de l’anglais vers l’arabe", "chatShot1Title": "Ahmed écrit en arabe", "chatShot1Text": "La discussion dans sa langue d’origine sur son téléphone.", "chatShot2Title": "Amany reçoit le message en anglais", "chatShot2Text": "Le même message, traduit automatiquement dans la langue choisie.", "chatShot3Title": "Amany répond en anglais", "chatShot3Text": "Sa réponse originale sur son téléphone.", "chatShot4Title": "Ahmed lit la réponse en arabe", "chatShot4Text": "La même réponse traduite, avec l’arabe sélectionné."}, "tr": {"chatEyebrow": "Gerçek zamanlı çeviri", "chatTitle": "Tek klinik görüşme. İki dil.", "chatDescription": "Dr. Ahmed Arapça yazar; Dr. Amany İngilizce okur. İngilizce yanıtı, her iki telefonda AI Translation açıkken Dr. Ahmed’e Arapça görünür.", "chatPair1": "Ahmed’in mesajı: Arapçadan İngilizceye", "chatPair2": "Amany’nin yanıtı: İngilizceden Arapçaya", "chatShot1Title": "Ahmed Arapça yazıyor", "chatShot1Text": "Vaka görüşmesinin Ahmed’in telefonundaki özgün metni.", "chatShot2Title": "Amany İngilizce alıyor", "chatShot2Text": "Aynı mesaj, seçtiği dile otomatik çevrilmiş olarak.", "chatShot3Title": "Amany İngilizce yanıtlıyor", "chatShot3Text": "Kendi telefonundaki özgün yanıtı.", "chatShot4Title": "Ahmed yanıtı Arapça okuyor", "chatShot4Text": "Aynı yanıt, Arapça seçiliyken çevrilmiş olarak."}};
  for (const lang of ["ar","fr","tr"]) Object.assign(refreshedLabels[lang], chatCaptureLabels[lang]);
  Object.assign(refreshedLabels.ar, {"heroEyebrow": "ميديكال سبيس — مساحة متكاملة للعمل الطبي", "heroDescription": "نظّم ملفات المرضى والزيارات والوصفات، وراجع الحالات بمساعدة الذكاء الاصطناعي، وتواصل مع الأطباء عبر شات يدعم الترجمة اللحظية الاختيارية."});
  Object.assign(refreshedLabels.fr, {"heroEyebrow": "MedicalSpace — un espace de travail médical connecté", "heroDescription": "Organisez les dossiers patients, consultations et ordonnances, examinez les cas avec une assistance IA et échangez entre médecins avec une traduction en temps réel facultative."});
  Object.assign(refreshedLabels.tr, {"heroEyebrow": "MedicalSpace — bağlantılı tıbbi çalışma alanı", "heroDescription": "Hasta kayıtlarını, muayeneleri ve reçeteleri düzenleyin; vakaları yapay zekâ desteğiyle inceleyin ve isteğe bağlı gerçek zamanlı çeviriyle hekimlerle iletişim kurun."});
  Object.assign(arabic, refreshedLabels.ar);
  for (const lang of ["ar","fr","tr"]) { window.MedicalSpaceLanguages ||= {}; window.MedicalSpaceLanguages[lang] ||= {}; Object.assign(window.MedicalSpaceLanguages[lang], refreshedLabels[lang]); }

  for (const lang of ['ar','fr','tr']) Object.assign(window.MedicalSpaceLanguages[lang], window.MedicalSpaceLaunch?.[lang] || {});
  const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
  const english = Object.fromEntries(translatedNodes.map(node => [node.dataset.i18n,
    [...node.childNodes].map(child => child.nodeName === 'BR' ? '\n' : child.textContent).join('')]));
  Object.assign(english, window.MedicalSpaceEnglish || {});
  let language = 'en';
  let selectedScreen = 'home';
  const menuButton = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const languageSelect = document.getElementById('language-select');
  const extraLanguages = window.MedicalSpaceLanguages || {};
  const supportedLanguages = ['en', 'ar', 'fr', 'tr'];
  const tourImage = document.getElementById('tour-image');
  const tabs = [...document.querySelectorAll('[data-screen]')];
  const dialog = document.getElementById('screenshot-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const zoomButton = document.getElementById('screen-zoom');
  const closeDialog = document.getElementById('close-dialog');

  function setMenu(open) {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    const labels = { en: ['Open navigation', 'Close navigation'], ar: ['فتح القائمة', 'إغلاق القائمة'], fr: ['Ouvrir le menu', 'Fermer le menu'], tr: ['Menüyü aç', 'Menüyü kapat'] };
    menuButton.setAttribute('aria-label', labels[language][open ? 1 : 0]);
  }

  function updateScreen(name) {
    if (!Object.hasOwn(screens, name)) return;
    selectedScreen = name;
    const screen = screens[name];
    const copy = screen[language] || extraLanguages.screens?.[language]?.[name] || screen.en;
    tabs.forEach(tab => {
      const active = tab.dataset.screen === name;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    tourImage.src = screen.file;
    tourImage.alt = copy.alt;
    document.getElementById('screen-index').textContent = screen.index;
    document.getElementById('screen-label').textContent = copy.label;
    document.getElementById('screen-title').textContent = copy.title;
    document.getElementById('screen-description').textContent = copy.description;
    document.getElementById('tour-panel').setAttribute('aria-labelledby', 'tab-' + name);
    document.getElementById('screen-list').replaceChildren(...copy.bullets.map(text => {
      const item = document.createElement('li'); item.textContent = text; return item;
    }));
    if (dialog.open) { dialogImage.src = screen.file; dialogImage.alt = copy.alt; }
  }

  function setLanguage(next) {
    language = supportedLanguages.includes(next) ? next : 'en';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    const dictionary = language === 'ar' ? { ...arabic, ...extraLanguages.ar } : extraLanguages[language] || english;
    translatedNodes.forEach(node => {
      if (dictionary[node.dataset.i18n] !== undefined) node.textContent = dictionary[node.dataset.i18n];
    });
    languageSelect.value = language;
    const labels = {
      en: { title: 'MedicalSpace — Your practice. Your people. One space.', description: 'Bring patient records, visits, follow-ups and your professional medical community together. Explore MedicalSpace, a medical workspace by MANA LLC.', language: 'Website language', navigation: 'Main navigation', tabs: 'App workspaces', zoom: 'Enlarge app screenshot', close: 'Close screenshot', home: 'MedicalSpace home', platform: 'Explore the platform', roles: 'Illustration of doctor and member access', company: 'MANA LLC company website' },
      ar: { title: 'MedicalSpace — ممارستك الطبية ومجتمعك المهني في مكان واحد', description: 'مساحة تجمع ملفات المرضى والزيارات والمتابعة والمجتمع الطبي. اكتشف MedicalSpace، أحد منتجات MANA LLC.', language: 'لغة الموقع', navigation: 'التنقل الرئيسي', tabs: 'أقسام التطبيق', zoom: 'تكبير صورة شاشة التطبيق', close: 'إغلاق صورة الشاشة', home: 'الرئيسية — MedicalSpace', platform: 'اكتشف المنصة', roles: 'رسم توضيحي لصلاحيات الطبيب وعضو الفريق', company: 'الموقع الرسمي لشركة MANA LLC' },
      fr: { title: 'MedicalSpace — Votre cabinet. Vos confrères. Un même espace.', description: 'Réunissez dossiers patients, consultations, suivis et communauté médicale. Découvrez MedicalSpace, un produit de MANA LLC.', language: 'Langue du site', navigation: 'Navigation principale', tabs: 'Espaces de l’application', zoom: 'Agrandir la capture d’écran', close: 'Fermer la capture d’écran', home: 'Accueil MedicalSpace', platform: 'Découvrir la plateforme', roles: 'Illustration des accès du médecin et des membres', company: 'Site de MANA LLC' },
      tr: { title: 'MedicalSpace — Kliniğiniz. Çevreniz. Tek bir alan.', description: 'Hasta dosyalarını, muayeneleri, kontrol randevularını ve mesleki topluluğunuzu bir araya getirin. Bir MANA LLC ürünü olan MedicalSpace’i keşfedin.', language: 'Site dili', navigation: 'Ana gezinme', tabs: 'Uygulama bölümleri', zoom: 'Ekran görüntüsünü büyüt', close: 'Ekran görüntüsünü kapat', home: 'MedicalSpace ana sayfa', platform: 'Platformu keşfedin', roles: 'Hekim ve ekip üyesi erişiminin gösterimi', company: 'MANA LLC şirket sitesi' },
    }[language];
    const searchLabels = window.MedicalSpaceSEO?.[language];
    document.title = searchLabels?.title || labels.title;
    document.querySelector('meta[name="description"]').content = searchLabels?.description || labels.description;
    languageSelect.setAttribute('aria-label', labels.language);
    navigation.setAttribute('aria-label', labels.navigation);
    document.querySelector('[role="tablist"]').setAttribute('aria-label', labels.tabs);
    zoomButton.setAttribute('aria-label', labels.zoom);
    closeDialog.setAttribute('aria-label', labels.close);
    document.querySelectorAll('.brand').forEach(node => node.setAttribute('aria-label', labels.home));
    document.querySelector('.hero-bottom > a').setAttribute('aria-label', labels.platform);
    document.querySelector('.role-flow')?.setAttribute('aria-label', labels.roles);
    document.querySelector('.mana-block a').setAttribute('aria-label', labels.company);
    setMenu(false);
    updateScreen(selectedScreen);
    try { localStorage.setItem('medicalspace-site-language', language); } catch { /* Storage can be disabled. */ }
  }

  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  languageSelect.addEventListener('change', () => {
    const next = languageSelect.value;
    const destination = window.MedicalSpaceSEO?.[next]?.file;
    if (destination) { location.assign(new URL(destination + location.hash, location.href)); return; }
    setLanguage(next);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.navigation')) setMenu(false); });

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => updateScreen(tab.dataset.screen));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) { event.preventDefault(); updateScreen(tabs[target].dataset.screen); tabs[target].focus(); }
    });
  });
  document.querySelectorAll('[data-tour-target]').forEach(link => link.addEventListener('click', () => updateScreen(link.dataset.tourTarget)));

  let lastZoomTrigger = zoomButton;
  const originalImageLink = document.getElementById('original-image-link');
  const downloadUrl = window.MedicalSpaceConfig?.downloadUrl || 'https://play.google.com/store/apps/details?id=com.manaco.medicalspace';
  document.querySelectorAll('[data-download-link]').forEach(link => { link.href = downloadUrl; });
  document.querySelectorAll('[data-gallery-image]').forEach(button => button.addEventListener('click', () => {
    lastZoomTrigger = button;
    dialogImage.src = button.dataset.galleryImage;
    dialogImage.alt = button.querySelector('img').alt;
    originalImageLink.href = dialogImage.src;
    dialog.showModal(); closeDialog.focus();
  }));
  zoomButton.addEventListener('click', () => {
    lastZoomTrigger = zoomButton;
    originalImageLink.href = screens[selectedScreen].file;
    dialogImage.src = screens[selectedScreen].file;
    dialogImage.alt = (screens[selectedScreen][language] || extraLanguages.screens?.[language]?.[selectedScreen] || screens[selectedScreen].en).alt;
    dialog.showModal();
    closeDialog.focus();
  });
  closeDialog.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => lastZoomTrigger.focus());
  document.getElementById('year').textContent = new Date().getFullYear();
  let preferred = 'en';
  try { preferred = new URLSearchParams(location.search).get('lang') || document.documentElement.dataset.pageLanguage || localStorage.getItem('medicalspace-site-language') || 'en'; } catch { /* Keep English. */ }
  const sharedLanguage = new URLSearchParams(location.search).get('lang');
  const destination = window.MedicalSpaceSEO?.[sharedLanguage]?.file;
  if (destination && location.pathname.split('/').pop() !== destination) {
    location.replace(new URL(destination + location.hash, location.href)); return;
  }
  setLanguage(preferred);
})();
