import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, Users, Share2, Handshake } from 'lucide-react';

const ways = [
  {
    icon: Heart,
    title: 'Donate',
    description: 'Your financial support enables us to expand our reach and impact more lives.',
    link: '/donate',
    buttonText: 'Donate Now',
    variant: 'donate' as const,
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers and make a hands-on difference.',
    link: '/get-involved',
    buttonText: 'Join Us',
    variant: 'trust' as const,
  },
  {
    icon: Share2,
    title: 'Spread Awareness',
    description: 'Help amplify our message by sharing our work with your network.',
    link: '/get-involved',
    buttonText: 'Learn More',
    variant: 'outline' as const,
  },
  {
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Collaborate with us as a corporate or institutional partner.',
    link: '/contact',
    buttonText: 'Contact Us',
    variant: 'outline' as const,
  },
];

export const GetInvolvedSection = () => {
  return (
    <section className="py-24 section-soft">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Get Involved
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Be Part of the Change
          </h2>
          <p className="text-muted-foreground text-lg">
            There are many ways you can contribute to our mission. Every action, big or small, makes a difference.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover bg-card p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                <way.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {way.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {way.description}
              </p>
              <Button variant={way.variant} className="w-full" asChild>
                <Link to={way.link}>{way.buttonText}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
