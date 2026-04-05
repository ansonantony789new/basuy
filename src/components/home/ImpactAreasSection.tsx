import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  HeartPulse, 
  Building2, 
  AlertTriangle, 
  Users2, 
  Leaf 
} from 'lucide-react';

const impactAreas = [
  {
    icon: GraduationCap,
    title: 'Education Support',
    description: 'Empowering children and youth through quality education, scholarships, and learning resources.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Medical Aid',
    description: 'Providing essential medical services, health camps, and support to underserved communities.',
  },
  {
    icon: Building2,
    title: 'Community Development',
    description: 'Building infrastructure, promoting livelihoods, and strengthening community resilience.',
  },
  {
    icon: AlertTriangle,
    title: 'Disaster Relief',
    description: 'Rapid response and long-term recovery support for communities affected by natural disasters.',
  },
  {
    icon: Users2,
    title: 'Women & Child Welfare',
    description: 'Empowering women and protecting children through education, healthcare, and social support.',
  },
  {
    icon: Leaf,
    title: 'Environmental Initiatives',
    description: 'Promoting sustainability through tree plantation, clean energy, and conservation programs.',
  },
];

export const ImpactAreasSection = () => {
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
            Our Impact Areas
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Causes We Support
          </h2>
          <p className="text-muted-foreground text-lg">
            We work across multiple areas to create comprehensive, lasting impact in the communities we serve.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover bg-card p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
