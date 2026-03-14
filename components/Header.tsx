"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartItemCount } = useCart();

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/#culture", label: "Culture" },
    { href: "/holidays", label: "Holidays" },
    { href: "/calendar", label: "Calendar" },
    { href: "/daily-verse", label: "Daily Verse" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "var(--cream)",
      borderBottom: "1px solid var(--border)",
      boxShadow: "0 1px 8px rgba(26,10,0,0.06)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "1.75rem",
          fontWeight: 400,
          color: "var(--saffron)",
          letterSpacing: "-0.01em",
        }}>
          HindUSA
        </Link>

        {/* Desktop Nav */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--saffron)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--dark)",
              backgroundColor: "var(--saffron)",
              padding: "0.5rem 1rem",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--saffron-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--saffron)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Cart{cartItemCount > 0 && (
              <span style={{
                backgroundColor: "var(--burgundy)",
                color: "#fff",
                borderRadius: "50%",
                width: 18,
                height: 18,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}>
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="mobile-controls">
          <Link href="/cart" style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "var(--dark)",
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartItemCount > 0 && (
              <span style={{
                backgroundColor: "var(--saffron)",
                color: "var(--dark)",
                borderRadius: "50%",
                width: 18,
                height: 18,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}>
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              padding: "0.25rem",
              color: "var(--dark)",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          top: 64,
          backgroundColor: "var(--cream)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          padding: "2rem 1.5rem",
          gap: "0.5rem",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: "1.5rem",
                fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                color: "var(--dark)",
                padding: "0.75rem 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "1rem",
              backgroundColor: "var(--saffron)",
              color: "var(--dark)",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "1rem 1.5rem",
              textAlign: "center",
            }}
          >
            View Cart {cartItemCount > 0 && `(${cartItemCount})`}
          </Link>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-controls { display: none !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
