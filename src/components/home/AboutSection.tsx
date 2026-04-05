import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImage from '@/assets/community.jpeg';

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Foundation volunteers distributing supplies"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-card"
            >
              <p className="impact-number">10+</p>
              <p className="text-muted-foreground font-medium">Years of Service</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              About the Foundation
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Building Stronger Communities Together
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Basudeb Das Foundation is a non-profit humanitarian organization dedicated to creating meaningful, lasting social impact. We work across multiple causes to support communities in need, from education and healthcare to disaster relief and environmental conservation.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our approach is rooted in compassion, inclusivity, and sustainable development. We believe that every individual deserves access to care, opportunity, and support, and we work tirelessly to make that vision a reality.
            </p>
            <Button variant="trust" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
