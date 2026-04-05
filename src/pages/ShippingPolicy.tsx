import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const ShippingPolicy = () => {
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
              Shipping & Delivery Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: February 22, 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow prose prose-lg max-w-none">
          <h2 className="font-display text-2xl font-bold mb-4">No Physical Goods</h2>
          <p className="text-muted-foreground mb-8">
            The Basudeb Das Foundation is a non-profit humanitarian organization. We do not sell or ship any physical products or goods through this website. All transactions made on this platform are <strong>digital donations</strong> directed towards our charitable programs and initiatives.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">Digital Transactions</h2>
          <p className="text-muted-foreground mb-8">
            All donations are processed electronically through our secure payment gateway (Razorpay). Upon successful completion of a donation, you will receive a digital confirmation via email, including your transaction details and donation receipt.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">Tax Receipts</h2>
          <p className="text-muted-foreground mb-8">
            Tax-exemption receipts under Section 80G of the Income Tax Act (where applicable) will be sent to your registered email address within 7 business days of your donation. No physical documents will be shipped unless specifically requested.
          </p>

          <h2 className="font-display text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions regarding this policy, please contact us:<br />
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

export default ShippingPolicy;
