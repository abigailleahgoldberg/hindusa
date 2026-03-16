"use client";

import { useState } from "react";
import { getDailyVerse } from "@/app/data/verses";

async function shareVerseAsImage(verseText: string, reference: string, theme: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const accentColor = "#FF9933";
  const siteUrl = "hindusa.com";

  // Background
  ctx.fillStyle = "#FFF8F0";
  ctx.fillRect(0, 0, 1080, 1080);

  // Top accent bar
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 0, 1080, 8);

  // Theme badge
  ctx.fillStyle = accentColor;
  ctx.font = "700 22px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(theme.toUpperCase(), 540, 78);

  // Verse text — word wrap with vertical centering
  const maxWidth = 880;
  const lineHeight = 62;
  ctx.font = "italic 42px Georgia, serif";
  const fullText = "\u201C" + verseText + "\u201D";
  const allWords = fullText.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of allWords) {
    const testLine = line + word + " ";
    if (ctx.measureText(testLine).width > maxWidth && line !== "") {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line = testLine;
    }
  }
  if (line.trim()) lines.push(line.trim());

  const totalTextHeight = lines.length * lineHeight;
  const zoneTop = 120;
  const zoneBottom = 890;
  const startY = Math.round((zoneTop + zoneBottom) / 2 - totalTextHeight / 2 + lineHeight * 0.75);

  ctx.fillStyle = "#1A1A1A";
  ctx.textAlign = "center";
  let y = startY;
  for (const l of lines) {
    ctx.fillText(l, 540, y);
    y += lineHeight;
  }

  // Reference
  ctx.fillStyle = accentColor;
  ctx.font = "700 28px sans-serif";
  ctx.fillText(reference, 540, y + 64);

  // Bottom divider
  ctx.fillStyle = "#E8E0D8";
  ctx.fillRect(390, 960, 300, 1);

  // Site branding
  ctx.fillStyle = "#999999";
  ctx.font = "400 20px sans-serif";
  ctx.fillText(siteUrl, 540, 1000);

  // Bottom accent bar
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 1072, 1080, 8);

  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], "daily-verse.png", { type: "image/png" });
    if (navigator.share && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'Daily Verse', text: 'Namaste, sending you some wisdom and good energy today u{1F64F}u{2728}' });
      } catch {
        downloadBlob(blob);
      }
    } else {
      downloadBlob(blob);
    }
  }, "image/png");
}

function downloadBlob(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "daily-verse.png";
  a.click();
  URL.revokeObjectURL(url);
}

export default function DailyVersePage() {
  const verse = getDailyVerse();
  const [copied, setCopied] = useState(false);
  const [sharing, setSharing] = useState(false);

  const reference = `${verse.source}${verse.chapter ? `, ${verse.chapter}:${verse.verse}` : ""}`;

  const handleCopy = () => {
    const text = `"${verse.text}"\n\n— ${reference}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShareImage = async () => {
    if (sharing) return;
    setSharing(true);
    await shareVerseAsImage(verse.text, reference, verse.theme);
    setSharing(false);
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
      <div style={{ marginBottom: "3rem" }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "0.75rem",
        }}>
          Daily Verse
        </div>
        <h1 style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 400,
          color: "var(--dark)",
          marginBottom: "0.5rem",
        }}>
          Today's Scripture
        </h1>
        <p style={{
          fontSize: "0.9375rem",
          color: "var(--text-muted)",
        }}>
          {new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      <div style={{
        backgroundColor: "var(--dark)",
        padding: "3rem 2.5rem",
        marginBottom: "2rem",
        borderLeft: "4px solid var(--saffron)",
      }}>
        <p style={{
          fontFamily: "var(--font-heading), 'Instrument Serif', Georgia, serif",
          fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
          color: "var(--cream)",
          fontWeight: 400,
          lineHeight: 1.6,
          fontStyle: "italic",
          marginBottom: "1.5rem",
        }}>
          &ldquo;{verse.text}&rdquo;
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <div style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--saffron)",
              marginBottom: "0.25rem",
            }}>
              {verse.source}
            </div>
            {verse.chapter && (
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,248,240,0.5)" }}>
                Chapter {verse.chapter}{verse.verse ? `, Verse ${verse.verse}` : ""}
              </div>
            )}
          </div>
          <div style={{
            backgroundColor: "rgba(255,153,51,0.15)",
            border: "1px solid rgba(255,153,51,0.3)",
            color: "var(--saffron)",
            padding: "0.375rem 0.875rem",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>
            {verse.theme}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button
          onClick={handleCopy}
          style={{
            backgroundColor: copied ? "var(--burgundy)" : "var(--saffron)",
            color: "var(--dark)",
            border: "none",
            padding: "0.875rem 2rem",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-body), sans-serif",
            transition: "background-color 0.2s",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
          </svg>
          {copied ? "Copied!" : "Copy Verse"}
        </button>
        <button
          onClick={handleShareImage}
          disabled={sharing}
          style={{
            backgroundColor: "transparent",
            color: "var(--saffron)",
            border: "2px solid var(--saffron)",
            padding: "0.875rem 2rem",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            cursor: sharing ? "wait" : "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "var(--font-body), sans-serif",
            transition: "all 0.2s",
            opacity: sharing ? 0.6 : 1,
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
          </svg>
          {sharing ? "Generating..." : "Share as Image"}
        </button>
      </div>

      <div style={{
        marginTop: "4rem",
        paddingTop: "3rem",
        borderTop: "1px solid var(--border)",
      }}>
        <div style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: "1.5rem",
        }}>
          About This Verse
        </div>
        <p style={{
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "1rem",
        }}>
          The verses featured here are drawn from the Bhagavad Gita, the Upanishads, the Vedas, and the great epics of the Hindu tradition. Each verse is selected to reflect the depth and breadth of Hindu philosophical and devotional literature.
        </p>
        <p style={{
          fontSize: "0.9375rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
        }}>
          The daily verse rotates deterministically through the collection — the same verse appears for everyone on the same day. Return tomorrow for a new one.
        </p>
      </div>
    </div>
  );
}
