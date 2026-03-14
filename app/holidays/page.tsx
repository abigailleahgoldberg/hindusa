
import Link from "next/link";
import type { Metadata } from "next";
import { holidays } from "@/app/data/holidays";

export const metadata: Metadata = {
  title: "Hindu Holidays — Festivals, Celebrations, and Traditions",
  description:
    "Explore the major Hindu holidays: Diwali, Holi, Navratri, Ganesh Chaturthi, and more. Learn their meaning, how they're observed, and the scriptures behind them.",
};

export default function HolidaysPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.75rem",
        }}>
          Celebrations
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          Hindu Holidays
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          maxWidth: 620,
          lineHeight: 1.7,
        }}>
          A calendar of light, color, devotion, and community — celebrated for
          thousands of years and continuing to grow in America.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "2rem",
      }}>
        {holidays.map((holiday) => (
          <Link
            key={holiday.slug}
            href={`/holidays/${holiday.slug}`}
            style={{
              display: "block",
              backgroundColor: "var(--white, #fff)",
              border: "1px solid var(--border)",
              borderTop: `4px solid ${holiday.color}`,
              padding: "2rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none",
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "0.25rem",
            }}>
              {holiday.name}
            </h2>
            <div style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "1rem",
            }}>
              {holiday.subtitle}
            </div>
            <p style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              marginBottom: "1.25rem",
            }}>
              {holiday.description.slice(0, 160)}...
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: holiday.color,
                  minWidth: 80,
                }}>
                  Scripture
                </span>
                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  {holiday.scriptureRef}
                </span>
              </div>
            </div>
            <span style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "var(--saffron)",
              letterSpacing: "0.04em",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
            }}>
              Learn more
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
