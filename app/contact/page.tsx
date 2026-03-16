import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | HindUSA',
  description: 'Get in touch with the HindUSA team.',
};

export default function ContactPage() {
  return (
    <main style={{ background: '#FFF8F0', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF9933', marginBottom: '0.5rem' }}>
          Contact Us
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          How can we help?
        </p>

        <div style={{ background: '#F5EDE0', border: '1px solid #F0E6D6', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Have feedback on our content, a question, or want to connect? We&apos;d love to hear from you.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            <strong style={{ color: '#FF9933' }}>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FF9933', textDecoration: 'none' }}>
              thevoiceofcash@gmail.com
            </a>
          </p>
        </div>

        <div style={{ background: '#F5EDE0', border: '1px solid #F0E6D6', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem' }}>
            What We Can Help With
          </h2>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Content feedback or corrections</li>
            <li style={{ marginBottom: '0.5rem' }}>Community contributions</li>
            <li style={{ marginBottom: '0.5rem' }}>Partnership and advertising inquiries</li>
            <li style={{ marginBottom: '0.5rem' }}>DMCA or copyright concerns</li>
            <li style={{ marginBottom: '0.5rem' }}>General questions</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
