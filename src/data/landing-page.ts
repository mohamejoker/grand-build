export const BRAND = "Grand Build";
export const WHATSAPP_URL = "https://wa.me/201063665458";
export const PHONE_DISPLAY = "01063665458";

export interface Service {
  num: string;
  icon: string;
  title: string;
  desc: string;
  img: string;
  features: string[];
}

export interface ProcessStep {
  n: string;
  icon: string;
  t: string;
  d: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Feature {
  icon: string;
  t: string;
  d: string;
}

export interface PortfolioItem {
  img: string;
  title: string;
  tag: string;
  span: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Branch {
  icon: string;
  tag: string;
  title: string;
  desc: string;
  contact: string;
  map: string;
}

export interface Statistic {
  n: number;
  s: string;
  label: string;
  en: string;
}

export interface TrustItem {
  icon: string;
  t: string;
  s: string;
}

// Services Data
export const services: Service[] = [
  {
    num: "01",
    icon: "🎨",
    title: "تصميم وتنفيذ الديكور",
    desc: "تصاميم داخلية فريدة تجمع بين الجمال والوظيفة. نقدم حلولاً مخصصة مع دراسة دقيقة للإضاءة والمساحات والألوان.",
    img: "serviceDesign",
    features: ["تصاميم 3D", "مشورة مجانية", "تنفيذ احترافي"],
  },
  {
    num: "02",
    icon: "🏗️",
    title: "تشطيب سكني وتجاري",
    desc: "تحويل المباني الخام إلى مساحات جاهزة للاستخدام مع الالتزام الكامل بالمواعيد والجودة العالية في كل تفصيلة.",
    img: "serviceFinishing",
    features: ["دقة عالية", "التزام بالمواعيد", "إشراف يومي"],
  },
  {
    num: "03",
    icon: "✨",
    title: "تشطيبات فاخرة",
    desc: "خدمات تشطيب فائقة الجودة باستخدام أجود الخامات والمواد المعتمدة دولياً لضمان الفخامة والمتانة.",
    img: "serviceLuxury",
    features: ["خامات فاخرة", "ضمان شامل", "جودة عالمية"],
  },
];

// Process Steps Data
export const processSteps: ProcessStep[] = [
  {
    n: "01",
    icon: "📍",
    t: "المعاينة",
    d: "زيارة الموقع وفهم احتياجاتك والميزانية المتاحة.",
  },
  {
    n: "02",
    icon: "🎨",
    t: "التصميم",
    d: "تقديم تصاميم ثلاثية الأبعاد ومخططات تنفيذية.",
  },
  {
    n: "03",
    icon: "👷",
    t: "التنفيذ",
    d: "فريق هندسي متخصص مع إشراف يومي دقيق.",
  },
  {
    n: "04",
    icon: "🔑",
    t: "التسليم",
    d: "تسليم نهائي مع ضمان شامل لمدة سنتين.",
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    name: "محمد أحمد",
    role: "صاحب شقة - التجمع الخامس",
    rating: 5,
    text: "العمل رائع جداً! الفريق احترافي والالتزام بالمواعيد ممتاز. شقتي الآن تحفة فنية.",
    avatar: "👨‍💼",
  },
  {
    name: "فاطمة السيد",
    role: "مصممة ديكور",
    rating: 5,
    text: "تعاملت معهم لعدة مشاريع. الدقة والاحترافية موجودة دائماً في كل عمل.",
    avatar: "👩‍🎨",
  },
  {
    name: "أحمد علي",
    role: "صاحب فيلا - الشيخ زايد",
    rating: 5,
    text: "أفضل اختيار قررته. جودة عالية وأسعار عادلة وتواصل مباشر ممتاز.",
    avatar: "👨‍💼",
  },
];

// Features Data
export const features: Feature[] = [
  {
    icon: "🛡️",
    t: "ضمان شامل",
    d: "ضمان على جميع الأعمال لمدة سنتين كاملتين.",
  },
  {
    icon: "💰",
    t: "أسعار شفافة",
    d: "عرض سعر مفصّل بدون رسوم خفية أو تكاليف إضافية.",
  },
  {
    icon: "✨",
    t: "خامات معتمدة",
    d: "نستخدم فقط المواد من أفضل الموردين المعتمدين.",
  },
  {
    icon: "👁️",
    t: "إشراف يومي",
    d: "مهندس متخصص مقيم في الموقع طوال التنفيذ.",
  },
  {
    icon: "🎨",
    t: "تصاميم 3D",
    d: "شاهد المشروع قبل البدء بكل تفصيلة دقيقة.",
  },
  {
    icon: "📞",
    t: "دعم 24/7",
    d: "خط ساخن مفتوح للتواصل مع إدارة المشروع دائماً.",
  },
];

// Portfolio Data
export const portfolioItems: PortfolioItem[] = [
  {
    img: "p1",
    title: "شقة فاخرة - التجمع الخامس",
    tag: "سكني",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: "p3",
    title: "مطبخ مودرن - الشيخ زايد",
    tag: "ديكور",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    img: "p2",
    title: "غرفة نوم رئيسية",
    tag: "تشطيب",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: "p4",
    title: "مكتب إداري - سموحة",
    tag: "تجاري",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: "p6",
    title: "فيلا الشيخ زايد",
    tag: "فاخرة",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    img: "p5",
    title: "حمام رخامي فاخر",
    tag: "تشطيب",
    span: "md:col-span-2 md:row-span-1",
  },
];

// FAQ Data
export const faqItems: FAQ[] = [
  {
    q: "كم تستغرق مدة التشطيب الكامل للشقة؟",
    a: "تعتمد المدة على حجم المشروع والمواد المستخدمة. في المتوسط، تستغرق شقة بحجم 100-150 متر مربع حوالي 45-60 يوم عمل.",
  },
  {
    q: "هل تقدمون خدمات التصميم مجاناً؟",
    a: "نعم! نقدم استشارة مجانية وتصاميم 3D أولية. بعد موافقتك، يتم تضمين تكاليف التصميم النهائي في عرض السعر.",
  },
  {
    q: "ما نوع الضمان الذي تقدمونه؟",
    a: "نقدم ضمان شامل لمدة سنتين على جميع الأعمال والمواد. يغطي الضمان أي عيوب أو مشاكل قد تظهر خلال هذه الفترة.",
  },
  {
    q: "هل يمكن البدء بالعمل قبل الموافقة على التصميم النهائي؟",
    a: "لا، نلتزم بالبدء فقط بعد موافقتك الكاملة على التصميم والعرض السعري. هذا يضمن تحقيق رؤيتك بدقة.",
  },
  {
    q: "هل تتعاملون مع المشاريع الصغيرة؟",
    a: "نعم! نتعامل مع جميع أحجام المشاريع من تشطيبات غرفة واحدة إلى فلل كاملة. لا توجد حد أدنى لحجم المشروع.",
  },
  {
    q: "كيف يمكن متابعة تقدم المشروع؟",
    a: "يمكنك متابعة المشروع بشكل يومي من خلال التطبيق الخاص بنا أو عبر الاتصال المباشر. مهندس المشروع متاح دائماً للتواصل معك.",
  },
];

// Branches Data
export const branches: Branch[] = [
  {
    icon: "🏢",
    tag: "المقر الرئيسي",
    title: "القاهرة - هليوبوليس",
    desc: "يقع مكتبنا الرئيسي في قلب هليوبوليس (مصر الجديدة)، المنطقة الحيوية في القاهرة، حيث نخدم عملائنا في العاصمة والمناطق المحيطة.",
    contact: "01063665458",
    map: "https://www.google.com/maps?q=Heliopolis,Cairo,Egypt&output=embed",
  },
  {
    icon: "🌊",
    tag: "فرع الساحل الشمالي",
    title: "الإسكندرية - سيتي سنتر",
    desc: "نتواجد في عروس البحر المتوسط بأحدث فروعنا لتقديم خدماتنا المتميزة لعملاء الإسكندرية والساحل الشمالي بكفاءة عالية.",
    contact: "01063665458",
    map: "https://www.google.com/maps?q=City+Center+Alexandria,Egypt&output=embed",
  },
];

// Statistics Data
export const statistics: Statistic[] = [
  { n: 12, s: "+", label: "سنة خبرة", en: "Years" },
  { n: 250, s: "+", label: "مشروع منجز", en: "Projects" },
  { n: 180, s: "+", label: "عميل سعيد", en: "Clients" },
  { n: 24, s: "/7", label: "دعم فني", en: "Support" },
];

// Hero Trust Items
export const heroTrustItems: TrustItem[] = [
  { icon: "✓", t: "ضمان شامل", s: "2 سنة" },
  { icon: "⏱", t: "تسليم بالموعد", s: "100%" },
  { icon: "✨", t: "خامات معتمدة", s: "فاخرة" },
  { icon: "👥", t: "فريق متخصص", s: "خبرة عالية" },
];
