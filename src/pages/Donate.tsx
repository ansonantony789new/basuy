import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Shield, CreditCard, Calendar, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

import donateHero from '@/assets/donate-hero.jpg';

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactItems = [
  { amount: '₹500', impact: 'Provides school supplies for one child for a year' },
  { amount: '₹1,000', impact: 'Supports a family with emergency food supplies' },
  { amount: '₹2,500', impact: 'Funds a complete health checkup for 5 individuals' },
  { amount: '₹5,000', impact: 'Enables a woman to learn a new livelihood skill' },
  { amount: '₹10,000', impact: 'Plants 100 trees for environmental conservation' },
  { amount: '₹25,000', impact: 'Supports disaster relief for an entire family' },
];

const Donate = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    if (!amount || amount < 100) {
      toast.error('Please enter a valid donation amount (minimum ₹100)');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate payment process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    toast.success(`Thank you for your generous donation of ₹${amount.toLocaleString()}!`);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-secondary">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm">
                Make a Donation
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 leading-tight">
                Your Support Can Change Lives
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Every rupee you donate goes directly towards our programs, helping communities access education, healthcare, and essential support.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={donateHero}
                alt="Heart in hands"
                className="rounded-2xl shadow-elevated max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 md:py-24">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-card p-5 sm:p-8 md:p-10 rounded-2xl shadow-card"
            >
              <form onSubmit={handleDonate} className="space-y-6 md:space-y-8">
                {/* Donation Type */}
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-4">Donation Type</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <button
                      type="button"
                      onClick={() => setDonationType('one-time')}
                      className={`p-3 md:p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 text-sm md:text-base ${
                        donationType === 'one-time'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Heart className="w-4 md:w-5 h-4 md:h-5" />
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setDonationType('monthly')}
                      className={`p-3 md:p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-2 text-sm md:text-base ${
                        donationType === 'monthly'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <Calendar className="w-4 md:w-5 h-4 md:h-5" />
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-4">Select Amount</h3>
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-3 md:gap-4 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-3 md:p-4 rounded-xl border-2 transition-all font-semibold text-xs sm:text-sm md:text-base ${
                          selectedAmount === amount && !customAmount
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customAmount" className="text-sm">Or enter custom amount</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                      <Input
                        id="customAmount"
                        type="number"
                        min="100"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        className="pl-8 h-10 md:h-12"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Info */}
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold mb-4">Your Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-10 md:h-12"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-10 md:h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-10 md:h-12"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Note */}
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-xl">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Your payment is secured with industry-standard encryption. All donations are eligible for tax benefits under Section 80G.
                  </p>
                </div>

                {/* Payment Notice */}
                <div className="flex items-start gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
                  <CreditCard className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Online payments will be activated soon.</strong> Our secure payment gateway integration via Razorpay is currently in progress. You will be able to donate online shortly.
                  </p>
                </div>

                {/* Submit */}
                <Button 
                  type="button" 
                  variant="donate" 
                  size="xl" 
                  className="w-full text-sm md:text-lg h-14"
                  disabled
                >
                  <CreditCard className="w-5 h-5" />
                  Payment Gateway Integration in Progress
                </Button>
              </form>
            </motion.div>

            {/* Impact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h3 className="font-display text-2xl font-bold mb-6">Your Impact</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Here's how your donation can make a difference in the lives of those we serve.
              </p>
              
              <div className="space-y-4">
                {impactItems.map((item) => (
                  <div
                    key={item.amount}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm sm:text-base">{item.amount}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">100% Transparency</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We are committed to complete transparency. Every donation is tracked and you'll receive regular updates on how your contribution is making an impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
