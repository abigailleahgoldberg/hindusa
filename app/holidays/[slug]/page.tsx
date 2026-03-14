
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { holidays, getHoliday } from "@/app/data/holidays";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return holidays.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const holiday = getHoliday(slug);
  if (!holiday) return {};
  return {
    title: `${holiday.name} — ${holiday.subtitle}`,
    description: holiday.description.slice(0, 160),
  };
}

export default async function HolidayDetailPage({ params }: Props) {
  const { slug } = await params;
  const holiday = getHoliday(slug);
  if (!holiday) notFound();

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: holiday.name,
    description: holiday.description,
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    organizer: {
      "@type": "Organization",
      name: "HindUSA",
      url: "https://hindusa.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <div style={{ marginBottom: "0.75rem" }}>
          <Link href="/holidays" style={{
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "var(--saffron)",
            letterSpacing: "0.04em",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            All Holidays
          </Link>
        </div>

        <div style={{
          borderLeft: `4px solid ${holiday.color}`,
          paddingLeft: "1.5rem",
          marginBottom: "2.5rem",
          marginTop: "1.5rem",
        }}>
          <div style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: holiday.color,
            marginBottom: "0.5rem",
          }}>
            {holiday.subtitle}
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
            fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1.1,
          }}>
            {holiday.name}
          </h1>
        </div>

        <p style={{
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          marginBottom: "3rem",
        }}>
          {holiday.description}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <section>
            <h2 style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "1rem",
            }}>
              Why It Matters
            </h2>
            <p style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}>
              {holiday.significance}
            </p>
          </section>

          <section>
            <h2 style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "1rem",
            }}>
              How It Is Observed
            </h2>
            <p style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}>
              {holiday.howObserved}
            </p>
          </section>

          <section style={{
            backgroundColor: "var(--dark)",
            padding: "2rem 2rem 2rem 2.5rem",
            borderLeft: `4px solid ${holiday.color}`,
          }}>
            <div style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: holiday.color,
              marginBottom: "1rem",
            }}>
              Scripture
            </div>
            <p style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "1.125rem",
              color: "var(--cream)",
              fontStyle: "italic",
              lineHeight: 1.65,
              marginBottom: "1rem",
            }}>
              &ldquo;{holiday.scriptureText}&rdquo;
            </p>
            <p style={{
              fontSize: "0.8125rem",
              color: "rgba(255,248,240,0.5)",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}>
              {holiday.scriptureRef}
            </p>
          </section>
        </div>

        <div style={{
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <p style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              marginBottom: "1rem",
            }}>
              Celebrate {holiday.name} with gear that matches the moment.
            </p>
            <Link href="/shop" className="btn-primary" style={{ fontSize: "0.875rem" }}>
              Shop the Collection
            </Link>
          </div>
          <Link href="/calendar" style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--saffron)",
          }}>
            View Holiday Calendar &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}
