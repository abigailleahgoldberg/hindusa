"use client";


import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

const products = [
  {
    id: "namaste-yall-tee",
    name: "Namaste Y'all",
    variant: "Classic Tee",
    price: 34.99,
    image: "https://images.printful.com/files/aec/aec4b48be0cfe7c1e5c87e47e72fa98d/preview.png",
    description:
      "The crossroads of Texas and the Upanishads. Soft, structured, and ready for the street or the mandir parking lot.",
    details: "100% ring-spun cotton. Unisex fit. Sizes S–3XL.",
  },
  {
    id: "om-sweet-om-hoodie",
    name: "Om Sweet Om",
    variant: "Hoodie",
    price: 54.99,
    image: "https://images.printful.com/files/595/595f55e7cbddf47fb6de1cfcb1b01c17/preview.png",
    description:
      "Because home is wherever you chant. Midweight fleece with a front pouch pocket. Warm enough for a New England Diwali.",
    details: "50% cotton, 50% polyester. Unisex relaxed fit. Sizes S–3XL.",
  },
  {
    id: "karma-is-real-hat",
    name: "Karma Is Real",
    variant: "Dad Hat",
    price: 28.99,
    image: "https://images.printful.com/files/2b3/2b3fa9aad2a9e4e21e2f95c46c9b1e3f/preview.png",
    description:
      "Spoiler: it comes back around. Unstructured six-panel with a low profile. Embroidered, not printed.",
    details: "100% chino cotton twill. One size fits most. Adjustable strap.",
  },
  {
    id: "desi-proud-crop",
    name: "Desi & Proud",
    variant: "Crop Top",
    price: 32.99,
    image: "https://images.printful.com/files/3a7/3a7f9c56b2d3a5e6f1c8b9d2e4f7a0b3/preview.png",
    description:
      "Diaspora energy, American soil. Cropped fit, slightly boxy, made for movement.",
    details: "100% jersey cotton. Women's relaxed fit. Sizes S–2XL.",
  },
  {
    id: "sacred-free-joggers",
    name: "Sacred & Free",
    variant: "Joggers",
    price: 49.99,
    image: "https://images.printful.com/files/5c9/5c9e1d3f7a2b4c6d8e0f2a4b6c8d0e2/preview.png",
    description:
      "Comfortable enough for meditation. Sharp enough for everything else. Side pockets, tapered ankle.",
    details: "52% cotton, 48% polyester fleece. Unisex. Sizes S–3XL.",
  },
  {
    id: "third-eye-open-beanie",
    name: "Third Eye Open",
    variant: "Beanie",
    price: 24.99,
    image: "https://images.printful.com/files/7e1/7e1f3a5c9d7b1e3f5a7c9d1b3e5f7a9/preview.png",
    description:
      "See clearly. Stay warm. Ribbed knit cuff beanie with embroidered text.",
    details: "100% acrylic. One size. Fits most adults.",
  },
  {
    id: "dharma-crew",
    name: "Dharma First",
    variant: "Crewneck Sweatshirt",
    price: 59.99,
    image: "https://images.printful.com/files/aec/aec4b48be0cfe7c1e5c87e47e72fa98d/preview.png",
    description:
      "Not a bumper sticker philosophy. A 4,000-year-old operating system for being a good human.",
    details: "80% cotton, 20% polyester. Unisex. Sizes S–3XL.",
  },
  {
    id: "mandir-bound-tee",
    name: "Mandir Bound",
    variant: "Graphic Tee",
    price: 34.99,
    image: "https://images.printful.com/files/595/595f55e7cbddf47fb6de1cfcb1b01c17/preview.png",
    description:
      "For the Sunday puja crew, the Friday night aarti crowd, and everyone in between.",
    details: "100% ring-spun cotton. Unisex fit. Sizes S–3XL.",
  },
  {
    id: "bhagavad-gita-tote",
    name: "The Gita Is Lit",
    variant: "Canvas Tote Bag",
    price: 22.99,
    image: "https://images.printful.com/files/2b3/2b3fa9aad2a9e4e21e2f95c46c9b1e3f/preview.png",
    description:
      "Carry your groceries, your library books, or an actual copy of the Bhagavad Gita. All valid.",
    details: "12 oz natural cotton canvas. 18\" x 14\". Interior pocket.",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: `${product.name} — ${product.variant}`,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

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
          The Collection
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          Shop HindUSA
        </h1>
        <p style={{
          fontSize: "1.0625rem",
          color: "var(--text-secondary)",
          maxWidth: 560,
          lineHeight: 1.7,
        }}>
          Hindu-American pride gear. Made on demand. No inventory waste.
          Ships anywhere in the US in 3-7 business days.
        </p>
      </div>

      <div style={{
        backgroundColor: "var(--cream)",
        border: "1px solid var(--border)",
        padding: "1rem 1.5rem",
        marginBottom: "2.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--saffron)" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4M12 16h.01"/>
        </svg>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
          All items are print-on-demand. Each order is made specifically for you — no mass production, no waste.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "2rem",
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: "var(--white, #fff)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          >
            <div style={{
              aspectRatio: "1",
              backgroundColor: "var(--cream)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `<div style="padding: 2rem; text-align: center; font-family: 'Instrument Serif', serif; font-size: 1.5rem; color: var(--saffron);">${product.name}</div>`;
                  }
                }}
              />
            </div>
            <div style={{ padding: "1.5rem" }}>
              <div style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "0.25rem",
              }}>
                {product.variant}
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--dark)",
                marginBottom: "0.5rem",
              }}>
                {product.name}
              </h2>
              <p style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: "0.5rem",
              }}>
                {product.description}
              </p>
              <p style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                marginBottom: "1.25rem",
                lineHeight: 1.5,
              }}>
                {product.details}
              </p>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--dark)",
                }}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    backgroundColor: addedId === product.id ? "var(--burgundy)" : "var(--saffron)",
                    color: addedId === product.id ? "var(--cream)" : "var(--dark)",
                    border: "none",
                    padding: "0.625rem 1.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {addedId === product.id ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "4rem",
        padding: "3rem 2rem",
        backgroundColor: "var(--dark)",
        textAlign: "center",
        color: "var(--cream)",
      }}>
        <h2 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "1.75rem",
          fontWeight: 400,
          marginBottom: "0.75rem",
          color: "var(--saffron)",
        }}>
          Custom Orders
        </h2>
        <p style={{
          fontSize: "0.9375rem",
          color: "rgba(255,248,240,0.65)",
          marginBottom: "1.5rem",
          maxWidth: 480,
          margin: "0 auto 1.5rem",
          lineHeight: 1.7,
        }}>
          Need bulk orders for your temple, cultural event, or organization?
          We can help. Reach out for custom pricing.
        </p>
        <a
          href="mailto:hello@hindusa.com"
          className="btn-primary"
          style={{ fontSize: "0.875rem" }}
        >
          Contact Us
        </a>
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link href="/cart" style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "var(--saffron)",
        }}>
          View Cart &rarr;
        </Link>
      </div>
    </div>
  );
}
