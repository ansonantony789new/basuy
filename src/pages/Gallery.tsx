import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import educationImg from '@/assets/education.jpeg';
import healthcareImg from '@/assets/healthcare.jpeg';
import communityImg from '@/assets/community.jpeg';
import reliefImg from '@/assets/relief.jpeg';
import womenImg from '@/assets/women-welfare.jpeg';
import environmentImg from '@/assets/environment.jpg';
import heroImg from '@/assets/hero-image.jpeg';
import aboutImg from '@/assets/community.jpeg';

const galleryImages = [
  { src: heroImg, alt: 'Community tree planting initiative', category: 'Environment' },
  { src: educationImg, alt: 'Education support program', category: 'Education' },
  { src: healthcareImg, alt: 'Medical camp', category: 'Healthcare' },
  { src: communityImg, alt: 'Village development project', category: 'Community' },
  { src: reliefImg, alt: 'Disaster relief distribution', category: 'Relief' },
  { src: womenImg, alt: 'Women skill training', category: 'Women Welfare' },
  { src: environmentImg, alt: 'Tree plantation drive', category: 'Environment' },
  { src: aboutImg, alt: 'Food distribution event', category: 'Relief' },
];

const categories = ['All', 'Education', 'Healthcare', 'Community', 'Relief', 'Women Welfare', 'Environment'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-secondary">
        <div className="container-wide px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center md:text-left"
          >
            <span className="text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm">
              Gallery
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6">
              Our Work in Pictures
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Explore photos from our programs, events, and community initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container-wide px-4">
          <div className="flex overflow-x-auto pb-2 -mb-2 scrollbar-none gap-3 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-wide">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                    <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] rounded-xl shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
