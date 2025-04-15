import { motion } from 'framer-motion';

export function Privacy() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 pt-32">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto prose prose-invert"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, process, and protect your personal data when you use our website and services. We are committed to ensuring the privacy and security of your information in compliance with the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">2.1 Information you provide to us:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Email address (when signing up for updates or completing the Time Audit)</li>
              <li>Business information (industry, employee count, operational details)</li>
              <li>Time management and operational data (through our Time Audit feature)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Information automatically collected:</h3>
            <ul className="list-disc pl-6">
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>To provide and improve our services</li>
              <li>To analyze and optimize our website performance</li>
              <li>To communicate updates and marketing information (with your consent)</li>
              <li>To generate insights about business efficiency (anonymized data)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6">
              <li>Your consent</li>
              <li>Contract fulfillment</li>
              <li>Legal obligations</li>
              <li>Legitimate business interests</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and only retained for as long as necessary.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to improve your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>
              For any privacy-related questions or to exercise your rights, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-dark-surface rounded-lg">
              <p>Email: privacy@example.com</p>
              <p>Address: [Your Business Address]</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}