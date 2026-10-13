/**
 * Visual Funnel Maps Library — Data System
 * Author: محمد عادل
 */

export interface FunnelNode {
  id: string;
  labelAr: string;
  labelEn: string;
  type: 'traffic' | 'page' | 'action' | 'offer' | 'email' | 'conversion' | 'upsell' | 'calendar' | 'whatsapp' | 'content' | 'video' | 'review' | 'quiz';
  isPrimaryConversion?: boolean;
  stepNumber?: number;
  subtextAr?: string;
  badge?: string;
}

export interface FunnelMap {
  id: number;
  number: string; // "MAP 01"
  pageNumber: number; // 5 to 29
  englishName: string;
  arabicName: string;
  subtitle: string;
  categoryId: number;
  categoryNameAr: string;
  categoryNameEn: string;
  goal: string;
  bestFor: string;
  traffic: string;
  complexity: 'منخفض' | 'متوسط' | 'مرتفع' | 'منخفض إلى متوسط' | 'متوسط إلى مرتفع';
  launchSpeed: string;
  primaryConversion: string;
  flowNodes: FunnelNode[];
  whyItWorks: string;
  commonMistake: string;
  implementationNote: string;
  branches?: {
    condition: string;
    nodes: FunnelNode[];
  }[];
}

export interface CategoryInfo {
  id: number;
  nameEn: string;
  nameAr: string;
  descriptionAr: string;
  mapsCount: number;
  mapIds: number[];
  icon: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 1,
    nameEn: "Lead Generation",
    nameAr: "توليد العملاء المحتملين",
    descriptionAr: "بناء قوائم بريدية قوية وجمع بيانات عملاء مستهدفين بتكلفة منخفضة ومعدل تحويل مرتفع.",
    mapsCount: 5,
    mapIds: [1, 2, 16, 21, 25],
    icon: "Users"
  },
  {
    id: 2,
    nameEn: "Services & High Ticket",
    nameAr: "الخدمات والصفقات الكبيرة",
    descriptionAr: "فلترة وتأهيل العملاء لبيع استشارات، وكالات، وحلول عالية القيمة عبر محادثات أو مكالمات مخصصة.",
    mapsCount: 5,
    mapIds: [4, 5, 6, 18, 22],
    icon: "Briefcase"
  },
  {
    id: 3,
    nameEn: "Courses & Digital Products",
    nameAr: "الكورسات والمنتجات الرقمية",
    descriptionAr: "تحويل الانتباه إلى مبيعات منتجات رقمية، عضويات، وورش عمل تعليمية آلية أو حية.",
    mapsCount: 5,
    mapIds: [3, 9, 10, 11, 12],
    icon: "GraduationCap"
  },
  {
    id: 4,
    nameEn: "Affiliate Marketing",
    nameAr: "التسويق بالعمولة",
    descriptionAr: "بناء ثقة وسياق تحويلي لترشيح منتجات الشركات الأخرى وتحقيق أعلى نسبة عمولة ممكنة.",
    mapsCount: 3,
    mapIds: [13, 14, 15],
    icon: "Share2"
  },
  {
    id: 5,
    nameEn: "Webinars & Education",
    nameAr: "الويبينارات والتعليم التفاعلي",
    descriptionAr: "العروض التقديمية الطويلة التي تبني قناعة عميقة وتزيل كافة الاعتراضات قبل طرح العرض.",
    mapsCount: 3,
    mapIds: [7, 8, 17],
    icon: "Video"
  },
  {
    id: 6,
    nameEn: "Content Funnels",
    nameAr: "أنظمة تحويل المحتوى",
    descriptionAr: "تحويل مشاهدي وقراء شبكات التواصل إلى جمهور مملوك في نشرتك وقوائمك دون خسارة المتابعين.",
    mapsCount: 2,
    mapIds: [23, 25],
    icon: "Layers"
  },
  {
    id: 7,
    nameEn: "E-commerce",
    nameAr: "المتاجر والتجارة الإلكترونية",
    descriptionAr: "مضاعفة متوسط قيمة الطلب (AOV) وعائد الإعلانات عبر عروض ما بعد الشراء والـ Bumps.",
    mapsCount: 2,
    mapIds: [3, 20],
    icon: "ShoppingBag"
  },
  {
    id: 8,
    nameEn: "Launch & Nurture",
    nameAr: "الإطلاق والرعاية المستمرة",
    descriptionAr: "صناعة الترقب والحماس لفتح باب البيع لفترة محددة ثم إغلاقه لتحقيق قفزات سيولة ضخمة.",
    mapsCount: 3,
    mapIds: [12, 19, 24],
    icon: "Rocket"
  }
];

export const FUNNEL_MAPS: FunnelMap[] = [
  {
    id: 1,
    number: "MAP 01",
    pageNumber: 5,
    englishName: "Lead Magnet Funnel",
    arabicName: "Funnel الهدية المجانية",
    subtitle: "أبسط وأسرع مسار لبناء جمهور مستهدف واستبدال القيمة الأولية ببيانات تواصل مباشرة.",
    categoryId: 1,
    categoryNameAr: "توليد العملاء المحتملين",
    categoryNameEn: "Lead Generation",
    goal: "تحويل الزائر إلى Lead يمكن التواصل معه لاحقاً وبناء علاقة ثقة تسبق عملية البيع.",
    bestFor: "صناع المحتوى، أصحاب الكورسات، المدربين، الاستشاريين، والمسوقين بالعمولة.",
    traffic: "Instagram / YouTube / Blog / SEO / Pinterest / Paid Ads",
    complexity: "منخفض",
    launchSpeed: "سريع (1 - 2 يوم)",
    primaryConversion: "OPT-IN (إدخال البريد الإلكتروني)",
    flowNodes: [
      { id: "1-1", labelEn: "TRAFFIC", labelAr: "مصادر الزيارات", type: "traffic", subtextAr: "محتوى مجاني أو إعلانات ممولة" },
      { id: "1-2", labelEn: "LANDING PAGE", labelAr: "صفحة الهبوط", type: "page", subtextAr: "عنوان جذاب يوضح الفائدة الفورية" },
      { id: "1-3", labelEn: "OPT-IN FORM", labelAr: "نموذج التسجيل", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأولى — إدخال الإيميل" },
      { id: "1-4", labelEn: "LEAD MAGNET", labelAr: "الهدية المجانية", type: "action", subtextAr: "PDF / Template / Checklist جاهزة" },
      { id: "1-5", labelEn: "THANK YOU PAGE", labelAr: "صفحة الشكر", type: "page", subtextAr: "تأكيد الإرسال وتقديم خطوة قادمة" },
      { id: "1-6", labelEn: "EMAIL NURTURE", labelAr: "سلسلة الرعاية البريدية", type: "email", subtextAr: "3-5 رسائل لتقديم قيمة وبناء ثقة" },
      { id: "1-7", labelEn: "CORE OFFER", labelAr: "العرض الرئيسي", type: "offer", subtextAr: "المنتج أو الخدمة المدفوعة" }
    ],
    whyItWorks: "يبدأ بتبادل قيمة منخفض المقاومة النفسية، حيث لا يدفع الزائر أموالاً بل يحصل على حل سريع لمشكلة ملحة في مقابل وسيلة تواصل.",
    commonMistake: "تقديم هدية مجانية عامة غير مرتبطة إطلاقاً بالمنتج المدفوع، مما يجذب جمهوراً من الفضوليين غير المهتمين بالشراء.",
    implementationNote: "اجعل الهدية تحل مشكلة صغيرة تقود طبيعيًا وفوريًا إلى المشكلة الأكبر التي يحلها عرضك المدفوع."
  },
  {
    id: 2,
    number: "MAP 02",
    pageNumber: 6,
    englishName: "Email Capture Funnel",
    arabicName: "Funnel جمع الإيميلات",
    subtitle: "نظام مباشر لتأمين أصولك الرقمية وتحويل المتابعين المتطايرين على السوشيال ميديا إلى قائمة بريدية مملوكة.",
    categoryId: 1,
    categoryNameAr: "توليد العملاء المحتملين",
    categoryNameEn: "Lead Generation",
    goal: "بناء جمهور بريدي مملوك (Owned Audience) تحميك من خوارزميات المنصات وتضمن لك التواصل المباشر.",
    bestFor: "كتاب المحتوى، أصحاب النشرات البريدية، والمشاريع الراغبة في تأسيس قناة تواصل مباشرة ودائمة.",
    traffic: "Social Bios / Threads / X (Twitter) / YouTube Cards / Blog Headers",
    complexity: "منخفض",
    launchSpeed: "سريع (يوم واحد)",
    primaryConversion: "FORM SUBMISSION (إرسال النموذج)",
    flowNodes: [
      { id: "2-1", labelEn: "CONTENT / TRAFFIC", labelAr: "المحتوى والزيارات", type: "traffic", subtextAr: "بوستات قيّمة ومقتطفات مركزة" },
      { id: "2-2", labelEn: "EMAIL CAPTURE PAGE", labelAr: "صفحة جمع الإيميل", type: "page", subtextAr: "صفحة مبسطة للغاية بدون مشتتات" },
      { id: "2-3", labelEn: "FORM SUBMISSION", labelAr: "إرسال البيانات", type: "conversion", isPrimaryConversion: true, subtextAr: "الضغط على زر الانضمام وتأكيد الرغبة" },
      { id: "2-4", labelEn: "WELCOME EMAIL", labelAr: "إيميل الترحيب الفوري", type: "email", subtextAr: "تحديد التوقعات وموعد النشر" },
      { id: "2-5", labelEn: "VALUE EMAILS", labelAr: "إيميلات القيمة الدورية", type: "email", subtextAr: "أفكار حصرية غير منشورة علناً" },
      { id: "2-6", labelEn: "OFFER EMAIL", labelAr: "إيميل العرض المناسب", type: "offer", subtextAr: "طرح المنتج بعد ترسيخ المصداقية" },
      { id: "2-7", labelEn: "SALE", labelAr: "إتمام البيع", type: "action", subtextAr: "تحويل المشترك إلى عميل يدفع" }
    ],
    whyItWorks: "التركيز على رسالة واحدة فقط: 'انضم لتحصل على أفضل أفكاري'؛ لا توجد روابط مشتتة أو عروض جانبية تنافس نموذج الإدخال.",
    commonMistake: "جمع الإيميلات وإهمال مراسلتها لأسابيع؛ فالقائمة 'تبرد' سريعاً وينسى المشترك سبب تسجيله فيلغي الاشتراك.",
    implementationNote: "أرسل إيميل الترحيب خلال 60 ثانية من التسجيل، واسأل المشترك سؤالاً بسيطاً يدفعه للرد لتفعيل مؤشرات وصول صندوق البريد (Inbox Deliverability)."
  },
  {
    id: 3,
    number: "MAP 03",
    pageNumber: 7,
    englishName: "Tripwire Funnel",
    arabicName: "Funnel العرض منخفض السعر",
    subtitle: "تحويل الزائر إلى مشترٍ يدفع فوراً لتغطية تكاليف الإعلانات وتحقيق الربح من المنتجات اللاحقة.",
    categoryId: 3,
    categoryNameAr: "الكورسات والمنتجات الرقمية",
    categoryNameEn: "Courses & Digital Products",
    goal: "تغطية تكلفة الإعلانات فورياً (Self-Liquidating Offer) وتحويل الباحثين عن المجانيات إلى عملاء مشتريين.",
    bestFor: "أصحاب المنتجات الرقمية، المتاجر الإلكترونية، وأي مشروع يعتمد على الإعلانات الممولة للنمو السريع.",
    traffic: "Facebook / Instagram Ads / TikTok Ads / High-Intent Search",
    complexity: "متوسط",
    launchSpeed: "متوسط (4 - 7 أيام)",
    primaryConversion: "FIRST PURCHASE (أول عملية شراء $7-$27)",
    flowNodes: [
      { id: "3-1", labelEn: "TRAFFIC", labelAr: "ترافيك مدفوع / مستهدف", type: "traffic", subtextAr: "إعلانات موجهة لحل أزمة ملحة" },
      { id: "3-2", labelEn: "LEAD MAGNET", labelAr: "طلب الهدية المجانية", type: "action", subtextAr: "الخطوة الأولى لجمع البريد" },
      { id: "3-3", labelEn: "THANK YOU PAGE", labelAr: "صفحة الشكر الانتقالية", type: "page", subtextAr: "عرض غير متوقع لا يمكن رفضه" },
      { id: "3-4", labelEn: "LOW-TICKET OFFER", labelAr: "عرض رمزي لا يُقاوم", type: "offer", subtextAr: "منتج قيمته $100 بسعر $9-$27" },
      { id: "3-5", labelEn: "CHECKOUT", labelAr: "صفحة الدفع السريع", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأساسية الأولى" },
      { id: "3-6", labelEn: "ORDER BUMP", labelAr: "إضافة فورية بضغطة زر", type: "upsell", subtextAr: "Check-box إضافي بسعر رمزي" },
      { id: "3-7", labelEn: "UPSELL", labelAr: "عرض ترقية مباشر (OTO)", type: "upsell", subtextAr: "One-Time Offer قبل الخروج" },
      { id: "3-8", labelEn: "CORE OFFER", labelAr: "العرض الأساسي المتكامل", type: "offer", subtextAr: "البرنامج الأكبر عبر الإيميلات" }
    ],
    whyItWorks: "الحاجز النفسي للشراء الأول هو الأصعب؛ بمجرد أن يخرج العميل بطاقته ويدفع $10، تزداد احتمالية شرائه منتجك بـ $200 أضعافاً مضاعفة.",
    commonMistake: "تسعير الـ Tripwire بسعر مرتفع يثير التردد، أو تقديم منتج ناقص يسبب خيبة أمل بدلاً من الإبهار.",
    implementationNote: "العرض يجب أن يكون 'لا يُفكر فيه مرتين' (No-brainer) وله قيمة محسوسة تبرر سعره المنخفض جداً كفرصة حصرية لمرة واحدة."
  },
  {
    id: 4,
    number: "MAP 04",
    pageNumber: 8,
    englishName: "Service Inquiry Funnel",
    arabicName: "Funnel طلب الخدمة",
    subtitle: "المسار الاحترافي للوكالات والشركات الخدمية لعرض حلولهم وفتح محادثات مبيعات عالية الإغلاق.",
    categoryId: 2,
    categoryNameAr: "الخدمات والصفقات الكبيرة",
    categoryNameEn: "Services & High Ticket",
    goal: "توليد استفسارات جادة لطلب خدمات محددة وفتح محادثة بيع مؤهلة عبر الاستمارة أو الواتساب.",
    bestFor: "مقدمي الخدمات، الوكالات التسويقية، المصممين، المطورين، والمكاتب الاستشارية.",
    traffic: "LinkedIn / Google Search / Portfolio / Direct Outreach / Meta Ads",
    complexity: "منخفض إلى متوسط",
    launchSpeed: "سريع (2 - 3 أيام)",
    primaryConversion: "CONTACT CTA (إرسال الطلب / واتساب)",
    flowNodes: [
      { id: "4-1", labelEn: "CONTENT / ADS", labelAr: "محتوى أو إعلانات مركزة", type: "traffic", subtextAr: "تركيز على النتيجة وليس الخدمة" },
      { id: "4-2", labelEn: "SERVICE PAGE", labelAr: "صفحة الخدمة المتخصصة", type: "page", subtextAr: "هيكل إقناعي دقيق ومنظم" },
      { id: "4-3", labelEn: "PROBLEM", labelAr: "توضيح المشكلة والوجع", type: "action", subtextAr: "إظهار المعاناة الحالية للعميل" },
      { id: "4-4", labelEn: "SOLUTION", labelAr: "الحل والمنهجية الخاصة", type: "action", subtextAr: "كيف نقودك من الوضع الحالي للهدف" },
      { id: "4-5", labelEn: "PROOF", labelAr: "الإثبات وسابقة الأعمال", type: "action", subtextAr: "أرقام، شهادات، وحالات نجاح" },
      { id: "4-6", labelEn: "SERVICE DETAILS", labelAr: "تفاصيل ونطاق الخدمة", type: "offer", subtextAr: "ما الذي ستحصل عليه بدقة" },
      { id: "4-7", labelEn: "CONTACT CTA", labelAr: "زر الإجراء الرئيسي", type: "conversion", isPrimaryConversion: true, subtextAr: "طلب الخدمة المباشر أو المحادثة" },
      { id: "4-8", labelEn: "FORM / WHATSAPP", labelAr: "نموذج الطلب أو واتساب", type: "whatsapp", subtextAr: "جمع متطلبات المشروع المبدئية" },
      { id: "4-9", labelEn: "SALES CONVERSATION", labelAr: "محادثة البيع والإغلاق", type: "action", subtextAr: "إرسال المقترح وعقد الاتفاق" }
    ],
    whyItWorks: "العميل يبحث عن شريك موثوق يحل مشكلته؛ تسلسل المشكلة ثم الحل ثم الإثبات يزيل الشك ويبني المصداقية قبل طلب التواصل.",
    commonMistake: "سرد قائمة مهام تقنية جافة (Tasks) بدلاً من توضيح النتيجة التجارية والتحول الذي ستصنعه الخدمة في بيزنس العميل.",
    implementationNote: "أضف أسئلة تصفية مبدئية في الفورم (مثل الميزانية التقريبية وموعد البدء) لحماية وقتك من العملاء غير المناسبين."
  },
  {
    id: 5,
    number: "MAP 05",
    pageNumber: 9,
    englishName: "Call Booking Funnel",
    arabicName: "Funnel حجز المكالمة",
    subtitle: "المعيار الذهبي لملء جدول مواعيدك بمكالمات استشارية وبيعية مؤهلة مسبقاً وجاهزة للإغلاق.",
    categoryId: 2,
    categoryNameAr: "الخدمات والصفقات الكبيرة",
    categoryNameEn: "Services & High Ticket",
    goal: "تأمين مواعيد مكالمات مؤهلة بنسبة حضور عالية مع صناع القرار المستعدين للاستثمار.",
    bestFor: "المدربين التنفيذيين، المستشارين الماليين والتسويقيين، مديري الوكالات، ومبيعات B2B.",
    traffic: "LinkedIn Organic / YouTube Breakdown / Paid In-Feed Video Ads",
    complexity: "متوسط",
    launchSpeed: "متوسط (3 - 5 أيام)",
    primaryConversion: "COMPLETED BOOKING (اكتمال حجز الموعد)",
    flowNodes: [
      { id: "5-1", labelEn: "TRAFFIC", labelAr: "زيارات مؤهلة وعالية الوعي", type: "traffic", subtextAr: "جمهور يعاني من المشكلة بالفعل" },
      { id: "5-2", labelEn: "SALES PAGE", labelAr: "صفحة الشرح والمنهجية", type: "page", subtextAr: "عرض طريقة عملنا الفريدة" },
      { id: "5-3", labelEn: "PROBLEM + METHOD", labelAr: "تفكيك المشكلة والآلية", type: "action", subtextAr: "لماذا فشلت الطرق التقليدية السابقة" },
      { id: "5-4", labelEn: "PROOF", labelAr: "نتائج العملاء السابقة", type: "action", subtextAr: "دراسات حالة موثقة بالفيديو والصور" },
      { id: "5-5", labelEn: "BOOK CALL", labelAr: "طلب حجز المكالمة", type: "action", subtextAr: "زر واضح: 'احجز جلستك الاستراتيجية'" },
      { id: "5-6", labelEn: "QUALIFICATION FORM", labelAr: "استمارة الفلترة والتأهيل", type: "conversion", subtextAr: "أسئلة الدخل، التحديات، والاستعداد" },
      { id: "5-7", labelEn: "CALENDAR", labelAr: "جدول المواعيد التفاعلي", type: "calendar", isPrimaryConversion: true, subtextAr: "نقطة التحويل الكبرى — اختيار التوقيت" },
      { id: "5-8", labelEn: "CONFIRMATION", labelAr: "صفحة التأكيد والتعليمات", type: "page", subtextAr: "فيديو تجهيزي قبل المكالمة" },
      { id: "5-9", labelEn: "REMINDERS", labelAr: "تذكيرات SMS وإيميل وواتساب", type: "email", subtextAr: "قبل 24 ساعة، 3 ساعات، 15 دقيقة" },
      { id: "5-10", labelEn: "SALES CALL", labelAr: "المكالمة الاستراتيجية", type: "action", subtextAr: "تشخيص الاحتياج وتقديم العرض" }
    ],
    whyItWorks: "التقويم يمنح العميل إحساساً بالنظام والاحترافية، بينما تضمن أسئلة التأهيل عدم إضاعة وقتك مع أشخاص غير مناسبين.",
    commonMistake: "إهمال تذكيرات ما قبل المكالمة، مما يؤدي لنسبة غياب (No-Show Rate) تتجاوز 40-50% وإهدار وقتك.",
    implementationNote: "ضع في صفحة التأكيد مقطع فيديو يشرح ماذا سيحدث في المكالمة وما هو المطلوب تحضيره لرفع نسبة الحضور والجدية."
  },
  {
    id: 6,
    number: "MAP 06",
    pageNumber: 10,
    englishName: "High-Ticket Application Funnel",
    arabicName: "Funnel التقديم للخدمات مرتفعة السعر",
    subtitle: "نظام حصري لبيع البرامج والخدمات التي تتراوح بين $2,000 إلى $15,000+ بقوة الانتقائية والمكانة.",
    categoryId: 2,
    categoryNameAr: "الخدمات والصفقات الكبيرة",
    categoryNameEn: "Services & High Ticket",
    goal: "بيع خدمات وبرامج عالية القيمة عبر إظهار الندرة والانتقائية (Exclusive Positioning) وتأهيل العملاء الصارم.",
    bestFor: "برامج الإرشاد المتقدمة (Mentorship)، الوكالات الكبرى، وخبراء الاستشارات المؤسسية.",
    traffic: "Targeted High-Intent Ads / Private Community / Executive Networks",
    complexity: "مرتفع",
    launchSpeed: "متقدم (1 - 2 أسبوع)",
    primaryConversion: "APPLICATION (إرسال طلب التقديم المفصل)",
    flowNodes: [
      { id: "6-1", labelEn: "TARGETED TRAFFIC", labelAr: "ترافيك نخبوي مستهدف", type: "traffic", subtextAr: "أصحاب أعمال ومدراء تنفيذيون" },
      { id: "6-2", labelEn: "VSL / SALES PAGE", labelAr: "صفحة العرض أو الفيديو", type: "video", subtextAr: "فيديو 15-20 دقيقة يشرح النظام" },
      { id: "6-3", labelEn: "AUTHORITY", labelAr: "بناء الهيبة والخبرة", type: "action", subtextAr: "عرض فلسفتك ومكانتك في السوق" },
      { id: "6-4", labelEn: "PROOF", labelAr: "نتائج استثنائية حقيقية", type: "action", subtextAr: "عائد استثمار مثبت بالأرقام" },
      { id: "6-5", labelEn: "APPLICATION", labelAr: "استمارة التقديم الرسمية", type: "conversion", isPrimaryConversion: true, subtextAr: "طلب التقديم كامتياز وليس كشراء" },
      { id: "6-6", labelEn: "QUALIFICATION", labelAr: "مراجعة وفرز الطلبات", type: "action", subtextAr: "قبول المرشحين المؤهلين فقط" },
      { id: "6-7", labelEn: "BOOKING", labelAr: "إرسال رابط الحجز الخاص", type: "calendar", subtextAr: "مكالمة مخصصة للمقبولين" },
      { id: "6-8", labelEn: "SALES CALL", labelAr: "مكالمة القبول والشراكة", type: "action", subtextAr: "نقاش عميق والاتفاق المالي" },
      { id: "6-9", labelEn: "ONBOARDING", labelAr: "بدء الخدمة واستلام الدفعة", type: "offer", subtextAr: "توقيع العقد واستلام الدفعة" }
    ],
    whyItWorks: "العملاء الكبار لا يريدون أن 'يُباع لهم' كسلعة، بل ينجذبون للحلول التي تتطلب تقديماً وتثبت انتقائيتها واهتمامها بالنتائج.",
    commonMistake: "قبول أي متقدم للمكالمة بغض النظر عن إجابات الاستمارة، مما يفقد الفانل عنصري الهيبة والانتقائية.",
    implementationNote: "ارفض صراحة الطلبات غير المؤهلة برسالة اعتذار احترافية ترشدهم لمصادر مجانية؛ هذا يعزز مكانتك وسُمعتك بشكل هائل."
  },
  {
    id: 7,
    number: "MAP 07",
    pageNumber: 11,
    englishName: "Webinar Registration Funnel",
    arabicName: "Funnel التسجيل في الويبينار",
    subtitle: "المسار الأقوى لبيع العروض التي تتطلب تعليماً وتغييراً في قناعات العميل قبل طرح سعر المنتج.",
    categoryId: 5,
    categoryNameAr: "الويبينارات والتعليم التفاعلي",
    categoryNameEn: "Webinars & Education",
    goal: "جذب أكبر عدد من الحضور المؤهلين لبث مباشر تفاعلي، وتفكيك اعتراضاتهم، وتقديم عرض جماعي لا يقاوم.",
    bestFor: "مدربي البرامج التعليمية، أصحاب برامج الكوتشينج، مسوقي حلول البرمجيات (B2B SaaS).",
    traffic: "Facebook / Instagram Ads / Email Broadcasts / Influencer Co-hosts",
    complexity: "متوسط إلى مرتفع",
    launchSpeed: "متوسط (1 أسبوع)",
    primaryConversion: "LIVE WEBINAR ATTENDANCE (حضور البث والعرض)",
    flowNodes: [
      { id: "7-1", labelEn: "TRAFFIC", labelAr: "حملات الترويج للبث", type: "traffic", subtextAr: "عنوان ورشة عمل محدد التاريخ والوقت" },
      { id: "7-2", labelEn: "WEBINAR REGISTRATION", labelAr: "صفحة التسجيل في الويبينار", type: "page", subtextAr: "3 محاور رئيسية سيتعلمها الحاضر" },
      { id: "7-3", labelEn: "OPT-IN", labelAr: "حجز المقعد بالبريد والواتساب", type: "conversion", subtextAr: "الخطوة الأولى: تأكيد حجز المقعد" },
      { id: "7-4", labelEn: "CONFIRMATION", labelAr: "صفحة التأكيد وإضافة للتقويم", type: "page", subtextAr: "Add to Calendar + جروب واتساب خاص" },
      { id: "7-5", labelEn: "REMINDER EMAILS", labelAr: "سلسلة التذكيرات المكثفة", type: "email", subtextAr: "تنبيهات قبل 48 ساعة وساعتين و10 دقائق" },
      { id: "7-6", labelEn: "LIVE WEBINAR", labelAr: "البث المباشر التفاعلي", type: "video", isPrimaryConversion: true, subtextAr: "تقديم المحتوى وتفكيك القناعات الخاطئة" },
      { id: "7-7", labelEn: "OFFER", labelAr: "طرح العرض والبونص الحصري", type: "offer", subtextAr: "عرض خاص لمن يحضر حتى النهاية" },
      { id: "7-8", labelEn: "SALES PAGE", labelAr: "صفحة الدفع للعرض الخاص", type: "page", subtextAr: "عداد تنازلي لانتهاء صلاحية البونص" },
      { id: "7-9", labelEn: "CHECKOUT", labelAr: "إتمام عملية الشراء", type: "action", subtextAr: "استلام الطلبات وانضمام الطلاب" }
    ],
    whyItWorks: "الويبينار يتيح 60 إلى 90 دقيقة من الانتباه الكامل، وهو وقت كافٍ جداً لإعادة تشكيل نظرة العميل للمشكلة وإثبات خبرتك المطلقة.",
    commonMistake: "قضاء نصف وقت الويبينار في التعريف بالنفس والتسويق بدلاً من تقديم 'لحظات استنارة' (Aha Moments) تبهر الحاضر.",
    implementationNote: "استخدم مجتمع واتساب أو تليجرام صامت مع الإيميل لإرسال رابط البث المباشر؛ هذا يرفع نسبة الحضور الفعلي بنسبة تصل إلى 300%."
  },
  {
    id: 8,
    number: "MAP 08",
    pageNumber: 12,
    englishName: "Evergreen Webinar Funnel",
    arabicName: "Funnel الويبينار الدائم",
    subtitle: "ماكينة بيع آلية تعمل على مدار الساعة لتحويل الزوار الجدد إلى مشترين دون الحاجة لبث مباشر متكرر.",
    categoryId: 5,
    categoryNameAr: "الويبينارات والتعليم التفاعلي",
    categoryNameEn: "Webinars & Education",
    goal: "أتمتة مبيعات البرامج التدريبية المتقدمة وتحقيق إيرادات مستمرة على مدار الساعة دون استنزاف طاقتك.",
    bestFor: "أصحاب الكورسات الرقمية الناجحة التي أثبتت جدارتها في البث المباشر ويرغبون في تحويلها لنظام آلي مستقر.",
    traffic: "Paid Ads (Facebook, YouTube, Google) / Organic Evergreen Search",
    complexity: "مرتفع",
    launchSpeed: "متقدم (1 - 2 أسبوع)",
    primaryConversion: "CTA CLICK (الضغط على زر العرض أثناء البث)",
    flowNodes: [
      { id: "8-1", labelEn: "TRAFFIC", labelAr: "ترافيك يومي مستمر", type: "traffic", subtextAr: "إعلانات مستمرة تستهدف جمهوراً جديداً" },
      { id: "8-2", labelEn: "REGISTRATION", labelAr: "تسجيل فوري أو حسب الطلب", type: "page", subtextAr: "عرض البث خلال 15 دقيقة أو فوراً" },
      { id: "8-3", labelEn: "AUTOMATED WEBINAR", labelAr: "غرفة الويبينار المؤتمتة", type: "video", subtextAr: "فيديو مسجل باحترافية عالية وبدون تقطيع" },
      { id: "8-4", labelEn: "CTA", labelAr: "ظهور العرض في التوقيت المحدد", type: "conversion", isPrimaryConversion: true, subtextAr: "زر الشراء يظهر تلقائياً بالدقيقة 45" },
      { id: "8-5", labelEn: "SALES PAGE", labelAr: "صفحة المبيعات المؤقتة", type: "page", subtextAr: "عرض حصري بمدة صلاحية 48-72 ساعة" },
      { id: "8-6", labelEn: "CHECKOUT", labelAr: "صفحة الدفع الآمن", type: "action", subtextAr: "شراء وتفعيل الحساب فوراً" },
      { id: "8-7", labelEn: "FOLLOW-UP", labelAr: "إيميلات المتابعة للمشاهدين", type: "email", subtextAr: "رسائل مخصصة لمن حضر ولمن فاته العرض" },
      { id: "8-8", labelEn: "SALE", labelAr: "إتمام الشراء اللاحق", type: "offer", subtextAr: "إغلاق المبيعات قبل انتهاء المهلة" }
    ],
    whyItWorks: "يتيح للعميل مشاهدة التدريب في الوقت الذي يناسبه هو شخصياً حينما يكون ذهنه صافياً ومستعداً للاستيعاب، دون انتظار أسبوع للبث.",
    commonMistake: "ادعاء أن الويبينار 'مباشر الآن' واستخدام محادثات شات وهمية مكشوفة؛ هذا يدمر مصداقية البراند فوراً.",
    implementationNote: "صمم الويبينار المؤتمت كـ 'تدريب تدريبي مسجل حسب الطلب' (On-Demand Masterclass) بصدق تام، فالعميل يحترم الشفافية والقيمة."
  },
  {
    id: 9,
    number: "MAP 09",
    pageNumber: 13,
    englishName: "Sales Page Funnel",
    arabicName: "Funnel صفحة البيع المباشر",
    subtitle: "الهيكل الكلاسيكي للصفحات الطويلة المكتوبة ببراعة لإقناع الزائر بالشراء المستقل دون وسيط.",
    categoryId: 3,
    categoryNameAr: "الكورسات والمنتجات الرقمية",
    categoryNameEn: "Courses & Digital Products",
    goal: "شرح كافة جوانب المنتج أو العرض وتفنيد الاعتراضات بالكامل لتحقيق الشراء المباشر عبر الصفحة.",
    bestFor: "الكورسات المسجلة، البرمجيات، الكتب الرقمية، وحزم الأدوات متوسطة السعر ($47 - $497).",
    traffic: "Warm Traffic / Email Lists / Retargeting Ads / SEO / Partner Traffic",
    complexity: "متوسط",
    launchSpeed: "متوسط (3 - 5 أيام)",
    primaryConversion: "CHECKOUT (إتمام عملية الشراء بالبطاقة)",
    flowNodes: [
      { id: "9-1", labelEn: "TRAFFIC", labelAr: "زيارات دافئة أو مستهدفة", type: "traffic", subtextAr: "زوار على وعي مسبق بالمشكلة" },
      { id: "9-2", labelEn: "SALES PAGE", labelAr: "صفحة المبيعات الطويلة", type: "page", subtextAr: "هيكل إقناعي شامل ومنسق" },
      { id: "9-3", labelEn: "PROBLEM", labelAr: "توضيح الألم والتحدي", type: "action", subtextAr: "وصف المعاناة بمصطلحات العميل الدقيقة" },
      { id: "9-4", labelEn: "SOLUTION", labelAr: "الحل والتحول المنشود", type: "action", subtextAr: "تقديم الفكرة الكبرى للحل" },
      { id: "9-5", labelEn: "MECHANISM", labelAr: "الآلية الفريدة للعمل", type: "action", subtextAr: "لماذا ينجح هذا النظام بالتحديد" },
      { id: "9-6", labelEn: "PROOF", labelAr: "الأدلة والشهادات", type: "action", subtextAr: "لقطات شاشة وفيديوهات للمستفيدين" },
      { id: "9-7", labelEn: "OFFER", labelAr: "العرض الشامل والقيمة", type: "offer", subtextAr: "تفاصيل الوحدات، البونصات، والضمان" },
      { id: "9-8", labelEn: "FAQ", labelAr: "الأسئلة الشائعة وتفنيد الشكوك", type: "action", subtextAr: "إزالة أي علامة استفهام متبقية" },
      { id: "9-9", labelEn: "CTA", labelAr: "زر الشراء المباشر", type: "action", subtextAr: "دعوة واضحة ومحددة لاتخاذ القرار" },
      { id: "9-10", labelEn: "CHECKOUT", labelAr: "نموذج الدفع وتأكيد السعر", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأساسية" },
      { id: "9-11", labelEn: "THANK YOU", labelAr: "صفحة الشكر وبدء الوصول", type: "page", subtextAr: "تسليم بيانات الدخول للمنصة" }
    ],
    whyItWorks: "تمنح العميل الذي يفضل القراءة المتأنية كل تفصيلة يحتاجها للإجابة على مخاوفه وحساب العائد قبل إخراج بطاقته الائتمانية.",
    commonMistake: "كتابة فقرات نصية عملاقة غير قابلة للمسح البصري (Skim-reading) بدون عناوين فرعية ونقاط مميزة وجداول مقارنة.",
    implementationNote: "ضع زر الشراء (CTA) في 3 أماكن على الأقل: بعد طرح العرض الأول، وبعد استعراض الشهادات، وفي نهاية الصفحة بعد الأسئلة الشائعة."
  },
  {
    id: 10,
    number: "MAP 10",
    pageNumber: 14,
    englishName: "VSL Funnel",
    arabicName: "Funnel فيديو المبيعات",
    subtitle: "استغلال قوة الفيديو الإقناعي لسرد قصة تحولية مشوقة تقود الزائر مباشرة إلى قرار الشراء أو الحجز.",
    categoryId: 3,
    categoryNameAr: "الكورسات والمنتجات الرقمية",
    categoryNameEn: "Courses & Digital Products",
    goal: "استخدام فيديو بيعي عالي التأثير (Video Sales Letter) لبناء رابط عاطفي وإقناعي سريع يقود لإجراء فوري.",
    bestFor: "البرامج التدريبية المبتكرة، العروض التي تتطلب شرحاً صوتياً ومرئياً، وخدمات تحسين الأداء.",
    traffic: "Direct Meta Ads / YouTube Ads / TikTok Ads / Native Ads",
    complexity: "متوسط",
    launchSpeed: "متوسط (4 - 6 أيام)",
    primaryConversion: "CTA CLICK (الضغط على زر الشراء أو الحجز)",
    flowNodes: [
      { id: "10-1", labelEn: "TRAFFIC", labelAr: "حملات فيديو إعلانية", type: "traffic", subtextAr: "خطاف إعلاني يطابق رسالة الفيديو" },
      { id: "10-2", labelEn: "VSL PAGE", labelAr: "صفحة الفيديو البيعي", type: "page", subtextAr: "تصميم بسيط يركز العين على مشغل الفيديو" },
      { id: "10-3", labelEn: "VIDEO", labelAr: "تشغيل الفيديو الإقناعي", type: "video", subtextAr: "مقطع مدته 8-15 دقيقة مكتوب باحتراف" },
      { id: "10-4", labelEn: "CORE ARGUMENT", labelAr: "طرح الحجة والقصة المؤثرة", type: "action", subtextAr: "تغيير القناعة القديمة واستبدالها بالحل" },
      { id: "10-5", labelEn: "PROOF", labelAr: "إثبات النتائج داخل الفيديو", type: "action", subtextAr: "استعراض مباشر للنتائج والأرقام" },
      { id: "10-6", labelEn: "OFFER", labelAr: "الكشف عن العرض الخاص", type: "offer", subtextAr: "تقديم الباقة المتكاملة وسعر الفرصة" },
      { id: "10-7", labelEn: "CTA", labelAr: "ظهور زر الشراء التفاعلي", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل — الضغط على الزر" },
      { id: "10-8", labelEn: "CHECKOUT / BOOKING", labelAr: "صفحة الدفع أو الحجز", type: "action", subtextAr: "إتمام العملية بسهولة دون تعقيد" },
      { id: "10-9", labelEn: "FOLLOW-UP", labelAr: "متابعة بريدية للمشاهدين", type: "email", subtextAr: "ملخص نصي لأهم نقاط الفيديو" }
    ],
    whyItWorks: "الفيديو يحمل نبرة الصوت والمشاعر وتعبيرات الوجه، مما يولد ثقة أسرع بكثير من النصوص المجردة في زمن انخفاض مدى الانتباه.",
    commonMistake: "المقدمات الطويلة والمملة؛ أول 30 ثانية من الفيديو هي التي تحدد إذا كان المشاهد سيكمل أم سيغلق الصفحة.",
    implementationNote: "أخفِ زر الشراء حتى يصل الفيديو إلى لحظة طرح العرض، حتى يركز المشاهد على القصة والقيمة أولاً دون الانشغال بالسعر مبكراً."
  },
  {
    id: 11,
    number: "MAP 11",
    pageNumber: 15,
    englishName: "Mini Course Funnel",
    arabicName: "Funnel الكورس المجاني المصغر",
    subtitle: "تدريب عملي على 3 إلى 5 أجزاء يمنح الزائر انتصاراً سريعاً ويثبت كفاءتك قبل طرح البرنامج المتكامل.",
    categoryId: 3,
    categoryNameAr: "الكورسات والمنتجات الرقمية",
    categoryNameEn: "Courses & Digital Products",
    goal: "تعليم الزائر وإيصاله لنتيجة ملموسة صغيرة (Quick Win) تمهد تلقائياً لطلب كورس مدفوع شامل.",
    bestFor: "المعلمين، المدربين، خبراء التقنية، وكل من يقدم مهارة تحتاج لتطبيق عملي لبناء القناعة.",
    traffic: "Organic Content / YouTube Tutorials / Lead Ads / SEO",
    complexity: "متوسط",
    launchSpeed: "متوسط (3 - 5 أيام)",
    primaryConversion: "CORE OFFER PURCHASE (شراء الكورس المتقدم)",
    flowNodes: [
      { id: "11-1", labelEn: "TRAFFIC", labelAr: "جمهور يرغب في تعلم المهارة", type: "traffic", subtextAr: "محتوى تعليمي ومقاطع تأسيسية" },
      { id: "11-2", labelEn: "REGISTRATION", labelAr: "تسجيل في الدورة المجانية", type: "page", subtextAr: "عنوان: كورس تطبيقي في 3 دروس سريعة" },
      { id: "11-3", labelEn: "LESSON 1", labelAr: "الدرس الأول: التأسيس والفكرة", type: "video", subtextAr: "إزالة أكبر عائق ذهني + تمرين عملي" },
      { id: "11-4", labelEn: "LESSON 2", labelAr: "الدرس الثاني: التطبيق العملي", type: "video", subtextAr: "خطوات محددة لتنفيذ أول نموذج ناجح" },
      { id: "11-5", labelEn: "LESSON 3", labelAr: "الدرس الثالث: التوسع والنتيجة", type: "video", subtextAr: "تحقيق النتيجة وإظهار الخطوة القادمة" },
      { id: "11-6", labelEn: "EMAIL FOLLOW-UP", labelAr: "رسائل المتابعة والتشجيع", type: "email", subtextAr: "تذكير يومي بفتح الدرس القادم" },
      { id: "11-7", labelEn: "CORE OFFER", labelAr: "طرح الكورس المدفوع الشامل", type: "offer", isPrimaryConversion: true, subtextAr: "نقطة التحويل الكبرى — للانتقال للاحتراف" },
      { id: "11-8", labelEn: "SALE", labelAr: "إتمام الشراء والانضمام", type: "action", subtextAr: "دخول الأكاديمية أو البرنامج الكامل" }
    ],
    whyItWorks: "الشخص الذي يتعلم منك ويحقق نتيجة مجانية صغيرة يشعر بامتنان وثقة مطلقة في أن برنامجك المدفوع سيفيده أضعافاً.",
    commonMistake: "جعل الدروس المجانية نظرية بحتة دون تكليف بمهمة عملية بسيطة تجعل الطالب يشعر بالإنجاز الذاتي.",
    implementationNote: "ضع تحت كل درس زر دعوة للانضمام للبرنامج الكامل للذين يريدون تخطي الخطوات وتوفير الوقت وعدم الانتظار."
  },
  {
    id: 12,
    number: "MAP 12",
    pageNumber: 16,
    englishName: "Course Launch Funnel",
    arabicName: "Funnel إطلاق الكورس",
    subtitle: "إستراتيجية الإطلاق الدوري (Open/Close Cart) لصناعة زخم شرائي وطلب مكثف خلال فترة زمنية محددة.",
    categoryId: 8,
    categoryNameAr: "الإطلاق والرعاية المستمرة",
    categoryNameEn: "Launch & Nurture",
    goal: "صناعة حدث تسويقي ضخم واستغلال عنصر الندرة الحقيقية لفتح باب التسجيل لأيام معدودة وتحقيق إيرادات قياسية.",
    bestFor: "أكاديميات التدريب، المعسكرات الرقمية التفاعلية (Bootcamps)، والمدربين ذوي الجماهير المخلصة.",
    traffic: "Social Media Buzz / Podcasts / Owned Email List / Partner Endorsements",
    complexity: "مرتفع",
    launchSpeed: "متقدم (2 - 3 أسابيع)",
    primaryConversion: "CART OPEN PURCHASE (الشراء خلال فترة فتح السلة)",
    flowNodes: [
      { id: "12-1", labelEn: "CONTENT", labelAr: "محتوى الإحماء والتسخين", type: "content", subtextAr: "تسليط الضوء على فرصة جديدة في السوق" },
      { id: "12-2", labelEn: "WAITLIST", labelAr: "قائمة الانتظار الحصرية", type: "conversion", subtextAr: "تسجيل الأوائل للحصول على خصم خاص" },
      { id: "12-3", labelEn: "PRE-LAUNCH CONTENT", labelAr: "محتوى ما قبل الإطلاق (PLC)", type: "video", subtextAr: "3 فيديوهات استراتيجية تغير القناعات" },
      { id: "12-4", labelEn: "EMAIL SEQUENCE", labelAr: "سلسلة العد التنازلي", type: "email", subtextAr: "تنبيه: نفتح الأبواب بعد 48 ساعة" },
      { id: "12-5", labelEn: "CART OPEN", labelAr: "فتح باب التسجيل رسمياً", type: "action", isPrimaryConversion: true, subtextAr: "انطلاق المبيعات لأيام محددة فقط" },
      { id: "12-6", labelEn: "SALES PAGE", labelAr: "صفحة مبيعات المعسكر / الكورس", type: "page", subtextAr: "شرح شامل مع جدول زمني للدفعة" },
      { id: "12-7", labelEn: "FOLLOW-UP", labelAr: "متابعة مكثفة ورسائل حاسمة", type: "email", subtextAr: "استعراض قصص الناجحين وتنبيهات المهلة" },
      { id: "12-8", labelEn: "CART CLOSE", labelAr: "إغلاق السلة نهائياً", type: "action", subtextAr: "انتهاء الفرصة وبدء العمل مع الطلاب" }
    ],
    whyItWorks: "الطبيعة البشرية تميل للتسويف وتأجيل الشراء؛ تحديد موعد نهائي صارم لإغلاق الباب يدفع المترددين لاتخاذ القرار فوراً.",
    commonMistake: "تمديد مهلة الإطلاق بحجة 'إعطاء فرصة أخرى' بشكل مصطنع؛ هذا يحرق مصداقيتك في أي إطلاق قادم.",
    implementationNote: "حوالي 40-50% من إجمالي مبيعات الإطلاق تحدث في آخر 24 ساعة قبل إغلاق السلة؛ ركز جهدك ورسائلك التذكيرية هناك."
  },
  {
    id: 13,
    number: "MAP 13",
    pageNumber: 17,
    englishName: "Affiliate Review Funnel",
    arabicName: "Funnel مراجعة منتج أفلييت",
    subtitle: "تقديم مراجعة صادقة ومفصلة لمنتج ترشحه، مع توضيح المميزات والعيوب لكسب ثقة المشتري وعمولتك.",
    categoryId: 4,
    categoryNameAr: "التسويق بالعمولة",
    categoryNameEn: "Affiliate Marketing",
    goal: "توجيه الباحثين عن تقييمات موثوقة لمنتج معين نحو الشراء عبر رابط الأفلييت الخاص بك بعد اقتناعهم.",
    bestFor: "صناع المحتوى التقني، المدونين، قنوات مراجعات البرمجيات والأجهزة، ومواقع التقييم المتخصصة.",
    traffic: "SEO Search Queries ('Product Review') / YouTube In-Depth Tests",
    complexity: "منخفض",
    launchSpeed: "سريع (1 - 2 يوم)",
    primaryConversion: "AFFILIATE CTA CLICK (الضغط على رابط الإحالة)",
    flowNodes: [
      { id: "13-1", labelEn: "SEO / YOUTUBE / CONTENT", labelAr: "بحث ذو نية شرائية عالية", type: "traffic", subtextAr: "شخص يبحث تحديداً: هل يستحق أداة X الشراء؟" },
      { id: "13-2", labelEn: "REVIEW CONTENT", labelAr: "محتوى المراجعة الشاملة", type: "page", subtextAr: "مقال أو فيديو تجربة واقعية مدعومة بالأدلة" },
      { id: "13-3", labelEn: "PROBLEM", labelAr: "المشكلة التي يحلها المنتج", type: "action", subtextAr: "لماذا يحتاج السوق لمثل هذه الأداة أصلاً" },
      { id: "13-4", labelEn: "PRODUCT OVERVIEW", labelAr: "نظرة عامة ومميزات الأداة", type: "action", subtextAr: "شرح واجهة الاستخدام والخصائص الفعلية" },
      { id: "13-5", labelEn: "PROS & CONS", labelAr: "الإيجابيات والسلبيات بإنصاف", type: "action", subtextAr: "ذكر العيوب الحقيقية بصدق لترسيخ الأمانة" },
      { id: "13-6", labelEn: "WHO IT IS FOR", labelAr: "لمن يناسب هذا المنتج ولمن لا", type: "action", subtextAr: "فلترة صريحة تجعل القارئ يرى نفسه" },
      { id: "13-7", labelEn: "ALTERNATIVES", labelAr: "البدائل المتاحة في السوق", type: "action", subtextAr: "مقارنة سريعة تبرز تفوق الخيار الموصى به" },
      { id: "13-8", labelEn: "AFFILIATE CTA", labelAr: "زر الشراء مع البونص الحصري", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل — الضغط على رابط الأفلييت" },
      { id: "13-9", labelEn: "PRODUCT PAGE", labelAr: "صفحة البائع الأصلية", type: "offer", subtextAr: "إتمام الشراء وحصولك على العمولة" }
    ],
    whyItWorks: "الزائر في هذه المرحلة في قاع الفانل (Bottom of Funnel) ومعه بطاقته بالفعل؛ يحتاج فقط لمن يؤكد له صواب قراره أو يوضح له العيوب.",
    commonMistake: "المدح الأعمى والمبالغ فيه وإخفاء السلبيات؛ القارئ الذكي يشعر فوراً بعدم الأمانة التسويقية ويبحث عن مصدر آخر.",
    implementationNote: "قدم بونصاً مجانياً من إعدادك (مثل قالب جاهز أو فيديو شرح إعداد) لمن يشتري عبر رابطك لإعطائه حافزاً حاسماً لاختيارك."
  },
  {
    id: 14,
    number: "MAP 14",
    pageNumber: 18,
    englishName: "Affiliate Comparison Funnel",
    arabicName: "Funnel مقارنة منتجات الأفلييت",
    subtitle: "مساعدة المشتري الحائر في المفاضلة بين خيارين أو ثلاثة متنافسين وإرشاده للخيار الأنسب لحالته.",
    categoryId: 4,
    categoryNameAr: "التسويق بالعمولة",
    categoryNameEn: "Affiliate Marketing",
    goal: "التقاط الزوار الحائرين بين أدوات متنافسة (Tool A vs Tool B) وحسم اختيارهم بروابط إحالة لكلا الخيارين.",
    bestFor: "مسوقي برمجيات SaaS، بوابات المقارنات التكنولوجية، ومدوني أدوات ريادة الأعمال والإنتاجية.",
    traffic: "High-Intent Comparison Searches (A vs B, Best Alternatives)",
    complexity: "متوسط",
    launchSpeed: "سريع إلى متوسط (2 - 3 أيام)",
    primaryConversion: "RECOMMENDED CTA CLICK (الضغط على خيار المقارنة الأنسب)",
    flowNodes: [
      { id: "14-1", labelEn: "SEARCH / CONTENT", labelAr: "بحث مقارنة مباشر ومحدد", type: "traffic", subtextAr: "عميل يبحث: مقارنة بين ConvertKit و Mailchimp" },
      { id: "14-2", labelEn: "COMPARISON PAGE", labelAr: "صفحة المقارنة المعيارية", type: "page", subtextAr: "جدول تفاعلي يقارن الأسعار والمزايا" },
      { id: "14-3", labelEn: "OPTION A ↔ OPTION B", labelAr: "مقارنة وجهاً لوجه", type: "action", subtextAr: "نقاط القوة والضعف لكل خيار بحيادية" },
      { id: "14-4", labelEn: "USE CASE COMPARISON", labelAr: "حالات الاستخدام المثالية", type: "action", subtextAr: "إذا كنت مبتدئاً اختر A، وإذا كنت محترفاً اختر B" },
      { id: "14-5", labelEn: "RECOMMENDATION", labelAr: "ترشيحنا النهائي الواضح", type: "offer", subtextAr: "بيان الفائز الإجمالي في معظم الظروف" },
      { id: "14-6", labelEn: "AFFILIATE CTA", labelAr: "أزرار الروابط المباشرة", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل — روابط إحالة للخيارين" }
    ],
    whyItWorks: "أنت تفوز بالعمولة أياً كان قرار القارئ؛ سواء اختار الخيار الأول أو الثاني، فأنت من وفر له الرابط المباشر والتحليل المنصف.",
    commonMistake: "الانحياز الفج لأداة لمجرد أن عمولتها أعلى، بالرغم من أن منافستها أفضل وأرخص للجمهور؛ هذا يدمر الثقة على المدى البعيد.",
    implementationNote: "ضع جدول مقارنة ملخصاً في الثلث الأول من الصفحة مع زرين واضحين؛ فالكثير من الزوار يكتفي بالجدول لاتخاذ القرار سريعاً."
  },
  {
    id: 15,
    number: "MAP 15",
    pageNumber: 19,
    englishName: "Bridge Page Funnel",
    arabicName: "Funnel الصفحة الوسيطة للأفلييت",
    subtitle: "حلقة وصل استراتيجية لتسخين الزائر وتأهيله قبل إرساله إلى صفحة البائع المباشرة لتجنب حظر الإعلانات ورفع التحويل.",
    categoryId: 4,
    categoryNameAr: "التسويق بالعمولة",
    categoryNameEn: "Affiliate Marketing",
    goal: "بناء سياق إقناعي وتجهيز الزائر قبل تحويله لموقع المنتج الأصلي، وتفادي الرفض في منصات الإعلانات.",
    bestFor: "مسوقي الأفلييت بالإعلانات الممولة (Paid Ads)، وحملات الترويج للعروض الخارجية وبرامج الشراكة.",
    traffic: "Paid Social / Native Discovery Ads / Solo Ads / TikTok Spark Ads",
    complexity: "منخفض",
    launchSpeed: "سريع (يوم واحد)",
    primaryConversion: "VENDOR PAGE OUTBOUND (الانتقال لصفحة البائع)",
    flowNodes: [
      { id: "15-1", labelEn: "TRAFFIC", labelAr: "حملة إعلانية مجهزة وموجهة", type: "traffic", subtextAr: "إعلان يثير الفضول حول النتيجة" },
      { id: "15-2", labelEn: "BRIDGE PAGE", labelAr: "الصفحة الوسيطة الخاصة بك", type: "page", subtextAr: "صفحة هبوط سريعة وبسيطة تابعة لك" },
      { id: "15-3", labelEn: "PROBLEM", labelAr: "التذكير بالمشكلة والحل", type: "action", subtextAr: "توضيح كيف عثرت على هذا الحل المعين" },
      { id: "15-4", labelEn: "WHY THIS SOLUTION", labelAr: "لماذا هذا المنتج بالتحديد؟", type: "action", subtextAr: "شرح سبب تفوق هذه الأداة وتجربتك معها" },
      { id: "15-5", labelEn: "CONTEXT / BONUS", labelAr: "السياق التوجيهي أو البونص", type: "offer", subtextAr: "ما الذي ستجده في الصفحة القادمة وما سأهديك إياه" },
      { id: "15-6", labelEn: "AFFILIATE CTA", labelAr: "زر المتابعة نحو العرض", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل — الضغط للانتقال برابطك" },
      { id: "15-7", labelEn: "VENDOR PAGE", labelAr: "صفحة المنتج لدى الشركة الأصلية", type: "page", subtextAr: "عرض البائع الرسمي لاستكمال الطلب" },
      { id: "15-8", labelEn: "PURCHASE", labelAr: "شراء العميل واحتساب العمولة", type: "action", subtextAr: "إتمام العملية بنجاح" }
    ],
    whyItWorks: "الإرسال المباشر للزائر البارد لصفحة بائع غريب يسبب صدمة وخروجاً فورياً؛ الصفحة الوسيطة تمنح الزائر سبباً منطقياً للشراء.",
    commonMistake: "إعادة كتابة كل كلام صفحة البائع في الصفحة الوسيطة؛ دورك هنا مجرد التمهيد (Warm-up) وليس البيع الشامل.",
    implementationNote: "اجمع إيميل الزائر أولاً في الصفحة الوسيطة قبل توجيهه لصفحة البائع، حتى تمتلك وسيلة متابعة معه في حال لم يشترِ فوراً."
  },
  {
    id: 16,
    number: "MAP 16",
    pageNumber: 20,
    englishName: "Quiz Funnel",
    arabicName: "Funnel الاختبار",
    subtitle: "توليد عملاء محتملين عبر أسئلة تشخيصية تفاعلية تقدم نتائج مخصصة وعروضاً تناسب وضع كل عميل بدقة.",
    categoryId: 1,
    categoryNameAr: "توليد العملاء المحتملين",
    categoryNameEn: "Lead Generation",
    goal: "رفع معدل التسجيل وتقسيم الجمهور (Segmentation) إلى شرائح دقيقة لتقديم العرض المثالي لكل شريحة.",
    bestFor: "الصحة واللياقة، التوجيه المهني، استشارات البيزنس، والمتاجر ذات التنوع الكبير في المنتجات.",
    traffic: "Meta Curiosity Ads / TikTok Interactive Ads / Social Bio",
    complexity: "متوسط إلى مرتفع",
    launchSpeed: "متوسط (4 - 7 أيام)",
    primaryConversion: "EMAIL CAPTURE FOR RESULTS (إدخال الإيميل لإظهار النتيجة)",
    flowNodes: [
      { id: "16-1", labelEn: "TRAFFIC", labelAr: "إعلانات الفضول والتشخيص", type: "traffic", subtextAr: "عنوان: اكتشف أين يقف مشروعك الآن؟" },
      { id: "16-2", labelEn: "QUIZ PAGE", labelAr: "صفحة بدء الاختبار التفاعلي", type: "page", subtextAr: "خطاف جذاب ووعد بنتيجة تشخيصية خلال دقيقتين" },
      { id: "16-3", labelEn: "QUESTION 1", labelAr: "السؤال الأول: الوضع الحالي", type: "quiz", subtextAr: "سؤال سهل جداً لكسر حاجز البداية" },
      { id: "16-4", labelEn: "QUESTION 2", labelAr: "السؤال الثاني: أكبر عائق وتحدي", type: "quiz", subtextAr: "تحديد الوجع الرئيسي للعميل" },
      { id: "16-5", labelEn: "QUESTION 3", labelAr: "السؤال الثالث: الهدف المنشود", type: "quiz", subtextAr: "رسم النتيجة التي يطمح للوصول إليها" },
      { id: "16-6", labelEn: "EMAIL CAPTURE", labelAr: "نموذج إرسال التقرير والنتيجة", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل — إدخال الإيميل لرؤية التحليل" },
      { id: "16-7", labelEn: "PERSONALIZED RESULT", labelAr: "صفحة النتيجة والتشخيص الخاص", type: "page", subtextAr: "تفسير مفصل لمستوى العميل ونوع شخصيته" },
      { id: "16-8", labelEn: "RECOMMENDED OFFER", labelAr: "العرض المفصل خصيصاً له", type: "offer", subtextAr: "الحل الذي يناسب نتيجته بالتحديد" },
      { id: "16-9", labelEn: "FOLLOW-UP", labelAr: "سلسلة بريدية مفصلة للشريحة", type: "email", subtextAr: "محتوى موجه لاهتمامات الشريحة فقط" }
    ],
    whyItWorks: "الناس يعشقون اكتشاف أنفسهم وتشخيص حالتهم؛ ومبدأ الالتزام (Micro-commitments) يجعلهم حريصين على معرفة النتيجة بعد الإجابة.",
    commonMistake: "جعل الأسئلة كثيرة ومملة تفوق 8 أسئلة، مما يرفع نسبة التسرب قبل الوصول لخطوة إدخال البريد.",
    implementationNote: "اجعل الأسئلة تتراوح بين 4 إلى 6 أسئلة سهلة وممتعة، واطلب البريد قبل كشف النتيجة مباشرة بعبارة: 'أين نرسل لك تقريرك المخصص؟'."
  },
  {
    id: 17,
    number: "MAP 17",
    pageNumber: 21,
    englishName: "Challenge Funnel",
    arabicName: "Funnel التحدي",
    subtitle: "تجربة تفاعلية جماعية تمتد لـ 5 أيام تصنع مشاركة عالية وتبني مجتمعاً مستعداً لشراء عرضك الشامل.",
    categoryId: 5,
    categoryNameAr: "الويبينارات والتعليم التفاعلي",
    categoryNameEn: "Webinars & Education",
    goal: "صناعة حالة حماس جماعي وإنجاز تحول مبدئي ملموس للمشاركين يدفعهم للاستثمار في البرنامج التدريبي الكامل.",
    bestFor: "مدربي اللياقة والتغذية، مدربي البيزنس، معسكرات الإنتاجية، وتعليم المهارات الجديدة.",
    traffic: "Organic Social / Warm Email / Paid Social Lead Campaigns",
    complexity: "مرتفع",
    launchSpeed: "متقدم (1 - 2 أسبوع)",
    primaryConversion: "CORE OFFER PURCHASE (شراء العرض في ختام التحدي)",
    flowNodes: [
      { id: "17-1", labelEn: "TRAFFIC", labelAr: "دعوة لخوض تحدٍ مجاني محدد", type: "traffic", subtextAr: "عنوان: تحدي الـ 5 أيام لبناء صفحة هبوطك الأولى" },
      { id: "17-2", labelEn: "CHALLENGE REGISTRATION", labelAr: "صفحة التسجيل والانضمام", type: "page", subtextAr: "وصف الأهداف اليومية والمجتمع التفاعلي" },
      { id: "17-3", labelEn: "DAY 1", labelAr: "اليوم 1: الخطوة الأولى وتحديد الوجهة", type: "video", subtextAr: "مهمة سريعة لا تتعدى 15 دقيقة" },
      { id: "17-4", labelEn: "DAY 2", labelAr: "اليوم 2: تجهيز الأدوات والأساسات", type: "video", subtextAr: "تفاعل ونشر النتائج في المجتمع" },
      { id: "17-5", labelEn: "DAY 3", labelAr: "اليوم 3: بناء الهيكل والتطبيق", type: "video", subtextAr: "تجاوز أول عقبة وتصحيح الأخطاء" },
      { id: "17-6", labelEn: "DAY 4", labelAr: "اليوم 4: الصقل واللمسات النهائية", type: "video", subtextAr: "تحقيق أول نتيجة واضحة للجميع" },
      { id: "17-7", labelEn: "DAY 5", labelAr: "اليوم 5: الاحتفال واستعراض النتيجة", type: "action", subtextAr: "بث ختامي لتقييم الأعمال وتكريم المتميزين" },
      { id: "17-8", labelEn: "TRANSFORMATION", labelAr: "استشعار النتيجة والتحول الفعلي", type: "action", subtextAr: "إدراك المشارك لقدرته على النجاح معك" },
      { id: "17-9", labelEn: "CORE OFFER", labelAr: "طرح العرض المتقدم المتكامل", type: "offer", isPrimaryConversion: true, subtextAr: "نقطة التحويل — الاستمرار في المعسكر الكامل" }
    ],
    whyItWorks: "الضغط الجماعي الإيجابي والمهام اليومية الصغيرة تصنع طاقة هائلة، وتجعل المشارك يختبر منهجيتك وأسلوبك بشكل حي وممتع.",
    commonMistake: "تكليف المشتركين بمهام يومية شاقة تستغرق ساعات؛ هذا يصيبهم بالإحباط والانسحاب قبل اليوم الأخير.",
    implementationNote: "اجعل مهمة كل يوم قابلة للإنجاز في 15 دقيقة فقط، وامنح جوائز رمزية يومية لأول من ينشر تطبيقه في المجتمع."
  },
  {
    id: 18,
    number: "MAP 18",
    pageNumber: 22,
    englishName: "Consultation Funnel",
    arabicName: "Funnel الاستشارة",
    subtitle: "استثمار المحتوى المتخصص وسابقة الخبرة لجذب رواد الأعمال المستعدين لدفع أجر استشاري مباشر بالساعة.",
    categoryId: 2,
    categoryNameAr: "الخدمات والصفقات الكبيرة",
    categoryNameEn: "Services & High Ticket",
    goal: "بيع جلسات استشارية مدفوعة مقدماً وفلترة المستفيدين تمهيداً لعقود متابعة واستشارات سنوية.",
    bestFor: "المستشارين القانونيين، المحاسبين القانونيين، استشاريي التسويق والنمو، والخبراء التقنيين.",
    traffic: "Authority Content / Podcasts / Thought Leadership / Speaking Gigs",
    complexity: "منخفض إلى متوسط",
    launchSpeed: "سريع (2 - 3 أيام)",
    primaryConversion: "PAYMENT / CALENDAR (دفع قيمة الجلسة وحجز الموعد)",
    flowNodes: [
      { id: "18-1", labelEn: "AUTHORITY CONTENT", labelAr: "محتوى خبرة عميق ومركز", type: "content", subtextAr: "مقالات وتحليلات تثبت التمكن المهني العالي" },
      { id: "18-2", labelEn: "CONSULTATION PAGE", labelAr: "صفحة حجز الاستشارة المباشرة", type: "page", subtextAr: "وصف واضح للمحاور التي سنغطيها في الجلسة" },
      { id: "18-3", labelEn: "PROBLEM + OUTCOME", labelAr: "المشكلة والنتيجة المستهدفة", type: "action", subtextAr: "ماذا سنصل إليه معاً خلال 60 دقيقة" },
      { id: "18-4", labelEn: "PROOF", labelAr: "سجل الإنجازات والشهادات", type: "action", subtextAr: "شهادات شركات وشخصيات استفادت مسبقاً" },
      { id: "18-5", labelEn: "BOOKING CTA", labelAr: "زر حجز الجلسة المدفوعة", type: "action", subtextAr: "حجز موعد الاستشارة فوراً" },
      { id: "18-6", labelEn: "QUESTIONNAIRE", labelAr: "استبيان تحضير ملف الاستشارة", type: "conversion", subtextAr: "جمع أرقام وملفات المشروع لدراستها مسبقاً" },
      { id: "18-7", labelEn: "PAYMENT / CALENDAR", labelAr: "الدفع واختيار الموعد فوراً", type: "calendar", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأساسية — الدفع وتثبيت الموعد" },
      { id: "18-8", labelEn: "CONSULTATION", labelAr: "انعقاد الجلسة الاستشارية", type: "action", subtextAr: "تقديم خطة عمل وحلول محددة بدقة" },
      { id: "18-9", labelEn: "NEXT OFFER", labelAr: "عرض التنفيذ أو الإشراف طويل المدى", type: "offer", subtextAr: "الترقية لعقد إشراف أو وكالة" }
    ],
    whyItWorks: "الاستشارة المدفوعة تزيل العملاء غير الجادين تماماً وتضمن أن وقتك مقدر مالياً، وتفتح الباب لصفقات أكبر بكثير بعد بناء الثقة.",
    commonMistake: "دخول الجلسة دون دراسة ملف العميل مسبقاً؛ الاستبيان التحضيري ضروري لتحقيق أقصى قيمة من أول دقيقة في المكالمة.",
    implementationNote: "اجعل الاستشارة مربوطة بالدفع المسبق المؤتمت (Stripe / Cal.com) دون استثناءات لحفظ التزام الطرفين."
  },
  {
    id: 19,
    number: "MAP 19",
    pageNumber: 23,
    englishName: "Product Launch Funnel",
    arabicName: "Funnel إطلاق المنتج",
    subtitle: "نموذج جيف ووكر الكلاسيكي (PLF) لإطلاق منتجات رقمية أو فيزيائية جديدة عبر رحلة ترقب مدروسة.",
    categoryId: 8,
    categoryNameAr: "الإطلاق والرعاية المستمرة",
    categoryNameEn: "Launch & Nurture",
    goal: "صناعة حالة ترقب قصوى (Hype) قبل توفر المنتج وضمان تدفق ضخم للطلبات في أول ساعات الإطلاق الرسمي.",
    bestFor: "إطلاق المنتجات الفيزيائية المبتكرة، الكتب المطبوعة، منصات الـ SaaS الجديدة، والبرامج الرائدة.",
    traffic: "Teaser Campaigns / PR / Influencer Seedings / Waitlist Broadcasts",
    complexity: "مرتفع",
    launchSpeed: "متقدم (2 - 4 أسابيع)",
    primaryConversion: "SALES OPENING (الشراء في يوم انطلاق المنتج)",
    flowNodes: [
      { id: "19-1", labelEn: "TEASER CONTENT", labelAr: "المحتوى التشويقي الأولي", type: "traffic", subtextAr: "تلميحات دون الكشف الكامل عن المنتج" },
      { id: "19-2", labelEn: "WAITLIST", labelAr: "صفحة الانضمام لقائمة الترقب", type: "conversion", subtextAr: "امتياز الحصول على أسبقية الشراء وخصم الإطلاق" },
      { id: "19-3", labelEn: "EDUCATION", labelAr: "محتوى تعليمي يوضح النقلة", type: "video", subtextAr: "كيف سيغير هذا المنتج واقع المشترين" },
      { id: "19-4", labelEn: "PROOF", labelAr: "تجارب المستخدمين الأوائل (Beta)", type: "action", subtextAr: "ردود أفعال حقيقية وتجارب غير منقوصة" },
      { id: "19-5", labelEn: "LAUNCH ANNOUNCEMENT", labelAr: "إعلان لحظة الانطلاق الصفرية", type: "email", subtextAr: "رسالة 'المنتج متاح رسمياً الآن!'" },
      { id: "19-6", labelEn: "SALES PAGE", labelAr: "صفحة الشراء الرسمية المتكاملة", type: "page", isPrimaryConversion: true, subtextAr: "نقطة التحويل الكبرى — تدفق المبيعات" },
      { id: "19-7", labelEn: "FOLLOW-UP", labelAr: "متابعة وتحديث الكميات المتبقية", type: "email", subtextAr: "تحديثات حية حول نفاد الدفعة الأولى" },
      { id: "19-8", labelEn: "CART CLOSE", labelAr: "إغلاق عرض الإطلاق المسبق", type: "action", subtextAr: "عودة السعر لطبيعته أو نفاد الكمية" },
      { id: "19-9", labelEn: "ONBOARDING", labelAr: "تسليم المنتج واستقبال العملاء", type: "offer", subtextAr: "تجربة ترحيبية استثنائية للمشترين" }
    ],
    whyItWorks: "الترقب المبكر ينقل المشاعر من وضعية 'هل أشتري هذا الشيء؟' إلى 'هل سألحق بالحصول على نسختي قبل أن تنفد؟'.",
    commonMistake: "طرح المنتج فجأة دون مرحلة تشويق وتثقيف سابقة؛ هذا يجعل يوم الإطلاق هادئاً ومخيباً للآمال.",
    implementationNote: "شارك كواليس التصنيع أو التطوير مع المسجلين في القائمة لربطهم عاطفياً برحلة ولادة المنتج حتى يشعروا أنهم جزء منه."
  },
  {
    id: 20,
    number: "MAP 20",
    pageNumber: 24,
    englishName: "E-commerce Upsell Funnel",
    arabicName: "Funnel المتجر مع العرض الإضافي",
    subtitle: "مضاعفة سلة مشتريات متجرك الإلكتروني عبر عروض ذكية قبل وبعد الدفع ترفع ربح كل عملية بيع.",
    categoryId: 7,
    categoryNameAr: "المتاجر والتجارة الإلكترونية",
    categoryNameEn: "E-commerce",
    goal: "زيادة متوسط قيمة الطلب (Average Order Value - AOV) ومضاعفة ربحية الإعلانات في المتاجر الإلكترونية.",
    bestFor: "متاجر التجارة الإلكترونية، علامات التجزئة الرقمية، والمنتجات الفيزيائية المباشرة للمستهلك (DTC).",
    traffic: "TikTok Ads / Meta Shopping / Google Performance Max / Influencers",
    complexity: "متوسط إلى مرتفع",
    launchSpeed: "متوسط (3 - 5 أيام)",
    primaryConversion: "CHECKOUT + ORDER BUMP (إتمام الشراء مع الإضافة)",
    flowNodes: [
      { id: "20-1", labelEn: "AD / CONTENT", labelAr: "إعلان فيديو جذاب للمنتج", type: "traffic", subtextAr: "إبراز المنتج المميز واستخدامه الفعلي" },
      { id: "20-2", labelEn: "PRODUCT PAGE", labelAr: "صفحة المنتج عالية التحويل", type: "page", subtextAr: "صور واضحة، تفاصيل، وتقييمات حقيقية" },
      { id: "20-3", labelEn: "ADD TO CART", labelAr: "إضافة المنتج إلى السلة", type: "action", subtextAr: "تأكيد رغبة الشراء والانتقال للدفع" },
      { id: "20-4", labelEn: "CHECKOUT", labelAr: "صفحة الدفع السريعة", type: "page", subtextAr: "أقل عدد ممكن من الحقول لتقليل التسرب" },
      { id: "20-5", labelEn: "ORDER BUMP", labelAr: "عرض إضافي بضغطة زر (Bump)", type: "upsell", isPrimaryConversion: true, subtextAr: "نقطة التحويل والربح — إضافة ملحق أو ضمان" },
      { id: "20-6", labelEn: "PURCHASE", labelAr: "إتمام عملية الشراء الأساسية", type: "action", subtextAr: "خصم قيمة الطلب وتأكيد العملية" },
      { id: "20-7", labelEn: "UPSELL", labelAr: "عرض ما بعد الشراء (Post-Purchase)", type: "upsell", subtextAr: "One-Click Upsell: قطعة ثانية بخصم 40%" },
      { id: "20-8", labelEn: "DOWNSELL", labelAr: "عرض بديل مخفض في حال الرفض", type: "upsell", subtextAr: "خيار بديل أصغر وأرخص إذا رفض الترقية" },
      { id: "20-9", labelEn: "POST-PURCHASE EMAILS", labelAr: "سلسلة إيميلات تتبع الطلب والرعاية", type: "email", subtextAr: "رقم التتبع، نصائح الاستخدام، وخصم الطلب القادم" }
    ],
    whyItWorks: "اللحظة التي يدفع فيها المشتري هي أعلى لحظة اندفاع وشراء؛ تقديم عروض مكملة مرتبطة مباشرة بالطلب يرفع السلة بـ 30-50% بسهولة.",
    commonMistake: "طرح عروض ترقية لمنتجات لا علاقة لها بالمنتج الأصلي الذي اشتراه للتو؛ الـ Upsell يجب أن يكون امتداداً طبيعياً.",
    implementationNote: "استخدم تقنية الدفع بضغطة واحدة (One-Click Upsell) بعد الدفع مباشرة بحيث لا يضطر العميل لإدخال بيانات بطاقته مجدداً."
  },
  {
    id: 21,
    number: "MAP 21",
    pageNumber: 25,
    englishName: "Free Audit Funnel",
    arabicName: "Funnel التدقيق المجاني",
    subtitle: "فحص مجاني احترافي لمشروع العميل يكتشف الثغرات ويجعل خدمتك المدفوعة هي الحل البديهي والوحيد.",
    categoryId: 1,
    categoryNameAr: "توليد العملاء المحتملين",
    categoryNameEn: "Lead Generation",
    goal: "إبهار العميل المحتمل عبر تحليل مخصص لمشروعه وكشف ثغرات تكلفه أموالاً، ثم تقديم خدمتك كحل لتلك الثغرات.",
    bestFor: "وكالات الـ SEO، خبراء الإعلانات، مصممي واجهات وتجربة المستخدم (UI/UX)، وخبراء أمن المعلومات.",
    traffic: "Direct LinkedIn Outreach / Twitter / Inbound Audit Requests",
    complexity: "متوسط",
    launchSpeed: "سريع إلى متوسط (2 - 4 أيام)",
    primaryConversion: "APPLICATION (طلب التدقيق المجاني)",
    flowNodes: [
      { id: "21-1", labelEn: "CONTENT / OUTREACH", labelAr: "تواصل مباشر أو محتوى تعليمي", type: "traffic", subtextAr: "عرض: تدقيق مجاني لموقعك أو حملاتك" },
      { id: "21-2", labelEn: "FREE AUDIT OFFER", labelAr: "صفحة عرض فحص المشاكل", type: "page", subtextAr: "وصف الجوانب التي سنقوم بمراجعتها" },
      { id: "21-3", labelEn: "APPLICATION", labelAr: "استمارة طلب الفحص والبيانات", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأولى — رابط الموقع والإيميل" },
      { id: "21-4", labelEn: "AUDIT", labelAr: "إجراء الفحص وإعداد التقرير", type: "action", subtextAr: "فيديو Loom مدته 5-7 دقائق أو تقرير مصور" },
      { id: "21-5", labelEn: "FINDINGS", labelAr: "إرسال نتائج الفحص المباشرة", type: "email", subtextAr: "عرض المشاكل الحقيقية التي تؤثر على نتائجه" },
      { id: "21-6", labelEn: "IDENTIFIED GAP", labelAr: "توضيح الفجوة والخسائر المترتبة", type: "action", subtextAr: "ما الذي يفوته العميل بسبب هذه الأخطاء" },
      { id: "21-7", labelEn: "SERVICE OFFER", labelAr: "طرح خطة العمل والخدمة لإصلاحها", type: "offer", subtextAr: "عرض تنفيذ الإصلاح بالكامل من طرفنا" },
      { id: "21-8", labelEn: "SALES CALL", labelAr: "مكالمة إغلاق الاتفاق والتعاقد", type: "action", subtextAr: "مناقشة المقترح والبدء الفوري" }
    ],
    whyItWorks: "التدقيق المخصص يعطي دليلاً ملموساً لا يقبل الشك على براعتك، ويجعل العميل يرى مشاكله بعينيه مما يولد رغبة عاجلة في الحل.",
    commonMistake: "إرسال تقارير برمجية آلية عامة (PDF مكرر بدون روح) لا يفهمها العميل؛ التقرير يجب أن يركز على الأثر التجاري بلغة مفهومة.",
    implementationNote: "سجل فيديو مخصصاً مدته 5 دقائق بوجهك وشاشتك (Loom) تشرح فيه 3 أخطاء رئيسية وكيفية علاجها؛ هذا يرفع التحويل لمكالمة لأكثر من 50%."
  },
  {
    id: 22,
    number: "MAP 22",
    pageNumber: 26,
    englishName: "Case Study Funnel",
    arabicName: "Funnel دراسة الحالة",
    subtitle: "تحويل نجاح عميل سابق إلى سردية إقناعية كاملة تجعل العميل الجديد يرغب في تحقيق نفس النتيجة بالضبط.",
    categoryId: 2,
    categoryNameAr: "الخدمات والصفقات الكبيرة",
    categoryNameEn: "Services & High Ticket",
    goal: "استخدام قصة نجاح حقيقية وموثقة لتفكيك كافة المخاوف وإثبات قدرتك على تحقيق نفس النتيجة للعميل الجديد.",
    bestFor: "وكالات التسويق B2B، المستشارين التنفيذيين، شركات التطوير، ومقدمي الحلول المتقدمة.",
    traffic: "Paid Ads on Decision Makers / LinkedIn Pulse / Organic Breakdown",
    complexity: "متوسط",
    launchSpeed: "متوسط (3 - 5 أيام)",
    primaryConversion: "CTA CLICK (طلب جلسة استراتيجية مماثلة)",
    flowNodes: [
      { id: "22-1", labelEn: "CONTENT / AD", labelAr: "محتوى أو إعلان قصة النجاح", type: "traffic", subtextAr: "عنوان: كيف ساعدنا شركة X في مضاعفة مبيعاتها" },
      { id: "22-2", labelEn: "CASE STUDY", labelAr: "صفحة دراسة الحالة المتكاملة", type: "page", subtextAr: "سرد تحليلي بالأرقام والرسوم البيانية" },
      { id: "22-3", labelEn: "BEFORE", labelAr: "الوضع قبل التدخل (المعاناة)", type: "action", subtextAr: "وصف حالة العميل السابقة وتخبطه" },
      { id: "22-4", labelEn: "PROBLEM", labelAr: "التحدي الحقيقي غير الظاهر", type: "action", subtextAr: "لماذا لم تنجح الحلول التقليدية معه" },
      { id: "22-5", labelEn: "PROCESS", labelAr: "منهجيتنا وخطوات العمل", type: "action", subtextAr: "الخطة المحددة التي طبقناها خطوة بخطوة" },
      { id: "22-6", labelEn: "AFTER", labelAr: "الوضع بعد التطبيق والتحول", type: "action", subtextAr: "شهادة العميل والواقع الجديد المريح" },
      { id: "22-7", labelEn: "RESULTS", labelAr: "الأرقام والنتائج الموثقة", type: "action", subtextAr: "زيادة الإيرادات بنسبة 280% في 90 يوماً" },
      { id: "22-8", labelEn: "WHAT CHANGED", labelAr: "ما الذي جعل هذا التحول ممكناً؟", type: "offer", subtextAr: "الآلية الخاصة بنا المتاحة لك الآن" },
      { id: "22-9", labelEn: "CTA", labelAr: "دعوة لتحقيق نفس النتيجة", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل — 'احجز جلستك لتطبيق هذا النظام'" },
      { id: "22-10", labelEn: "BOOKING", labelAr: "حجز موعد النقاش الاستراتيجي", type: "calendar", subtextAr: "بحث مدى ملائمة مشروعك لهذا الحل" }
    ],
    whyItWorks: "الناس يتشككون في الادعاءات التسويقية لكنهم يصدقون دراسات الحالة المدعومة بالأرقام وسياق المشكلة والحل الواقعي.",
    commonMistake: "سرد النتائج بدون ذكر المصاعب والأخطاء التي تم تصحيحها أثناء الرحلة؛ الصعوبات هي التي تجعل القصة حقيقية وقابلة للتصديق.",
    implementationNote: "ضمن اقتباسات مباشرة من العميل في نص دراسة الحالة ولقطة شاشة من لوحة تحكم النتائج الحقيقية (Dashboard)."
  },
  {
    id: 23,
    number: "MAP 23",
    pageNumber: 27,
    englishName: "Newsletter Funnel",
    arabicName: "Funnel النشرة البريدية",
    subtitle: "بناء علاقة أسبوعية عميقة مع جمهور مخلص ينتظر رسالتك ويثق في ترشيحاتك ومنتجاتك على المدى البعيد.",
    categoryId: 6,
    categoryNameAr: "أنظمة تحويل المحتوى",
    categoryNameEn: "Content Funnels",
    goal: "صناعة أصل إعلامي رقمي مربح يبني ثقة هادئة وتراكمية مع القراء تمكنك من تحقيق مبيعات متكررة وعقود رعاية.",
    bestFor: "الكتاب، المحللين الماليين، صناع الرأي، ومؤسسي مجتمعات رواد الأعمال والتقنية.",
    traffic: "Personal Brand / Threads / X / LinkedIn / Recommendations Network",
    complexity: "منخفض",
    launchSpeed: "سريع (1 - 2 يوم)",
    primaryConversion: "EMAIL OPT-IN (الاشتراك في النشرة الأسبوعية)",
    flowNodes: [
      { id: "23-1", labelEn: "CONTENT", labelAr: "محتوى جذاب على المنصات", type: "traffic", subtextAr: "أفكار ورؤى قصيرة تثير الرغبة في التعمق" },
      { id: "23-2", labelEn: "NEWSLETTER PAGE", labelAr: "صفحة هبوط النشرة الأنيقة", type: "page", subtextAr: "عرض موضوع النشرة، موعد الإرسال، وأرشيف الأعداد" },
      { id: "23-3", labelEn: "EMAIL OPT-IN", labelAr: "نموذج الاشتراك ببريد واحد", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأولى — الانضمام للقائمة" },
      { id: "23-4", labelEn: "WELCOME EMAIL", labelAr: "رسالة الترحيب وأفضل الأعداد", type: "email", subtextAr: "إرسال أفضل 3 مقالات كُتبت في النشرة" },
      { id: "23-5", labelEn: "REGULAR CONTENT", labelAr: "العدد الدوري الثابت والممتع", type: "email", subtextAr: "إرسال عدد أسبوعي في موعد محدد لا يتغير" },
      { id: "23-6", labelEn: "TRUST", labelAr: "تراكم الثقة والألفة مع القارئ", type: "action", subtextAr: "تحول القارئ من متابع عابر إلى صديق مخلص" },
      { id: "23-7", labelEn: "PRODUCT / AFFILIATE OFFER", labelAr: "طرح العروض والرعايات المناسبة", type: "offer", subtextAr: "مبيعات منتجاتك أو إعلانات رعاة متوافقين" }
    ],
    whyItWorks: "صندوق الوارد هو مساحة شخصية للغاية؛ الحضور المنتظم هناك بقيمة حقيقية يصنع رابطاً لا تضاهيه أي خوارزمية سوشيال ميديا.",
    commonMistake: "عدم الالتزام بموعد إرسال ثابت أو تحويل النشرة إلى نشرة إعلانية صريحة خالية من الأفكار والرأي الشخصي الملهم.",
    implementationNote: "ضع في صفحة الاشتراك عينات حقيقية من أعداد سابقة يستطيع الزائر تصفحها ليقرر الاشتراك بناءً على جودة ما يراه."
  },
  {
    id: 24,
    number: "MAP 24",
    pageNumber: 28,
    englishName: "Waitlist Funnel",
    arabicName: "Funnel قائمة الانتظار",
    subtitle: "اختبار رغبة السوق وتأكيد الطلب قبل إنفاق دقيقة واحدة في بناء المنتج، وتأمين أول 100 مشترٍ مقدماً.",
    categoryId: 8,
    categoryNameAr: "الإطلاق والرعاية المستمرة",
    categoryNameEn: "Launch & Nurture",
    goal: "التحقق من جاذبية العرض في السوق وبناء زخم ضخم من المشترين الراغبين قبل موعد الطرح الرسمي.",
    bestFor: "المشاريع الناشئة، منصات البرمجيات (SaaS)، القوالب الجديدة، ومجموعات العضوية المغلقة.",
    traffic: "Organic Teasers / Founder Storytelling / Product Hunt / Communities",
    complexity: "منخفض",
    launchSpeed: "سريع جداً (يوم واحد)",
    primaryConversion: "OPT-IN (الانضمام لقائمة الانتظار بالأولوية)",
    flowNodes: [
      { id: "24-1", labelEn: "TEASER", labelAr: "منشورات التشويق والمشكلة", type: "traffic", subtextAr: "نقاش حول مشكلة شائعة نعمل على حل جذري لها" },
      { id: "24-2", labelEn: "WAITLIST PAGE", labelAr: "صفحة قائمة الانتظار النظيفة", type: "page", subtextAr: "عنوان مبهر + لقطة شاشة أولية ونموذج تسجيل" },
      { id: "24-3", labelEn: "OPT-IN", labelAr: "تسجيل الاهتمام والحجز المسبق", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأساسية — تأكيد الرغبة" },
      { id: "24-4", labelEn: "CONFIRMATION", labelAr: "صفحة رقم ترتيبك والمشاركة", type: "page", subtextAr: "دعوة لمشاركة الرابط لتخطي قائمة الانتظار" },
      { id: "24-5", labelEn: "NURTURE", labelAr: "تحديثات مستمرة حول البناء", type: "email", subtextAr: "مشاركة كواليس التطوير واستطلاع آراء المسجلين" },
      { id: "24-6", labelEn: "EARLY ACCESS", labelAr: "الوصول المبكر للمسجلين", type: "action", subtextAr: "فتح التجربة لأول دفعة وتلقي الملاحظات" },
      { id: "24-7", labelEn: "LAUNCH", labelAr: "الإطلاق الرسمي العام", type: "action", subtextAr: "فتح باب الشراء بسعر الإطلاق الترويجي" },
      { id: "24-8", labelEn: "SALE", labelAr: "إتمام المبيعات الأولى القياسية", type: "offer", subtextAr: "تحقيق السيولة الأولية بنجاح" }
    ],
    whyItWorks: "الرغبة في الحصول على الأسبقية والانضمام لفئة النخبة الأولى تصنع حافزاً نفسياً للمشاركة والحجز الفوري قبل الجميع.",
    commonMistake: "ترك قائمة الانتظار صامتة لشهور طويلة دون إرسال أي تحديثات؛ القائمة تبرد وينسى المسجلون سبب تسجيلهم.",
    implementationNote: "أضف نظام إحالة بسيط (Viral Loop): 'شارك الرابط مع 3 أصدقاء لتحصل على وصول مبكر قبل الجميع بأسبوع'."
  },
  {
    id: 25,
    number: "MAP 25",
    pageNumber: 29,
    englishName: "Content-to-Lead Funnel",
    arabicName: "Funnel تحويل المحتوى إلى Leads",
    subtitle: "الجسر الرابط بين وصولك العضوي على السوشيال ميديا وقاعدتك البيعية، لتحويل كل مشاهدة إلى عميل محتمل.",
    categoryId: 6,
    categoryNameAr: "أنظمة تحويل المحتوى",
    categoryNameEn: "Content Funnels",
    goal: "استغلال كل قطعة محتوى تنتجها على السوشيال ميديا كمدخل مباشر يغذي قائمتك البريدية ومسار مبيعاتك بشكل منهجي.",
    bestFor: "صناع المحتوى اليومي، اليوتيوبرز، مستخدمي إنستغرام وتيك توك، ورواد الأعمال الذين ينشرون بانتظام.",
    traffic: "YouTube Descriptions / Instagram Stories & ManyChat / Blog Embeds",
    complexity: "منخفض إلى متوسط",
    launchSpeed: "سريع (1 - 2 يوم)",
    primaryConversion: "EMAIL CAPTURE (تحميل ملخص أو أداة المحتوى)",
    flowNodes: [
      { id: "25-1", labelEn: "YOUTUBE / INSTAGRAM / BLOG", labelAr: "قنوات المحتوى العام المجاني", type: "content", subtextAr: "فيديوهات وبوستات تقدم قيمة تعليمية حقيقية" },
      { id: "25-2", labelEn: "EDUCATIONAL CONTENT", labelAr: "المحتوى التعليمي عالي القيمة", type: "action", subtextAr: "حل جزء عملي وشرح المفهوم الأساسي" },
      { id: "25-3", labelEn: "CONTEXTUAL CTA", labelAr: "دعوة لاتخاذ إجراء مرتبطة بالسياق", type: "action", subtextAr: "دعوة في منتصف الفيديو: 'حمل القالب الجاهز من الرابط'" },
      { id: "25-4", labelEn: "LEAD MAGNET", labelAr: "أداة أو ملخص الحلقة التكميلي", type: "action", subtextAr: "قالب Notion أو شيت حسابات يكمل المحتوى" },
      { id: "25-5", labelEn: "EMAIL CAPTURE", labelAr: "صفحة جمع البريد واستلام الملف", type: "conversion", isPrimaryConversion: true, subtextAr: "نقطة التحويل الأساسية — إدخال الإيميل" },
      { id: "25-6", labelEn: "NURTURE", labelAr: "سلسلة الرعاية البريدية الترحيبية", type: "email", subtextAr: "تعريف بهويتك وكيف تساعده في خطوته التالية" },
      { id: "25-7", labelEn: "CORE OFFER", labelAr: "تقديم العرض الاستراتيجي المناسب", type: "offer", subtextAr: "تحويل المتابع المستفيد إلى عميل مشترٍ" }
    ],
    whyItWorks: "الـ CTA هنا مرتبط عضوياً بموضوع الفيديو؛ المشاهد متحمس للحل الآن، والهدية التكميلية توفر عليه وقت التطبيق اليدوي.",
    commonMistake: "استخدام رابط عام واحد في البايو مثل 'تواصل معي' بدلاً من تخصيص Lead Magnet دقيق يناسب الموضوع المطروح.",
    implementationNote: "استخدم أداة أتمتة الرسائل (مثل ManyChat على إنستغرام) بحيث يكتب المتابع كلمة محددة في التعليق ليصله الرابط في الخاص فوراً."
  }
];

export const FUNNEL_DECISION_TREE = [
  {
    goalId: "email",
    titleAr: "بناء وتكبير القائمة البريدية",
    titleEn: "Build Email List",
    descAr: "تحويل الزوار والمتابعين إلى جمهور مملوك تتواصل معه وقتما تشاء دون وسيط.",
    recommendedFunnels: [
      { mapId: 1, nameAr: "Lead Magnet Funnel", badge: "الأسرع والأسهل" },
      { mapId: 2, nameAr: "Email Capture Funnel", badge: "للمحتوى المباشر" },
      { mapId: 16, nameAr: "Quiz Funnel", badge: "أعلى معدل تفاعل" },
      { mapId: 23, nameAr: "Newsletter Funnel", badge: "للنشرات المستمرة" }
    ]
  },
  {
    goalId: "services",
    titleAr: "بيع الخدمات والوكالات والاستشارات",
    titleEn: "Sell Services & Consulting",
    descAr: "فتح محادثات مبيعات وحجز مواعيد مكالمات استراتيجية مع عملاء مؤهلين.",
    recommendedFunnels: [
      { mapId: 4, nameAr: "Service Inquiry Funnel", badge: "للخدمات المحددة" },
      { mapId: 5, nameAr: "Call Booking Funnel", badge: "الأفضل للمكالمات" },
      { mapId: 18, nameAr: "Consultation Funnel", badge: "للاستشارات المدفوعة" },
      { mapId: 21, nameAr: "Free Audit Funnel", badge: "إبهار بالتدقيق العملي" }
    ]
  },
  {
    goalId: "high-ticket",
    titleAr: "بيع البرامج مرتفعة السعر (High Ticket)",
    titleEn: "High-Ticket Services & Mentorship",
    descAr: "إغلاق صفقات كبرى تتجاوز $2,000 إلى $10,000+ بانتقائية وهيبة تسويقية.",
    recommendedFunnels: [
      { mapId: 6, nameAr: "High-Ticket Application Funnel", badge: "الأقوى للصفقات الكبرى" },
      { mapId: 22, nameAr: "Case Study Funnel", badge: "الإقناع بدراسة الحالة" },
      { mapId: 10, nameAr: "VSL Funnel", badge: "فيديو مبيعات مقنع" }
    ]
  },
  {
    goalId: "courses",
    titleAr: "بيع الكورسات والمنتجات الرقمية",
    titleEn: "Sell Courses & Digital Products",
    descAr: "أتمتة مبيعات البرامج التعليمية والورش والكتب الرقمية بمعدلات تحويل مرتفعة.",
    recommendedFunnels: [
      { mapId: 9, nameAr: "Sales Page Funnel", badge: "الكلاسيكي الموثوق" },
      { mapId: 8, nameAr: "Evergreen Webinar Funnel", badge: "ماكينة بيع على مدار الساعة" },
      { mapId: 11, nameAr: "Mini Course Funnel", badge: "تعليم ثم بيع" },
      { mapId: 3, nameAr: "Tripwire Funnel", badge: "تغطية تكلفة الإعلانات" }
    ]
  },
  {
    goalId: "affiliate",
    titleAr: "التسويق بالعمولة (Affiliate Marketing)",
    titleEn: "Affiliate Marketing",
    descAr: "ترشيح منتجات الآخرين وبناء ثقة استباقية لكسب أعلى نسبة عمولة ممكنة.",
    recommendedFunnels: [
      { mapId: 13, nameAr: "Affiliate Review Funnel", badge: "مراجعة متعمقة مع بونص" },
      { mapId: 14, nameAr: "Affiliate Comparison Funnel", badge: "مقارنة أداة بأداة" },
      { mapId: 15, nameAr: "Bridge Page Funnel", badge: "تأهيل قبل موقع البائع" }
    ]
  },
  {
    goalId: "launch",
    titleAr: "إطلاق منتج جديد أو فتح دفعة جديدة",
    titleEn: "Product Launch & Waitlist",
    descAr: "صناعة ترقب جماعي مكثف وفتح باب الشراء لفترة وجيزة لتحقيق قفزة مبيعات.",
    recommendedFunnels: [
      { mapId: 12, nameAr: "Course Launch Funnel", badge: "إطلاق دوري بمهلة إغلاق" },
      { mapId: 19, nameAr: "Product Launch Funnel", badge: "نموذج جيف ووكر الكلاسيكي" },
      { mapId: 24, nameAr: "Waitlist Funnel", badge: "قائمة انتظار وحجز مسبق" }
    ]
  },
  {
    goalId: "ecommerce",
    titleAr: "مضاعفة مبيعات وسلة المتجر الإلكتروني",
    titleEn: "Increase E-commerce Order Value",
    descAr: "رفع متوسط قيمة سلة الشراء ومضاعفة ربحية الإعلانات عبر ترقيات فورية.",
    recommendedFunnels: [
      { mapId: 20, nameAr: "E-commerce Upsell Funnel", badge: "Order Bump + Upsell فوري" },
      { mapId: 3, nameAr: "Tripwire Funnel", badge: "عرض استدرافي لا يُقاوم" }
    ]
  },
  {
    goalId: "content",
    titleAr: "تحويل مشاهدي المحتوى إلى عملاء",
    titleEn: "Turn Content into Owned Leads",
    descAr: "الاستفادة من كل فيديو وبوست لتحويل المتابعين إلى مشترين في قائمتك الخاصة.",
    recommendedFunnels: [
      { mapId: 25, nameAr: "Content-to-Lead Funnel", badge: "ربط عضوي مع كل حلقة" },
      { mapId: 23, nameAr: "Newsletter Funnel", badge: "نشرة أسبوعية متخصصة" }
    ]
  }
];

export const COMMON_MISTAKES = [
  {
    id: 1,
    titleAr: "التصميم قبل تحديد الهدف والمسار",
    titleEn: "Designing Before Mapping",
    explanationAr: "البدء فوراً بفتح برامج التصميم مثل Webflow أو WordPress قبل رسم رحلة العميل خطوة بخطوة؛ هذا يجعلك تبني صفحات جميلة شكلياً لكنها عاجزة استراتيجياً عن التحويل.",
    solutionAr: "ارسم خريطة الـ Funnel أولاً على الورق أو الدليل، وحدد ما يحدث عند كل نقرة، ثم ابدأ مرحلة التصميم."
  },
  {
    id: 2,
    titleAr: "وجود أكثر من CTA رئيسي في نفس الصفحة",
    titleEn: "Multiple Competing CTAs",
    explanationAr: "تشتيت الزائر بطلب الشراء وتحميل الملف والاشتراك في القناة والتواصل على واتساب في نفس المكان؛ القاعدة الذهبية: خيارات كثيرة تعني عدم اتخاذ أي قرار (Analysis Paralysis).",
    solutionAr: "صفحة واحدة = هدف واحد = زر إجراء رئيسي واحد (Primary CTA) يخدم الخطوة التالية المباشرة."
  },
  {
    id: 3,
    titleAr: "تجاهل مصدر الـ Traffic ومستوى وعي الزائر",
    titleEn: "Traffic Awareness Mismatch",
    explanationAr: "معاملة الزائر القادم من إعلان بارد يراك لأول مرة بنفس طريقة الزائر الدافئ الذي يتابع محتواك منذ سنتين؛ طلب الشراء المباشر من جمهور بارد يحرق ميزانيتك الإعلانية.",
    solutionAr: "طابق صفحة الهبوط مع درجة وعي الزائر؛ البارد يحتاج تعليماً وهدية مجانية، والدافئ مستعد لصفحة المبيعات والمقارنة."
  },
  {
    id: 4,
    titleAr: "الاعتماد على الصفحة فقط وإهمال الـ Follow-up",
    titleEn: "No Automated Follow-up",
    explanationAr: "توقع أن 100% من المبيعات ستحدث في الزيارة الأولى؛ الواقع أن أكثر من 80% من المبيعات تتم في مرحلة المتابعة والرعاية البريدية اللاحقة حينما يصبح العميل جاهزاً.",
    solutionAr: "اربط كل فانل بسلسلة أوتوميشن بريدية من 3 إلى 5 رسائل على الأقل تواصل تقديم القيمة وتزيل الشكوك."
  },
  {
    id: 5,
    titleAr: "ضعف الإثبات الاجتماعي وسابقة النتائج (Weak Proof)",
    titleEn: "Lack of Concrete Proof",
    explanationAr: "إطلاق وعود براقة دون تقديم دليل ملموس (شهادات عملاء حقيقية، أرقام دقيقة، لقطات شاشة، قبل وبعد)؛ الشك هو القاتل الأول للتحويل في السوق الرقمي العربي.",
    solutionAr: "اجعل الإثبات متداخلاً في كل مراحل الفانل: في العنوان، وسط الصفحة، وبجانب زر اتخاذ الإجراء النهائي."
  },
  {
    id: 6,
    titleAr: "عدم وضوح نقطة التحويل (Conversion Event)",
    titleEn: "Vague Conversion Event",
    explanationAr: "بناء مسار غير واضح المعالم دون تحديد ما هو الإجراء الرقمي الدقيق الذي نعتبر عنده أن المرحلة نجحت (هل هو إرسال إيميل؟ ملء فورم؟ ضغط زر؟ إتمام دفع؟).",
    solutionAr: "حدد Conversion Event وحيداً لكل صفحة وضعه بلون ذهبي بارز في خريطتك قبل البدء."
  },
  {
    id: 7,
    titleAr: "بناء Funnel أضخم وأعقد مما يحتاجه البيزنس",
    titleEn: "Over-Engineering the Funnel",
    explanationAr: "محاولة ربط 15 أداة وبرمجية ويبينار وأوتوميشن معقد قبل اختبار العرض؛ النتيجة هي الإحباط والتعثر التقني وتأخر الإطلاق لشهور طويلة دون جدوى.",
    solutionAr: "'أقصر Funnel تحقق الهدف بوضوح أفضل من Funnel معقدة بلا سبب'؛ ابدأ بأبسط هيكل يعمل، ثم طوّر بناءً على بيانات حقيقية."
  }
];

export const AUTHOR_INFO = {
  nameAr: "محمد عادل",
  nameEn: "Mohamed Adel",
  roleAr: "استشاري استراتيجيات الـ Funnels وأنظمة التحويل الرقمي",
  roleEn: "Funnel Strategy & Conversion Systems",
  phone: "+201505868589",
  whatsappUrl: "https://wa.me/201505868589",
  quoteAr: "لا نبني الصفحة أولًا ثم نفكر في الرحلة… نحدد الرحلة أولًا، ثم نبني ما يحتاجه العميل فعلًا.",
  copyrightYear: 2026
};
