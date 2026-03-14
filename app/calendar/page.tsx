
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hindu Holiday Calendar",
  description:
    "A year-round guide to Hindu holidays and festivals: Diwali, Holi, Navratri, Janmashtami, and more. Dates may shift year to year based on the lunar calendar.",
};

interface CalendarEntry {
  name: string;
  slug: string;
  month: string;
  timing: string;
  color: string;
  brief: string;
}

const calendarEntries: CalendarEntry[] = [
  {
    name: "Makar Sankranti",
    slug: "",
    month: "January",
    timing: "January 14-15",
    color: "#FF9933",
    brief: "Harvest festival. Kite flying. The sun enters Capricorn.",
  },
  {
    name: "Vasant Panchami",
    slug: "",
    month: "January / February",
    timing: "Late January or February",
    color: "#D4AF37",
    brief: "Saraswati Puja. Goddess of learning and arts. Yellow is worn.",
  },
  {
    name: "Maha Shivaratri",
    slug: "maha-shivaratri",
    month: "February / March",
    timing: "February or March",
    color: "#4527A0",
    brief: "The Great Night of Shiva. All-night vigil, fasting, Abhishekam.",
  },
  {
    name: "Holi",
    slug: "holi",
    month: "March",
    timing: "Late February or March",
    color: "#E040FB",
    brief: "Festival of Colors. Bonfire, colored powder, spring celebration.",
  },
  {
    name: "Ram Navami",
    slug: "ram-navami",
    month: "March / April",
    timing: "March or April",
    color: "#2E7D32",
    brief: "Birthday of Lord Rama. Recitation of Ramayana, fasting, processions.",
  },
  {
    name: "Hanuman Jayanti",
    slug: "",
    month: "April",
    timing: "April",
    color: "#FF5722",
    brief: "Birthday of Hanuman — devotee, warrior, embodiment of selfless service.",
  },
  {
    name: "Guru Purnima",
    slug: "",
    month: "July",
    timing: "July full moon",
    color: "#D4AF37",
    brief: "Honoring teachers and spiritual lineage. The full moon of gratitude.",
  },
  {
    name: "Raksha Bandhan",
    slug: "raksha-bandhan",
    month: "August",
    timing: "July or August full moon",
    color: "#F06292",
    brief: "Siblings. The rakhi thread. Protection, love, and lifelong bond.",
  },
  {
    name: "Janmashtami",
    slug: "janmashtami",
    month: "August",
    timing: "August",
    color: "#1565C0",
    brief: "Birthday of Krishna. Midnight celebration. Dahi Handi. Bhajans.",
  },
  {
    name: "Ganesh Chaturthi",
    slug: "ganesh-chaturthi",
    month: "August / September",
    timing: "August or September",
    color: "#FF5722",
    brief: "Ganesha's birthday. Clay idols, 10 days of worship, visarjan procession.",
  },
  {
    name: "Navratri",
    slug: "navratri",
    month: "September / October",
    timing: "September or October",
    color: "#D4AF37",
    brief: "Nine Nights of Durga. Garba, Dandiya, fasting, the Divine Feminine.",
  },
  {
    name: "Dussehra",
    slug: "",
    month: "October",
    timing: "October — 10th day after Navratri",
    color: "#FF9933",
    brief: "Victory of Durga over Mahishasura. Rama over Ravana. Good over evil.",
  },
  {
    name: "Diwali",
    slug: "diwali",
    month: "October / November",
    timing: "October or November",
    color: "#FF9933",
    brief: "Festival of Lights. Five days. Lakshmi puja, diyas, fireworks, sweets.",
  },
  {
    name: "Kartik Purnima",
    slug: "",
    month: "November",
    timing: "November full moon",
    color: "#D4AF37",
    brief: "Sacred full moon. River bathing. Deepdan — floating lamps on water.",
  },
];

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function CalendarPage() {
  const entriesByMonth: Record<string, CalendarEntry[]> = {};
  calendarEntries.forEach((entry) => {
    const primaryMonth = entry.month.split(" / ")[0];
    if (!entriesByMonth[primaryMonth]) entriesByMonth[primaryMonth] = [];
    entriesByMonth[primaryMonth].push(entry);
    if (entry.month.includes("/")) {
      const secondMonth = entry.month.split(" / ")[1];
      if (!entriesByMonth[secondMonth]) entriesByMonth[secondMonth] = [];
      entriesByMonth[secondMonth].push(entry);
    }
  });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.75rem",
        }}>
          Year-Round
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          Hindu Holiday Calendar
        </h1>
        <p style={{
          fontSize: "1.0625rem",
          color: "var(--text-secondary)",
          maxWidth: 620,
          lineHeight: 1.7,
        }}>
          Hindu holidays follow the lunar calendar, so dates shift each year on the Gregorian calendar. This guide lists the typical timing for each festival. Check a current Hindu calendar app for exact dates each year.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}>
        {months.filter((m) => entriesByMonth[m]).map((month) => (
          <div key={month} style={{
            backgroundColor: "var(--white, #fff)",
            border: "1px solid var(--border)",
            overflow: "hidden",
          }}>
            <div style={{
              backgroundColor: "var(--dark)",
              padding: "0.875rem 1.5rem",
            }}>
              <h2 style={{
                fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--cream)",
              }}>
                {month}
              </h2>
            </div>
            <div style={{ padding: "1rem 0" }}>
              {(entriesByMonth[month] || []).map((entry, i) => (
                <div key={i} style={{
                  padding: "0.875rem 1.5rem",
                  borderBottom: i < (entriesByMonth[month].length - 1) ? "1px solid var(--border)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <div style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: entry.color,
                      flexShrink: 0,
                      marginTop: "0.3rem",
                    }} />
                    <div>
                      {entry.slug ? (
                        <Link href={`/holidays/${entry.slug}`} style={{
                          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                          fontSize: "1.0625rem",
                          color: "var(--dark)",
                          fontWeight: 400,
                          display: "block",
                          marginBottom: "0.125rem",
                          transition: "color 0.15s",
                        }}
                          
                          
                        >
                          {entry.name}
                        </Link>
                      ) : (
                        <div style={{
                          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                          fontSize: "1.0625rem",
                          color: "var(--dark)",
                          marginBottom: "0.125rem",
                        }}>
                          {entry.name}
                        </div>
                      )}
                      <div style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}>
                        {entry.timing}
                      </div>
                      <p style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}>
                        {entry.brief}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "4rem",
        padding: "2.5rem",
        backgroundColor: "var(--cream)",
        border: "1px solid var(--border)",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "1.5rem",
          maxWidth: 580,
          margin: "0 auto 1.5rem",
        }}>
          For exact dates each year, the Hindu calendar shifts with the lunar cycle. We recommend the Drik Panchang app or drikpanchang.com for precise dates.
        </p>
        <Link href="/holidays" className="btn-secondary" style={{ fontSize: "0.875rem" }}>
          Read About Each Holiday
        </Link>
      </div>
    </div>
  );
}
