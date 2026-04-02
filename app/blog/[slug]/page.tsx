import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/app/blog/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Convert markdown-style content to basic HTML paragraphs
  const paragraphs = post.content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "1.625rem",
          fontWeight: 400,
          color: "var(--dark)",
          marginTop: "2.5rem",
          marginBottom: "1rem",
          lineHeight: 1.3,
        }}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") && block.endsWith("**")) {
      return (
        <p key={i} style={{
          fontSize: "1rem",
          color: "var(--text-primary)",
          lineHeight: 1.75,
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}>
          {block.replace(/\*\*/g, "")}
        </p>
      );
    }
    // Handle bold inline text
    const parts = block.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.replace(/\*\*/g, "")}</strong>;
      }
      return part;
    });
    return (
      <p key={i} style={{
        fontSize: "1.0625rem",
        color: "var(--text-secondary)",
        lineHeight: 1.8,
        marginBottom: "1.25rem",
      }}>
        {parts}
      </p>
    );
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "HindUSA" },
    "publisher": { "@type": "Organization", "name": "HindUSA", "url": "https://hindusa.com" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "0.75rem" }}>
        <Link href="/blog" style={{
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "var(--saffron)",
          letterSpacing: "0.04em",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          All Stories
        </Link>
      </div>

      <div style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.25rem",
          flexWrap: "wrap",
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
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            {post.readTime}
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          fontWeight: 400,
          color: "var(--dark)",
          lineHeight: 1.15,
          marginBottom: "1rem",
          letterSpacing: "-0.01em",
        }}>
          {post.title}
        </h1>
        <p style={{
          fontSize: "1.125rem",
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          fontStyle: "italic",
        }}>
          {post.subtitle}
        </p>
      </div>

      <div style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "1.5rem 0",
        marginBottom: "3rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}>
        <div style={{
          width: 36,
          height: 36,
          backgroundColor: "var(--saffron)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth="2.5">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--dark)" }}>
            {post.author}
          </div>
          <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            HindUSA Editorial Team
          </div>
        </div>
      </div>

      <article>
        {paragraphs}
      </article>

      <div style={{
        marginTop: "4rem",
        padding: "2rem",
        backgroundColor: "var(--cream)",
        border: "1px solid var(--border)",
        borderLeft: "4px solid var(--saffron)",
      }}>
        <p style={{
          fontSize: "0.9375rem",
          fontWeight: 700,
          color: "var(--dark)",
          marginBottom: "0.5rem",
        }}>
          Enjoyed this article?
        </p>
        <p style={{
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          marginBottom: "1.25rem",
          lineHeight: 1.6,
        }}>
          Join the community — Hindu-American stories, holiday guides, and new drops straight to your inbox.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <Link href="/#newsletter" className="btn-primary" style={{ fontSize: "0.8rem" }}>
            Subscribe
          </Link>
          <Link href="/blog" className="btn-secondary" style={{ fontSize: "0.8rem" }}>
            More Stories
          </Link>
        </div>
      </div>

      {/* Faith Network Section */}
      <div style={{ marginTop: "2rem", background: "rgba(255,153,0,0.05)", border: "1px solid rgba(255,153,0,0.2)", borderRadius: 10, padding: "24px" }}>
        <div style={{ fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: 14, fontWeight: 700 }}>Faith Network</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a href="https://u-god.com" style={{ color: "var(--saffron)", textDecoration: "none", fontSize: "0.9rem" }}><strong>U-God.com</strong> — Explore all traditions and sacred texts across 25+ world religions</a>
          <a href="https://jewsa.com" style={{ color: "rgba(255,248,240,0.7)", textDecoration: "none", fontSize: "0.9rem" }}><strong>JewSA.com</strong> — Jewish-American culture, identity, and community</a>
          <a href="https://allahican.com" style={{ color: "rgba(255,248,240,0.7)", textDecoration: "none", fontSize: "0.9rem" }}><strong>AllahICan.com</strong> — Islamic perspectives and guidance for modern American Muslims</a>
          <a href="https://redwhitejesus.com" style={{ color: "rgba(255,248,240,0.7)", textDecoration: "none", fontSize: "0.9rem" }}><strong>RedWhiteJesus.com</strong> — Christian faith and American culture</a>
        </div>
      </div>
    </div>
    </>
  );
}
