import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sun, Leaf, Zap, ShieldCheck, Cpu, Users, Sprout, BatteryCharging,
  Factory, Globe2, TrendingUp, Quote, Mail, Phone, MapPin, ArrowRight,
  ChevronDown, Sparkles, CircuitBoard, Recycle, Award,
} from "lucide-react";
import { Nav } from "@/components/site/nav";
import { FloatingActions } from "@/components/site/floating";
import { Counter } from "@/components/site/counter";
import { useReveal } from "@/components/site/use-reveal";
import heroImg from "@/assets/hero-solar.jpg";
import aboutImg from "@/assets/about-solar.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SP Vijay Green Power — 7 MW Solar Power Project | Coimbatore" },
      { name: "description", content: "SP Vijay Green Power Private Ltd delivers clean, reliable and cost-effective solar energy through its flagship 7 MW Solar Power Project. Powering a sustainable future." },
      { property: "og:title", content: "SP Vijay Green Power — Clean Energy. Strong Future." },
      { property: "og:description", content: "Flagship 7 MW Solar Power Project delivering renewable, reliable, cost-effective clean energy." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:image", content: "/og-image.jpg" },
      { name: "keywords", content: "solar power, renewable energy, 7 MW solar project, Coimbatore, Tamil Nadu, SP Vijay Green Power, clean energy, photovoltaic" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SP Vijay Green Power Private Ltd",
          url: "/",
          email: "spvijaygreenpower@gmail.com",
          telephone: "+91 9443052222",
          address: {
            "@type": "PostalAddress",
            streetAddress: "83, Oppanakara Street, Opposite Corporation Girls High School, Next to SBI Bank, Town Hall",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641001",
            addressCountry: "IN",
          },
          slogan: "Clean Energy. Strong Future.",
          description: "Renewable energy company operating a 7 MW solar power project in Tamil Nadu, India.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div id="top" className="relative bg-background text-foreground">
      <Nav />
      <FloatingActions />
      <Hero />
      <main>
        <About />
        <Benefits />
        <Project />
        <WhySolar />
        <Sustainability />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate min-h-dvh overflow-hidden pt-16">
      <img
        src={heroImg}
        alt="Aerial view of solar panel farm at sunrise"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-[var(--gradient-sun)] opacity-60 mix-blend-screen" />
      <Particles />
      <Leaves />

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-yellow)]" />
            Flagship 7 MW Solar Power Project
          </div>
          <h1 className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Powering a <span className="text-gradient">Sustainable</span> Future
            <span className="mt-3 block text-2xl font-semibold text-white/85 sm:text-3xl lg:text-4xl">
              7 MW Solar Power Project
            </span>
          </h1>
          <p className="reveal mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
            Delivering clean, reliable and cost-effective solar energy for a greener tomorrow — engineered, owned and operated by SP Vijay Green Power Private Ltd.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href="#project" className="inline-flex items-center gap-2 rounded-full btn-hero px-7 py-3.5 text-sm font-semibold">
              Explore Our Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Contact Us
            </a>
          </div>
        </div>

        <div className="reveal mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {[
            { v: "7 MW", l: "Installed Capacity", i: <Zap className="h-5 w-5" /> },
            { v: "100%", l: "Renewable Energy", i: <Leaf className="h-5 w-5" /> },
            { v: "Advanced", l: "Solar Technology", i: <Cpu className="h-5 w-5" /> },
            { v: "Future-ready", l: "Infrastructure", i: <CircuitBoard className="h-5 w-5" /> },
          ].map((s) => (
            <div key={s.l} className="glass-card rounded-2xl p-4 text-white sm:p-5">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--brand-green)]/25 text-[var(--brand-green)]">
                {s.i}
              </div>
              <div className="mt-3 font-display text-xl font-bold sm:text-2xl">{s.v}</div>
              <div className="text-xs text-white/75 sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>

        <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white" aria-label="Scroll">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function Particles() {
  const [seeds, setSeeds] = useState<{ left: number; delay: number; size: number; dur: number }[]>([]);
  useEffect(() => {
    setSeeds(
      Array.from({ length: 22 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        size: 3 + Math.random() * 6,
        dur: 14 + Math.random() * 14,
      })),
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <span
          key={i}
          className="absolute bottom-[-20px] rounded-full bg-[var(--brand-yellow)]/50 blur-[1px]"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animation: `float-up ${s.dur}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Leaves() {
  const [seeds, setSeeds] = useState<{ left: number; delay: number; dur: number }[]>([]);
  useEffect(() => {
    setSeeds(
      Array.from({ length: 6 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 14,
        dur: 18 + Math.random() * 10,
      })),
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <Leaf
          key={i}
          className="absolute bottom-[-30px] text-[var(--brand-green)]/40"
          style={{
            left: `${s.left}%`,
            width: 16,
            height: 16,
            animation: `float-up ${s.dur}s linear ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
      <Sun className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const highlights = [
    { i: <Sprout className="h-5 w-5" />, t: "Renewable Energy Solutions" },
    { i: <Factory className="h-5 w-5" />, t: "Sustainable Infrastructure" },
    { i: <Globe2 className="h-5 w-5" />, t: "Environmental Responsibility" },
    { i: <BatteryCharging className="h-5 w-5" />, t: "Long-Term Energy Reliability" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div className="reveal relative">
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-3xl bg-[var(--brand-yellow)]/30 blur-2xl" />
          <div className="absolute -bottom-6 -right-4 h-40 w-40 rounded-3xl bg-[var(--brand-green)]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <img src={aboutImg} alt="Engineer inspecting solar panels" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="glass-card absolute -bottom-8 left-6 hidden rounded-2xl p-4 shadow-[var(--shadow-card)] sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-energy)] text-white">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Operating Since</div>
                <div className="font-display text-lg font-bold">Coimbatore, TN</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <SectionTag>About the company</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            About <span className="text-[color:var(--brand-blue)]">SP Vijay Green Power</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            SP Vijay Green Power Private Ltd is committed to driving the transition toward sustainable energy through innovative solar power solutions. Our flagship 7 MW Solar Power Project represents our dedication to clean energy generation, environmental responsibility, and long-term value creation.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <div key={h.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary/15 text-[color:var(--brand-blue)]">
                  {h.i}
                </div>
                <span className="text-sm font-semibold">{h.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
function Benefits() {
  const items = [
    { i: <Leaf />, t: "Clean & Green", d: "100% renewable energy for a cleaner environment." },
    { i: <ShieldCheck />, t: "Reliable Power", d: "Consistent and dependable energy supply." },
    { i: <TrendingUp />, t: "Cost Effective", d: "Reduced operational costs and higher long-term savings." },
    { i: <Cpu />, t: "Advanced Technology", d: "High-efficiency solar systems maximizing generation." },
    { i: <Users />, t: "Powering Communities", d: "Supporting industries, institutions and communities." },
  ];
  return (
    <section id="benefits" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Key Benefits</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Why partners choose us</h2>
          <p className="mt-4 text-muted-foreground">Five reasons our 7 MW project sets a higher standard for clean energy.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, idx) => (
            <div
              key={c.t}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-green)]/10 transition group-hover:scale-150" />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-energy)] text-white shadow-[var(--shadow-glow)]">
                {c.i}
              </div>
              <h3 className="relative mt-5 font-display text-xl font-bold">{c.t}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECT ---------- */
function Project() {
  const stats = [
    { l: "Energy Production", v: 12.6, suf: " GWh/yr", dec: 1, i: <Zap /> },
    { l: "CO₂ Offset", v: 9200, suf: " T/yr", dec: 0, i: <Recycle /> },
    { l: "Trees Equivalent", v: 152000, suf: "+", dec: 0, i: <Sprout /> },
    { l: "Project Capacity", v: 7, suf: " MW", dec: 0, i: <BatteryCharging /> },
  ];
  const meta = [
    { l: "Project Capacity", v: "7 MW" },
    { l: "Energy Source", v: "Solar PV Technology" },
    { l: "Generation", v: "Clean & emission-free" },
    { l: "Infrastructure", v: "Sustainable & scalable" },
    { l: "Vision", v: "Future-ready solutions" },
  ];
  return (
    <section id="project" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--brand-blue)_15%,transparent),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Project Overview</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">7 MW Solar Power Project</h2>
          <p className="mt-4 text-muted-foreground">A modern dashboard view of our flagship clean-energy asset.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/15 text-[color:var(--brand-blue)]">
                  {s.i}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
              <div className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                <Counter to={s.v} suffix={s.suf} decimals={s.dec} />
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[78%] rounded-full bg-[var(--gradient-energy)]" />
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <img src={g2} alt="7 MW solar project site at sunset" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-card/0 via-card/10 to-card" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">Project highlights</h3>
              <p className="mt-3 text-muted-foreground">Built to generate clean power at scale while remaining flexible for future expansion.</p>
              <dl className="mt-6 divide-y divide-border">
                {meta.map((m) => (
                  <div key={m.l} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-3.5">
                    <dt className="text-sm text-muted-foreground">{m.l}</dt>
                    <dd className="text-sm font-semibold text-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY SOLAR ---------- */
function WhySolar() {
  const cards = [
    { i: <Sun />, t: "Capturing the Sun", d: "Harnessing sunlight through advanced photovoltaic systems." },
    { i: <Zap />, t: "Generating Clean Energy", d: "Producing electricity without harmful emissions." },
    { i: <Sprout />, t: "Building a Better Future", d: "Creating a sustainable energy ecosystem for future generations." },
  ];
  return (
    <section className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Why solar energy</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">The journey of sunlight to power</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={c.t} className="reveal relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[var(--gradient-sun)] text-[color:var(--brand-blue)] shadow-[var(--shadow-card)]">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-card">{c.i}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{c.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-6 flex items-center justify-center gap-1 text-[color:var(--brand-green)]">
                {Array.from({ length: 3 }).map((_, k) => (
                  <span key={k} className="h-1 w-6 rounded-full bg-current opacity-70" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SUSTAINABILITY ---------- */
function Sustainability() {
  const items = [
    { t: "Reduced Carbon Footprint", v: 92, suf: "%", d: "Lower lifecycle emissions vs. coal generation." },
    { t: "Renewable Energy Contribution", v: 100, suf: "%", d: "All output from sunlight — zero fossil fuels." },
    { t: "Environmental Preservation", v: 85, suf: "%", d: "Designed to coexist with surrounding ecology." },
    { t: "Sustainable Growth", v: 78, suf: "%", d: "Scalable infrastructure for the next decade." },
  ];
  return (
    <section id="sustainability" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Sustainability Impact</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Measurable impact, every kilowatt</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <ProgressCard key={it.t} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressCard({ t, v, suf, d }: { t: string; v: number; suf: string; d: string }) {
  const [w, setW] = useState(0);
  return (
    <div
      className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
      onAnimationStart={() => setTimeout(() => setW(v), 200)}
    >
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t}</div>
      <div className="mt-2 font-display text-4xl font-extrabold text-[color:var(--brand-blue)]">
        <Counter to={v} suffix={suf} />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{d}</p>
      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-[var(--gradient-energy)] transition-[width] duration-[1800ms] ease-out"
          style={{ width: `${w}%` }}
        />
      </div>
    </div>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const imgs = [
    { src: g1, alt: "Solar panel detail", h: "row-span-2" },
    { src: g2, alt: "Project site at sunset", h: "" },
    { src: g3, alt: "Panels reflecting sky", h: "" },
    { src: g4, alt: "Worker installing panel", h: "row-span-2" },
  ];
  const [active, setActive] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Gallery</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Inside our solar operations</h2>
        </div>

        <div className="reveal mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] md:grid-cols-4">
          {imgs.map((im, i) => (
            <button
              key={i}
              onClick={() => setActive(im.src)}
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] ${im.h}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-navy)]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {im.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur"
        >
          <img src={active} alt="Gallery preview" className="max-h-[88vh] w-auto rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    {
      name: "R. Karthikeyan",
      title: "Operations Director",
      org: "Industrial Partner",
      quote: "Their 7 MW project has been a reliable source of clean power for our operations. Highly professional team.",
    },
    {
      name: "Priya Subramaniam",
      title: "Sustainability Lead",
      org: "Manufacturing Group",
      quote: "SP Vijay Green Power delivered exactly what they promised — clean, consistent energy with measurable impact.",
    },
    {
      name: "Arun Mohan",
      title: "Plant Manager",
      org: "Energy Buyer",
      quote: "From engineering to operations, the project showcases what serious renewable infrastructure looks like in India.",
    },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Trusted by partners</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="reveal relative rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="absolute -top-4 left-6 h-9 w-9 rounded-xl bg-[var(--gradient-energy)] p-2 text-white" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-secondary/20 font-display text-sm font-bold text-[color:var(--brand-blue)]">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{t.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{t.title} · {t.org}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qs = [
    { q: "What is a solar power project?", a: "A solar power project converts sunlight into clean electricity using photovoltaic (PV) panels, inverters and grid infrastructure to deliver renewable energy at scale." },
    { q: "How does solar energy benefit businesses?", a: "It reduces operational energy costs, hedges against fuel price volatility, supports sustainability goals and provides predictable, long-term power generation." },
    { q: "What is the environmental impact?", a: "Solar generation produces zero direct emissions, conserves water versus thermal plants, and significantly lowers lifecycle CO₂ emissions per kWh." },
    { q: "Why choose renewable energy?", a: "Renewables like solar are clean, abundant, increasingly cost-competitive and critical for India's transition to a low-carbon energy future." },
    { q: "What makes SP Vijay Green Power different?", a: "Our 7 MW flagship project combines advanced PV technology, reliable infrastructure and a long-term commitment to sustainability and community impact." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <SectionTag>FAQ</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Frequently asked questions</h2>
        </div>
        <div className="reveal mt-12 space-y-3">
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold sm:text-lg">{it.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <SectionTag>Contact</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">Get in touch</h2>
          <p className="mt-4 text-muted-foreground">We'd love to hear from you. Reach our team in Coimbatore for partnership and project enquiries.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="reveal space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <a href="tel:+919443052222" className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                <Phone className="h-6 w-6 text-[color:var(--brand-blue)]" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <div className="mt-1 truncate text-sm font-semibold">+91 9443052222</div>
              </a>
              <a href="mailto:spvijaygreenpower@gmail.com" className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                <Mail className="h-6 w-6 text-[color:var(--brand-blue)]" />
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-1 truncate text-sm font-semibold">spvijaygreenpower@gmail.com</div>
              </a>
              <a href="https://wa.me/919443052222" target="_blank" rel="noopener" className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
                <span className="grid h-6 w-6 place-items-center text-[#25D366]"><svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M20.5 3.5A11 11 0 1 0 3.7 17.9L2 22l4.2-1.6a11 11 0 0 0 14.3-16.9zm-8.5 17a8.9 8.9 0 0 1-4.5-1.2l-.3-.2-2.5 1 .9-2.4-.2-.3a8.9 8.9 0 1 1 6.6 3.1zm5-6.6c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1a7.3 7.3 0 0 1-3.6-3.1c-.3-.5.3-.5.7-1.5.1-.2 0-.4 0-.6l-.9-2c-.2-.5-.4-.4-.6-.5h-.6c-.2 0-.5.1-.7.4a3 3 0 0 0-.9 2.2c0 1.3 1 2.5 1.1 2.7s1.9 3 4.6 4.2c1.6.7 2.3.7 3.1.6.5 0 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.1-.6-.3z"/></svg></span>
                <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="mt-1 truncate text-sm font-semibold">Chat with us</div>
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[color:var(--brand-blue)]" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Registered Office</div>
                  <p className="mt-1 text-sm font-semibold leading-relaxed">
                    83, Oppanakara Street, Opposite Corporation Girls High School,<br />
                    Next to SBI Bank, Town Hall, Coimbatore,<br />
                    Tamil Nadu - 641001, India
                  </p>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="SP Vijay Green Power location"
                  src="https://www.google.com/maps?q=Oppanakara+Street+Town+Hall+Coimbatore&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 5000);
              (e.target as HTMLFormElement).reset();
            }}
            className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
          >
            <h3 className="font-display text-xl font-bold">Send us a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within 1–2 business days.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name"><input required className="field" placeholder="Your full name" /></Field>
              <Field label="Email"><input required type="email" className="field" placeholder="you@company.com" /></Field>
              <Field label="Phone" className="sm:col-span-2"><input className="field" placeholder="+91" /></Field>
              <Field label="Message" className="sm:col-span-2">
                <textarea required rows={4} className="field resize-none" placeholder="Tell us about your project or enquiry..." />
              </Field>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full btn-hero px-6 py-3 text-sm font-semibold sm:w-auto">
              {sent ? "Message sent ✓" : "Send message"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .field {
          width: 100%;
          border-radius: 0.9rem;
          background: var(--muted);
          border: 1px solid var(--border);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .field:focus {
          border-color: var(--brand-blue);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--brand-blue) 15%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--brand-navy)] text-white">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_oklab,var(--brand-blue)_60%,transparent),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-energy)] text-white shadow-[var(--shadow-glow)]">
              <Sun className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-bold">SP Vijay Green Power</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Delivering clean, reliable and cost-effective solar energy through our flagship 7 MW solar power project.
          </p>
        </div>
        <FooterCol title="Quick Links">
          <a href="#about">About</a><a href="#project">Project</a><a href="#benefits">Benefits</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a>
        </FooterCol>
        <FooterCol title="Services">
          <span>Solar Power Generation</span>
          <span>Renewable Infrastructure</span>
          <span>Clean Energy Supply</span>
          <span>Sustainable Operations</span>
        </FooterCol>
        <FooterCol title="Contact">
          <a href="tel:+919443052222" className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 9443052222</a>
          <a href="mailto:spvijaygreenpower@gmail.com" className="flex items-center gap-2 break-all"><Mail className="h-4 w-4" /> spvijaygreenpower@gmail.com</a>
          <span className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 83 Oppanakara Street, Town Hall, Coimbatore, TN 641001</span>
        </FooterCol>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 SP Vijay Green Power Private Ltd. All Rights Reserved.</p>
          <p>Clean Energy. Strong Future.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/90">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70 [&>a]:transition [&>a:hover]:text-[var(--brand-green)]">
        {children}
      </div>
    </div>
  );
}
