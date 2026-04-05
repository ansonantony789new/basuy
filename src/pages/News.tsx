import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, User } from 'lucide-react';

import educationImg from '@/assets/education.jpeg';
import healthcareImg from '@/assets/healthcare.jpeg';
import communityImg from '@/assets/community.jpeg';
import reliefImg from '@/assets/relief.jpeg';

const newsItems = [
  {
    id: 1,
    title: 'Annual Education Drive Reaches 500 Children',
    excerpt: 'Our annual back-to-school initiative successfully provided educational materials and scholarships to underprivileged children across 10 villages.',
    image: educationImg,
    date: 'January 15, 2024',
    author: 'Foundation Team',
    category: 'Education',
  },
  {
    id: 2,
    title: 'Free Medical Camp Benefits 1,200 Community Members',
    excerpt: 'In partnership with local healthcare providers, we organized a comprehensive health checkup camp offering free consultations and medicines.',
    image: healthcareImg,
    date: 'December 10, 2023',
    author: 'Healthcare Team',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Clean Water Project Completed in 5 Villages',
    excerpt: 'Our community development initiative has successfully installed water purification systems and wells in five remote villages.',
    image: communityImg,
    date: 'November 25, 2023',
    author: 'Development Team',
    category: 'Community',
  },
  {
    id: 4,
    title: 'Emergency Relief Reaches Flood-Affected Families',
    excerpt: 'Following the devastating monsoon floods, our rapid response team distributed essential supplies to over 800 affected families.',
    image: reliefImg,
    date: 'September 5, 2023',
    author: 'Relief Team',
    category: 'Relief',
  },
];

const News = () => {
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
              News & Updates
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Latest from the Foundation
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Stay updated with our latest programs, events, and success stories from the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center bg-card rounded-2xl overflow-hidden shadow-card"
          >
            <div className="h-full">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-full min-h-[300px] object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                {newsItems[0].category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {newsItems[0].title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {newsItems[0].excerpt}
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {newsItems[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {newsItems[0].author}
                </span>
              </div>
              <Button variant="trust" asChild>
                <Link to="#">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 section-soft">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">
            More Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover bg-card rounded-2xl overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Stay Connected
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about our work and impact.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
