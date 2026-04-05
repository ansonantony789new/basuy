import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: February 22, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold mb-4">1. Website Usage</h2>
          <p className="text-muted-foreground mb-8">
            By accessing and using the Basudeb Das Foundation website, you agree to comply with these Terms & Conditions. The content on this website is for informational purposes and to facilitate donations to our charitable programs. You agree not to misuse the website, attempt unauthorized access, or use it for any unlawful purpose.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">2. Donation Policy</h2>
          <p className="text-muted-foreground mb-8">
            All donations made through this website are voluntary contributions to the Basudeb Das Foundation. Donations are used to fund our charitable programs including education, healthcare, community development, disaster relief, and environmental conservation. The foundation reserves the right to allocate funds to programs where the need is greatest. Donors will receive acknowledgment and, where applicable, tax-exemption receipts under Section 80G of the Income Tax Act.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">3. Refund Policy</h2>
          <p className="text-muted-foreground mb-8">
            Donations are generally non-refundable as they are voluntary contributions to charitable causes. However, if a donation was made in error (e.g., duplicate transaction, incorrect amount), you may request a refund within 7 days of the transaction by contacting us at <a href="mailto:info@basudebdasfoundation.org" className="text-primary hover:underline">info@basudebdasfoundation.org</a>. Refund requests will be reviewed on a case-by-case basis and processed within 5–10 business days if approved.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-8">
            All content on this website, including text, images, logos, and design, is the property of the Basudeb Das Foundation and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-8">
            The Basudeb Das Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein. We make no warranties regarding the accuracy, completeness, or reliability of the content. The website is provided on an "as-is" basis without warranties of any kind.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">6. External Links</h2>
          <p className="text-muted-foreground mb-8">
            Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites. Accessing them is at your own risk.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">7. Modifications</h2>
          <p className="text-muted-foreground mb-8">
            We reserve the right to modify these Terms & Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">8. Contact</h2>
          <p className="text-muted-foreground">
            For questions about these Terms & Conditions, contact us at:<br />
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

export default TermsAndConditions;
