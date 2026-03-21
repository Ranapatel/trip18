export const metadata = {
  title: "Privacy Policy | TripSage",
  description: "Privacy Policy for TripSage",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">
        Last Updated: March 21, 2026
      </p>

      <Section title="1. Information We Collect">
        <ul className="list-disc pl-6 space-y-2">
          <li>Email address (waitlist/signup)</li>
          <li>Travel preferences (optional)</li>
          <li>Usage data (IP, browser, pages visited)</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide and improve services</li>
          <li>Generate personalized trip plans</li>
          <li>Send updates and offers</li>
        </ul>
      </Section>

      <Section title="3. Data Sharing">
        <p>
          We do not sell your data. We may share with service providers like
          Supabase or when legally required.
        </p>
      </Section>

      <Section title="4. Cookies">
        <p>Used for analytics and improving user experience.</p>
      </Section>

      <Section title="5. Data Security">
        <p>We use industry-standard practices, but no system is 100% secure.</p>
      </Section>

      <Section title="6. Third-Party Links">
        <p>
          We may redirect to booking platforms. We are not responsible for their
          policies.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>
          You can request access or deletion of your data at:
          <br />
          <span className="font-medium">support@tripsage.ai</span>
        </p>
      </Section>

      <Section title="8. Updates">
        <p>This policy may change. Updates will appear on this page.</p>
      </Section>
    </main>
  );
}

function Section({ title, children }: any) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </section>
  );
}