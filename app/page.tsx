"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { holidays } from "@/app/data/holidays";

const products = [
  {
    id: "namaste-yall-tee",
    name: "Namaste Y'all",
    variant: "Classic Tee",
    price: 34.99,
    image: "https://images.printful.com/files/aec/aec4b48be0cfe7c1e5c87e47e72fa98d/preview.png",
    description: "The crossroads of Texas and the Upanishads.",
  },
  {
    id: "om-sweet-om-hoodie",
    name: "Om Sweet Om",
    variant: "Hoodie",
    price: 54.99,
    image: "https://images.printful.com/files/595/595f55e7cbddf47fb6de1cfcb1b01c17/preview.png",
    description: "Because home is wherever you chant.",
  },
  {
    id: "karma-is-real-hat",
    name: "Karma Is Real",
    variant: "Dad Hat",
    price: 28.99,
    image: "https://images.printful.com/files/2b3/2b3fa9aad2a9e4e21e2f95c46c9b1e3f/preview.png",
    description: "Spoiler: it comes back around.",
  },
  {
    id: "desi-proud-crop",
    name: "Desi & Proud",
    variant: "Crop Top",
    price: 32.99,
    image: "https://images.printful.com/files/3a7/3a7f9c56b2d3a5e6f1c8b9d2e4f7a0b3/preview.png",
    description: "Diaspora energy, American soil.",
  },
  {
    id: "sacred-free-joggers",
    name: "Sacred & Free",
    variant: "Joggers",
    price: 49.99,
    image: "https://images.printful.com/files/5c9/5c9e1d3f7a2b4c6d8e0f2a4b6c8d0e2/preview.png",
    description: "Comfortable enough for meditation. Sharp enough for everything else.",
  },
  {
    id: "third-eye-open-beanie",
    name: "Third Eye Open",
    variant: "Beanie",
    price: 24.99,
    image: "https://images.printful.com/files/7e1/7e1f3a5c9d7b1e3f5a7c9d1b3e5f7a9/preview.png",
    description: "See clearly. Stay warm.",
  },
];

const glossaryTerms = [
  {
    word: "Namaste",
    pronunciation: "nah-mah-STAY",
    definition:
      "The divine in me recognizes the divine in you. Said with hands pressed together at the heart. Basically the most respectful greeting in existence — and yes, yoga teachers use it correctly.",
  },
  {
    word: "Karma",
    pronunciation: "KAR-mah",
    definition:
      "Not cosmic punishment for cutting in line. The law of cause and effect as it applies to intentional action. Every action leaves an impression. Those impressions shape what comes next. Act accordingly.",
  },
  {
    word: "Dharma",
    pronunciation: "DAR-mah",
    definition:
      "Your duty, your purpose, the cosmic order, and the nature of all things — all at once. There's no clean English translation. The closest is: doing what is right, in accordance with who you are and what the moment requires.",
  },
  {
    word: "Diwali",
    pronunciation: "dih-WAH-lee",
    definition:
      "The Festival of Lights. Five days. Oil lamps, fireworks, sweets, prayers to Lakshmi, and the victory of light over darkness. The biggest Hindu holiday in America, and it keeps getting bigger.",
  },
  {
    word: "Puja",
    pronunciation: "POO-jah",
    definition:
      "A ritual of devotion — flowers, incense, a flame, an offering, a prayer. The daily practice of acknowledging the sacred. Every Hindu home has a puja space. If you've ever smelled incense in an Indian household at 6am, that's what was happening.",
  },
  {
    word: "Mantra",
    pronunciation: "MAHN-trah",
    definition:
      "A sacred sound, word, or phrase repeated in meditation or prayer. Not a motivational poster. Om. Gayatri. Maha Mrityunjaya. These are precise tools for shifting states of consciousness, developed over thousands of years.",
  },
  {
    word: "Om",
    pronunciation: "AUM",
    definition:
      "The primordial sound of the universe. The vibration from which all creation emerges, according to the Vedas. Also the sound that closes every yoga class in America. Also kind of both things at once.",
  },
  {
    word: "Chai",
    pronunciation: "CHYE",
    definition:
      "Tea — specifically spiced milk tea brewed with cardamom, ginger, cinnamon, and cloves. Note: 'chai tea' means 'tea tea.' Just say chai. Every Indian grandmother in America has a recipe and hers is the correct one.",
  },
];

const stats = [
  { number: "3.2M", label: "Hindu Americans" },
  { number: "1906", label: "First Hindu temple in the US (San Francisco)" },
  { number: "#1", label: "Highest median income of any religious group in the US" },
  { number: "1,000+", label: "Hindu temples across America" },
];

const occasions = [
  {
    title: "Diwali",
    description: "The Festival of Lights calls for lights, sweets, and gear that matches the moment.",
    cta: "Shop Diwali",
  },
  {
    title: "Holi",
    description: "You're going to get it covered in color. Wear something that started with intention.",
    cta: "Shop Holi",
  },
  {
    title: "Wedding Season",
    description: "Shaadi season is long, expensive, and worth every moment. Gear up.",
    cta: "Shop Weddings",
  },
  {
    title: "Graduation",
    description: "They got the degree. You get them the shirt that says who they are.",
    cta: "Shop Grads",
  },
  {
    title: "Housewarming",
    description: "New home, new blessings, new gear. Ganesha approves.",
    cta: "Shop Homes",
  },
  {
    title: "Just Because",
    description: "You don't need a festival to wear your pride. Tuesday works.",
    cta: "Shop All",
  },
];

const faqs = [
  {
    q: "Is this cultural appropriation?",
    a: "It is run by and for Hindu Americans. The gear is made to be worn by people who are proud of their heritage — not as a costume, not as an aesthetic trend. If you're Hindu, this is yours. If you're not Hindu but you love someone who is, gifting it is an act of love, not appropriation.",
  },
  {
    q: "Are you affiliated with any specific Hindu sect or organization?",
    a: "No. Hinduism is a vast tradition with no central authority, no single pope, no official orthodoxy. HindUSA celebrates the breadth of that tradition — from Vaishnavism to Shaivism to Shaktism to the philosophical schools. We don't represent any one lineage. We represent Hindu-American identity in its full diversity.",
  },
  {
    q: "How do you ensure respectful treatment of Hindu traditions?",
    a: "By involving the community in everything we do. By learning continuously. By treating Hindu culture as the profound and ancient tradition it is — not as content, not as branding. If we ever get it wrong, tell us. We're listening.",
  },
  {
    q: "Where is the merchandise produced?",
    a: "Through US-based print-on-demand production via Printful. No minimum orders, no warehouse inventory, no waste. When you buy, it's made for you.",
  },
  {
    q: "What percentage of Hindus in the US are American-born?",
    a: "About 36% of Hindu Americans are US-born — a number that is growing rapidly as the first large wave of Indian immigrants' children come of age. This is the generation HindUSA is largely built for: people who are fully American and fully Hindu, who don't want to choose between identities.",
  },
];

export default function HomePage() {
  const { addToCart } = useCart();
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubStatus(res.ok ? "done" : "error");
    } catch {
      setSubStatus("error");
    }
  };

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
    <>
      {/* Ticker */}
      <div style={{
        backgroundColor: "var(--saffron)",
        overflow: "hidden",
        padding: "0.625rem 0",
        borderBottom: "1px solid var(--saffron-dark)",
      }}>
        <div style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 35s linear infinite",
          gap: "4rem",
        }}>
          {[0, 1].map((i) => (
            <span key={i} style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--dark)",
              flexShrink: 0,
            }}>
              NAMASTE AMERICA &bull; HINDU-AMERICAN PRIDE &bull; EST. SINCE THE FIRST TEMPLE IN SAN FRANCISCO (1906) &bull; DESI AND PROUD &bull; OM SWEET HOME &bull; DHARMA MEETS DEMOCRACY &bull; KARMA IS REAL &bull; THE BHAGAVAD GITA IS AMERICAN LITERATURE &bull;
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--cream) 0%, #FFF0D9 50%, var(--cream) 100%)",
        padding: "5rem 1.5rem 4rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,153,51,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "inline-block",
            backgroundColor: "var(--saffron)",
            color: "var(--dark)",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.375rem 1rem",
            marginBottom: "1.5rem",
          }}>
            Hindu-American Pride
          </div>
          <h1 style={{
            fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
            fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            color: "var(--dark)",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
          }}>
            Where Dharma<br />Meets Democracy.
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--text-secondary)",
            marginBottom: "2.5rem",
            maxWidth: 600,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}>
            Gear for Americans who celebrate their roots and their rights equally.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/shop" className="btn-primary" style={{ fontSize: "0.875rem" }}>
              Shop The Collection
            </Link>
            <Link href="#culture" className="btn-secondary" style={{ fontSize: "0.875rem" }}>
              The Culture
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "var(--white, #fff)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">The Collection</div>
            <h2 className="section-title">Wear It With Pride</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Hindu-American gear that holds up on the street and in the temple parking lot.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
          }}>
            {products.map((product) => (
              <div key={product.id} style={{
                backgroundColor: "var(--cream)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,10,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  aspectRatio: "1",
                  backgroundColor: "#F5EDE0",
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
                        e.currentTarget.parentElement.innerHTML = `<div style="font-family: 'Instrument Serif', serif; font-size: 1.5rem; color: var(--saffron); padding: 1rem; text-align: center;">${product.name}</div>`;
                      }
                    }}
                  />
                </div>
                <div style={{ padding: "1.25rem" }}>
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
                  <h3 style={{
                    fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: "var(--dark)",
                    marginBottom: "0.375rem",
                  }}>
                    {product.name}
                  </h3>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: 1.5,
                  }}>
                    {product.description}
                  </p>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--dark)",
                    }}>
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      style={{
                        backgroundColor: addedId === product.id ? "var(--burgundy)" : "var(--saffron)",
                        color: "var(--dark)",
                        border: "none",
                        padding: "0.625rem 1.25rem",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        fontFamily: "var(--font-body), 'Space Grotesk', sans-serif",
                      }}
                    >
                      {addedId === product.id ? "Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/shop" className="btn-secondary">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Stats */}
      <section id="culture" style={{
        backgroundColor: "var(--dark)",
        padding: "5rem 1.5rem",
        color: "var(--cream)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--saffron)",
              marginBottom: "0.75rem",
            }}>
              The Numbers
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "var(--cream)",
              fontWeight: 400,
            }}>
              Hindu Americans, in Context
            </h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}>
            {stats.map((stat) => (
              <div key={stat.number} style={{
                textAlign: "center",
                padding: "2rem 1rem",
                borderLeft: "3px solid var(--saffron)",
              }}>
                <div style={{
                  fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  color: "var(--saffron)",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "0.75rem",
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
      </section>

      {/* Glossary */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">Vocabulary</div>
            <h2 className="section-title">Words Your Neighbors Should Know</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Eight words from a 4,000-year-old tradition that have earned their place in the American vocabulary.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {glossaryTerms.map((term) => (
              <div key={term.word} style={{
                backgroundColor: "var(--white, #fff)",
                border: "1px solid var(--border)",
                padding: "1.5rem",
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  marginBottom: "0.5rem",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--saffron)",
                  }}>
                    {term.word}
                  </h3>
                  <span style={{
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                  }}>
                    {term.pronunciation}
                  </span>
                </div>
                <p style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                }}>
                  {term.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holidays */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "var(--white, #fff)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">Celebrations</div>
            <h2 className="section-title">Hindu Holidays</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              A calendar of light, color, devotion, and community — celebrated for thousands of years and counting.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}>
            {holidays.map((holiday) => (
              <Link
                key={holiday.slug}
                href={`/holidays/${holiday.slug}`}
                style={{
                  display: "block",
                  backgroundColor: "var(--cream)",
                  border: "1px solid var(--border)",
                  padding: "1.5rem",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,10,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: holiday.color,
                  marginBottom: "0.75rem",
                }} />
                <h3 style={{
                  fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--dark)",
                  marginBottom: "0.25rem",
                }}>
                  {holiday.name}
                </h3>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                }}>
                  {holiday.subtitle}
                </div>
                <p style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}>
                  {holiday.description.slice(0, 120)}...
                </p>
                <span style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  color: "var(--saffron)",
                  letterSpacing: "0.04em",
                }}>
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/holidays" className="btn-secondary">
              All Holidays
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "var(--cream)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">Gift Guides</div>
            <h2 className="section-title">Shop by Occasion</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {occasions.map((occ) => (
              <div key={occ.title} style={{
                backgroundColor: "var(--white, #fff)",
                border: "1px solid var(--border)",
                padding: "1.75rem",
                borderTop: "3px solid var(--saffron)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                  fontSize: "1.375rem",
                  fontWeight: 400,
                  color: "var(--dark)",
                  marginBottom: "0.75rem",
                }}>
                  {occ.title}
                </h3>
                <p style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1.25rem",
                }}>
                  {occ.description}
                </p>
                <Link href="/shop" style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--saffron)",
                }}>
                  {occ.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{
        backgroundColor: "var(--saffron)",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--dark)",
            opacity: 0.65,
            marginBottom: "0.75rem",
          }}>
            Community
          </div>
          <h2 style={{
            fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 400,
            color: "var(--dark)",
            marginBottom: "0.75rem",
          }}>
            Stay in the Community
          </h2>
          <p style={{
            fontSize: "1rem",
            color: "var(--dark)",
            opacity: 0.75,
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}>
            Holiday guides, new drops, and stories worth reading. No spam. Unsubscribe any time.
          </p>
          {subStatus === "done" ? (
            <div style={{
              backgroundColor: "var(--dark)",
              color: "var(--cream)",
              padding: "1rem 2rem",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}>
              Welcome to the community. Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{
              display: "flex",
              gap: "0",
              maxWidth: 460,
              margin: "0 auto",
              flexWrap: "wrap",
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  flex: 1,
                  minWidth: 200,
                  padding: "0.875rem 1.25rem",
                  border: "2px solid var(--dark)",
                  borderRight: "none",
                  fontSize: "0.875rem",
                  backgroundColor: "var(--cream)",
                  color: "var(--dark)",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={subStatus === "loading"}
                style={{
                  backgroundColor: "var(--dark)",
                  color: "var(--cream)",
                  border: "2px solid var(--dark)",
                  padding: "0.875rem 1.5rem",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-body), 'Space Grotesk', sans-serif",
                }}
              >
                {subStatus === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          )}
          {subStatus === "error" && (
            <p style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--dark)", opacity: 0.65 }}>
              Something went wrong. Try again.
            </p>
          )}
        </div>
      </section>

      {/* Brand Story */}
      <section style={{
        padding: "5rem 1.5rem",
        backgroundColor: "var(--white, #fff)",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ marginBottom: "1rem" }} className="section-label">Our Story</div>
          <h2 className="section-title">The HindUSA Story</h2>
          <div style={{
            fontSize: "1.0625rem",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginTop: "1.5rem",
          }}>
            <p style={{ marginBottom: "1.25rem" }}>
              The first Hindu temple in America opened in San Francisco in 1906. More than a century later, there are over 3 million Hindu Americans — engineers, doctors, entrepreneurs, teachers, artists, parents — woven into every layer of American life.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              But there wasn't a place that celebrated this identity the way it deserves to be celebrated. Not a costume, not an appropriation, not an apology — just pride. The same uncomplicated, flag-waving, gear-wearing, culture-sharing pride that every other American community gets to feel.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              HindUSA is that place. Built for Hindu Americans who are done choosing between their roots and their rights. Who know the Bhagavad Gita and the Constitution. Who grew up with puja and with baseball. Who are, in the deepest sense, both.
            </p>
            <p>
              Where dharma meets democracy. Welcome.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: "5rem 1.5rem",
        backgroundColor: "var(--cream)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label">Questions</div>
            <h2 className="section-title">Honest Answers</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                padding: "1.75rem 0",
                borderBottom: "1px solid var(--border)",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--dark)",
                  marginBottom: "0.75rem",
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "var(--white, #fff)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-label">From the Blog</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Stories Worth Reading</h2>
            </div>
            <Link href="/blog" style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--saffron)",
            }}>
              All Articles &rarr;
            </Link>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}>
            {[
              { slug: "diwali-in-america", title: "Diwali in America", excerpt: "From Edison, NJ to Artesia, CA, the Festival of Lights is burning brighter than ever.", category: "Culture" },
              { slug: "hindu-americans-who-changed-the-world", title: "Hindu Americans Who Changed the World", excerpt: "The engineers, doctors, scientists, and entrepreneurs who quietly built the future.", category: "Community" },
              { slug: "bhagavad-gita-in-10-minutes", title: "The Bhagavad Gita in 10 Minutes", excerpt: "The most influential philosophical text most Americans have never read.", category: "Philosophy" },
            ].map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                display: "block",
                backgroundColor: "var(--cream)",
                border: "1px solid var(--border)",
                padding: "1.75rem",
                transition: "transform 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--saffron)",
                  marginBottom: "0.75rem",
                }}>
                  {post.category}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--dark)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}>
                  {post.title}
                </h3>
                <p style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}>
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
