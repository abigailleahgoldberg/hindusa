import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import ExitIntent from "@/components/ExitIntent";
import Link from "next/link";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HindUSA — Hindu-American Pride and Culture",
    template: "%s | HindUSA",
  },
  description:
    "Hindu-American pride gear, culture, and community. Celebrating the dharma that built this nation alongside the democracy that protects it.",
  metadataBase: new URL("https://hindusa.com"),
  openGraph: {
    type: "website",
    siteName: "HindUSA",
    title: "HindUSA — Hindu-American Pride and Culture",
    description:
      "Hindu-American pride gear, culture, and community. Celebrating the dharma that built this nation alongside the democracy that protects it.",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HindUSA — Hindu-American Pride and Culture",
    description:
      "Hindu-American pride gear, culture, and community.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: 'https://hindusa.com',
  },
};

const networkLinks = [
  { href: "https://u-god.com", label: "U-God Sacred Texts" },
  { href: "https://jewsa.com", label: "JewSA" },
  { href: "https://allahican.com", label: "AllahICan" },
  { href: "https://redwhitejesus.com", label: "RedWhiteJesus" },
  { href: "https://thevoiceofcash.com", label: "TheVoiceOfCash" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "HindUSA",
          "url": "https://hindusa.com",
          "description": "Hindu-American pride gear, culture, and community. Celebrating the dharma that built this nation alongside the democracy that protects it."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HindUSA",
          "url": "https://hindusa.com"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is this cultural appropriation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is run by and for Hindu Americans. The gear is made to be worn by people who are proud of their heritage — not as a costume, not as an aesthetic trend. If you're Hindu, this is yours. If you're not Hindu but you love someone who is, gifting it is an act of love, not appropriation."
              }
            },
            {
              "@type": "Question",
              "name": "Are you affiliated with any specific Hindu sect or organization?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Hinduism is a vast tradition with no central authority, no single pope, no official orthodoxy. HindUSA celebrates the breadth of that tradition — from Vaishnavism to Shaivism to Shaktism to the philosophical schools. We don't represent any one lineage. We represent Hindu-American identity in its full diversity."
              }
            },
            {
              "@type": "Question",
              "name": "How do you ensure respectful treatment of Hindu traditions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By involving the community in everything we do. By learning continuously. By treating Hindu culture as the profound and ancient tradition it is — not as content, not as branding. If we ever get it wrong, tell us. We're listening."
              }
            },
            {
              "@type": "Question",
              "name": "Where is the merchandise produced?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Through US-based print-on-demand production via Printful. No minimum orders, no warehouse inventory, no waste. When you buy, it's made for you."
              }
            },
            {
              "@type": "Question",
              "name": "What percentage of Hindus in the US are American-born?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "About 36% of Hindu Americans are US-born — a number that is growing rapidly as the first large wave of Indian immigrants' children come of age. This is the generation HindUSA is largely built for: people who are fully American and fully Hindu, who don't want to choose between identities."
              }
            }
          ]
        }) }} />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <ExitIntent />
          <footer
            style={{
              backgroundColor: "var(--dark)",
              color: "var(--cream)",
              padding: "3rem 1.5rem 2rem",
            }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                marginBottom: "2.5rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily:
                      "var(--font-heading), 'Instrument Serif', Georgia, serif",
                    fontSize: "1.75rem",
                    color: "var(--saffron)",
                    marginBottom: "0.75rem",
                  }}
                >
                  HindUSA
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,248,240,0.65)",
                    lineHeight: 1.7,
                    maxWidth: 260,
                  }}
                >
                  Where dharma meets democracy. Hindu-American pride, culture,
                  and community.
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--saffron)",
                    marginBottom: "1rem",
                  }}
                >
                  Explore
                </div>
                {[
                  { href: "/shop", label: "Shop" },
                  { href: "/holidays", label: "Holidays" },
                  { href: "/calendar", label: "Calendar" },
                  { href: "/daily-verse", label: "Daily Verse" },
                  { href: "/blog", label: "Blog" },
                  { href: "/resources", label: "Resources" },
                ].map((link) => (
                  <div key={link.href} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,248,240,0.65)",
                        transition: "color 0.15s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--saffron)",
                    marginBottom: "1rem",
                  }}
                >
                  The Network
                </div>
                {networkLinks.map((link) => (
                  <div key={link.href} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,248,240,0.65)",
                        transition: "color 0.15s",
                      }}
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--saffron)",
                    marginBottom: "1rem",
                  }}
                >
                  Company
                </div>
                {[
                  { href: "/advertise", label: "Advertise" },
                  { href: "/resources", label: "Resources" },
                  { href: "mailto:hello@hindusa.com", label: "Contact" },
                ].map((link) => (
                  <div key={link.href} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,248,240,0.65)",
                        transition: "color 0.15s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,248,240,0.1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,248,240,0.4)",
                }}
              >
                &copy; {new Date().getFullYear()} HindUSA. Made with pride in
                America.
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "rgba(255,248,240,0.4)",
                }}
              >
                Om Shanti.
              </p>
              <div style={{ width: "100%", display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", paddingTop: "12px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,153,0,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Dharma Resources</span>
                <a href="https://www.hinduamerican.org" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Hindu American Foundation →</a>
                <a href="https://www.vedicsciences.net" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Vedic Sciences →</a>
                <a href="https://www.sacred-texts.com/hin/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Sacred Hindu Texts →</a>
              </div>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", paddingTop: "12px", borderTop: "1px solid rgba(255,153,0,0.1)", marginTop: "12px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(255,153,0,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Legal</span>
                <a href="/privacy" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Privacy Policy</a>
                <a href="/terms" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Terms of Service</a>
                <a href="/disclaimer" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Disclaimer</a>
                <a href="/dmca" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>DMCA</a>
                <a href="/contact" style={{ color: "rgba(255,248,240,0.4)", fontSize: "0.8125rem", textDecoration: "none" }}>Contact</a>
              </div>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,248,240,0.25)", marginTop: "12px" }}>Last updated: March 2026</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
