"use client";

import Link from "next/link";

/* ───────────── COLOR SYSTEM ───────────── */
const C = {
  saffron: "#E8721A",
  burgundy: "#4A1230",
  gold: "#D4AF37",
  cream: "#FAF3E8",
  dark: "#1A0A0A",
  white: "#FFFFFF",
};

/* ───────────── MANDALA WATERMARK SVG ───────────── */
const MandalaWatermark = ({ opacity = 0.06 }: { opacity?: number }) => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <circle cx="100" cy="100" r="80" fill="none" stroke={C.gold} strokeWidth="0.4" />
        <circle cx="100" cy="100" r="60" fill="none" stroke={C.saffron} strokeWidth="0.3" />
        <circle cx="100" cy="100" r="40" fill="none" stroke={C.gold} strokeWidth="0.3" />
        <circle cx="100" cy="100" r="20" fill="none" stroke={C.saffron} strokeWidth="0.2" />
        {Array.from({ length: 16 }, (_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          const x1 = 100 + 20 * Math.cos(angle);
          const y1 = 100 + 20 * Math.sin(angle);
          const x2 = 100 + 80 * Math.cos(angle);
          const y2 = 100 + 80 * Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.gold} strokeWidth="0.25" />;
        })}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = ((i * 45 + 22.5) * Math.PI) / 180;
          const cx = 100 + 50 * Math.cos(angle);
          const cy = 100 + 50 * Math.sin(angle);
          return <circle key={`d${i}`} cx={cx} cy={cy} r="4" fill="none" stroke={C.gold} strokeWidth="0.3" />;
        })}
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mandala)" />
  </svg>
);

/* ───────────── MANDALA DIVIDER ───────────── */
const MandalaDivider = ({ color = C.saffron }: { color?: string }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "0 auto", maxWidth: 400 }}>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${color}40)` }} />
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="16" cy="16" r="14" stroke={color} strokeWidth="0.75" opacity="0.5" />
      <circle cx="16" cy="16" r="8" stroke={color} strokeWidth="0.5" opacity="0.4" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={16 + 8 * Math.cos(angle)}
            y1={16 + 8 * Math.sin(angle)}
            x2={16 + 14 * Math.cos(angle)}
            y2={16 + 14 * Math.sin(angle)}
            stroke={color}
            strokeWidth="0.5"
            opacity="0.4"
          />
        );
      })}
      <circle cx="16" cy="16" r="2.5" fill={color} opacity="0.3" />
    </svg>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${color}40)` }} />
  </div>
);

/* ───────────── OM SYMBOL SVG ───────────── */
const OmSymbol = ({ size = 48, color = C.gold }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <text x="32" y="46" textAnchor="middle" fontSize="48" fontFamily="serif" fill={color} opacity="0.9">
      &#x0950;
    </text>
  </svg>
);

/* ───────────── DATA ───────────── */
const features = [
  {
    title: "Celebrate",
    desc: "Honor the festivals, traditions, and sacred moments that connect Hindu Americans to 5,000 years of living culture.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={C.saffron} strokeWidth="1.5" />
        <path d="M20 8 L22 16 L20 14 L18 16 Z" fill={C.gold} />
        <path d="M20 8 L24 18 L20 15 L16 18 Z" fill="none" stroke={C.saffron} strokeWidth="0.75" />
        <circle cx="20" cy="24" r="4" fill={C.gold} opacity="0.3" />
        <circle cx="20" cy="24" r="2" fill={C.saffron} opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Learn",
    desc: "Explore the Vedas, the Gita, and dharmic philosophy through modern eyes. Ancient wisdom for the American moment.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="24" height="20" rx="2" stroke={C.saffron} strokeWidth="1.5" />
        <line x1="20" y1="10" x2="20" y2="30" stroke={C.saffron} strokeWidth="1" />
        <path d="M8 14 Q14 12 20 14" stroke={C.gold} strokeWidth="0.75" fill="none" />
        <path d="M20 14 Q26 12 32 14" stroke={C.gold} strokeWidth="0.75" fill="none" />
        <circle cx="20" cy="8" r="2" fill={C.gold} opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Connect",
    desc: "Join a growing community of Hindu Americans building bridges between heritage and homeland, tradition and tomorrow.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="16" r="5" stroke={C.saffron} strokeWidth="1.5" />
        <circle cx="26" cy="16" r="5" stroke={C.saffron} strokeWidth="1.5" />
        <path d="M8 32 Q14 24 20 28 Q26 24 32 32" stroke={C.gold} strokeWidth="1" fill="none" />
        <line x1="19" y1="16" x2="21" y2="16" stroke={C.gold} strokeWidth="1.5" />
      </svg>
    ),
  },
];

const holidays = [
  { name: "Holi", date: "March 14, 2026", desc: "The festival of colors celebrating spring, love, and the triumph of good over evil.", color: "#E8721A" },
  { name: "Ram Navami", date: "April 6, 2026", desc: "Celebrating the birth of Lord Rama, the embodiment of dharma and righteousness.", color: "#D4AF37" },
  { name: "Ganesh Chaturthi", date: "August 27, 2026", desc: "Honoring Lord Ganesha, the remover of obstacles and patron of new beginnings.", color: "#4A1230" },
  { name: "Navratri", date: "October 2, 2026", desc: "Nine nights of devotion to the divine feminine — dance, prayer, and renewal.", color: "#E8721A" },
  { name: "Diwali", date: "October 20, 2026", desc: "The festival of lights — the triumph of knowledge over ignorance, light over darkness.", color: "#D4AF37" },
  { name: "Raksha Bandhan", date: "August 9, 2026", desc: "Celebrating the sacred bond between siblings with threads of protection and love.", color: "#4A1230" },
];

const stats = [
  { value: "4.5M+", label: "Hindu Americans", desc: "A growing community across all 50 states" },
  { value: "10,000+", label: "Years of Tradition", desc: "The world\u2019s oldest continuous civilization" },
  { value: "33M+", label: "Deities in the Pantheon", desc: "One Brahman, infinite manifestations" },
  { value: "5", label: "Major Dharmic Paths", desc: "Vaishnavism, Shaivism, Shaktism, Smartism, and more" },
];

const blogPosts = [
  { title: "Why Every Hindu-American Kid Deserves to See Themselves in School Textbooks", excerpt: "The fight for accurate representation of Hindu history and philosophy in American education isn\u2019t just about pride \u2014 it\u2019s about truth.", category: "Culture" },
  { title: "Diwali at the White House: What It Means and What It Doesn\u2019t", excerpt: "Political recognition is welcome. But the real light of Diwali burns in living rooms, temples, and hearts across this nation.", category: "Community" },
  { title: "The Gita in the Boardroom: Hindu Philosophy Meets American Ambition", excerpt: "Nishkama karma \u2014 action without attachment to results \u2014 is the most radical leadership philosophy America has never heard of.", category: "Philosophy" },
];

/* ───────────── COMPONENT ───────────── */
export default function HindUSAHome() {
  return (
    <div style={{ fontFamily: "var(--font-body, 'Space Grotesk', system-ui, sans-serif)", color: C.dark, overflowX: "hidden" }}>

      {/* ═══════ HERO ═══════ */}
      <section style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.cream,
        overflow: "hidden",
        padding: "80px 5vw 100px",
      }}>
        <MandalaWatermark opacity={0.05} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 32 }}>
            <div style={{ width: 40, height: 1, background: C.gold }} />
            <span style={{ fontSize: 11, letterSpacing: 4, color: C.gold, fontWeight: 700, textTransform: "uppercase" }}>Hindu American Pride</span>
            <div style={{ width: 40, height: 1, background: C.gold }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
            fontSize: "clamp(36px, 7vw, 80px)",
            fontWeight: 400,
            lineHeight: 1.05,
            color: C.dark,
            margin: "0 0 24px",
          }}>
            5,000 Years of Wisdom.<br />
            <span style={{ color: C.saffron }}>One Nation.</span>{" "}
            <span style={{ color: C.burgundy }}>All Are Welcome.</span>
          </h1>
          <p style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.7,
            color: "#5A4A3A",
            maxWidth: 600,
            margin: "0 auto 44px",
          }}>
            The oldest living civilization, woven into the fabric of the world&apos;s youngest democracy. Celebrate your dharma. Wear your heritage. Build the community.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/holidays" style={{
              background: C.saffron,
              color: C.white,
              textDecoration: "none",
              padding: "16px 36px",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "none",
              display: "inline-block",
            }}>
              Explore Holidays
            </Link>
            <Link href="/shop" style={{
              background: "transparent",
              color: C.burgundy,
              textDecoration: "none",
              padding: "16px 36px",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: `2px solid ${C.burgundy}`,
              display: "inline-block",
            }}>
              Visit the Shop
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ MANDALA DIVIDER ═══════ */}
      <div style={{ padding: "40px 0", background: C.cream }}>
        <MandalaDivider />
      </div>

      {/* ═══════ WHAT IS HINDUSA — 3-COLUMN FEATURES ═══════ */}
      <section style={{ padding: "80px 5vw", background: C.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: C.saffron, fontWeight: 700, textTransform: "uppercase" }}>What Is HindUSA</span>
            <h2 style={{
              fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: C.dark,
              margin: "16px 0 0",
            }}>
              A Platform for Hindu-American Life
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {features.map((f) => (
              <div key={f.title} style={{
                background: C.white,
                padding: "40px 32px",
                border: `1px solid ${C.saffron}18`,
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${C.saffron}12`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
                  fontSize: 24,
                  fontWeight: 400,
                  color: C.burgundy,
                  marginBottom: 12,
                }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "#5A4A3A", margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MANDALA DIVIDER ═══════ */}
      <div style={{ padding: "20px 0", background: C.white }}>
        <MandalaDivider color={C.gold} />
      </div>

      {/* ═══════ FEATURED HOLIDAYS — HORIZONTAL SCROLL ═══════ */}
      <section style={{ padding: "80px 0", background: C.white }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 5vw" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: C.saffron, fontWeight: 700, textTransform: "uppercase" }}>Sacred Calendar</span>
            <h2 style={{
              fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: C.dark,
              margin: "16px 0 0",
            }}>
              Upcoming Hindu Holidays
            </h2>
          </div>
        </div>
        <div style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          padding: "0 5vw 20px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
          {holidays.map((h) => (
            <div key={h.name} style={{
              flex: "0 0 300px",
              scrollSnapAlign: "start",
              background: C.cream,
              padding: "32px 28px",
              border: `1px solid ${C.saffron}15`,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 3,
                background: h.color,
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: h.color }} />
                <span style={{ fontSize: 12, letterSpacing: 2, color: h.color, fontWeight: 700, textTransform: "uppercase" }}>{h.date}</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
                fontSize: 26,
                fontWeight: 400,
                color: C.dark,
                marginBottom: 12,
              }}>
                {h.name}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5A4A3A", margin: 0 }}>{h.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/holidays" style={{
            color: C.saffron,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.04em",
            textDecoration: "none",
            borderBottom: `2px solid ${C.saffron}40`,
            paddingBottom: 2,
          }}>
            View Full Calendar &rarr;
          </Link>
        </div>
      </section>

      {/* ═══════ MANDALA DIVIDER ═══════ */}
      <div style={{ padding: "20px 0", background: C.cream }}>
        <MandalaDivider />
      </div>

      {/* ═══════ COMMUNITY STATS ═══════ */}
      <section style={{ padding: "80px 5vw", background: C.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: C.saffron, fontWeight: 700, textTransform: "uppercase" }}>By The Numbers</span>
            <h2 style={{
              fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: C.dark,
              margin: "16px 0 0",
            }}>
              The Hindu-American Story
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "32px 20px" }}>
                <div style={{
                  fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
                  fontSize: "clamp(40px, 5vw, 60px)",
                  fontWeight: 400,
                  color: C.saffron,
                  lineHeight: 1,
                  marginBottom: 12,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: C.burgundy,
                  marginBottom: 8,
                }}>
                  {s.label}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5A4A3A", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MANDALA DIVIDER ═══════ */}
      <div style={{ padding: "20px 0", background: C.white }}>
        <MandalaDivider color={C.gold} />
      </div>

      {/* ═══════ DAILY VERSE CTA ═══════ */}
      <section style={{ padding: "80px 5vw", background: C.white }}>
        <div style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          border: `2px solid ${C.gold}50`,
          padding: "56px 40px",
          position: "relative",
        }}>
          <div style={{
            position: "absolute",
            top: -1,
            left: "50%",
            transform: "translateX(-50%)",
            background: C.white,
            padding: "0 20px",
          }}>
            <OmSymbol size={40} color={C.gold} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: C.dark,
            marginBottom: 16,
            marginTop: 8,
          }}>
            Start Each Day With Sacred Wisdom
          </h2>
          <p style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "#5A4A3A",
            maxWidth: 480,
            margin: "0 auto 32px",
          }}>
            A daily verse from the Bhagavad Gita, the Upanishads, and other sacred Hindu texts. Ancient words for the modern soul.
          </p>
          <Link href="/daily-verse" style={{
            background: C.gold,
            color: C.dark,
            textDecoration: "none",
            padding: "16px 36px",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "inline-block",
          }}>
            Today&apos;s Verse
          </Link>
        </div>
      </section>

      {/* ═══════ MANDALA DIVIDER ═══════ */}
      <div style={{ padding: "20px 0", background: C.cream }}>
        <MandalaDivider />
      </div>

      {/* ═══════ LATEST BLOG ═══════ */}
      <section style={{ padding: "80px 5vw", background: C.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: C.saffron, fontWeight: 700, textTransform: "uppercase" }}>From the Blog</span>
            <h2 style={{
              fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: C.dark,
              margin: "16px 0 0",
            }}>
              Stories &amp; Perspectives
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {blogPosts.map((post) => (
              <Link key={post.title} href="/blog" style={{ textDecoration: "none" }}>
                <div style={{
                  background: C.white,
                  padding: "32px 28px",
                  border: `1px solid ${C.saffron}15`,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${C.saffron}10`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <span style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    color: C.saffron,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}>
                    {post.category}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
                    fontSize: 22,
                    fontWeight: 400,
                    color: C.dark,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5A4A3A", margin: 0, flex: 1 }}>{post.excerpt}</p>
                  <span style={{ fontSize: 13, color: C.saffron, fontWeight: 700, marginTop: 16, display: "inline-block" }}>
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SHOP CTA BANNER ═══════ */}
      <section style={{
        padding: "80px 5vw",
        background: C.saffron,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-heading, 'Instrument Serif', Georgia, serif)",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            color: C.white,
            marginBottom: 16,
            lineHeight: 1.1,
          }}>
            Wear Your Dharma With Pride
          </h2>
          <p style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 520,
            margin: "0 auto 36px",
          }}>
            Hindu-American apparel designed for the diaspora. Rooted in tradition, made for this soil.
          </p>
          <Link href="/shop" style={{
            background: C.white,
            color: C.saffron,
            textDecoration: "none",
            padding: "16px 40px",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "inline-block",
          }}>
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
