import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | HindUSA',
  description: 'Important disclaimers for HindUSA content.',
};

export default function DisclaimerPage() {
  return (
    <main style={{ background: '#FFF8F0', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF9933', marginBottom: '0.5rem' }}>
          Disclaimer
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#F5EDE0', border: '1px solid #F0E6D6', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            Please read this disclaimer carefully before using HindUSA (hindusa.com).
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            Religious &amp; Educational Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            The content on this website is provided for educational and cultural purposes only. HindUSA does not represent any official Hindu institution, temple, religious organization, or authority. We are not ordained priests, Hindu scholars, or authorized representatives of any faith tradition.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            Sacred Texts &amp; Translations
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Sanskrit translations, scriptural interpretations, and religious commentary on this site represent personal perspectives only. Hindu scriptures have many valid translations and interpretive traditions. Translations may vary significantly among scholars, sampradayas, and lineages. For authoritative guidance, please consult a qualified pandit, acharya, or Hindu scholar.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            AI-Generated Content
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Some content on this website may be created or assisted by artificial intelligence tools. While we strive for accuracy and respect for Hindu traditions, AI-generated content may contain errors or misrepresentations. We encourage readers to verify religious content with authoritative sources and qualified scholars.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            External Links
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            This website may contain links to external websites. We are not responsible for the content, accuracy, or practices of any third-party sites. The inclusion of any link does not imply endorsement by HindUSA.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            Contact
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            Questions about this disclaimer? Contact us at:{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FF9933' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
