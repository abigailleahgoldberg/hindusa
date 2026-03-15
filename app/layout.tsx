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
  },
  twitter: {
    card: "summary_large_image",
    title: "HindUSA — Hindu-American Pride and Culture",
    description:
      "Hindu-American pride gear, culture, and community.",
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
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
