import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

import educationImg from '@/assets/education.jpeg';
import healthcareImg from '@/assets/healthcare.jpeg';
import communityImg from '@/assets/community.jpeg';
import reliefImg from '@/assets/relief.jpeg';

const initiatives = [
  {
    image: educationImg,
    title: 'Holi or Dol Purnima Celebration',
    description: 'Holi or Dol Purnima Celebration with under privileged kids',
    date: 'January 2024',
  },
  {
    image: healthcareImg,
    title: 'Beat the Heat in Bangalore 2025',
    description: 'Beat the Heat in Bangalore 2025',
    date: '2025',
  },
  {
    image: communityImg,
    title: 'Kumbh 2025',
    description: 'Kumbh 2025',
    date: 'November 2023',
  },
  {
    image: reliefImg,
    title: 'Holi or Dol Purnima Celebration',
    description: 'Holi or Dol Purnima Celebration 2024 in government school',
    date: 'September 2024',
  },
];

export const WorkSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Work & Initiatives
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Creating Real Impact
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/programs">
              View All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-hover bg-card rounded-2xl overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
