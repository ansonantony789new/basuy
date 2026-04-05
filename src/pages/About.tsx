import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Target, Eye, Sparkles } from 'lucide-react';

import aboutImage from '@/assets/community.jpeg';
// Leader photos are not required as per user instruction

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We approach every action with empathy and genuine care for those we serve.',
  },
  {
    icon: Sparkles,
    title: 'Integrity',
    description: 'We uphold the highest standards of transparency and ethical conduct.',
  },
  {
    icon: Target,
    title: 'Inclusivity',
    description: 'We believe in equal opportunity and respect for all individuals.',
  },
  {
    icon: Eye,
    title: 'Impact',
    description: 'We focus on creating measurable, lasting change in communities.',
  },
];

const leaders = [
  {
    name: 'Ms. Manashi Das',
    role: 'Chairman',
  },
  {
    name: 'Ms. Moushumi Das',
    role: 'Vice Chairman',
  },
  {
    name: 'Mrs. Shipra Das',
    role: 'Treasurer',
  },
  {
    name: 'Ms. S Das',
    role: 'Secretary',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-secondary">
        <div className="container-wide px-4 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm">
              About Us
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 leading-tight">
              Compassion in Action, Impact in Every Step
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              Basudeb Das Foundation is a humanitarian organization dedicated to uplifting communities and serving those in need across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container-wide px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Named in honor of late Shri Basudeb Das, our foundation was established with a singular vision: to create a world where no one is left behind.
                </p>
                <p>
                  We believe that small acts of kindness, when multiplied by millions, can transform the world. From providing clean drinking water to supporting education and healthcare, we are committed to sustainable development.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-elevated"
            >
              <img
                src={aboutImage}
                alt="Community work"
                className="w-full h-full object-cover aspect-video lg:aspect-auto h-[400px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container-wide px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card p-8 sm:p-10 rounded-2xl shadow-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a resilient, compassionate, and inclusive society where every individual has access to essential human needs and opportunities for growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 sm:p-10 rounded-2xl shadow-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower underserved communities through focused initiatives in healthcare, education, environment, and social welfare, driven by volunteerism and transparent action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 section-soft">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4 md:mb-6">
              Meet Our Leaders
            </h2>
            <p className="text-muted-foreground text-lg px-4 md:px-0">
              Our dedicated leadership team drives the foundation's vision and ensures impactful execution of our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-0">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover bg-card p-6 md:p-8 rounded-2xl text-center border border-border"
              >
                <h3 className="font-display text-xl font-bold mb-2 text-primary">
                  {leader.name}
                </h3>
                <p className="text-accent font-semibold tracking-wide uppercase text-sm">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-primary text-center">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="px-4 md:px-0"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Together, we can create a world where compassion leads to action and every community thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
