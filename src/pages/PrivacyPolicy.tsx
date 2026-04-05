import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: February 22, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            When you visit our website or make a donation, we may collect the following personal information:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Payment information (processed securely via our payment gateway)</li>
            <li>Any information you voluntarily provide via contact forms or volunteer sign-ups</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use the information collected to:</p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Process and acknowledge your donations</li>
            <li>Issue tax-exemption receipts under Section 80G</li>
            <li>Communicate updates about our programs and impact</li>
            <li>Respond to your inquiries and messages</li>
            <li>Improve our website and services</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mb-4">3. Data Protection</h2>
          <p className="text-muted-foreground mb-8">
            We implement industry-standard security measures to protect your personal data. All payment transactions are processed through secure, encrypted channels via Razorpay. We do not store your credit card or bank details on our servers. Your personal information is stored securely and is accessible only to authorized personnel who need it to perform their duties.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">4. Third-Party Sharing</h2>
          <p className="text-muted-foreground mb-8">
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers (such as payment processors) who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">5. Cookies</h2>
          <p className="text-muted-foreground mb-8">
            Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-8">
            You have the right to access, update, or request deletion of your personal information at any time. You may also opt out of receiving communications from us by contacting us directly or using the unsubscribe link in our emails.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-muted-foreground">
            <strong>Basudeb Das Foundation</strong><br />
            Email: <a href="mailto:info@basudebdasfoundation.org" className="text-primary hover:underline">info@basudebdasfoundation.org</a><br />
            Phone: +91 98765 43210<br />
            Address: Siliguri, West Bengal, India
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
