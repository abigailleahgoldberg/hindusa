import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false },
};

export default function OrderSuccessPage() {
  return (
    <div style={{
      maxWidth: 600,
      margin: "0 auto",
      padding: "6rem 1.5rem",
      textAlign: "center",
    }}>
      <div style={{
        width: 64,
        height: 64,
        backgroundColor: "var(--saffron)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 2rem",
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <div style={{
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--saffron)",
        marginBottom: "1rem",
      }}>
        Order Confirmed
      </div>

      <h1 style={{
        fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
        fontSize: "2.75rem",
        fontWeight: 400,
        color: "var(--dark)",
        marginBottom: "1rem",
        lineHeight: 1.2,
      }}>
        Namaste. Your order is on its way.
      </h1>

      <p style={{
        fontSize: "1.0625rem",
        color: "var(--text-secondary)",
        lineHeight: 1.7,
        marginBottom: "2.5rem",
      }}>
        Thank you for your order. You should receive a confirmation email shortly.
        Your gear will arrive wearing its dharma.
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/shop" className="btn-primary">
          Continue Shopping
        </Link>
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>

      <div style={{
        marginTop: "4rem",
        padding: "1.5rem",
        backgroundColor: "var(--cream)",
        border: "1px solid var(--border)",
      }}>
        <p style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          fontStyle: "italic",
          lineHeight: 1.6,
        }}>
          &ldquo;You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.&rdquo;
        </p>
        <p style={{
          fontSize: "0.8125rem",
          color: "var(--text-muted)",
          marginTop: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.06em",
        }}>
          Bhagavad Gita 2:47
        </p>
      </div>
    </div>
  );
}
