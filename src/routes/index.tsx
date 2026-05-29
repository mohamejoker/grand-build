import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal, Counter, SectionEyebrow } from "@/components/landing";
import logo from "@/assets/grand-build-logo.jpg";
import heroImage from "@/assets/hero-interior.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceFinishing from "@/assets/service-finishing.jpg";
import serviceLuxury from "@/assets/service-luxury.jpg";
import p1 from "@/assets/portfolio/project-1.jpg";
import p2 from "@/assets/portfolio/project-2.jpg";
import p3 from "@/assets/portfolio/project-3.jpg";
import p4 from "@/assets/portfolio/project-4.jpg";
import p5 from "@/assets/portfolio/project-5.jpg";
import p6 from "@/assets/portfolio/project-6.jpg";
import { BRAND, WHATSAPP_URL, PHONE_DISPLAY, heroTrustItems } from "@/data/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grand Build | Premium Interior Design & Finishing — Cairo & Alexandria" },
      {
        name: "description",
        content:
          "Grand Build — شركة رائدة في التصميم الداخلي والتشطيبات الفاخرة بالقاهرة والإسكندرية. حلول معمارية متكاملة، تنفيذ احترافي، وتسليم في الموعد.",
      },
      { property: "og:title", content: "Grand Build — Interior Design & Finishing" },
      {
        property: "og:description",
        content: "Premium architectural and finishing solutions in Cairo and Alexandria.",
      },
      { property: "og:image", content: heroImage },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Grand Build",
          alternateName: "جراند بيلد للديكور والتشطيبات",
          telephone: "+201063665458",
          image: heroImage,
          areaServed: ["Cairo", "Alexandria", "Egypt"],
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "Heliopolis",
              addressRegion: "Cairo",
              addressCountry: "EG",
            },
            {
              "@type": "PostalAddress",
              addressLocality: "City Center",
              addressRegion: "Alexandria",
              addressCountry: "EG",
            },
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="bg-background text-foreground font-body selection:bg-brand/10">
      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp - تواصل معنا"
        className="tap-press fixed bottom-4 left-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-2xl shadow-whatsapp/40 transition-all hover:scale-110 hover:shadow-whatsapp/60 md:bottom-6 md:left-6"
      >
        <span
          className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring"
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 24 24"
          className="relative h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
      </a>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 border-b border-black/5 bg-background/80 px-4 py-3 backdrop-blur-xl transition-all sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-2 transition-transform hover:scale-105 sm:gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-brand to-accent shadow-lg">
              <img src={logo} alt={BRAND} className="h-full w-full object-cover" />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span
                className="font-display text-base font-extrabold tracking-tight text-brand sm:text-lg"
                dir="ltr"
              >
                {BRAND}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/50">
                تشطيب وديكور فاخر
              </span>
            </div>
          </a>
          <div className="hidden items-center gap-8 font-mono text-xs font-medium text-foreground/70 md:flex">
            <a href="#services" className="transition-all hover:text-brand hover:gap-1">
              الخدمات
            </a>
            <a href="#process" className="transition-all hover:text-brand">
              الخطوات
            </a>
            <a href="#portfolio" className="transition-all hover:text-brand">
              الأعمال
            </a>
            <a href="#faq" className="transition-all hover:text-brand">
              الأسئلة
            </a>
            <a href="#branches" className="transition-all hover:text-brand">
              الفروع
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-press inline-flex min-h-[40px] items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent/80 px-5 py-2 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/40 hover:scale-105 sm:px-6 sm:py-2.5 sm:text-base"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            تواصل
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="top"
        className="relative flex min-h-[75vh] items-center overflow-hidden pb-16 pt-10 sm:min-h-[82vh] sm:pb-24 md:min-h-[90vh] md:pb-32 md:pt-24"
      >
        {/* Background elements */}
        <div
          className="pointer-events-none absolute inset-0 z-0 pattern-grid opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-40 -right-40 z-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-float"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 -left-32 z-0 h-80 w-80 rounded-full bg-brand/8 blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center opacity-[0.03] md:flex">
          <span
            className="select-none font-display text-[20rem] font-extrabold leading-none tracking-tighter lg:text-[28rem]"
            dir="ltr"
          >
            GB
          </span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="max-w-[900px] animate-reveal">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-brand/15 bg-gradient-to-r from-brand/8 to-accent/5 px-4 py-2 sm:mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs">
                شركة رائدة في مصر منذ 2013
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="mb-4 text-balance font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-brand sm:text-6xl md:mb-6 md:text-7xl lg:text-8xl"
              dir="ltr"
            >
              {BRAND}
            </h1>

            {/* Subheading line */}
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent/80 sm:mb-5 sm:text-sm">
              تشطيب • ديكور • معمار
            </p>

            {/* Main tagline */}
            <h2 className="mb-6 max-w-[50ch] text-pretty font-display text-2xl font-bold leading-[1.2] text-foreground/90 sm:text-3xl md:mb-8 md:text-4xl lg:text-5xl">
              نحوّل أحلامك إلى مساحات تنبض بالفخامة والجمال
            </h2>

            {/* Description */}
            <p className="mb-10 max-w-[60ch] text-pretty text-base leading-relaxed text-foreground/65 sm:text-lg md:mb-12 md:text-xl">
              شركة متخصصة في التصميم الداخلي والتشطيبات الفاخرة. نجمع بين الابتكار المعماري والدقة
              الحرفية لتحقيق رؤيتك بكل تفصيلة.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mb-12 md:mb-16">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-press group relative inline-flex min-h-[54px] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-brand to-brand/90 px-8 py-4 text-center text-base font-bold text-brand-foreground shadow-xl shadow-brand/30 transition-all hover:shadow-2xl hover:shadow-brand/40 hover:scale-[1.02] sm:w-auto sm:px-10 sm:text-lg"
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <span className="relative flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                  احصل على عرض مجاني
                </span>
              </a>
              <a
                href={`tel:+2${PHONE_DISPLAY}`}
                className="tap-press group relative flex min-h-[54px] w-full items-center justify-center gap-3 overflow-hidden rounded-lg border-2 border-brand/30 bg-gradient-to-r from-card to-card/50 px-8 py-4 transition-all hover:border-brand/60 hover:bg-card hover:shadow-lg hover:shadow-brand/10 sm:w-auto sm:px-10"
              >
                <svg
                  className="h-5 w-5 text-brand group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="font-mono text-sm font-bold text-brand" dir="ltr">
                    {PHONE_DISPLAY}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-foreground/50">
                    اتصل بنا الآن
                  </span>
                </div>
              </a>
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-8 sm:grid-cols-4 md:pt-10">
              {heroTrustItems.map((i) => (
                <div
                  key={i.s}
                  className="group relative flex flex-col gap-2 rounded-lg p-3 transition-all hover:bg-card/50 sm:p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-accent group-hover:scale-125 transition-transform">
                      {i.icon}
                    </span>
                    <span className="text-sm font-bold text-brand sm:text-base">{i.t}</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-foreground/50 sm:text-xs">
                    {i.s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Visual anchor */}
      <section className="relative z-20 -mt-8 px-4 sm:-mt-12 sm:px-6 md:-mt-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="group relative overflow-hidden rounded-sm shadow-2xl">
              <img
                src={heroImage}
                alt="مشروع تشطيب فاخر — Grand Build"
                width={1600}
                height={900}
                className="h-[220px] w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 sm:h-[380px] md:h-[600px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/50 via-brand/0 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:right-6 sm:left-6">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
                    Featured Project
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold drop-shadow sm:text-2xl">
                    شقة فاخرة — التجمع الخامس
                  </h3>
                </div>
                <span className="hidden rounded-full bg-white/15 px-3 py-1 font-mono text-xs backdrop-blur sm:inline-flex">
                  2025
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-black/5 bg-black/5 md:grid-cols-4">
            {[
              { n: 12, s: "+", label: "سنة خبرة", en: "Years" },
              { n: 250, s: "+", label: "مشروع منجز", en: "Projects" },
              { n: 180, s: "+", label: "عميل سعيد", en: "Clients" },
              { n: 24, s: "/7", label: "دعم فني", en: "Support" },
            ].map((stat) => (
              <div key={stat.en} className="bg-card p-6 text-center sm:p-8">
                <div className="font-display text-3xl font-extrabold text-brand sm:text-5xl">
                  <Counter to={stat.n} suffix={stat.s} />
                </div>
                <div className="mt-2 text-xs text-foreground/60 sm:text-sm">{stat.label}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30">
                  {stat.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/40 px-4 py-10 sm:px-6 sm:py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionEyebrow en="About" ar="من نحن" />
            <h2 className="mb-6 font-display text-2xl font-bold text-brand sm:text-3xl md:text-4xl">
              رواد في الديكور والتشطيبات
            </h2>
            <p className="text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
              Grand Build هي شركة رائدة تقدم خدمات شاملة في التصميم الداخلي والتشطيبات للأفراد
              والشركات. نتميز بالحلول المبتكرة والتصاميم الفريدة، مع التركيز على الجودة والابتكار في
              كل تفصيلة.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col items-start gap-4 md:mb-20 md:flex-row md:items-end md:justify-between md:gap-8">
              <div className="max-w-2xl">
                <SectionEyebrow en="Services" ar="الخدمات" />
                <h2 className="mb-4 font-display text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
                  خدماتنا المتخصصة والمتكاملة
                </h2>
                <p className="text-base text-foreground/60 sm:text-lg">
                  نقدم حلولاً شاملة في التشطيب والديكور بأعلى معايير الجودة والحرفية المهنية.
                </p>
              </div>
              <div className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-black/5 to-transparent md:block" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 lg:gap-10">
            {[
              {
                num: "01",
                icon: "🎨",
                title: "تصميم وتنفيذ الديكور",
                desc: "تصاميم داخلية فريدة تجمع بين الجمال والوظيفة. نقدم حلولاً مخصصة مع دراسة دقيقة للإضاءة والمساحات والألوان.",
                img: serviceDesign,
                features: ["تصاميم 3D", "مشورة مجانية", "تنفيذ احترافي"],
              },
              {
                num: "02",
                icon: "🏗️",
                title: "تشطيب سكني وتجاري",
                desc: "تحويل المباني الخام إلى مساحات جاهزة للاستخدام مع الالتزام الكامل بالمواعيد والجودة العالية في كل تفصيلة.",
                img: serviceFinishing,
                features: ["دقة عالية", "التزام بالمواعيد", "إشراف يومي"],
              },
              {
                num: "03",
                icon: "✨",
                title: "تشطيبات فاخرة",
                desc: "خدمات تشطيب فائقة الجودة باستخدام أجود الخامات والمواد المعتمدة دولياً لضمان الفخامة والمتانة.",
                img: serviceLuxury,
                features: ["خامات فاخرة", "ضمان شامل", "جودة عالمية"],
              },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 120}>
                <article className="tap-press group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-md hover:shadow-2xl hover:shadow-brand/15 transition-all duration-500">
                  {/* Image section */}
                  <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                    {/* Icon and number badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <span className="text-3xl opacity-90 group-hover:scale-125 transition-transform">
                        {s.icon}
                      </span>
                    </div>
                    <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-accent-foreground shadow-lg">
                      {s.num}
                    </span>

                    {/* Title overlay */}
                    <h3 className="absolute bottom-4 right-4 left-4 font-display text-xl font-bold text-white drop-shadow-lg sm:text-2xl line-clamp-2">
                      {s.title}
                    </h3>
                  </div>

                  {/* Content section */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-sm leading-relaxed text-foreground/70 mb-5 sm:text-base line-clamp-3">
                      {s.desc}
                    </p>

                    {/* Features list */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        >
                          <span>✓</span> {f}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-accent/10 to-accent/5 px-4 py-2 font-semibold text-accent transition-all hover:from-accent hover:to-accent/90 hover:text-accent-foreground hover:shadow-lg"
                    >
                      اطلب الخدمة
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-r from-brand via-brand/95 to-brand text-brand-foreground overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 pattern-grid opacity-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl animate-float"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-2xl md:mb-20">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-accent" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs">
                  كيفية العمل
                </span>
              </div>
              <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                رحلتك نحو مشروع أحلامك
              </h2>
              <p className="text-base text-white/70 sm:text-lg">
                خطوات واضحة وبسيطة من الاستشارة الأولى وحتى تسليم المفتاح.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline connector line */}
            <div
              className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent/50 to-transparent"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
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
                { n: "03", icon: "👷", t: "التنفيذ", d: "فريق هندسي متخصص مع إشراف يومي دقيق." },
                { n: "04", icon: "🔑", t: "التسليم", d: "تسليم نهائي مع ضمان شامل لمدة سنتين." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 100}>
                  <div className="group relative flex flex-col">
                    {/* Card */}
                    <div className="relative flex-1 rounded-xl bg-white/10 backdrop-blur-sm p-6 sm:p-8 transition-all hover:bg-white/15 hover:shadow-2xl hover:shadow-white/10 border border-white/10 hover:border-accent/30">
                      {/* Step number circle */}
                      <div className="absolute -top-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg">
                        <span className="font-display text-xl font-bold">{step.n}</span>
                      </div>

                      {/* Icon */}
                      <div className="mb-5 text-4xl">{step.icon}</div>

                      {/* Title */}
                      <h3 className="mb-3 font-display text-xl font-bold sm:text-2xl">{step.t}</h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-white/70 sm:text-base">{step.d}</p>

                      {/* Decorative arrow for desktop */}
                      {i < 3 && (
                        <div className="hidden lg:block absolute -right-5 top-1/3 text-2xl text-white/20 group-hover:text-accent/50 transition-colors">
                          →
                        </div>
                      )}
                    </div>

                    {/* Mobile connector */}
                    {i < 3 && (
                      <div className="flex justify-center py-4 lg:hidden">
                        <div className="text-2xl text-white/30">↓</div>
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Features */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/15 to-transparent">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 text-center md:mb-20">
              <SectionEyebrow en="Why Choose Us" ar="لماذا نحن" />
              <h2 className="mb-4 font-display text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
                ما يميّز Grand Build
              </h2>
              <p className="mx-auto max-w-2xl text-base text-foreground/60 sm:text-lg">
                نقدم الحلول الشاملة مع ضمانات عالية وجودة لا تضاهى
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🛡️", t: "ضمان شامل", d: "ضمان على جميع الأعمال لمدة سنتين كاملتين." },
              { icon: "💰", t: "أسعار شفافة", d: "عرض سعر مفصّل بدون رسوم خفية أو تكاليف إضافية." },
              { icon: "✨", t: "خامات معتمدة", d: "نستخدم فقط المواد من أفضل الموردين المعتمدين." },
              { icon: "👁️", t: "إشراف يومي", d: "مهندس متخصص مقيم في الموقع طوال التنفيذ." },
              { icon: "🎨", t: "تصاميم 3D", d: "شاهد المشروع قبل البدء بكل تفصيلة دقيقة." },
              { icon: "📞", t: "دعم 24/7", d: "خط ساخن مفتوح للتواصل مع إدارة المشروع دائماً." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 70}>
                <div className="tap-press group relative h-full rounded-xl border border-black/5 bg-white p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 sm:p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 text-2xl">
                    {f.icon}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-brand sm:text-xl">
                    {f.t}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/65 sm:text-base">{f.d}</p>
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-accent to-transparent transition-all group-hover:w-full duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-r from-brand/5 via-accent/5 to-brand/5">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 text-center md:mb-20">
              <SectionEyebrow en="Testimonials" ar="تقييمات العملاء" />
              <h2 className="mb-4 font-display text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
                آراء عملائنا الكرام
              </h2>
              <p className="mx-auto max-w-2xl text-base text-foreground/60 sm:text-lg">
                شهادات حقيقية من عملاء سعداء عن مشاريعنا المنجزة
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[
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
            ].map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 120}>
                <div className="tap-press group relative rounded-xl border border-black/5 bg-white p-6 shadow-md hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 sm:p-8">
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <span key={j} className="text-lg">
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-6 text-base leading-relaxed text-foreground/70 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-black/5 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-brand text-xl text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-foreground/50">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio (Bento) */}
      <section
        id="portfolio"
        className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 text-center md:mb-20">
              <SectionEyebrow en="Our Portfolio" ar="أعمالنا" />
              <h2 className="mb-4 font-display text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
                معرض أعمالنا المتميزة
              </h2>
              <p className="mx-auto max-w-2xl text-base text-foreground/60 sm:text-lg">
                مشاريع منجزة بعناية واحترافية في القاهرة والإسكندرية
              </p>
            </div>
          </Reveal>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-4 md:auto-rows-[240px] lg:auto-rows-[260px]">
            {[
              {
                img: p1,
                title: "شقة فاخرة - التجمع الخامس",
                tag: "سكني",
                span: "md:col-span-2 md:row-span-2",
              },
              {
                img: p3,
                title: "مطبخ مودرن - الشيخ زايد",
                tag: "ديكور",
                span: "md:col-span-1 md:row-span-2",
              },
              {
                img: p2,
                title: "غرفة نوم رئيسية",
                tag: "تشطيب",
                span: "md:col-span-1 md:row-span-1",
              },
              {
                img: p4,
                title: "مكتب إداري - سموحة",
                tag: "تجاري",
                span: "md:col-span-1 md:row-span-1",
              },
              {
                img: p6,
                title: "فيلا الشيخ زايد",
                tag: "فاخرة",
                span: "md:col-span-2 md:row-span-2",
              },
              {
                img: p5,
                title: "حمام رخامي فاخر",
                tag: "تشطيب",
                span: "md:col-span-2 md:row-span-1",
              },
            ].map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className={`${item.span} tap-press group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl hover:shadow-brand/20 transition-all duration-500`}
              >
                <div className="relative h-full w-full">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/40 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4 sm:p-5 md:gap-3">
                    <span className="inline-flex w-fit rounded-full bg-accent/90 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-lg">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white drop-shadow-lg sm:text-base md:text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center md:mt-16">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-press group relative inline-flex items-center gap-2 rounded-full border-2 border-brand/30 bg-gradient-to-r from-card to-card/50 px-8 py-3 text-base font-bold text-brand transition-all hover:border-accent hover:from-accent hover:to-accent/90 hover:text-accent-foreground hover:shadow-xl sm:px-10 sm:py-4 sm:text-lg"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                اطلب معاينة لمشروعك
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/10 to-transparent"
      >
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-12 text-center md:mb-20">
              <SectionEyebrow en="FAQ" ar="الأسئلة الشائعة" />
              <h2 className="mb-4 font-display text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
                الأسئلة الشائعة
              </h2>
              <p className="mx-auto max-w-2xl text-base text-foreground/60 sm:text-lg">
                إجابات سريعة على أسئلتك حول خدماتنا وعملياتنا
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
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
              ].map((item, i) => (
                <Reveal key={i} delay={i * 50}>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value={`item-${i}`}
                      className="rounded-lg border border-black/5 bg-white px-6 data-[state=open]:shadow-lg"
                    >
                      <AccordionTrigger className="py-4 hover:no-underline data-[state=open]:text-brand">
                        <span className="text-left font-display text-base font-bold text-foreground sm:text-lg">
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Reveal>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-12 rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 to-brand/5 p-6 text-center sm:p-8">
              <p className="mb-4 text-sm text-foreground/70 sm:text-base">هل لديك سؤال آخر؟</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-press inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2 text-sm font-bold text-accent-foreground transition-all hover:shadow-lg sm:px-8 sm:py-3 sm:text-base"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                </svg>
                تواصل معنا على واتساب
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Locations */}
      <section
        id="branches"
        className="relative px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/10"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 text-center md:mb-20">
              <SectionEyebrow en="Our Branches" ar="فروعنا" />
              <h2 className="mb-4 font-display text-3xl font-bold text-brand sm:text-4xl md:text-5xl">
                فروعنا ومكاتبنا
              </h2>
              <p className="mx-auto max-w-2xl text-base text-foreground/60 sm:text-lg">
                نتواجد في أهم المدن المصرية لخدمتك بشكل أفضل
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {[
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
            ].map((b, i) => (
              <Reveal key={b.tag} delay={i * 150}>
                <div className="group relative overflow-hidden rounded-xl border border-black/5 bg-white shadow-lg hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300">
                  {/* Header */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-brand/10 via-accent/5 to-brand/10 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent mb-3">
                          <span>{b.icon}</span>
                          {b.tag}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-brand sm:text-3xl">
                          {b.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <p className="mb-6 text-base leading-relaxed text-foreground/70">{b.desc}</p>

                    {/* Contact info */}
                    <div className="mb-6 flex items-center gap-3 rounded-lg bg-secondary/50 p-4">
                      <svg
                        className="h-6 w-6 text-accent flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <div>
                        <p className="font-mono text-xs text-foreground/50">اتصل بنا</p>
                        <p className="font-mono font-bold text-brand text-lg" dir="ltr">
                          {b.contact}
                        </p>
                      </div>
                    </div>

                    {/* Map */}
                    <iframe
                      src={b.map}
                      title={b.title}
                      loading="lazy"
                      className="aspect-video w-full border-0 rounded-lg grayscale transition-all duration-500 group-hover:grayscale-0"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div
          className="pointer-events-none absolute inset-0 pattern-grid opacity-30"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/15 via-brand/10 to-accent/15 blur-3xl animate-float"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionEyebrow en="Ready?" ar="هل أنت مستعد؟" />
            <h2 className="mb-6 text-balance font-display text-3xl font-bold text-brand sm:text-4xl md:mb-8 md:text-6xl">
              ننتظر استفسارك لتحويل حلمك إلى واقع فاخر
            </h2>
            <p className="mb-10 text-base text-foreground/60 sm:text-lg md:mb-14 max-w-2xl mx-auto">
              تواصل مباشرة مع فريق جراند بيلد لمناقشة مشروعك والحصول على عرض سعر فني متكامل. نحن هنا
              لتحقيق رؤيتك.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-press group relative inline-flex w-full max-w-xl items-center justify-center sm:w-auto"
              >
                <div className="absolute inset-0 rounded-full bg-accent opacity-40 blur-3xl transition-opacity group-hover:opacity-70" />
                <div className="relative flex w-full flex-col items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent/80 px-8 py-5 text-base font-bold text-accent-foreground shadow-2xl shadow-accent/30 transition-all group-hover:scale-[1.05] group-hover:shadow-3xl group-hover:shadow-accent/40 sm:flex-row sm:gap-4 sm:px-14 sm:py-6 sm:text-lg md:text-xl">
                  <svg
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <span>تواصل على واتساب</span>
                    <span className="font-mono text-sm sm:text-base" dir="ltr">
                      {PHONE_DISPLAY}
                    </span>
                  </div>
                </div>
              </a>

              <a
                href={`tel:+2${PHONE_DISPLAY}`}
                className="tap-press inline-flex items-center gap-2 text-center font-semibold text-accent transition-all hover:gap-3"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                أو اتصل بنا مباشرة الآن
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-black/5 bg-white px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 mb-10 md:mb-12">
            {/* Brand */}
            <Reveal>
              <div>
                <a
                  href="#top"
                  className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand to-accent shadow-lg">
                    <img src={logo} alt={BRAND} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-bold text-brand text-lg">{BRAND}</span>
                    <span className="font-mono text-[10px] text-foreground/50">تشطيب وديكور</span>
                  </div>
                </a>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  شركة متخصصة في التصميم الداخلي والتشطيبات الفاخرة منذ 2013.
                </p>
              </div>
            </Reveal>

            {/* Quick Links */}
            <Reveal delay={80}>
              <div>
                <h3 className="font-bold text-foreground mb-4 text-sm">الروابط السريعة</h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a href="#services" className="hover:text-brand transition-colors">
                      الخدمات
                    </a>
                  </li>
                  <li>
                    <a href="#process" className="hover:text-brand transition-colors">
                      الخطوات
                    </a>
                  </li>
                  <li>
                    <a href="#portfolio" className="hover:text-brand transition-colors">
                      الأعمال
                    </a>
                  </li>
                  <li>
                    <a href="#branches" className="hover:text-brand transition-colors">
                      الفروع
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Services */}
            <Reveal delay={160}>
              <div>
                <h3 className="font-bold text-foreground mb-4 text-sm">خدماتنا</h3>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors"
                    >
                      تصميم ديكور
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors"
                    >
                      تشطيب سكني
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors"
                    >
                      تشطيب تجاري
                    </a>
                  </li>
                  <li>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors"
                    >
                      صيانة دورية
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Contact */}
            <Reveal delay={240}>
              <div>
                <h3 className="font-bold text-foreground mb-4 text-sm">تواصل معنا</h3>
                <div className="space-y-3 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-accent flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a
                      href={`tel:+2${PHONE_DISPLAY}`}
                      className="hover:text-brand transition-colors font-mono"
                      dir="ltr"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-accent flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                    </svg>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand transition-colors"
                    >
                      واتساب
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-right text-sm text-foreground/50">
            <p>
              جميع الحقوق محفوظة © 2026
              <span className="font-bold text-brand mx-1">{BRAND}</span>
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <span>🏢 هليوبوليس، القاهرة</span>
              <span>🌊 سيتي سنتر، الإسكندرية</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
