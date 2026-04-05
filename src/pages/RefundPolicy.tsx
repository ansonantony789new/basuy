import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
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
              Refund & Cancellation Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: February 22, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold mb-4">1. Voluntary Donations</h2>
          <p className="text-muted-foreground mb-8">
            All donations made to the Basudeb Das Foundation are voluntary and made with the intention of supporting our charitable programs. We deeply appreciate every contribution and ensure that funds are directed towards meaningful social impact initiatives.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">2. Refund Eligibility</h2>
          <p className="text-muted-foreground mb-4">
            Since donations are charitable contributions, they are generally non-refundable. However, refunds may be considered in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Duplicate transactions due to technical errors</li>
            <li>Incorrect amount charged (significantly different from intended donation)</li>
            <li>Unauthorized transactions (with supporting documentation)</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mb-4">3. Refund Request Timeline</h2>
          <p className="text-muted-foreground mb-8">
            Refund requests must be submitted within <strong>7 days</strong> of the original transaction date. Requests made after this period may not be eligible for processing. To request a refund, please email us at <a href="mailto:info@basudebdasfoundation.org" className="text-primary hover:underline">info@basudebdasfoundation.org</a> with the following details:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
            <li>Your full name</li>
            <li>Transaction ID or payment reference number</li>
            <li>Date of donation</li>
            <li>Amount donated</li>
            <li>Reason for refund request</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mb-4">4. Refund Processing</h2>
          <p className="text-muted-foreground mb-8">
            Approved refunds will be processed within <strong>5–10 business days</strong> and will be credited back to the original payment method. You will receive an email confirmation once the refund has been initiated. Please note that bank processing times may vary.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">5. Cancellation of Recurring Donations</h2>
          <p className="text-muted-foreground mb-8">
            If you have set up a recurring (monthly) donation, you may cancel it at any time by contacting us at <a href="mailto:info@basudebdasfoundation.org" className="text-primary hover:underline">info@basudebdasfoundation.org</a>. Cancellations will take effect from the next billing cycle. Donations already processed prior to the cancellation request are non-refundable.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground">
            For any refund or cancellation inquiries, please reach out to us:<br />
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

export default RefundPolicy;
