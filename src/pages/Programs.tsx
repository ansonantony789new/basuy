import { Layout } from '@/components/layout/Layout';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

import holiImg from '@/assets/timeline/holi-celebration.jpg';
import orphanageImg from '@/assets/timeline/orphanage-visit.jpg';
import waterImg from '@/assets/timeline/water-distribution.jpeg';
import communityImg from '@/assets/timeline/community-support.jpeg';
import durgaPujaImg from '@/assets/timeline/durga-puja-water.jpg';
import prasadImg from '@/assets/timeline/prasad-distribution.jpeg';
import kumbhImg from '@/assets/timeline/kumbh-mela.jpg';
import premierImg from '@/assets/timeline/premier-league.jpg';
import republicImg from '@/assets/timeline/republic-day.jpg';

const timelineEvents = [
  {
    image: holiImg,
    title: 'Holi Celebration',
    date: 'March 2025',
    description: 'Celebrated Holi with government school children. Distributed colors and chocolates to spread joy and inclusiveness.',
    goal: 'Inspire',
  },
  {
    image: orphanageImg,
    title: 'Visit to Orphanage – Siliguri',
    date: '2025',
    description: 'Visited orphanage to provide emotional support and assistance to children in need.',
    goal: 'Harmony',
  },
  {
    image: waterImg,
    title: 'Water Distribution – Bangalore',
    date: '2025',
    description: 'Conducted water distribution drives for communities in need across Bangalore.',
    goal: 'Value',
  },
  {
    image: communityImg,
    title: 'Community Support Initiative – Banijoint, WB',
    date: '2025',
    description: 'Extended support to welfare activities in Banijoint, West Bengal.',
    goal: 'Cooperate',
  },
  {
    image: durgaPujaImg,
    title: 'Water Distribution – Durga Puja',
    date: 'October 2025',
    description: 'Distributed safe drinking water to devotees during Durga Puja festivities.',
    goal: 'Value',
  },
  {
    image: prasadImg,
    title: 'Prasad Distribution – Raas Poornima',
    date: 'November 2025',
    description: 'Distributed prasad to the local community at Deshbandhupara during Raas Poornima.',
    goal: 'Facilitate',
  },
  {
    image: kumbhImg,
    title: 'Kumbh Mela',
    date: 'December 2025',
    description: 'Organized festive distribution drives and provided winter clothes and biscuits to pilgrims.',
    goal: 'Knowledge',
  },
  {
    image: premierImg,
    title: 'Siliguri Premier League',
    date: '2025–2026 Season',
    description: 'Sponsored trophies and medals at Kanchenjunga Stadium to encourage sporting talent.',
    goal: 'Motivate',
  },
  {
    image: republicImg,
    title: 'Republic Day Celebration',
    date: '26 January 2026',
    description: 'Conducted drawing competition with children from SVSST to celebrate the spirit of the nation.',
    goal: 'Inspire',
  },
];

const TimelineCard = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full mb-12 md:mb-16">
      {/* Desktop: alternating layout */}
      <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-[calc(50%-2rem)] bg-card rounded-2xl overflow-hidden shadow-soft group"
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <p className="text-sm font-medium text-muted-foreground mb-1">{event.date}</p>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{event.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{event.description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">
              Goal – {event.goal}
            </span>
          </div>
        </motion.div>

        {/* Spacer for timeline center */}
        <div className="w-16 flex justify-center shrink-0 relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-5 h-5 rounded-full bg-accent border-4 border-background shadow-md z-10"
          />
        </div>

        {/* Empty space on opposite side */}
        <div className="w-[calc(50%-2rem)]" />
      </div>

      {/* Mobile: single column, line on left */}
      <div className="flex md:hidden w-full items-start">
        <div className="w-10 flex flex-col items-center shrink-0 relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-md z-10 mt-6"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 bg-card rounded-2xl overflow-hidden shadow-soft group ml-2"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <p className="text-sm font-medium text-muted-foreground mb-1">{event.date}</p>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{event.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{event.description}</p>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent text-accent-foreground">
              Goal – {event.goal}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Programs = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
              Our Work
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 md:mb-6 leading-tight">
              Our Journey of Impact
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              A timeline of compassion, service, and community empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-background" ref={timelineRef}>
        <div className="container-wide relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-primary w-full"
            />
          </div>

          {/* Mobile left line */}
          <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute inset-0 bg-primary w-full"
            />
          </div>

          {/* Events */}
          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.title} event={event} index={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
