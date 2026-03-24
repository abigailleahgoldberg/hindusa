"use client";

import Link from "next/link";
import { useState } from "react";

/* ───────────── COLOR SYSTEM ───────────── */
const C = {
  saffron: "#E8721A",
  deepSaffron: "#C45E10",
  burgundy: "#4A1230",
  gold: "#D4AF37",
  cream: "#FAF3E8",
  darkCream: "#F0E4CC",
  bg: "#FAFAF8",
  dark: "#1A0A0F",
  white: "#FFFFFF",
};

/* ───────────── LOTUS SVG ───────────── */
const LotusPattern = ({ opacity = 0.05 }: { opacity?: number }) => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="lotus" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        {/* Outer ring */}
        <circle cx="60" cy="60" r="50" fill="none" stroke={C.gold} strokeWidth="0.4" />
        <circle cx="60" cy="60" r="35" fill="none" stroke={C.saffron} strokeWidth="0.3" />
        <circle cx="60" cy="60" r="20" fill="none" stroke={C.gold} strokeWidth="0.3" />
        {/* Petal lines radiating */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 60 + 20 * Math.cos(angle);
          const y1 = 60 + 20 * Math.sin(angle);
          const x2 = 60 + 50 * Math.cos(angle);
          const y2 = 60 + 50 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.gold} strokeWidth="0.3" />;
        })}
        {/* Om symbol placeholder — 4-pointed star */}
        <polygon
          points="60,35 63,57 85,60 63,63 60,85 57,63 35,60 57,57"
          fill="none"
          stroke={C.saffron}
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#lotus)" />
  </svg>
);

/* ───────────── DATA ───────────── */
const pillars = [
  { icon: "🕉️", title: "Dharma", sub: "Living in alignment with cosmic law and personal duty" },
  { icon: "🪔", title: "Bhakti", sub: "The path of devotion — loving surrender to the divine" },
  { icon: "📿", title: "Jnana", sub: "Wisdom through self-inquiry and understanding of reality" },
  { icon: "🌺", title: "Seva", sub: "Selfless service as spiritual practice and community care" },
  { icon: "🎵", title: "Kirtan", sub: "Devotional chanting that opens the heart and stills the mind" },
  { icon: "🌱", title: "Ahimsa", sub: "Non-violence toward all living beings — the root of Hindu ethics" },
];

const festivals = [
  { name: "Ram Navami", date: "April 6, 2026", desc: "Celebrating the birth of Lord Rama, the embodiment of righteousness" },
  { name: "Hanuman Jayanti", date: "April 12, 2026", desc: "Honoring the devoted strength of Hanuman" },
  { name: "Akshaya Tritiya", date: "April 29, 2026", desc: "An auspicious day for new beginnings and prosperity" },
  { name: "Eid al-Adha", date: "June 6, 2026", desc: "Festival of sacrifice observed by our Muslim cousins" },
  { name: "Guru Purnima", date: "July 10, 2026", desc: "Honoring spiritual teachers and the lineage of wisdom" },
  { name: "Janmashtami", date: "August 16, 2026", desc: "The birth of Lord Krishna — devotion, music, and joy" },
];

const products = [
  { id: "namaste-yall-tee", name: "Namaste Y\'all", variant: "Classic Tee", price: 34.99, emoji: "🙏", desc: "The crossroads of Texas and the Upanishads" },
  { id: "om-sweet-om-hoodie", name: "Om Sweet Om", variant: "Pullover Hoodie", price: 54.99, emoji: "🕉️", desc: "Home is wherever you chant" },
  { id: "karma-is-real-hat", name: "Karma Is Real", variant: "Dad Hat", price: 28.99, emoji: "☸️", desc: "Spoiler: it comes back around" },
  { id: "desi-proud-crop", name: "Desi & Proud", variant: "Crop Top", price: 32.99, emoji: "🌺", desc: "Diaspora energy, American soil" },
];

const stats = [
  { value: "4.5M+", label: "Hindu Americans" },
  { value: "5000+", label: "Years of tradition" },
  { value: "17", label: "Sampradayas recognized" },
  { value: "330M+", label: "Manifestations of the divine" },
];

export default function HindUSAHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: "Georgia, \'Times New Roman\', serif", background: C.bg, color: C.dark, overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(250,243,232,0.96)", backdropFilter: "blur(12px)", borderBottom: `2px solid ${C.saffron}20`, padding: "0 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28 }}>🕉️</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.saffron, letterSpacing: "-0.5px" }}>HindUSA</div>
              <div style={{ fontSize: 9, letterSpacing: "2px", color: C.burgundy, marginTop: -2 }}>HINDU AMERICAN PRIDE</div>
            </div>
          </Link>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {[["Shop", "/shop"], ["Holidays", "/holidays"], ["Blog", "/blog"], ["Daily Verse", "/daily-verse"]].map(([label, href]) => (
              <Link key={href} href={href} style={{ fontSize: 13, fontWeight: 600, color: C.burgundy, textDecoration: "none", letterSpacing: "0.5px", opacity: 0.8 }}>{label}</Link>
            ))}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              style={{ background: C.saffron, color: "white", border: "none", borderRadius: 4, padding: "8px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
            >
              🛒 Shop
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", background: `linear-gradient(135deg, ${C.burgundy} 0%, #2D0820 40%, ${C.saffron}22 100%)`, overflow: "hidden" }}>
        <LotusPattern opacity={0.08} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(232,114,26,0.15) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 5vw", position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 40, height: 2, background: C.gold }} />
              <span style={{ fontSize: 11, letterSpacing: "3px", color: C.gold, fontFamily: "system-ui, sans-serif" }}>HINDU AMERICAN PRIDE</span>
            </div>
            <h1 style={{ fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 900, lineHeight: 1, color: C.cream, margin: "0 0 8px", fontFamily: "system-ui, sans-serif" }}>
              Dharma
            </h1>
            <h2 style={{ fontSize: "clamp(22px, 3.5vw, 42px)", fontWeight: 300, color: C.gold, margin: "0 0 28px", letterSpacing: "2px", fontFamily: "system-ui, sans-serif" }}>
              is not a religion. It is a way of being.
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 19px)", lineHeight: 1.7, color: "rgba(250,243,232,0.75)", maxWidth: 520, margin: "0 0 44px", fontFamily: "system-ui, sans-serif" }}>
              Five thousand years of wisdom, lived on American soil. The oldest continuous civilization, now woven into the fabric of this nation. You carry both. Wear it with pride.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/shop" style={{ background: C.saffron, color: "white", textDecoration: "none", padding: "16px 32px", fontSize: 15, fontWeight: 800, borderRadius: 2, letterSpacing: "0.5px", fontFamily: "system-ui, sans-serif" }}>
                Shop the Collection
              </Link>
              <Link href="/blog" style={{ background: "transparent", color: C.gold, textDecoration: "none", padding: "16px 32px", fontSize: 15, fontWeight: 600, border: `1px solid ${C.gold}60`, borderRadius: 2, fontFamily: "system-ui, sans-serif" }}>
                Read Our Stories
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(8px)", borderTop: `1px solid ${C.gold}20` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 5vw", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 16 }}>
            {stats.map(s => (
              <div key={s.value} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, color: C.gold, fontFamily: "system-ui, sans-serif" }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "rgba(250,243,232,0.6)", letterSpacing: "1px", fontFamily: "system-ui, sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section style={{ padding: "100px 5vw", background: C.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "3px", color: C.saffron, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>THE PATH</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: C.dark, margin: 0 }}>Six Pillars of Hindu Life</h2>
            <div style={{ width: 60, height: 3, background: C.saffron, margin: "20px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{ background: "white", borderRadius: 4, padding: "32px", border: `1px solid ${C.saffron}15`, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.saffron; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = `${C.saffron}15`; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: C.burgundy, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, margin: 0 }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP TEASER */}
      <section style={{ padding: "100px 5vw", background: `linear-gradient(160deg, ${C.dark} 0%, ${C.burgundy} 100%)`, position: "relative", overflow: "hidden" }}>
        <LotusPattern opacity={0.04} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "3px", color: C.gold, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>THE COLLECTION</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", margin: 0 }}>Wear Your Dharma</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {products.map(product => (
              <Link key={product.id} href="/shop" style={{ textDecoration: "none" }}>
                <div style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${C.gold}20`, borderRadius: 4, padding: "32px 24px", textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = `${C.gold}50`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = `${C.gold}20`; }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{product.emoji}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 4 }}>{product.name}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>{product.variant}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: C.gold }}>${product.price}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 8 }}>{product.desc}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/shop" style={{ background: C.saffron, color: "white", textDecoration: "none", padding: "16px 40px", fontSize: 15, fontWeight: 800, borderRadius: 2, display: "inline-block" }}>
              View Full Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* FESTIVALS */}
      <section style={{ padding: "100px 5vw", background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "3px", color: C.saffron, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>UPCOMING</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: C.dark, margin: 0 }}>Sacred Calendar 2026</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {festivals.map(f => (
              <div key={f.name} style={{ display: "flex", gap: 20, padding: "24px", background: "white", border: `1px solid ${C.saffron}15`, borderRadius: 4 }}>
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, background: C.saffron, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 20 }}>🪔</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.burgundy, marginBottom: 4 }}>{f.name}</div>
                  <div style={{ fontSize: 11, color: C.saffron, marginBottom: 8, letterSpacing: "1px" }}>{f.date}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/holidays" style={{ color: C.saffron, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>View Full Hindu Calendar →</Link>
          </div>
        </div>
      </section>

      {/* DAILY VERSE CTA */}
      <section style={{ padding: "80px 5vw", background: C.cream, borderTop: `1px solid ${C.saffron}20` }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>📿</div>
          <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 900, color: C.dark, marginBottom: 16 }}>Daily Verse from the Gita</h2>
          <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, marginBottom: 32, maxWidth: 520, margin: "0 auto 32px" }}>
            Start each day with wisdom from the Bhagavad Gita, Upanishads, and other sacred texts. Ancient words for modern life.
          </p>
          <Link href="/daily-verse" style={{ background: C.saffron, color: "white", textDecoration: "none", padding: "16px 36px", fontSize: 15, fontWeight: 800, borderRadius: 2, display: "inline-block" }}>
            Today&apos;s Verse →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.dark, color: "rgba(250,243,232,0.6)", padding: "48px 5vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 24 }}>🕉️</span>
              <span style={{ fontSize: 18, fontWeight: 800, color: C.saffron }}>HindUSA</span>
            </div>
            <div style={{ fontSize: 12, letterSpacing: "1px", color: C.gold, marginBottom: 8 }}>HINDU AMERICAN PRIDE</div>
            <p style={{ fontSize: 13, maxWidth: 260, lineHeight: 1.7, margin: 0 }}>
              Celebrating Hindu culture, identity, and community across America.
            </p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            {[
              { title: "Explore", links: [["Shop", "/shop"], ["Blog", "/blog"], ["Holidays", "/holidays"], ["Daily Verse", "/daily-verse"]] },
              { title: "Info", links: [["About", "/about"], ["Contact", "/contact"], ["Privacy", "/privacy"], ["Terms", "/terms"]] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 11, letterSpacing: "2px", color: C.gold, marginBottom: 16 }}>{col.title}</div>
                {col.links.map(([label, href]) => (
                  <div key={href} style={{ marginBottom: 8 }}>
                    <Link href={href} style={{ color: "rgba(250,243,232,0.5)", textDecoration: "none", fontSize: 13 }}>{label}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid rgba(250,243,232,0.1)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <div style={{ fontSize: 12 }}>© 2026 HindUSA. Jai Hind. 🇮🇳🇺🇸</div>
          <div style={{ fontSize: 12 }}>Made with 🙏 in America</div>
        </div>
      </footer>
    </div>
  );
}
