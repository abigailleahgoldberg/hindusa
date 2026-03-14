
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindu-American Resources",
  description:
    "Trusted organizations, publications, and tools for Hindu Americans — the Hindu American Foundation, Hinduism Today, BAPS, and more.",
};

const resources = [
  {
    category: "Organizations",
    items: [
      {
        name: "Hindu American Foundation",
        url: "https://www.hinduamerican.org",
        description:
          "The leading advocacy organization for Hindu Americans — working on civil rights, religious freedom, and education. A critical voice for the community in American public life.",
      },
      {
        name: "BAPS Swaminarayan Sanstha",
        url: "https://www.baps.org",
        description:
          "One of the most active Hindu organizations in the world, with stunning temples across America. Known for community service, education, and extraordinary temple architecture.",
      },
      {
        name: "Vishwa Hindu Parishad of America",
        url: "https://www.vhp-america.org",
        description:
          "Service and cultural organization working to strengthen Hindu traditions and community life across North America.",
      },
    ],
  },
  {
    category: "Publications",
    items: [
      {
        name: "Hinduism Today",
        url: "https://www.hinduismtoday.com",
        description:
          "The international magazine of Hinduism — published since 1979 from Kauai, Hawaii. In-depth articles on Hindu theology, culture, news, and community. Essential reading.",
      },
      {
        name: "India Abroad",
        url: "https://www.indiaabroad.com",
        description:
          "News and culture for the South Asian-American community, covering politics, business, arts, and diaspora life.",
      },
    ],
  },
  {
    category: "Scripture & Study",
    items: [
      {
        name: "Bhagavad Gita (Gita Press)",
        url: "https://www.gitapress.org",
        description:
          "Gita Press has published the Bhagavad Gita and other Hindu scriptures in affordable editions for over a century. Their translations are widely trusted across the tradition.",
      },
      {
        name: "Vedanta Society",
        url: "https://www.vedanta.org",
        description:
          "Teaching the philosophy of Vedanta — based on the Upanishads, Bhagavad Gita, and the teachings of Sri Ramakrishna. Centers across the United States.",
      },
      {
        name: "Arsha Vidya Gurukulam",
        url: "https://www.avgy.org",
        description:
          "Traditional Vedanta teaching in the Swami Dayananda lineage. Residential camps, courses, and teachings on Sanskrit and Vedic philosophy.",
      },
    ],
  },
  {
    category: "Temple Directories",
    items: [
      {
        name: "Hindu Temple Directory (USA)",
        url: "https://www.hindutemples.us",
        description:
          "Find Hindu temples near you across the United States — searchable by state and tradition.",
      },
      {
        name: "ISKCON Temple Locator",
        url: "https://iskcon.org/centres/",
        description:
          "Locate ISKCON (Hare Krishna) temples and centers across North America. Open to all visitors.",
      },
    ],
  },
  {
    category: "Calendar & Practice",
    items: [
      {
        name: "Drik Panchang",
        url: "https://www.drikpanchang.com",
        description:
          "The most trusted online Hindu calendar. Exact dates for every festival, muhurta, tithi, and auspicious time — searchable by location.",
      },
      {
        name: "HinduPad",
        url: "https://www.hindupad.com",
        description:
          "Hindu festival calendar, puja guides, mantra resources, and articles on Hindu traditions and practices.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.75rem",
        }}>
          Resources
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          Hindu-American Resources
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          maxWidth: 580,
          lineHeight: 1.7,
        }}>
          Trusted organizations, publications, and tools for learning, practicing, and connecting within the Hindu-American community.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
        {resources.map((section) => (
          <section key={section.category}>
            <h2 style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "1.25rem",
              paddingBottom: "0.75rem",
              borderBottom: "2px solid var(--saffron)",
              display: "inline-block",
            }}>
              {section.category}
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}>
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    backgroundColor: "var(--white, #fff)",
                    border: "1px solid var(--border)",
                    padding: "1.5rem",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "0.75rem",
                    gap: "0.5rem",
                  }}>
                    <h3 style={{
                      fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                      fontSize: "1.125rem",
                      fontWeight: 400,
                      color: "var(--dark)",
                    }}>
                      {item.name}
                    </h3>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--saffron)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}>
                    {item.description}
                  </p>
                  <div style={{
                    marginTop: "1rem",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "monospace",
                  }}>
                    {new URL(item.url).hostname}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
