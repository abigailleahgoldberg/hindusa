import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog — Hindu-American Culture and Community",
  description:
    "Stories about Hindu-American identity, holidays, philosophy, and community. The culture, the history, the people.",
};

export default function BlogPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.75rem",
        }}>
          Stories
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "1rem",
        }}>
          The HindUSA Blog
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          maxWidth: 580,
          lineHeight: 1.7,
        }}>
          Culture, community, history, and philosophy — written for Hindu Americans and anyone curious about this tradition.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        gap: "2rem",
      }}>
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              backgroundColor: "var(--white, #fff)",
              border: "1px solid var(--border)",
              padding: "2rem",
              transition: "transform 0.2s, box-shadow 0.2s",
              textDecoration: "none",
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              gap: "0.5rem",
            }}>
              <span style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--saffron)",
                backgroundColor: "rgba(255,153,51,0.1)",
                padding: "0.25rem 0.625rem",
              }}>
                {post.category}
              </span>
              <span style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}>
                {post.readTime}
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
              fontSize: "1.375rem",
              fontWeight: 400,
              color: "var(--dark)",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}>
              {post.title}
            </h2>
            <p style={{
              fontSize: "0.9375rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              marginBottom: "1.5rem",
            }}>
              {post.excerpt}
            </p>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
              <span style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--saffron)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
              }}>
                Read
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
