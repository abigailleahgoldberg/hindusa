"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout is not available at this time. Please try again later.");
      }
    } catch {
      alert("Checkout is not available at this time. Please try again later.");
    }
  };

  if (items.length === 0) {
    return (
      <div style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "6rem 1.5rem",
        textAlign: "center",
      }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "1rem",
        }}>
          Cart
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "2.5rem",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          Your cart is empty.
        </h1>
        <p style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          marginBottom: "2.5rem",
          lineHeight: 1.6,
        }}>
          The dharma of retail: you must add to receive.
        </p>
        <Link href="/shop" className="btn-primary">
          Shop the Collection
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <div style={{ marginBottom: "2.5rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.5rem",
        }}>
          Cart
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "2.5rem",
          fontWeight: 400,
          color: "var(--dark)",
        }}>
          Your Order
        </h1>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2rem",
      }}>
        <div>
          {items.map((item) => (
            <div key={item.id} style={{
              display: "flex",
              gap: "1.5rem",
              padding: "1.5rem 0",
              borderBottom: "1px solid var(--border)",
              alignItems: "flex-start",
            }}>
              <div style={{
                width: 80,
                height: 80,
                backgroundColor: "var(--cream)",
                border: "1px solid var(--border)",
                flexShrink: 0,
                overflow: "hidden",
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                  fontSize: "1.125rem",
                  color: "var(--dark)",
                  marginBottom: "0.25rem",
                }}>
                  {item.name}
                </div>
                <div style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  marginBottom: "0.75rem",
                }}>
                  ${item.price.toFixed(2)}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid var(--border)" }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: 32,
                        height: 32,
                        border: "none",
                        background: "none",
                        fontSize: "1.125rem",
                        cursor: "pointer",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      -
                    </button>
                    <span style={{
                      width: 32,
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: 32,
                        height: 32,
                        border: "none",
                        background: "none",
                        fontSize: "1.125rem",
                        cursor: "pointer",
                        color: "var(--text-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--dark)",
                flexShrink: 0,
              }}>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: "var(--cream)",
          border: "1px solid var(--border)",
          padding: "2rem",
          alignSelf: "start",
        }}>
          <h2 style={{
            fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: "var(--dark)",
            marginBottom: "1.5rem",
          }}>
            Order Summary
          </h2>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
          }}>
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
          }}>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 0",
            borderTop: "1px solid var(--border)",
            marginTop: "0.5rem",
            fontSize: "1.125rem",
            fontWeight: 700,
            color: "var(--dark)",
          }}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="btn-primary"
            style={{ width: "100%", marginTop: "1rem", textAlign: "center" }}
          >
            Proceed to Checkout
          </button>
          <p style={{ fontSize: "0.8125rem", color: "var(--saffron)", marginTop: "0.75rem", textAlign: "center", lineHeight: 1.5 }}>
            Have a coupon code? You can enter it on the checkout page.
          </p>
          <button
            onClick={clearCart}
            style={{
              width: "100%",
              marginTop: "0.75rem",
              background: "none",
              border: "none",
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              cursor: "pointer",
              textDecoration: "underline",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Clear Cart
          </button>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <Link href="/shop" style={{
              fontSize: "0.8125rem",
              color: "var(--saffron)",
              fontWeight: 600,
            }}>
              &larr; Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
