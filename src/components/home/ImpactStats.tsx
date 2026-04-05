import { motion } from 'framer-motion';
import { Users, Heart, MapPin, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Lives Impacted',
  },
  {
    icon: Heart,
    value: '100+',
    label: 'Programs Completed',
  },
  {
    icon: MapPin,
    value: '25+',
    label: 'Communities Served',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years of Service',
  },
];

export const ImpactStats = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
