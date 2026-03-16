import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | HindUSA',
  description: 'DMCA copyright policy for HindUSA.',
};

export default function DmcaPage() {
  return (
    <main style={{ background: '#FFF8F0', color: '#1A1A1A', minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF9933', marginBottom: '0.5rem' }}>
          DMCA Policy
        </h1>
        <p style={{ color: '#1A1A1A', opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>
          Last updated: March 2026
        </p>

        <div style={{ background: '#F5EDE0', border: '1px solid #F0E6D6', borderRadius: '8px', padding: '2rem', marginBottom: '2rem' }}>
          <p style={{ lineHeight: 1.8 }}>
            HindUSA respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act of 1998 (DMCA), we will respond promptly to valid claims of copyright infringement.
          </p>
        </div>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            DMCA Agent
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            <strong>Designated Agent:</strong> The Voice of Cash<br />
            <strong>Email:</strong>{' '}
            <a href="mailto:thevoiceofcash@gmail.com" style={{ color: '#FF9933' }}>thevoiceofcash@gmail.com</a>
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            Filing a DMCA Takedown Notice
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>To submit a valid DMCA notice, include:</p>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.75rem' }}>A physical or electronic signature of the copyright owner or authorized agent.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the copyrighted work claimed to have been infringed.</li>
            <li style={{ marginBottom: '0.75rem' }}>Identification of the infringing material with URL or sufficient detail.</li>
            <li style={{ marginBottom: '0.75rem' }}>Your contact information: name, address, telephone, and email.</li>
            <li style={{ marginBottom: '0.75rem' }}>A good faith belief statement that the use is not authorized.</li>
            <li style={{ marginBottom: '0.75rem' }}>A statement under penalty of perjury that the information is accurate and you are authorized to act.</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#FF9933', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid #F0E6D6' }}>
            Counter-Notification
          </h2>
          <p style={{ lineHeight: 1.8 }}>
            If you believe material was removed in error, submit a counter-notification with your signature, identification of the removed material, a statement under penalty of perjury that the removal was a mistake, and your contact information. We will restore the material within 10–14 business days absent a court action.
          </p>
        </section>
      </div>
    </main>
  );
}
