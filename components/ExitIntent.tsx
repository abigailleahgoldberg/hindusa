"use client";

import { useState, useEffect, useRef } from "react";

const COUPON = "NAMASTE10";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (localStorage.getItem("hindusa-exit-intent-shown")) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (triggered.current) return;
      if (e.clientY <= 10) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem("hindusa-exit-intent-shown", "1");
      }
    };

    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    const onScroll = () => {
      if (triggered.current) return;
      const now = Date.now();
      const delta = window.scrollY - lastScrollY;
      const elapsed = now - lastScrollTime;
      if (delta < -80 && elapsed < 300) {
        triggered.current = true;
        setVisible(true);
        localStorage.setItem("hindusa-exit-intent-shown", "1");
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, coupon: COUPON, site: "hindusa" }),
      });
    } catch {}
    setSubmitted(true);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.72)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
      fontFamily: "var(--font-space-grotesk), sans-serif",
    }}>
      <div style={{
        background: "var(--dark, #1A0A00)",
        border: "1px solid rgba(255,153,0,0.35)",
        maxWidth: 440,
        width: "100%",
        padding: "40px 36px",
        position: "relative",
      }}>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 16,
            background: "none",
            border: "none",
            color: "rgba(255,248,240,0.4)",
            fontSize: 22,
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "rgba(255,248,240,0.55)", marginBottom: 8 }}>
              Your discount code:
            </div>
            <div style={{
              fontSize: 28,
              color: "var(--saffron, #FF9900)",
              letterSpacing: 4,
              marginBottom: 16,
              fontWeight: 700,
            }}>
              {COUPON}
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,248,240,0.6)", lineHeight: 1.6 }}>
              Use at checkout for 10% off. Where dharma meets democracy. Om Shanti.
            </p>
          </div>
        ) : (
          <>
            <div style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "var(--saffron, #FF9900)",
              textTransform: "uppercase",
              marginBottom: 8,
            }}>
              Before You Go
            </div>
            <h2 style={{
              fontFamily: "var(--font-instrument-serif), 'Instrument Serif', Georgia, serif",
              fontSize: 28,
              color: "var(--cream, #FFF8F0)",
              lineHeight: 1.15,
              marginBottom: 12,
              fontWeight: 400,
            }}>
              Take 10% Off Your First Order
            </h2>
            <p style={{
              fontSize: 14,
              color: "rgba(255,248,240,0.6)",
              lineHeight: 1.65,
              marginBottom: 24,
            }}>
              Hindu-American pride, culture, and community. Enter your email and we will send your discount.
            </p>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,153,0,0.25)",
                  color: "#FFF8F0",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "13px",
                  background: "var(--saffron, #FF9900)",
                  color: "#1A0A00",
                  border: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "1px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  textTransform: "uppercase",
                }}
              >
                Get My 10% Off
              </button>
            </form>
            <p style={{ fontSize: 11, color: "rgba(255,248,240,0.3)", marginTop: 12, lineHeight: 1.5 }}>
              One-time use. No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
