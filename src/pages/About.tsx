import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Target, Eye, Sparkles } from 'lucide-react';

import aboutImage from '@/assets/about-image.jpg';
import leader1 from '@/assets/leader-1.jpg';
import leader2 from '@/assets/leader-2.jpg';
import leader3 from '@/assets/leader-3.jpg';

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
      {/* ... existing sections ... */}
      
      {/* Leadership */}
      <section className="py-24 section-soft">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Meet Our Leaders
            </h2>
            <p className="text-muted-foreground text-lg">
              Our dedicated leadership team drives the foundation's vision and ensures impactful execution of our programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover bg-card p-8 rounded-2xl text-center border border-border"
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
      <section className="py-24 bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Us in Our Mission
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Together, we can create a world where compassion leads to action and every community thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/donate">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
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
