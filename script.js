// ===== DATA =====
const formsPrimaryKeys = [
  ['EX-10','ex10Desc','https://www.inclusion.gob.es/web/migraciones/modelos-generales'],
  ['EX-17','ex17Desc','https://www.inclusion.gob.es/documents/410169/2156469/17-Formulario_TIE.pdf'],
  ['EX-15','ex15Desc','https://www.inclusion.gob.es/web/migraciones/modelos-generales'],
  ['EX-18','ex18Desc','https://www.inclusion.gob.es/web/migraciones/modelos-generales'],
  ['EX-00','ex00Desc','https://www.inclusion.gob.es/web/migraciones/modelos-generales'],
  ['EX-02','ex02Desc','https://www.inclusion.gob.es/web/migraciones/modelos-generales']
];
const formsSecondaryKeys = [
  ['EX-01','ex01Desc','https://www.inclusion.gob.es/documents/410169/2156469/01-Formulario.pdf'],
  ['EX-03','ex03Desc','https://www.inclusion.gob.es/documents/410169/2156469/03-Formulario.pdf'],
  ['EX-04','ex04Desc','https://www.inclusion.gob.es/documents/410169/2156469/04-Formulario.pdf'],
  ['EX-06','ex06Desc','https://www.inclusion.gob.es/documents/410169/2156469/06-Formulario.pdf'],
  ['EX-07','ex07Desc','https://www.inclusion.gob.es/documents/410169/2156469/07-Formulario.pdf'],
  ['EX-09','ex09Desc','https://www.inclusion.gob.es/documents/410169/2156469/09-Formulario.pdf'],
  ['EX-11','ex11Desc','https://www.inclusion.gob.es/documents/410169/2156469/11-Formulario.pdf'],
  ['EX-13','ex13Desc','https://www.inclusion.gob.es/documents/410169/2156469/13-Formulario.pdf'],
  ['EX-16','ex16Desc','https://www.inclusion.gob.es/documents/410169/2156469/16-Formulario.pdf'],
  ['EX-19','ex19Desc','https://www.inclusion.gob.es/documents/410169/2156469/19-Formulario.pdf'],
  ['EX-20','ex20Desc','https://www.inclusion.gob.es/documents/410169/2156469/20-Formulario.pdf'],
  ['EX-21','ex21Desc','https://www.inclusion.gob.es/documents/410169/2156469/21-Formulario.pdf'],
  ['EX-22','ex22Desc','https://www.inclusion.gob.es/documents/410169/2156469/22-Formulario.pdf'],
  ['EX-23','ex23Desc','https://www.inclusion.gob.es/documents/410169/2156469/23-Formulario.pdf'],
  ['EX-24','ex24Desc','https://www.inclusion.gob.es/documents/410169/2156469/24-Formulario.pdf'],
  ['EX-25','ex25Desc','https://www.inclusion.gob.es/documents/410169/2156469/25-Formulario.pdf'],
  ['EX-26','ex26Desc','https://www.inclusion.gob.es/documents/410169/2156469/26-Formulario.pdf'],
  ['EX-28','ex28Desc','https://www.inclusion.gob.es/documents/410169/2156469/28-Formulario.pdf'],
  ['EX-29','ex29Desc','https://www.inclusion.gob.es/documents/410169/2156469/29-Formulario.pdf'],
  ['EX-31','ex31Desc','https://www.inclusion.gob.es/documents/410169/2156469/31-Formulario.pdf'],
  ['EX-32','ex32Desc','https://www.inclusion.gob.es/documents/410169/2156469/32-Formulario.pdf']
];

const translations={
ar:{
  home:'الرئيسية',immigration:'الهجرة والإقامة',arraigo:'الإقامة الاستثنائية',forms:'نماذج EX',fees:'الرسوم',services:'الخدمات',official:'المواقع الرسمية',calendario:'التقويم',
  subtitle:'دليلك للإجراءات والخدمات الرسمية في إسبانيا',language:'اللغة',searchBtn:'بحث',popular:'الأكثر استخداماً',
  popularLead:'اختر الإجراء الذي تحتاجه، واطلع على الوثائق والخطوات والمصدر الرسمي.',
  immigrationTitle:'الهجرة والإقامة',immigrationLead:'جميع الإجراءات الرسمية المتعلقة بالإقامة والهجرة في إسبانيا.',
  arraigoTitle:'الإقامة الاستثنائية (Arraigo)',arraigoLead:'المعلومات مبنية على صفحات وزارة الإدماج الرسمية. الشروط تختلف حسب حالتك الشخصية، والمرجع النهائي هو المصدر الحكومي.',
  formsTitle:'جميع نماذج EX الرسمية',formsLead:'النماذج الأكثر استخداماً مع روابط PDF الرسمية والمباشرة:',moreFormsBtn:'عرض باقي نماذج EX ⬇️',hideFormsBtn:'إخفاء النماذج الإضافية ⬆️',
  feesTitle:'الرسوم',feesLead:'رسوم إجراءات الأجانب والشرطة - يجب اختيار البند الصحيح قبل الدفع.',servicesTitle:'الخدمات المهمة',servicesLead:'روابط مباشرة للخدمات الإلكترونية الأكثر استخداماً.',
  officialTitle:'مواقع رسمية مهمة',calendarioTitle:'التقويم - الأعياد الرسمية',calendarioLead:'تقويم صغير في الأعلى على اليسار - الأرقام الحمراء هي الأعياد الرسمية - الإدارات مغلقة.',
  howTitle:'كيفية استخدام الموقع؟',faqTitle:'أسئلة شائعة',searchPlaceholder:'ابحث عن: EX-10، TIE، أرايغو، Padrón...',
  footerLegalTitle:'إشعار قانوني هام:',footerLegalExact:'دليل معلوماتي خاص للإجراءات في إسبانيا ولا يمثل أي جهة حكومية رسمية أو إدارة عمومية',
  footerLegalExtra:'هذا الموقع هو مشروع خاص مستقل، لا ينتحل صفة أي وزارة أو إدارة، ولا يستخدم شعارات أو علامات تجارية رسمية. جميع الروابط تحيل مباشرة إلى المواقع الحكومية الرسمية. لا نقدم استشارة قانونية، والمعلومات قد تتغير، لذا يجب دائماً التحقق من المصدر الرسمي قبل أي إجراء. TramiteClaro ليس له أي علاقة بشركات الاتصالات التي تحمل اسم Claro.',
  footerText:'هذا الموقع دليل معلوماتي لمساعدة المستخدمين على الوصول إلى الإجراءات والمصادر الرسمية.',footerNote:'المعلومات قد تتغير؛ راجع دائماً المصدر الرسمي قبل التقديم.',footerSource:'المصدر الرسمي:',lastUpdate:'آخر تحديث',footerRights:'جميع الحقوق محفوظة',
  calNoticeTitle:'ملاحظة:',calNotice:'في الأعياد الرسمية، قد تكون الإدارات مغلقة. راجع دائماً التقويم الرسمي المعمول به.',
  directPdfText:'تحميل PDF مباشر ←',copyLinkText:'📋 نسخ الرابط',officialSource:'المصدر الرسمي ←',openSite:'فتح الموقع ←',details:'التفاصيل ←',copyName:'📋 نسخ الاسم',openTasa:'فتح الرسوم ←',
  feeWarning:'قبل الدفع، اختر الإجراء والبند الصحيحين من الموقع الرسمي، لأن الرسم يختلف حسب المعاملة.',officialText:'استخدم دائماً المصدر الرسمي قبل إرسال أي طلب أو دفع أي رسم.',
  calInfoDefault:'اضغط على رقم أحمر لمعرفة العيد - الإدارات مغلقة 🚫',legendClosed:'عيد - مغلق',legendToday:'اليوم',legendWeekend:'عطلة نهاية الأسبوع',
  thNum:'#',thColor:'اللون',thHoliday:'العيد / المناسبة',thDate:'التاريخ',thStatus:'حالة الإدارات',closedStatus:'مغلق 🚫',
  how1Title:'1. اختر الإجراء',how1Desc:'ابحث عن الخدمة أو النموذج الذي تحتاجه.',
  how2Title:'2. اطلع على المتطلبات',how2Desc:'راجع الوثائق والشروط الخاصة بحالتك.',
  how3Title:'3. افتح المصدر الرسمي',how3Desc:'استخدم الرابط الرسمي لتحميل النموذج أو إكمال الإجراء.',
  how4Title:'4. أكمل الإجراء',how4Desc:'أرسل الطلب أو احجز موعداً مع الجهة الرسمية.',
  faq1Title:'هل TramiteClaro موقع حكومي؟',faq1Desc:'لا. الموقع دليل معلوماتي خاص مستقل، لا يمثل أي جهة حكومية ولا يقدم استشارة قانونية.',
  faq2Title:'أين أجد النماذج الرسمية؟',faq2Desc:'في قسم «نماذج EX»، والروابط تفتح الصفحة الرسمية لوزارة الإدماج مباشرة.',
  faq3Title:'هل شروط الأرايغو هي نفسها للجميع؟',faq3Desc:'لا. تختلف الشروط والوثائق حسب نوع الأرايغو ووضعك الشخصي.',
  ex10Desc:'إقامة بسبب ظروف استثنائية (الأرايغو)',ex17Desc:'بطاقة هوية الأجنبي TIE - أخذ البصمات',ex15Desc:'رقم هوية الأجنبي NIE والشهادات',ex18Desc:'تسجيل مواطني الاتحاد الأوروبي',ex00Desc:'إقامة طويلة المدة',ex02Desc:'إعادة التجمع العائلي',
  ex01Desc:'إقامة مؤقتة غير ربحية',ex03Desc:'إقامة وعمل لحساب الغير',ex04Desc:'إقامة للتدريب المهني',ex06Desc:'إقامة وعمل للأنشطة الموسمية',ex07Desc:'إقامة وعمل لحسابك الخاص',ex09Desc:'إقامة مع إعفاء من تصريح العمل',ex11Desc:'إقامة طويلة المدة-UE',ex13Desc:'تصريح العودة - Autorización de regreso',ex16Desc:'بطاقة تسجيل وتوثيق السفر',ex19Desc:'بطاقة إقامة فرد من عائلة مواطن الاتحاد',ex20Desc:'إقامة مواطني المملكة المتحدة - اتفاق الانسحاب',ex21Desc:'إقامة أفراد عائلات مواطني المملكة المتحدة',ex22Desc:'تصريح عامل حدودي من المملكة المتحدة',ex23Desc:'بطاقة وفق اتفاق الانسحاب',ex24Desc:'إقامة أفراد عائلات الإسبان',ex25Desc:'إقامة وتنقل مؤقت للقاصرين الأجانب',ex26Desc:'تعديل الإقامة أو مدة البقاء',ex28Desc:'طلب تطبيق الحكم الانتقالي DT 2ª',ex29Desc:'تمديد الإقامة قصيرة المدة',ex31Desc:'أرايغو لطلبات الحماية الدولية DA20',ex32Desc:'الأرايغو الاستثنائي DA21',
  tasa012Desc:'رسوم الشرطة - بصمات و TIE وشهادات',tasa052Desc:'رسوم الإقامة والتصاريح - وزارة الإدماج',
  citaDesc:'حجز موعد مسبق لمكاتب الأجانب',padronDesc:'التسجيل البلدي وإثبات السكن',vidaDesc:'تقرير الحياة المهنية - Seguridad Social',claveDesc:'نظام الدخول للخدمات الإلكترونية',
  immCard1Title:'الإقامة الاستثنائية',immCard1Desc:'أنواع الأرايغو وشروط كل مسار حسب القانون الحالي.',
  immCard2Title:'نماذج EX الرسمية',immCard2Desc:'جميع النماذج مع روابط PDF مباشرة من الوزارة.',
  immCard3Title:'حجز المواعيد',immCard3Desc:'الوصول إلى خدمة المواعيد الرسمية Cita Previa.',
  immCard4Title:'بطاقة TIE والبصمات',immCard4Desc:'معلومات وإجراءات بطاقة هوية الأجنبي.',
  arraigoNotice:'جميع أنواع الأرايغو تستخدم النموذج',arraigoNoticeEnd:'في الحالات التي تحددها الوزارة.',
  socDesc:'الإقامة بسبب الاندماج الاجتماعي والروابط العائلية.',socoDesc:'إقامة مرتبطة بعقود عمل.',formDesc:'مسار مرتبط بالتكوين والاندماج.',famDesc:'حالات عائلية محددة منصوص عليها قانوناً.',
  colRed:'أحمر',colBlue:'أزرق',colGreen:'أخضر',colYellow:'أصفر',colViolet:'بنفسجي',colPink:'وردي',colOrange:'برتقالي',colGray:'رمادي',colLightBlue:'أزرق فاتح',
  servPadron:'التسجيل في البلدية وإثبات السكن',servVida:'تقرير الحياة المهنية والعمل',servClave:'الولوج الآمن للخدمات الإلكترونية',servSepe:'خدمات التشغيل والبطالة',servHacienda:'الضرائب والخدمات الإلكترونية',servDgt:'رخص السياقة والمركبات والمواعيد',servSalud:'بوابة وزارة الصحة',servEduc:'التعليم ومعادلة الشهادات',servIne:'الإحصائيات والسجل السكاني',servFnmt:'الشهادة الرقمية والتوقيع الإلكتروني',
  wdMon:'إث',wdTue:'ثل',wdWed:'أرب',wdThu:'خم',wdFri:'جم',wdSat:'سب',wdSun:'أح',
  trackTitle:'تتبع الطلب',trackDesc:'الاستعلام عن حالة ملفك في مكاتب الأجانب - خدمة رسمية',toastCopySuccess:'تم نسخ الرابط بنجاح! ✅',toastCopied:'تم النسخ! ✅',searchNoResult:'لم يتم العثور على نتائج'
},
darija:{
  home:'الرئيسية',immigration:'الهجرة والإقامة',arraigo:'الأرايغو',forms:'نماذج EX',fees:'الرسوم',services:'الخدمات',official:'المواقع الرسمية',calendario:'التقويم',
  subtitle:'الدليل ديالك للإجراءات والخدمات الرسمية فإسبانيا',language:'اللغة',searchBtn:'قلب',popular:'الأكثر استعمالاً',
  popularLead:'ختار الإجراء اللي محتاج، وشوف الوثائق والخطوات والمصدر الرسمي.',
  immigrationTitle:'الهجرة والإقامة',immigrationLead:'جميع الإجراءات الرسمية ديال الإقامة والهجرة فإسبانيا.',
  arraigoTitle:'الأرايغو',arraigoLead:'المعلومات مبنية على صفحات الوزارة الرسمية. الشروط كتختلف حسب الحالة ديالك.',
  formsTitle:'جميع نماذج EX الرسمية',formsLead:'النماذج الأكثر استعمالاً مع روابط PDF الرسمية:',moreFormsBtn:'شوف باقي نماذج EX ⬇️',hideFormsBtn:'خبي النماذج ⬆️',
  feesTitle:'الطاسات',feesLead:'طاسات إجراءات الأجانب والبوليس - خاصك تختار البند الصحيح قبل الخلاص.',servicesTitle:'الخدمات المهمة',servicesLead:'روابط مباشرة للخدمات الإلكترونية الأكثر استعمالاً.',
  officialTitle:'مواقع رسمية مهمة',calendarioTitle:'التقويم - الأعياد',calendarioLead:'تقويم صغير الفوق على اليسر بحال تطبيق التليفون - الأرقام الحمرا هي الأعياد - الإدارات مسدودة.',
  howTitle:'كيفاش تستعمل الموقع؟',faqTitle:'أسئلة شائعة',searchPlaceholder:'قلب على: EX-10، TIE، الأرايغو...',
  footerLegalTitle:'إشعار قانوني مهم:',footerLegalExact:'دليل معلوماتي خاص للإجراءات في إسبانيا ولا يمثل أي جهة حكومية رسمية أو إدارة عمومية',
  footerLegalExtra:'هاد الموقع مشروع خاص مستقل، ما كيمثلش أي وزارة أو إدارة، وما كيستعملش شعارات رسمية. الروابط كتمشي مباشرة للمواكب الحكومية الرسمية. ما كنقدموش استشارة قانونية، والمعلومات تقدر تتبدل، لذلك خاصك ديما تتأكد من المصدر الرسمي. TramiteClaro ما عندو حتى علاقة بشركات الاتصالات اللي سميتها Claro.',
  footerText:'هاد الموقع غير دليل معلوماتي باش يعاونك توصل للإجراءات الرسمية.',footerNote:'المعلومات تقدر تتبدل؛ شوف ديما المصدر الرسمي قبل ما تدفع.',footerSource:'المصدر الرسمي:',lastUpdate:'آخر تحديث',footerRights:'جميع الحقوق محفوظة',
  calNoticeTitle:'ملاحظة:',calNotice:'فالأعياد الرسمية، الإدارات تقدر تكون مسدودة. شوف ديما التقويم الرسمي.',
  directPdfText:'تحميل PDF مباشر ←',copyLinkText:'📋 نسخ الرابط',officialSource:'المصدر الرسمي ←',openSite:'فتح الموقع ←',details:'التفاصيل ←',copyName:'📋 نسخ الاسم',openTasa:'فتح الطاسا ←',
  feeWarning:'قبل ما تخلص، اختار الإجراء والبند الصحيحين من الموقع الرسمي.',officialText:'استعمل ديما المصدر الرسمي قبل ما تسيفط أي طلب.',
  calInfoDefault:'كليكي على رقم حمر باش تعرف العيد - الإدارات مسدودة 🚫',legendClosed:'عيد - مسدود',legendToday:'اليوم',legendWeekend:'ويكند',
  thNum:'#',thColor:'اللون',thHoliday:'العيد',thDate:'التاريخ',thStatus:'الحالة',closedStatus:'مسدود 🚫',
  how1Title:'1. ختار الإجراء',how1Desc:'قلب على الخدمة أو النموذج اللي محتاج.',
  how2Title:'2. شوف شنو خاصك',how2Desc:'راجع الوثائق والشروط ديال الحالة ديالك.',
  how3Title:'3. حل المصدر الرسمي',how3Desc:'استعمل الرابط الرسمي باش تحمل النموذج أو تكمل الإجراء.',
  how4Title:'4. كمل الإجراء',how4Desc:'سيفط الطلب أو شد موعد مع الجهة الرسمية.',
  faq1Title:'واش TramiteClaro موقع حكومي؟',faq1Desc:'لا. الموقع دليل معلوماتي خاص مستقل، ما كيمثل حتى جهة حكومية.',
  faq2Title:'فين نلقى النماذج الرسمية؟',faq2Desc:'فقسم «نماذج EX»، والروابط كتحل الصفحة الرسمية ديال وزارة الإدماج.',
  faq3Title:'واش شروط الأرايغو نفسها لكلشي؟',faq3Desc:'لا. كتختلف حسب النوع والوضعية ديالك.',
  ex10Desc:'إقامة بسبب ظروف استثنائية (الأرايغو)',ex17Desc:'بطاقة هوية الأجنبي TIE',ex15Desc:'NIE والشهادات',ex18Desc:'تسجيل مواطني الاتحاد الأوروبي',ex00Desc:'إقامة طويلة المدة',ex02Desc:'إعادة التجمع العائلي',
  ex01Desc:'إقامة مؤقتة غير ربحية',ex03Desc:'إقامة وعمل لحساب الغير',ex04Desc:'إقامة للتدريب',ex06Desc:'إقامة موسمية',ex07Desc:'إقامة لحسابك الخاص',ex09Desc:'إقامة مع إعفاء من تصريح العمل',ex11Desc:'إقامة طويلة المدة-UE',ex13Desc:'تصريح العودة',ex16Desc:'بطاقة تسجيل',ex19Desc:'بطاقة إقامة فرد عائلة مواطن الاتحاد',ex20Desc:'إقامة مواطني بريطانيا',ex21Desc:'إقامة عائلات مواطني بريطانيا',ex22Desc:'تصريح عامل حدودي',ex23Desc:'بطاقة اتفاق الانسحاب',ex24Desc:'إقامة عائلات الإسبان',ex25Desc:'إقامة القاصرين',ex26Desc:'تعديل الإقامة',ex28Desc:'حكم انتقالي',ex29Desc:'تمديد الإقامة',ex31Desc:'أرايغو حماية دولية',ex32Desc:'أرايغو استثنائي',
  tasa012Desc:'طاسا البوليس - TIE والبصمات',tasa052Desc:'طاسا الإقامة - وزارة الإدماج',
  citaDesc:'حجز موعد لمكاتب الأجانب',padronDesc:'التسجيل فالبلدية',vidaDesc:'تقرير الحياة المهنية',claveDesc:'الدخول للخدمات الإلكترونية',
  immCard1Title:'الأرايغو',immCard1Desc:'أنواع الأرايغو وشروط كل مسار.',immCard2Title:'نماذج EX',immCard2Desc:'النماذج الرسمية وروابط الوزارة.',immCard3Title:'المواعيد',immCard3Desc:'خدمة المواعيد الرسمية.',immCard4Title:'TIE والبصمات',immCard4Desc:'معلومات بطاقة هوية الأجنبي.',
  arraigoNotice:'جميع أنواع الأرايغو كتستعمل النموذج',arraigoNoticeEnd:'فالحالات اللي كتحددها الوزارة.',
  socDesc:'الإقامة بسبب الاندماج الاجتماعي.',socoDesc:'إقامة مرتبطة بعقود عمل.',formDesc:'مسار مرتبط بالتكوين.',famDesc:'حالات عائلية محددة.',
  colRed:'حمر',colBlue:'زرق',colGreen:'خضر',colYellow:'صفر',colViolet:'موف',colPink:'وردي',colOrange:'ليموني',colGray:'رمادي',colLightBlue:'زرق فاتح',
  servPadron:'التسجيل فالبلدية',servVida:'الحياة المهنية',servClave:'الدخول للخدمات',servSepe:'خدمات التشغيل',servHacienda:'الضرائب',servDgt:'السياقة والسيارات',servSalud:'الصحة',servEduc:'التعليم',servIne:'الإحصائيات',servFnmt:'الشهادة الرقمية',
  trackTitle:'تتبع الطلب',trackDesc:'قلب على الحالة ديال الملف ديالك فمكاتب الأجانب',toastCopySuccess:'تم نسخ الرابط! ✅',toastCopied:'تم النسخ! ✅',searchNoResult:'ما لقيناش نتيجة'
},
zgh:{
  home:'ⴰⵙⵏⵓⴱⴳ',immigration:'ⴰⵙⵏⴰⵡ ⴷ ⵓⵣⵔⴰⴼ',arraigo:'Arraigo',forms:'ⵉⵎⵏⵙⵉⵏ EX',fees:'ⵜⴰⵙⴰⵙⵜ',services:'ⵉⵎⵙⵏⴰⵡⵏ',official:'ⵉⵙⵏⵏⴰⵏ ⵉⵙⵍⵉⵏ',calendario:'ⴰⵙⵎⵍⴰⵙ',
  subtitle:'ⴰⵏⵎⵎⴰⵍ ⵉ ⵓⵙⵏⵎⵔ ⵏ ⵉⵎⵙⵏⵉⵔⵏ ⵏ ⵙⴱⴰⵏⵢⴰ',language:'ⵜⵓⵜⵍⴰⵢⵜ',searchBtn:'ⵔⵣⵓ',popular:'ⵉⵎⵙⵏⴰⵡⵏ ⵉⵎⵇⵔⴰⵏ',
  popularLead:'ⵙⵙⵏ ⴰⵎⵙⵏⵉⵔ ⴷ ⵥⵔ ⵜⵉⵔⵔⴰ ⴷ ⵉⵙⴰⵍⵏ ⵏ ⵓⵙⵏⵓⴱⴳ ⵓⴼⵔⵉⵙ.',immigrationTitle:'ⴰⵙⵏⴰⵡ ⴷ ⵓⵣⵔⴰⴼ',immigrationLead:'ⵉⵎⵙⵏⵉⵔⵏ ⵏ ⵓⵣⵔⴰⴼ ⴷ ⵓⵙⵏⴰⵡ ⴳ ⵙⴱⴰⵏⵢⴰ.',
  arraigoTitle:'Arraigo',arraigoLead:'ⵉⵙⴰⵍⵏ ⵙⴳ ⵉⵙⵏⵏⴰⵏ ⵉⵙⵍⵉⵏ ⵏ ⵜⵎⴰⵡⴰⵙⵜ.',formsTitle:'ⵉⵎⵏⵙⵉⵏ EX ⵉⵙⵍⵉⵏ',formsLead:'ⵉⵎⵏⵙⵉⵏ ⵉⵙⵍⵉⵏ ⵙ PDF:',moreFormsBtn:'ⵙⵙⵎⵏ ⵉⵎⵏⵙⵉⵏ ⵏⵏⵉⴹⵏ ⬇️',hideFormsBtn:'ⵙⵙⵓⴼⵖ ⵉⵎⵏⵙⵉⵏ ⬆️',
  feesTitle:'ⵜⴰⵙⴰⵙⵜ',feesLead:'ⵜⴰⵙⴰⵙⵜ ⵏ ⵉⵎⵙⵏⵉⵔⵏ ⵏ ⵉⴱⵕⵕⴰⵏⵉⵢⵏ.',servicesTitle:'ⵉⵎⵙⵏⴰⵡⵏ ⵉⵎⵇⵔⴰⵏ',servicesLead:'ⵉⵙⵏⵏⴰⵏ ⵉⵙⵍⵉⵏ ⵉⵎⵇⵔⴰⵏ.',officialTitle:'ⵉⵙⵏⵏⴰⵏ ⵉⵙⵍⵉⵏ',calendarioTitle:'ⴰⵙⵎⵍⴰⵙ',calendarioLead:'ⴰⵙⵎⵍⴰⵙ ⵎⵥⵥⵉⵏ.',
  howTitle:'ⵎⴰⵎⴽ ⴰⴷ ⵜⵙⵙⵏⴷ ⴰⵙⵏⵓⴱⴳ?',faqTitle:'ⵉⵙⵇⵙⵉⵜⵏ',searchPlaceholder:'ⵔⵣⵓ: EX-10، TIE...',
  footerLegalTitle:'ⵜⴰⵏⵏⴰⵢⵜ ⵜⴰⵙⵔⵜⴰⵏⵜ:',footerLegalExact:'دليل معلوماتي خاص للإجراءات في إسبانيا ولا يمثل أي جهة حكومية رسمية أو إدارة عمومية',
  footerLegalExtra:'ⴰⵙⵏⵓⴱⴳ ⴰⴷ ⵉⴳⴰ ⴰⵙⵏⵓⴱⴳ ⵓⵙⵍⵉⴳ, ⵓⵔ ⵉⴳⵉ ⴰⵙⵏⵓⴱⴳ ⵓⵏⴰⵎⵓⵔ.',footerText:'ⴰⵙⵏⵓⴱⴳ ⵏ ⵓⵙⵙⵏ ⵏ ⵉⵎⵙⵏⵉⵔⵏ.',footerNote:'ⵉⵙⴰⵍⵏ ⵣⵎⵔⵏ ⴰⴷ ⴱⴷⴷⵍⵏ.',footerSource:'ⴰⵙⴰⴳⵎ:',lastUpdate:'ⴰⵙⵏⴼⵍ',footerRights:'ⵉⵣⵔⴼⴰⵏ',
  calNoticeTitle:'ⵜⴰⵏⵏⴰⵢⵜ:',calNotice:'ⴳ ⵉⵎⴻⵖⵔⴰⵙ ⵉⵙⵍⵉⵏ, ⵉⵎⵙⵏⴰⵡⵏ ⵇⵇⵏⵏ.',directPdfText:'PDF ⬇️',copyLinkText:'Copy',officialSource:'Source ←',openSite:'Open ←',details:'Details ←',copyName:'Copy',openTasa:'Tasa ←',
  feeWarning:'ⵥⵔ ⴰⵙⵏⵓⴱⴳ ⵓⴼⵔⵉⵙ ⵇⴱⵍ.',officialText:'ⵥⵔ ⴰⵙⵏⵓⴱⴳ ⵓⴼⵔⵉⵙ.',calInfoDefault:'ⴽⵍⵉⴽⵉ ⵅⴼ ⵓⵎⴹⴰⵏ ⴰⵣⴳⴳⵯⴰⵖ',legendClosed:'ⵓⵔ ⵉⵍⵍⵉ',legendToday:'ⴰⵙⵙⴰ',legendWeekend:'Weekend',
  thNum:'#',thColor:'Color',thHoliday:'Holiday',thDate:'Date',thStatus:'Status',closedStatus:'ⵓⵔ ⵉⵍⵍⵉ',
  how1Title:'1. ⵙⵙⵏ ⴰⵎⵙⵏⵉⵔ',how1Desc:'ⵔⵣⵓ ⵅⴼ ⴰⵎⵙⵏⴰⵡ.',how2Title:'2. ⵥⵔ ⵉⵎⵙⵙⵉⵔⵏ',how2Desc:'ⵥⵔ ⵜⵉⵔⵔⴰ.',how3Title:'3. ⵥⵔ ⴰⵙⵏⵓⴱⴳ ⵓⴼⵔⵉⵙ',how3Desc:'ⵙⵙⵏ ⴰⵙⵏⵉⵔ ⵓⴼⵔⵉⵙ.',how4Title:'4. ⴽⵎⵍ ⴰⵎⵙⵏⵉⵔ',how4Desc:'ⴰⵣⵏ ⵜⵉⵔⵔⴰ ⵏⵏⴽ.',
  faq1Title:'Is this official?',faq1Desc:'No. Independent guide.',faq2Title:'Where are forms?',faq2Desc:'In EX section.',faq3Title:'Same conditions?',faq3Desc:'No, depends on case.',
  ex10Desc:'Arraigo - EX10',ex17Desc:'TIE',ex15Desc:'NIE',ex18Desc:'UE',ex00Desc:'Larga duración',ex02Desc:'Reagrupación',
  ex01Desc:'No lucrativa',ex03Desc:'Cuenta ajena',ex04Desc:'Prácticas',ex06Desc:'Temporada',ex07Desc:'Cuenta propia',ex09Desc:'Exención trabajo',ex11Desc:'UE larga',ex13Desc:'Regreso',ex16Desc:'Cédula',ex19Desc:'Familiar UE',ex20Desc:'UK',ex21Desc:'Familia UK',ex22Desc:'Fronterizo UK',ex23Desc:'Retirada UK',ex24Desc:'Familia español',ex25Desc:'Menores',ex26Desc:'Modificación',ex28Desc:'DT2',ex29Desc:'Prórroga',ex31Desc:'DA20',ex32Desc:'DA21',
  tasa012Desc:'Tasa 012 Policía',tasa052Desc:'Tasa 052 Extranjería',citaDesc:'Cita previa',padronDesc:'Empadronamiento',vidaDesc:'Vida laboral',claveDesc:'Cl@ve',
  immCard1Title:'Arraigo',immCard1Desc:'Tipos arraigo.',immCard2Title:'Modelos EX',immCard2Desc:'Formularios oficiales.',immCard3Title:'Cita',immCard3Desc:'Cita previa oficial.',immCard4Title:'TIE',immCard4Desc:'TIE info.',
  arraigoNotice:'Arraigo usa modelo',arraigoNoticeEnd:'según ministerio.',socDesc:'Arraigo social.',socoDesc:'Sociolaboral.',formDesc:'Socioformativo.',famDesc:'Familiar.',
  colRed:'Red',colBlue:'Blue',colGreen:'Green',colYellow:'Yellow',colViolet:'Violet',colPink:'Pink',colOrange:'Orange',colGray:'Gray',colLightBlue:'Light blue',
  servPadron:'Padrón',servVida:'Vida laboral',servClave:'Cl@ve',servSepe:'SEPE',servHacienda:'Hacienda',servDgt:'DGT',servSalud:'Salud',servEduc:'Educación',servIne:'INE',servFnmt:'FNMT',
  trackTitle:'ⴰⴹⴼⴰⵕ ⵏ ⵓⵙⵏⵉⵔⵎ',trackDesc:'ⵥⵔ ⴰⴷⴷⴰⴷ ⵏ ⵓⵙⵏⵉⵔⵎ ⵏⵏⴽ',wdMon:'Mon',wdTue:'Tue',wdWed:'Wed',wdThu:'Thu',wdFri:'Fri',wdSat:'Sat',wdSun:'Sun',toastCopySuccess:'Copied! ✅',toastCopied:'Copied! ✅',searchNoResult:'No results'
},
es:{
  home:'Inicio',immigration:'Inmigración y residencia',arraigo:'Arraigo',forms:'Modelos EX',fees:'Tasas',services:'Servicios',official:'Sitios oficiales',calendario:'Calendario',
  subtitle:'Tu guía de trámites y servicios oficiales en España',language:'Idioma',searchBtn:'Buscar',popular:'Más utilizados',
  popularLead:'Elige el trámite, consulta los documentos y accede a la fuente oficial.',
  immigrationTitle:'Inmigración y residencia',immigrationLead:'Todos los trámites oficiales de residencia e inmigración en España.',
  arraigoTitle:'Arraigo',arraigoLead:'Información basada en las páginas oficiales del Ministerio de Inclusión. Las condiciones varían según tu caso personal.',
  formsTitle:'Todos los modelos EX oficiales',formsLead:'Los modelos más utilizados con enlaces PDF directos y oficiales:',moreFormsBtn:'Mostrar más modelos EX ⬇️',hideFormsBtn:'Ocultar modelos adicionales ⬆️',
  feesTitle:'Tasas',feesLead:'Tasas de extranjería y policía - debes elegir el epígrafe correcto antes de pagar.',servicesTitle:'Servicios importantes',servicesLead:'Accesos directos a los servicios electrónicos más utilizados.',
  officialTitle:'Sitios oficiales importantes',calendarioTitle:'Calendario laboral - Festivos',calendarioLead:'Calendario pequeño arriba a la izquierda - números rojos son festivos - administraciones cerradas.',
  howTitle:'¿Cómo usar el sitio?',faqTitle:'Preguntas frecuentes',searchPlaceholder:'Buscar: EX-10, TIE, arraigo, Padrón...',
  footerLegalTitle:'Aviso legal importante:',footerLegalExact:'دليل معلوماتي خاص للإجراءات في إسبانيا ولا يمثل أي جهة حكومية رسمية أو إدارة عمومية',
  footerLegalExtra:'Este sitio es un proyecto privado independiente, no suplanta a ningún ministerio ni administración, y no utiliza logotipos ni marcas oficiales. Todos los enlaces dirigen directamente a webs gubernamentales oficiales. No ofrecemos asesoramiento jurídico y la información puede cambiar, por lo que siempre debes verificar la fuente oficial antes de cualquier trámite. TramiteClaro no tiene relación con empresas de telecomunicaciones llamadas Claro.',
  footerText:'Este sitio es una guía informativa para ayudar a acceder a procedimientos y fuentes oficiales.',footerNote:'La información puede cambiar; consulta siempre la fuente oficial antes de presentar.',footerSource:'Fuente oficial:',lastUpdate:'Última actualización',footerRights:'Todos los derechos reservados',
  calNoticeTitle:'Nota:',calNotice:'En días festivos oficiales, las administraciones pueden estar cerradas. Consulta siempre el calendario oficial.',
  directPdfText:'Descarga PDF directa ←',copyLinkText:'📋 Copiar enlace',officialSource:'Fuente oficial ←',openSite:'Abrir sitio ←',details:'Detalles ←',copyName:'📋 Copiar nombre',openTasa:'Abrir tasa ←',
  feeWarning:'Antes de pagar, selecciona el trámite y epígrafe correctos en la sede oficial.',officialText:'Utiliza siempre la fuente oficial antes de enviar solicitudes o pagar tasas.',
  calInfoDefault:'Haz clic en un número rojo para ver el festivo - Administraciones cerradas 🚫',legendClosed:'Festivo - cerrado',legendToday:'Hoy',legendWeekend:'Fin de semana',
  thNum:'#',thColor:'Color',thHoliday:'Fiesta',thDate:'Fecha',thStatus:'Estado',closedStatus:'Cerrado 🚫',
  how1Title:'1. Elige el trámite',how1Desc:'Busca el servicio o modelo que necesitas.',
  how2Title:'2. Consulta los requisitos',how2Desc:'Revisa la documentación y pasos para tu caso.',
  how3Title:'3. Accede a la fuente oficial',how3Desc:'Usa el enlace oficial para descargar el modelo o iniciar el trámite.',
  how4Title:'4. Completa el trámite',how4Desc:'Envía la solicitud o pide cita con el organismo oficial.',
  faq1Title:'¿Es TramiteClaro una web gubernamental?',faq1Desc:'No. Es una guía informativa privada independiente que no representa a ninguna entidad pública ni ofrece asesoramiento jurídico.',
  faq2Title:'¿Dónde encuentro los modelos oficiales?',faq2Desc:'En la sección «Modelos EX», con enlaces directos al sitio oficial del Ministerio.',
  faq3Title:'¿Los requisitos de arraigo son iguales para todos?',faq3Desc:'No. Dependen de tu situación personal y del tipo de arraigo.',
  ex10Desc:'Residencia por circunstancias excepcionales (Arraigo)',ex17Desc:'Tarjeta de identidad de extranjero TIE - Huellas',ex15Desc:'NIE y certificados',ex18Desc:'Registro ciudadano UE',ex00Desc:'Larga duración',ex02Desc:'Reagrupación familiar',
  ex01Desc:'Residencia no lucrativa',ex03Desc:'Residencia y trabajo cuenta ajena',ex04Desc:'Residencia para prácticas',ex06Desc:'Residencia y trabajo temporada',ex07Desc:'Residencia y trabajo cuenta propia',ex09Desc:'Residencia con exención trabajo',ex11Desc:'Larga duración-UE',ex13Desc:'Autorización de regreso',ex16Desc:'Cédula de inscripción',ex19Desc:'Tarjeta familiar ciudadano UE',ex20Desc:'Residencia ciudadanos Reino Unido - Acuerdo Retirada',ex21Desc:'Residencia familiares ciudadanos Reino Unido',ex22Desc:'Trabajador fronterizo Reino Unido',ex23Desc:'Tarjeta Acuerdo Retirada',ex24Desc:'Residencia familiares de españoles',ex25Desc:'Residencia y desplazamiento menores',ex26Desc:'Modificación residencia o estancia',ex28Desc:'Solicitud aplicación DT 2ª',ex29Desc:'Prórroga estancia corta duración',ex31Desc:'Arraigo protección internacional DA20',ex32Desc:'Arraigo excepcional DA21',
  tasa012Desc:'Tasa policía - Huellas, TIE y certificados',tasa052Desc:'Tasa extranjería - Residencia y autorizaciones',
  citaDesc:'Cita previa extranjería',padronDesc:'Empadronamiento municipal',vidaDesc:'Informe de vida laboral',claveDesc:'Acceso a servicios electrónicos',
  immCard1Title:'Arraigo',immCard1Desc:'Tipos de arraigo y requisitos de cada vía según normativa vigente.',
  immCard2Title:'Modelos EX oficiales',immCard2Desc:'Todos los formularios con enlaces PDF directos del Ministerio.',
  immCard3Title:'Cita previa',immCard3Desc:'Acceso al servicio oficial de cita previa.',
  immCard4Title:'TIE y huellas',immCard4Desc:'Información y trámites de la tarjeta de identidad de extranjero.',
  arraigoNotice:'Todos los tipos de arraigo usan el modelo',arraigoNoticeEnd:'en los casos que determina el Ministerio.',
  socDesc:'Residencia por integración social y vínculos familiares.',socoDesc:'Residencia vinculada a contratos de trabajo.',formDesc:'Vía vinculada a formación e integración.',famDesc:'Supuestos familiares específicos previstos legalmente.',
  colRed:'Rojo',colBlue:'Azul',colGreen:'Verde',colYellow:'Amarillo',colViolet:'Violeta',colPink:'Rosa',colOrange:'Naranja',colGray:'Gris',colLightBlue:'Azul claro',
  servPadron:'Empadronamiento y residencia',servVida:'Vida laboral y empleo',servClave:'Acceso seguro a servicios electrónicos',servSepe:'Empleo y prestaciones',servHacienda:'Impuestos y Agencia Tributaria',servDgt:'Permisos de conducir y vehículos',servSalud:'Sanidad y salud',servEduc:'Educación y homologación de títulos',servIne:'Estadísticas y padrón',servFnmt:'Certificado digital y firma electrónica',
  trackTitle:'Estado de Trámites',trackDesc:'Consulta el estado de tu expediente de extranjería - sede oficial',wdMon:'Lun',wdTue:'Mar',wdWed:'Mié',wdThu:'Jue',wdFri:'Vie',wdSat:'Sáb',wdSun:'Dom',toastCopySuccess:'¡Enlace copiado! ✅',toastCopied:'¡Copiado! ✅',searchNoResult:'No se encontraron resultados'
},
fr:{
  home:'Accueil',immigration:'Immigration et résidence',arraigo:'Arraigo',forms:'Formulaires EX',fees:'Taxes',services:'Services',official:'Sites officiels',calendario:'Calendrier',
  subtitle:'Votre guide des démarches et services officiels en Espagne',language:'Langue',searchBtn:'Rechercher',popular:'Les plus utilisés',
  popularLead:'Choisissez une démarche, consultez les documents et accédez à la source officielle.',
  immigrationTitle:'Immigration et résidence',immigrationLead:'Toutes les démarches officielles de résidence et immigration en Espagne.',
  arraigoTitle:'Arraigo',arraigoLead:'Informations basées sur les pages officielles du Ministère de l’Inclusion. Les conditions varient selon votre situation.',
  formsTitle:'Tous les formulaires EX officiels',formsLead:'Les formulaires les plus utilisés avec liens PDF directs et officiels :',moreFormsBtn:'Afficher plus de formulaires EX ⬇️',hideFormsBtn:'Masquer les formulaires supplémentaires ⬆️',
  feesTitle:'Taxes',feesLead:'Taxes d’étrangers et de police - choisissez la bonne rubrique avant de payer.',servicesTitle:'Services importants',servicesLead:'Accès directs aux services électroniques les plus utilisés.',
  officialTitle:'Sites officiels importants',calendarioTitle:'Calendrier - Jours fériés',calendarioLead:'Petit calendrier en haut à gauche - numéros rouges sont fériés - administrations fermées.',
  howTitle:'Comment utiliser le site ?',faqTitle:'Questions fréquentes',searchPlaceholder:'Rechercher : EX-10, TIE, arraigo, Padrón...',
  footerLegalTitle:'Avis juridique important :',footerLegalExact:'دليل معلوماتي خاص للإجراءات في إسبانيا ولا يمثل أي جهة حكومية رسمية أو إدارة عمومية',
  footerLegalExtra:'Ce site est un projet privé indépendant, il ne se substitue à aucun ministère ni administration et n’utilise pas de logos ou marques officiels. Tous les liens mènent directement aux sites gouvernementaux officiels. Nous ne fournissons pas de conseil juridique et les informations peuvent changer, vous devez toujours vérifier la source officielle. TramiteClaro n’a aucun lien avec des opérateurs télécoms nommés Claro.',
  footerText:'Ce site est un guide informatif pour accéder aux procédures et sources officielles.',footerNote:'Les informations peuvent changer; consultez toujours la source officielle.',footerSource:'Source officielle :',lastUpdate:'Dernière mise à jour',footerRights:'Tous droits réservés',
  calNoticeTitle:'Note :',calNotice:'Les administrations peuvent être fermées les jours fériés. Consultez toujours le calendrier officiel.',
  directPdfText:'Télécharger PDF direct ←',copyLinkText:'📋 Copier le lien',officialSource:'Source officielle ←',openSite:'Ouvrir le site ←',details:'Détails ←',copyName:'📋 Copier le nom',openTasa:'Ouvrir taxe ←',
  feeWarning:'Avant de payer, sélectionnez la démarche et l’épigraphe corrects sur le site officiel.',officialText:'Utilisez toujours la source officielle avant de soumettre des demandes ou payer des taxes.',
  calInfoDefault:'Cliquez sur un numéro rouge pour voir le jour férié - Administrations fermées 🚫',legendClosed:'Férié - fermé',legendToday:'Aujourd’hui',legendWeekend:'Week-end',
  thNum:'#',thColor:'Couleur',thHoliday:'Fête',thDate:'Date',thStatus:'État',closedStatus:'Fermé 🚫',
  how1Title:'1. Choisissez la démarche',how1Desc:'Trouvez le service ou le formulaire dont vous avez besoin.',
  how2Title:'2. Consultez les prérequis',how2Desc:'Vérifiez la documentation et les étapes de votre cas.',
  how3Title:'3. Accédez à la source officielle',how3Desc:'Utilisez le lien officiel pour télécharger le formulaire ou lancer la démarche.',
  how4Title:'4. Finalisez la démarche',how4Desc:'Soumettez la demande ou prenez rendez-vous auprès de l’organisme officiel.',
  faq1Title:'TramiteClaro est-il un site gouvernemental ?',faq1Desc:'Non. C’est un guide informatif privé indépendant qui ne représente aucune administration.',
  faq2Title:'Où trouver les formulaires officiels ?',faq2Desc:'Dans la section « Formulaires EX », avec des liens directs vers le site officiel du Ministère.',
  faq3Title:'Les conditions d’arraigo sont-elles les mêmes pour tous ?',faq3Desc:'Non. Elles dépendent de votre situation personnelle et du type d’arraigo.',
  ex10Desc:'Résidence pour circonstances exceptionnelles (Arraigo)',ex17Desc:'Carte d’identité étranger TIE - Empreintes',ex15Desc:'NIE et certificats',ex18Desc:'Enregistrement citoyen UE',ex00Desc:'Longue durée',ex02Desc:'Regroupement familial',
  ex01Desc:'Résidence non lucrative',ex03Desc:'Résidence et travail salarié',ex04Desc:'Résidence pour stage',ex06Desc:'Résidence et travail saisonnier',ex07Desc:'Résidence et travail indépendant',ex09Desc:'Résidence avec exemption travail',ex11Desc:'Longue durée-UE',ex13Desc:'Autorisation de retour',ex16Desc:'Cédula d’inscription',ex19Desc:'Carte membre famille citoyen UE',ex20Desc:'Résidence citoyens Royaume-Uni',ex21Desc:'Résidence familles citoyens Royaume-Uni',ex22Desc:'Travailleur frontalier Royaume-Uni',ex23Desc:'Carte Accord Retrait',ex24Desc:'Résidence familles Espagnols',ex25Desc:'Résidence et déplacement mineurs',ex26Desc:'Modification résidence',ex28Desc:'Application DT 2ª',ex29Desc:'Prorogation séjour courte durée',ex31Desc:'Arraigo protection internationale DA20',ex32Desc:'Arraigo exceptionnel DA21',
  tasa012Desc:'Taxe police - Empreintes, TIE',tasa052Desc:'Taxe étrangers - Résidence et autorisations',
  citaDesc:'Rendez-vous étrangers',padronDesc:'Enregistrement municipal',vidaDesc:'Rapport vie professionnelle',claveDesc:'Accès services électroniques',
  immCard1Title:'Arraigo',immCard1Desc:'Types d’arraigo et conditions de chaque voie.',immCard2Title:'Formulaires EX officiels',immCard2Desc:'Tous les formulaires avec liens PDF directs du Ministère.',immCard3Title:'Rendez-vous',immCard3Desc:'Accès au service officiel de rendez-vous.',immCard4Title:'TIE et empreintes',immCard4Desc:'Informations sur la carte d’identité étranger.',
  arraigoNotice:'Tous les types d’arraigo utilisent le modèle',arraigoNoticeEnd:'dans les cas déterminés par le Ministère.',
  socDesc:'Résidence pour intégration sociale et liens familiaux.',socoDesc:'Résidence liée à des contrats de travail.',formDesc:'Voie liée à la formation et intégration.',famDesc:'Cas familiaux spécifiques prévus par la loi.',
  colRed:'Rouge',colBlue:'Bleu',colGreen:'Vert',colYellow:'Jaune',colViolet:'Violet',colPink:'Rose',colOrange:'Orange',colGray:'Gris',colLightBlue:'Bleu clair',
  servPadron:'Enregistrement municipal',servVida:'Vie professionnelle',servClave:'Accès sécurisé aux services',servSepe:'Emploi et prestations',servHacienda:'Impôts',servDgt:'Permis et véhicules',servSalud:'Santé',servEduc:'Éducation et homologation',servIne:'Statistiques',servFnmt:'Certificat numérique',
  trackTitle:'Suivi de dossier',trackDesc:'Consultez l\'état de votre dossier d\'étrangers - site officiel',wdMon:'Lun',wdTue:'Mar',wdWed:'Mer',wdThu:'Jeu',wdFri:'Ven',wdSat:'Sam',wdSun:'Dim',toastCopySuccess:'Lien copié ! ✅',toastCopied:'Copié ! ✅',searchNoResult:'Aucun résultat trouvé'
},
en:{
  home:'Home',immigration:'Immigration & residence',arraigo:'Arraigo',forms:'EX forms',fees:'Fees',services:'Services',official:'Official sites',calendario:'Calendar',
  subtitle:'Your guide to official procedures and services in Spain',language:'Language',searchBtn:'Search',popular:'Most used',
  popularLead:'Choose a procedure, check documents and access the official source.',
  immigrationTitle:'Immigration & residence',immigrationLead:'All official residence and immigration procedures in Spain.',
  arraigoTitle:'Arraigo',arraigoLead:'Information based on official Ministry of Inclusion pages. Conditions vary by personal situation.',
  formsTitle:'All official EX forms',formsLead:'Most used forms with direct official PDF links:',moreFormsBtn:'Show more EX forms ⬇️',hideFormsBtn:'Hide additional forms ⬆️',
  feesTitle:'Fees',feesLead:'Foreigners and police fees - you must select the correct item before paying.',servicesTitle:'Important services',servicesLead:'Direct links to the most used e-services.',
  officialTitle:'Important official sites',calendarioTitle:'Calendar - Official holidays',calendarioLead:'Small calendar top left - red numbers are official holidays - administrations closed.',
  howTitle:'How to use the site?',faqTitle:'FAQ',searchPlaceholder:'Search: EX-10, TIE, arraigo, Padrón...',
  footerLegalTitle:'Important legal notice:',footerLegalExact:'دليل معلوماتي خاص للإجراءات في إسبانيا ولا يمثل أي جهة حكومية رسمية أو إدارة عمومية',
  footerLegalExtra:'This site is an independent private project, it does not impersonate any ministry or administration and does not use official logos or trademarks. All links go directly to official government websites. We do not provide legal advice and information may change, so you must always verify the official source before any procedure. TramiteClaro is not related to telecom companies named Claro.',
  footerText:'This website is an information guide to help users access official procedures and sources.',footerNote:'Information may change; always check official source before submitting.',footerSource:'Official source:',lastUpdate:'Last update',footerRights:'All rights reserved',
  calNoticeTitle:'Note:',calNotice:'Administrations may be closed on official holidays. Always check applicable official calendar.',
  directPdfText:'Direct PDF download ←',copyLinkText:'📋 Copy link',officialSource:'Official source ←',openSite:'Open site ←',details:'Details ←',copyName:'📋 Copy name',openTasa:'Open fee ←',
  feeWarning:'Before payment, select the correct procedure and item on the official site.',officialText:'Always use the official source before submitting applications or paying fees.',
  calInfoDefault:'Click a red number to view holiday - Administrations closed 🚫',legendClosed:'Holiday - closed',legendToday:'Today',legendWeekend:'Weekend',
  thNum:'#',thColor:'Color',thHoliday:'Holiday',thDate:'Date',thStatus:'Status',closedStatus:'Closed 🚫',
  how1Title:'1. Choose procedure',how1Desc:'Find the service or form you need.',
  how2Title:'2. Check requirements',how2Desc:'Review documentation and steps for your case.',
  how3Title:'3. Access official source',how3Desc:'Use the official link to download the form or start the procedure.',
  how4Title:'4. Complete procedure',how4Desc:'Submit application or book appointment with official body.',
  faq1Title:'Is TramiteClaro a government website?',faq1Desc:'No. It is an independent private information guide that does not represent any public entity nor provides legal advice.',
  faq2Title:'Where can I find official forms?',faq2Desc:'In the "EX forms" section, with direct links to the official Ministry website.',
  faq3Title:'Are arraigo conditions the same for everyone?',faq3Desc:'No. They depend on your personal situation and the type of arraigo.',
  ex10Desc:'Residence due to exceptional circumstances (Arraigo)',ex17Desc:'Foreign identity card TIE - Fingerprints',ex15Desc:'NIE and certificates',ex18Desc:'EU citizen registration',ex00Desc:'Long-term residence',ex02Desc:'Family reunification',
  ex01Desc:'Non-lucrative temporary residence',ex03Desc:'Residence and work for others',ex04Desc:'Residence for training',ex06Desc:'Residence and work seasonal',ex07Desc:'Residence and self-employment',ex09Desc:'Residence with work permit exemption',ex11Desc:'Long-term EU residence',ex13Desc:'Return authorization',ex16Desc:'Registration certificate',ex19Desc:'Residence card family member EU citizen',ex20Desc:'Residence UK citizens - Withdrawal Agreement',ex21Desc:'Residence family members UK citizens',ex22Desc:'UK frontier worker permit',ex23Desc:'Withdrawal Agreement card',ex24Desc:'Residence family members of Spaniards',ex25Desc:'Residence and movement of foreign minors',ex26Desc:'Modification of residence or stay',ex28Desc:'Application of transitional provision DT 2ª',ex29Desc:'Extension of short stay',ex31Desc:'Arraigo for international protection DA20',ex32Desc:'Exceptional Arraigo DA21',
  tasa012Desc:'Police fee - Fingerprints, TIE and certificates',tasa052Desc:'Foreigners fee - Residence and authorizations',
  citaDesc:'Appointment for immigration offices',padronDesc:'Municipal registration',vidaDesc:'Work history report',claveDesc:'Access to e-services',
  immCard1Title:'Arraigo',immCard1Desc:'Types of arraigo and requirements for each path under current law.',
  immCard2Title:'Official EX forms',immCard2Desc:'All forms with direct PDF links from the Ministry.',
  immCard3Title:'Appointments',immCard3Desc:'Access to official appointment booking service.',
  immCard4Title:'TIE and fingerprints',immCard4Desc:'Information and procedures for foreigner identity card.',
  arraigoNotice:'All types of arraigo use form',arraigoNoticeEnd:'in cases determined by the Ministry.',
  socDesc:'Residence for social integration and family ties.',socoDesc:'Residence linked to work contracts.',formDesc:'Path linked to training and integration.',famDesc:'Specific family cases provided by law.',
  colRed:'Red',colBlue:'Blue',colGreen:'Green',colYellow:'Yellow',colViolet:'Violet',colPink:'Pink',colOrange:'Orange',colGray:'Gray',colLightBlue:'Light blue',
  servPadron:'Municipal registration and proof of residence',servVida:'Work history and employment',servClave:'Secure access to e-services',servSepe:'Employment and benefits',servHacienda:'Taxes and tax agency',servDgt:'Driving licenses and vehicles',servSalud:'Health ministry',servEduc:'Education and degree recognition',servIne:'Statistics and census',servFnmt:'Digital certificate and e-signature',
  trackTitle:'Track Application',trackDesc:'Check your immigration file status - official site',wdMon:'Mon',wdTue:'Tue',wdWed:'Wed',wdThu:'Thu',wdFri:'Fri',wdSat:'Sat',wdSun:'Sun',toastCopySuccess:'Link copied! ✅',toastCopied:'Copied! ✅',searchNoResult:'No results found'
}
};

let currentLang='ar',smallCalYear=2026,smallCalMonth=0;
const smallHolidays={
"2025":{"2025-01-01":"Año Nuevo","2025-01-06":"Epifanía","2025-04-18":"Viernes Santo","2025-05-01":"Fiesta Trabajo","2025-08-15":"Asunción","2025-11-01":"Todos los Santos","2025-12-06":"Constitución","2025-12-08":"Inmaculada","2025-12-25":"Navidad"},
"2026":{"2026-01-01":"Año Nuevo","2026-01-06":"Epifanía","2026-04-02":"Jueves Santo","2026-04-03":"Viernes Santo","2026-04-06":"Lunes de Pascua","2026-05-01":"Fiesta Trabajo","2026-08-15":"Asunción","2026-10-12":"Fiesta Nacional","2026-11-01":"Todos los Santos","2026-12-07":"Constitución","2026-12-08":"Inmaculada","2026-12-25":"Navidad"},
"2027":{"2027-01-01":"Año Nuevo","2027-01-06":"Epifanía","2027-03-26":"Viernes Santo","2027-05-01":"Fiesta Trabajo","2027-08-15":"Asunción","2027-10-12":"Fiesta Nacional","2027-11-01":"Todos los Santos","2027-12-06":"Constitución","2027-12-08":"Inmaculada","2027-12-25":"Navidad"}
};

function renderSmallCalendar(){
 const grid=document.getElementById('smallCalGrid'),title=document.getElementById('smallCalTitle');if(!grid||!title)return;
 const months={
  ar:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
  darija:["يناير","فبراير","مارس","أبريل","ماي","يونيو","يوليوز","غشت","شتنبر","أكتوبر","نونبر","دجنبر"],
  es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
  fr:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
  en:["January","February","March","April","May","June","July","August","September","October","November","December"],
  zgh:["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵟⵓⴱⵕ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ"]
 };
 title.textContent=(months[currentLang]||months.ar)[smallCalMonth]+' '+smallCalYear;
 const firstDay=new Date(smallCalYear,smallCalMonth,1),lastDay=new Date(smallCalYear,smallCalMonth+1,0),daysInMonth=lastDay.getDate();
 let startDay=(firstDay.getDay()+6)%7,prevMonthLast=new Date(smallCalYear,smallCalMonth,0).getDate(),today=new Date(),isCurrentMonth=today.getFullYear()===smallCalYear&&today.getMonth()===smallCalMonth,html='';
 for(let i=startDay-1;i>=0;i--){html+=`<div class="small-cal-day other">${prevMonthLast-i}</div>`}
 for(let d=1;d<=daysInMonth;d++){const dateStr=`${smallCalYear}-${String(smallCalMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`,holidayName=smallHolidays[smallCalYear]?.[dateStr],isWeekend=(startDay+d-1)%7>=5,isToday=isCurrentMonth&&d===today.getDate();let cls='small-cal-day';if(holidayName)cls+=' holiday';else if(isWeekend)cls+=' weekend';if(isToday)cls+=' today';html+=`<div class="${cls}" data-date="${dateStr}" data-holiday="${holidayName\vert{}\vert{}''}" onclick="smallCalClick(this)">${d}</div>`}
 const totalCells=startDay+daysInMonth,remaining=(7-totalCells%7)%7;for(let i=1;i<=remaining;i++)html+=`<div class="small-cal-day other">${i}</div>`;grid.innerHTML=html;
}

function smallCalClick(el){
 const holiday=el.dataset.holiday,date=el.dataset.date,info=document.getElementById('smallCalSelectedInfo');
 document.querySelectorAll('.small-cal-day').forEach(d=>d.classList.remove('selected'));
 el.classList.add('selected');
 const t=translations[currentLang]||translations.ar;
 const mClosed=t.closedStatus||'مغلق 🚫';
 const mOpenMap={ar:'الإدارات مفتوحة - يمكن حجز المواعيد',darija:'الإدارات مفتوحة - يمكن حجز المواعيد',zgh:'ⴰⵙⵏⵏⴰⵏ ⵉⵙⵍⵉⵏ ⵔⵥⵎⵉⵏ',es:'Administraciones abiertas - cita posible',fr:'Administrations ouvertes - rendez-vous possible',en:'Administrations open - appointment possible'};
 const mOpen=mOpenMap[currentLang]||mOpenMap.es;
 if(holiday) info.innerHTML=`<strong style="color:#dc2626">${date} - ${holiday}</strong><br>🚫 <strong>${mClosed}:</strong> Extranjería, Policía, Seguridad Social, SEPE, Hacienda, DGT`;
 else info.innerHTML=`<strong>${date}</strong><br>✅${mOpen}`;
}
function smallCalPrev(){smallCalMonth--;if(smallCalMonth<0){smallCalMonth=11;smallCalYear--;syncYear()}renderSmallCalendar()}
function smallCalNext(){smallCalMonth++;if(smallCalMonth>11){smallCalMonth=0;smallCalYear++;syncYear()}renderSmallCalendar()}
function syncYear(){const s=document.getElementById('smallCalYear');if(s)s.value=smallCalYear}
function smallCalYearChange(){smallCalYear=parseInt(document.getElementById('smallCalYear').value,10);renderSmallCalendar()}
function toggleSmallCal(){const w=document.getElementById('smallCalendarWidget'),m=document.getElementById('smallCalMinimized');if(w.style.display==='none'){w.style.display='block';m.style.display='none'}else{w.style.display='none';m.style.display='flex'}}

function renderFormsCards() {
  const t = translations[currentLang] || translations.ar;
  const pdfText = t.officialSource;
  const copyBtn = t.copyLinkText;
  document.getElementById('formsGridPrimary').innerHTML = formsPrimaryKeys.map(f =>{
    const desc=t[f[1]]||f[1];
    return `<div class="card"><div class="ico">📄</div><h3>${f[0]}</h3><p>${desc}</p><div class="card-actions"><a class="action" href="${f[2]}" target="_blank" rel="noopener">${pdfText}</a><button class="copy-btn" onclick="copyText('${f[2]}', this)">${copyBtn}</button></div></div>`;
  }).join('');
  document.getElementById('moreFormsContainer').innerHTML = formsSecondaryKeys.map(f =>{
    const desc=t[f[1]]||f[1];
    return `<div class="card"><div class="ico">📄</div><h3>${f[0]}</h3><p>${desc}</p><div class="card-actions"><a class="action" href="${f[2]}" target="_blank" rel="noopener">${pdfText}</a><button class="copy-btn" onclick="copyText('${f[2]}', this)">${copyBtn}</button></div></div>`;
  }).join('');
}

function renderFees(){
  const t=translations[currentLang]||translations.ar;
  const fees=[
    ['Tasa 790-012','tasa012Desc','https://sede.policia.gob.es/Tasa790_012/'],
    ['Tasa 790-052','tasa052Desc','https://sede.administracionespublicas.gob.es/pagina/index/directorio/tasa052']
  ];
  document.getElementById('feesGrid').innerHTML=fees.map(f=>{
    return `<div class="card"><div class="ico">💶</div><h3>${f[0]}</h3><p>${t[f[1]]||f[1]}</p><div class="card-actions"><a class="action" href="${f[2]}" target="_blank" rel="noopener">${t.openTasa}</a><button class="copy-btn" onclick="copyText('${f[2]}', this)">${t.copyLinkText}</button></div></div>`;
  }).join('');
}

function renderServices(){
  const t=translations[currentLang]||translations.ar;
  const services=[
    ['Padrón','servPadron','https://www.ine.es/','🏠'],
    ['Seguridad Social','servVida','https://portal.seg-social.gob.es/','💼'],
    ['Cl@ve','servClave','https://administracion.gob.es/pagFront/clave.htm','🔐'],
    ['SEPE','servSepe','https://www.sepe.es/','👔'],
    ['Hacienda','servHacienda','https://sede.agenciatributaria.gob.es/','💰'],
    ['DGT','servDgt','https://sede.dgt.gob.es/','🚗'],
    ['Sanidad','servSalud','https://www.sanidad.gob.es/','🏥'],
    ['Educación','servEduc','https://www.educacionfpydeportes.gob.es/','🎓'],
    ['INE','servIne','https://www.ine.es/','📊'],
    ['FNMT','servFnmt','https://www.sede.fnmt.gob.es/','🔏']
  ];
  document.getElementById('servicesGrid').innerHTML=services.map(s=>{
    return `<div class="card"><div class="ico">${s[3]}</div><h3>${s[0]}</h3><p>${t[s[1]]||s[1]}</p><div class="card-actions"><a class="action" href="${s[2]}" target="_blank" rel="noopener">${t.openSite}</a><button class="copy-btn" onclick="copyText('${s[2]}', this)">${t.copyLinkText}</button></div></div>`;
  }).join('');
}

function renderHolidays(){
  const t=translations[currentLang]||translations.ar;
  const year=smallCalYear;
  const holidays=smallHolidays[year]||smallHolidays[2026];
  const colors=['colRed','colBlue','colGreen','colYellow','colViolet','colPink','colOrange','colGray','colLightBlue','colRed'];
  let i=0;
  let html='';
  for(const [date,name] of Object.entries(holidays)){
    i++;
    const colorKey=colors[(i-1)%colors.length];
    html+=`<tr><td>${i}</td><td data-key="${colorKey}">${t[colorKey]||t.colRed}</td><td><strong>${name}</strong></td><td>${date}</td><td data-key="closedStatus">${t.closedStatus}</td></tr>`;
  }
  document.getElementById('holidayTableBody').innerHTML=html;
}

function toggleMoreForms() {
  const container = document.getElementById('moreFormsContainer');
  const btnText = document.getElementById('moreFormsBtnText');
  const t = translations[currentLang] || translations.ar;
  if (container.classList.contains('show')) {
    container.classList.remove('show');
    btnText.textContent = t.moreFormsBtn;
  } else {
    container.classList.add('show');
    btnText.textContent = t.hideFormsBtn;
  }
}

function copyText(text, btnElement) {
  const t = translations[currentLang] || translations.ar;
  const successMsg = t.toastCopySuccess || 'تم نسخ الرابط بنجاح! ✅';
  const copiedLabel = t.toastCopied || 'تم النسخ! ✅';
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
      if(btnElement){const orig=btnElement.innerHTML;btnElement.innerHTML=copiedLabel;setTimeout(()=>btnElement.innerHTML=orig,2000);}
    }).catch(()=>fallbackCopy(text,successMsg,btnElement,copiedLabel));
  }else{fallbackCopy(text,successMsg,btnElement,copiedLabel);}
}
function fallbackCopy(text,msg,btn,copiedLabel){
  const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();
  try{document.execCommand('copy');showToast(msg);if(btn){const orig=btn.innerHTML;btn.innerHTML=copiedLabel;setTimeout(()=>btn.innerHTML=orig,2000);}}catch(e){showToast('Error');}
  document.body.removeChild(ta);
}
function showToast(msg) {
  const tEl=document.getElementById('toast');const txt=document.getElementById('toastText');
  txt.innerText=msg;tEl.style.display='flex';clearTimeout(tEl._hide);tEl._hide=setTimeout(()=>tEl.style.display='none',3000);
}
function toggleCollapse(el){el.classList.toggle('open')}

function searchSite(){
 const q=document.getElementById('q').value.trim().toLowerCase(),box=document.getElementById('results');
 const t=translations[currentLang]||translations.ar;
 if(!q){box.style.display='none';box.innerHTML='';return}
 const terms=[
  ['EX-10','https://extranjeros.inclusion.gob.es/es/ModelosSolicitudes/Mod_solicitudes2/index.html','EX-10'],
  ['EX-17','https://sede.administracionespublicas.gob.es/procedimientos/index/categoria/34','EX-17 TIE'],
  ['EX-15','https://extranjeros.inclusion.gob.es/es/ModelosSolicitudes/Mod_solicitudes2/index.html','EX-15 NIE'],
  ['EX-18','https://extranjeros.inclusion.gob.es/es/ModelosSolicitudes/Mod_solicitudes2/index.html','EX-18 UE'],
  ['arraigo','arraigo',t.arraigo],['tتبع','https://infoext2.delegaciondelgobierno.gob.es/infoext2/',t.trackTitle],['seguimiento','https://infoext2.delegaciondelgobierno.gob.es/infoext2/','Estado de Trámites'],['track','https://infoext2.delegaciondelgobierno.gob.es/infoext2/','Track Application'],['padrón','services','Padrón'],['vida laboral','services','Vida Laboral'],['clave','services','Cl@ve'],['sepe','services','SEPE'],['dgt','services','DGT'],['hacienda','services','Hacienda'],['tasa 012','https://sede.policia.gob.es/Tasa790_012/','Tasa 012'],['tasa 052','https://sede.administracionespublicas.gob.es/pagina/index/directorio/tasa052','Tasa 052'],['calendario','calendario',t.calendario],['الأرايغو','arraigo','الأرايغو'],['tie','https://www.inclusion.gob.es/documents/410169/2156469/17-Formulario_TIE.pdf','TIE']
 ];
 const found=terms.filter(x=>x[0].includes(q)||q.includes(x[0])).slice(0,7);
 if(found.length){
  box.innerHTML=found.map(x=>{
    if(x[1].startsWith('http')){return `<a class="result" href="${x[1]}" target="_blank" rel="noopener"><b>${x[0]}</b><br><span class="small">${x[2]}</span></a>`;}
    else{return `<a class="result" href="#${x[1]}" onclick="closeSearchAfterClick()"><b>${x[0]}</b><br><span class="small">${x[2]}</span></a>`;}
  }).join('');
 }else{box.innerHTML=`<div class="result">${t.searchNoResult}</div>`;}
 box.style.display='block'
}
function closeSearchAfterClick(){setTimeout(()=>{document.getElementById('results').style.display='none'},120)}

function applyLanguage(lang){
 if(!translations[lang]) lang='ar';
 currentLang=lang;
 const t=translations[lang]||translations.ar;
 document.documentElement.lang = lang==='darija' ? 'ar' : lang;
 document.documentElement.dir = ['ar','darija','zgh'].includes(lang) ? 'rtl' : 'ltr';
 document.querySelectorAll('[data-key]').forEach(el=>{
   const k=el.dataset.key;
   if(t[k]!=null){el.textContent=t[k];}
 });
 document.querySelectorAll('[data-key-placeholder]').forEach(el=>{
   const k=el.dataset.keyPlaceholder;
   if(t[k]!=null) el.placeholder=t[k];
 });
 renderFormsCards();
 renderFees();
 renderServices();
 renderSmallCalendar();
 renderHolidays();
 try{localStorage.setItem('tramiteclaro_lang',lang);}catch(e){}
 const sel=document.getElementById('languageSelect'); if(sel) sel.value=lang;
}

const OFFICIAL_EX_INDEX = "https://extranjeros.inclusion.gob.es/es/ModelosSolicitudes/Mod_solicitudes2/index.html";
function ensureNo404(url){
  if(url.includes('/documents/') && url.endsWith('.pdf')) return OFFICIAL_EX_INDEX;
  if(url.includes('sede.policia.gob.es/portalCiudadano/sede_electronica/extranjeria/EX') && url.endsWith('.pdf')) return OFFICIAL_EX_INDEX;
  return url;
}
const originalOpen = window.open;
window.open = function(url, target, features){
  if(url && url.includes('Formulario') || url.includes('EX-') || url.includes('inclusion.gob.es/documents')){
    url = ensureNo404(url);
  }
  return originalOpen.call(window, url, target, features);
};

const langSelect=document.getElementById('languageSelect');
let savedLang='ar';
try{savedLang=localStorage.getItem('tramiteclaro_lang')||'ar';}catch(e){}
if(!translations[savedLang]) savedLang='ar';
langSelect.value=savedLang;
langSelect.addEventListener('change',function(){applyLanguage(this.value);});
applyLanguage(savedLang);

setTimeout(()=>{
 const now=new Date();
 smallCalYear=now.getFullYear();
 smallCalMonth=now.getMonth();
 syncYear();
 renderSmallCalendar();
 renderHolidays();
},150);