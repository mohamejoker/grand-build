# جراند بيلد - صفحة الهبوط المحترفة

## نظرة عامة

صفحة هبوط احترافية وحديثة لشركة **جراند بيلد** المتخصصة في التصميم الداخلي والتشطيبات الفاخرة. مبنية بأحدث تقنيات الويب الحديثة مع التركيز على الأداء والتصميم الجذاب.

### المميزات الرئيسية

✨ **تصميم احترافي وحديث**

- Hero section بصري مميز مع animations سلسة
- Navigation sticky محسّنة مع دعم RTL
- Sections متعددة مع scroll animations
- Responsive design متقدم لجميع الأجهزة

🎯 **تحسينات معمارية**

- بيانات مستخرجة في ملف منفصل
- مكونات قابلة لإعادة الاستخدام
- Type-safe code مع TypeScript
- Code organization احترافية

📱 **تجربة مستخدم ممتازة**

- أداء عالي وسرعة تحميل
- متجاوبة على جميع الأجهزة
- Accessibility محسّنة
- CTAs واضحة وفعالة

---

## المتطلبات

- Node.js 18+
- npm أو yarn

---

## البدء السريع

```bash
# 1. تثبيت الاعتماديات
npm install

# 2. تنسيق الكود
npm run format

# 3. بناء المشروع
npm run build

# 4. معاينة بناء الإنتاج
npm run preview
```

---

## هيكل المشروع

```
src/
├── data/
│   └── landing-page.ts          # جميع بيانات الصفحة (خدمات، شهادات، أسئلة، إلخ)
├── components/
│   ├── landing/                 # مكونات صفحة الهبوط
│   │   ├── reveal.tsx           # Scroll animation wrapper
│   │   ├── counter.tsx          # عداد متحرك
│   │   └── section-eyebrow.tsx  # رأس القسم
│   ├── icons.tsx                # مكونات الأيقونات
│   └── ui/                      # مكونات shadcn/ui
├── routes/
│   └── index.tsx                # صفحة الهبوط الرئيسية
├── assets/                      # الصور والملفات الثابتة
└── styles.css                   # الأنماط العامة والـ animations
```

---

## أقسام الصفحة

### 1. Hero Section

- عنوان رئيسي قوي
- عنوان فرعي موضح
- أزرار CTA محسّنة
- شريط ثقة مع 4 عناصر

### 2. Navigation

- Navigation sticky في الأعلى
- روابط سريعة للأقسام
- زر تواصل بـ WhatsApp
- دعم كامل للعربية

### 3. Services Section

- 3 خدمات رئيسية
- بطاقات محسّنة مع صور
- ميزات لكل خدمة
- أيقونات emoji

### 4. Process Section

- 4 خطوات واضحة
- Timeline visualization
- أيقونات موضوعية
- أسهم اتصال على Desktop

### 5. Why Us / Features

- 6 ميزات تنافسية
- تصميم بطاقات احترافي
- أيقونات معبرة

### 6. Testimonials (جديد)

- 3 شهادات من عملاء
- تقييمات نجمية
- صور Avatar
- تصميم احترافي

### 7. Portfolio

- معرض صور بتخطيط Bento
- 6 مشاريع منجزة
- تأثيرات hover محسّنة
- Lazy loading للصور

### 8. FAQ (جديد)

- 6 أسئلة شائعة
- Accordion component
- إجابات تفصيلية
- تصميم منظم

### 9. Branches

- فرعي الشركة (القاهرة والإسكندرية)
- معلومات الاتصال
- خرائط Google Maps
- تصميم منطقي

### 10. Footer

- معلومات الشركة
- روابط سريعة
- قائمة الخدمات
- معلومات الاتصال

---

## تحديث المحتوى

جميع محتويات الصفحة موجودة في `src/data/landing-page.ts`. لا تحتاج لتعديل أي كود!

### تحديث الخدمات

```typescript
// في src/data/landing-page.ts
export const services: Service[] = [
  {
    num: "01",
    icon: "🎨",
    title: "اسم الخدمة",
    desc: "وصف الخدمة...",
    img: serviceImage,
    features: ["ميزة 1", "ميزة 2"],
  },
  // أضف خدمات أخرى
];
```

### إضافة شهادة جديدة

```typescript
export const testimonials: Testimonial[] = [
  {
    name: "اسم العميل",
    role: "المسمى - المكان",
    rating: 5,
    text: "نص الشهادة...",
    avatar: "👤",
  },
  // أضف شهادات أخرى
];
```

### تحديث رقم الهاتف

```typescript
export const PHONE_DISPLAY = "01063665458";
export const WHATSAPP_URL = "https://wa.me/201063665458";
```

---

## الأنماط والتصميم

### نظام الألوان

```
--brand:     اللون الأساسي (أزرق داكن)
--accent:    اللون الثانوي (تركواز)
--secondary: اللون الفاتح (رمادي فاتح)
```

### الخطوط

```
Display:     Tajawal - للعناوين الكبيرة
Body:        Tajawal - للنصوص العادية
Mono:        JetBrains Mono - للأكواد والأرقام
```

### نظام المسافات

يستخدم نظام 8px:

- gap-2 = 8px
- gap-4 = 16px
- gap-6 = 24px
- gap-8 = 32px

---

## أوامر مفيدة

```bash
# تنسيق الكود بـ Prettier
npm run format

# بناء للإنتاج
npm run build

# بناء للتطوير
npm run build:dev

# معاينة الإنتاج محلياً
npm run preview

# فحص الكود
npm run lint
```

---

## التوثيق

تحقق من الملفات التالية للمزيد من المعلومات:

- **PROJECT_STRUCTURE.md** - شرح هيكل المشروع الكامل
- **DEVELOPER_GUIDE.md** - دليل الـ developers والـ best practices
- **REFACTORING_SUMMARY.md** - ملخص التحسينات والتعديلات
- **COMPLETION_REPORT.md** - تقرير اكتمال المشروع

---

## التحسينات المضافة

### تحسينات التصميم ✨

- Hero section محسّن مع typography أفضل
- Navigation محسّن مع gradient effects
- Services cards بتصميم جديد
- Process section مع timeline
- Testimonials section جديدة
- FAQ section جديدة
- Portfolio محسّن
- Footer بتصميم جديد

### تحسينات الكود 🛠️

- استخراج البيانات في ملف منفصل
- مكونات قابلة لإعادة الاستخدام
- Type-safe code مع TypeScript
- إصلاح جميع مشاكل Prettier
- Strict TypeScript checks
- أفضل code organization

### تحسينات الأداء ⚡

- Lazy loading للصور
- Optimized animations
- CSS محسّن
- Bundle size محترم
- Build time سريع (~12s)

---

## الدعم والمساعدة

### مشاكل شائعة وحلولها

**المشكلة**: الصور لا تحمل
**الحل**: تأكد من المسار الصحيح في `src/assets/`

**المشكلة**: الأنماط لا تطبق
**الحل**: تأكد من أسماء classes صحيحة وأن Tailwind مكوّن بشكل صحيح

**المشكلة**: أخطاء TypeScript
**الحل**: شغل `npm run build` لمعرفة الأخطاء الدقيقة

---

## المواصفات التقنية

- **Framework**: React 19.2.0 + TanStack Start 1.167.50
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.2.1
- **UI Components**: shadcn/ui (47 مكون متاح)
- **Language**: TypeScript 5.8.3
- **Package Manager**: npm

---

## الإحصائيات

### حجم الملفات

```
CSS:  114.79 kB (16.79 kB gzipped)
JS:   440 kB total (152 kB gzipped)
```

### وقت البناء

```
Client: 10.20s
Server: 1.61s
Total:  ~12s
```

### جودة الكود

```
Prettier Errors:     0 ✓
TypeScript Errors:   0 ✓
Modules:             2015 ✓
```

---

## الترخيص

هذا المشروع خاص بشركة جراند بيلد.

---

## تاريخ الإنشاء والتحديثات

- **تاريخ الإنشاء**: 2026-05-29
- **آخر تحديث**: 2026-05-29
- **الإصدار**: 1.0.0
- **الحالة**: ✅ جاهز للإنتاج

---

## الخطوات التالية

### المرحلة 2 المقترحة

- [ ] استخراج مكونات الأقسام الكبرى
- [ ] إضافة نموذج اتصال
- [ ] تحسينات إضافية للـ SEO
- [ ] التكامل مع نظام CMS

### المرحلة 3 المقترحة

- [ ] دعم لغات متعددة (i18n)
- [ ] نظام إدارة محتوى
- [ ] تحليلات متقدمة
- [ ] تحسينات الأداء

---

## للمزيد من المعلومات

- اطلع على `DEVELOPER_GUIDE.md` لإرشادات التطوير
- اطلع على `PROJECT_STRUCTURE.md` لفهم الهيكل
- اطلع على `COMPLETION_REPORT.md` للتفاصيل الكاملة

---

**حالة المشروع**: ✅ **جاهز للإنتاج**
**جودة الكود**: ✅ **ممتازة**
**التوثيق**: ✅ **شاملة**
