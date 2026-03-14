
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise on HindUSA",
  description:
    "Reach the Hindu-American community through HindUSA — the destination for Hindu-American culture, pride, and community.",
};

const audienceStats = [
  { number: "3.2M+", label: "Hindu Americans nationwide" },
  { number: "77%", label: "College educated (highest of any faith group)" },
  { number: "#1", label: "Highest median household income of any religious group" },
  { number: "$1T+", label: "Collective spending power of Indian Americans" },
];

const adOptions = [
  {
    title: "Homepage Feature",
    description:
      "Premium placement in the hero section of HindUSA.com. Your brand in front of every visitor on arrival.",
    price: "Starting at $500/month",
  },
  {
    title: "Blog Sponsorship",
    description:
      "Sponsored placement within our long-form articles. Reach an engaged, reading audience.",
    price: "Starting at $300/month",
  },
  {
    title: "Holiday Guide Partnership",
    description:
      "Sponsor a holiday guide (Diwali, Holi, Navratri, etc.) with branded content, product features, and logo placement.",
    price: "Starting at $750/season",
  },
  {
    title: "Newsletter Sponsorship",
    description:
      "Direct placement in our subscriber emails to the Hindu-American community.",
    price: "Starting at $200/send",
  },
  {
    title: "Product Feature",
    description:
      "Featured listing in our shop alongside HindUSA products. Ideal for Hindu-adjacent brands.",
    price: "Custom pricing",
  },
  {
    title: "Custom Partnership",
    description:
      "Content collaboration, event sponsorship, and custom campaigns. Let's talk about what works for your brand.",
    price: "Custom pricing",
  },
];

const idealPartners = [
  "Indian food and beverage brands",
  "South Asian clothing and jewelry",
  "Hindu temple and spiritual organizations",
  "Indian-American travel and real estate",
  "Cultural event organizers",
  "Education and tutoring services",
  "South Asian media and entertainment",
  "Financial services targeting South Asian diaspora",
  "Wedding and event vendors",
  "Yoga studios and wellness brands",
];

export default function AdvertisePage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.75rem",
        }}>
          Partnerships
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          Advertise on HindUSA
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          maxWidth: 620,
          lineHeight: 1.7,
        }}>
          Reach Hindu Americans — the most educated, highest-earning religious demographic in the United States — through the culture site they trust.
        </p>
      </div>

      {/* Audience Stats */}
      <div style={{
        backgroundColor: "var(--dark)",
        padding: "3rem 2rem",
        marginBottom: "4rem",
      }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "2rem",
        }}>
          The Audience
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}>
          {audienceStats.map((stat) => (
            <div key={stat.number} style={{
              borderLeft: "3px solid var(--saffron)",
              paddingLeft: "1.25rem",
            }}>
              <div style={{
                fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--saffron)",
                marginBottom: "0.5rem",
                lineHeight: 1,
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: "0.875rem",
                color: "rgba(255,248,240,0.65)",
                lineHeight: 1.5,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Options */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "2rem",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "2rem",
        }}>
          Advertising Options
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {adOptions.map((option) => (
            <div key={option.title} style={{
              backgroundColor: "var(--white, #fff)",
              border: "1px solid var(--border)",
              padding: "1.75rem",
              borderTop: "3px solid var(--saffron)",
            }}>
              <h3 style={{
                fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "0.75rem",
              }}>
                {option.title}
              </h3>
              <p style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "1rem",
              }}>
                {option.description}
              </p>
              <div style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--saffron)",
                letterSpacing: "0.04em",
              }}>
                {option.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal Partners */}
      <section style={{
        marginBottom: "4rem",
        backgroundColor: "var(--cream)",
        padding: "2.5rem",
        border: "1px solid var(--border)",
      }}>
        <h2 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "1.75rem",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1.5rem",
        }}>
          Ideal Partners
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "0.75rem",
        }}>
          {idealPartners.map((partner) => (
            <div key={partner} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.625rem",
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
            }}>
              <div style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "var(--saffron)",
                flexShrink: 0,
              }} />
              {partner}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: "var(--saffron)",
        padding: "3rem 2.5rem",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "2rem",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "0.75rem",
        }}>
          Let's Talk
        </h2>
        <p style={{
          fontSize: "1rem",
          color: "var(--dark)",
          opacity: 0.75,
          marginBottom: "2rem",
          maxWidth: 480,
          margin: "0 auto 2rem",
          lineHeight: 1.6,
        }}>
          Tell us about your brand and your goals. We'll put together a proposal that makes sense.
        </p>
        <a
          href="mailto:advertise@hindusa.com"
          className="btn-secondary"
          style={{
            borderColor: "var(--dark)",
            color: "var(--dark)",
            fontSize: "0.875rem",
          }}
        >
          Email advertise@hindusa.com
        </a>
      </section>
    </div>
  );
}
