import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Users, Share2, Handshake, CheckCircle, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const waysToHelp = [
  {
    icon: Heart,
    title: 'Donate',
    description: 'Your financial contributions fund our programs and help us reach more communities.',
    link: '/donate',
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and contribute your time and skills.',
  },
  {
    icon: Share2,
    title: 'Spread Awareness',
    description: 'Help amplify our message by sharing our work on social media and with your network.',
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Corporate and institutional partnerships help us scale our impact.',
    link: '/contact',
  },
];

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: '',
    willingToDonateBlood: '' as '' | 'yes' | 'no',
    bloodGroup: '',
    pincode: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pincodeError, setPincodeError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate pincode if blood donation is yes
    if (formData.willingToDonateBlood === 'yes') {
      if (!formData.bloodGroup) {
        toast.error('Please select your blood group.');
        return;
      }
      if (!/^\d{6}$/.test(formData.pincode)) {
        setPincodeError('Pincode must be exactly 6 digits');
        return;
      }
    }

    setPincodeError('');
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Thank you for signing up as a volunteer!');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      skills: '',
      availability: '',
      message: '',
      willingToDonateBlood: '',
      bloodGroup: '',
      pincode: '',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center md:text-left"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Get Involved
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6">
              Be Part of the Change
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed px-4 md:px-0">
              There are many ways you can contribute to our mission. Find the one that suits you best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ways to Help
            </h2>
            <p className="text-muted-foreground text-lg">
              Every contribution, big or small, makes a difference in the lives of those we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
            {waysToHelp.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover bg-card p-6 md:p-8 rounded-2xl text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                  <way.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {way.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>
                {way.link && (
                  <Button variant="outline" asChild>
                    <Link to={way.link}>Learn More</Link>
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 md:py-24 section-soft">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Volunteer With Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                Join Our Volunteer Network
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our volunteers are the heart of our organization. Whether you have a few hours a month or can commit to regular service, we have opportunities for you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Field Volunteers</h4>
                    <p className="text-muted-foreground">Participate directly in community outreach and program implementation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Skilled Volunteers</h4>
                    <p className="text-muted-foreground">Contribute your professional skills in areas like healthcare, education, or technology.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Event Volunteers</h4>
                    <p className="text-muted-foreground">Help organize and manage events, campaigns, and fundraising activities.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-card"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your volunteer application. Our team will get in touch with you soon.
                  </p>
                  <Button variant="trust" onClick={() => setIsSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display text-2xl font-bold mb-6">Volunteer Sign-Up</h3>
                  
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Input
                        id="availability"
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        placeholder="e.g., Weekends, 5 hours/week"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Expertise</Label>
                    <Input
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="e.g., Teaching, Medical, IT, Event Management"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Why do you want to volunteer?</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Share your motivation..."
                    />
                  </div>

                  {/* Blood Donation Section */}
                  <div className="space-y-3 border-t border-border pt-6">
                    <Label className="text-base font-semibold text-primary">
                      Are you willing to donate blood if needed? <span className="text-accent">*</span>
                    </Label>
                    <div className="flex gap-6">
                      {(['yes', 'no'] as const).map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="willingToDonateBlood"
                            value={option}
                            checked={formData.willingToDonateBlood === option}
                            onChange={(e) => setFormData({ ...formData, willingToDonateBlood: e.target.value as 'yes' | 'no', bloodGroup: '', pincode: '' })}
                            className="w-4 h-4 accent-primary"
                            required
                          />
                          <span className="font-medium capitalize">{option === 'yes' ? 'Yes' : 'No'}</span>
                        </label>
                      ))}
                    </div>

                    <AnimatePresence>
                      {formData.willingToDonateBlood === 'yes' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-5 pt-4 overflow-hidden"
                        >
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="bloodGroup">
                                Blood Group <span className="text-accent">*</span>
                              </Label>
                              <Select
                                value={formData.bloodGroup}
                                onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select blood group" />
                                </SelectTrigger>
                                <SelectContent>
                                  {bloodGroups.map((group) => (
                                    <SelectItem key={group} value={group}>{group}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="pincode">
                                Residential Pincode <span className="text-accent">*</span>
                              </Label>
                              <Input
                                id="pincode"
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                value={formData.pincode}
                                onChange={(e) => {
                                  const val = e.target.value.replace(/\D/g, '').slice(0, 6);
                                  setFormData({ ...formData, pincode: val });
                                  if (pincodeError) setPincodeError('');
                                }}
                                placeholder="e.g., 700001"
                              />
                              {pincodeError && (
                                <p className="text-accent text-sm">{pincodeError}</p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-start gap-2 bg-secondary/50 p-3 rounded-lg">
                            <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <p className="text-xs text-muted-foreground">
                              Your information will be used only for emergency blood donation drives and will remain confidential.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button 
                    type="submit" 
                    variant="donate" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
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

export default GetInvolved;
