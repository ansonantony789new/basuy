import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@basudebdasfoundation.org',
    link: 'mailto:info@basudebdasfoundation.org',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Reg. Address',
    value: 'Manotosh Ray Sarani, Deshbandhupara, Siliguri, WB 734004',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    value: 'Mon - Sat: 10:00 AM - 6:00 PM',
  },
];

const branches = [
  {
    city: 'Siliguri (Main)',
    address: 'Basudeb Das Foundation, Manotosh Ray Sarani, Deshbandhupara, near Gourio Math. Siliguri, District: Darjeeling, PIN: 734004'
  },
  {
    city: 'Bengaluru Branch',
    address: 'Basudeb Das Foundation, Giddenahalli Village, Jigani, Bengaluru Urban. Operating address: Hosapalya road, Kumbalgodu Kengeri, Bengaluru 560074'
  },
  {
    city: 'Mumbai Branch',
    address: 'Gokul Garden, Thakur Complex, Kandivili East, Mumbai 400101'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="font-display text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                <h3 className="font-display text-xl font-bold mb-4">Our Branches</h3>
                {branches.map((branch) => (
                  <div key={branch.city} className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-bold text-primary mb-1">{branch.city}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              <div className="mt-10 rounded-2xl overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57001.09470028648!2d88.39695!3d26.7271012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441d098bad009%3A0x6ceee8066685d50c!2sSiliguri%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Basudeb Das Foundation Location - Siliguri, West Bengal"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-card p-8 md:p-10 rounded-2xl shadow-card"
            >
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message and get back to you within 24-48 hours.
                  </p>
                  <Button variant="trust" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display text-2xl font-bold mb-6">Send Us a Message</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      placeholder="Your message..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="donate" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
