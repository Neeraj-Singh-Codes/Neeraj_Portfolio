"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "2022",
    title: "Joined College",
    company: "BSc Computer Science",
    desc: "Started my journey in Computer Science. Building a strong foundation in programming and core CS concepts.",
  },
  {
    year: "2025",
    title: "Full Stack Journey",
    company: "Self-Taught / Freelance",
    desc: "Started learning Full Stack Development seriously. Mastered React, Next.js, and modern web technologies exactly 6-7 months ago.",
  },
  {
    year: "2026",
    title: "Graduation",
    company: "Expected",
    desc: "Will be graduating with a degree in Computer Science, ready to take on full-time software engineering roles.",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="bg-black text-white min-h-screen py-32 px-5 md:px-20 relative overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto w-full mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-[8rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6"
        >
          My Journey
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        
        {/* PROGRESS LINE */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div 
                style={{ height }}
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            />
        </div>

        {/* TIMELINE ITEMS */}
        <div className="flex flex-col gap-24 md:gap-32">
            {timelineData.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
            ))}
        </div>

      </div>

    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  // Only trigger once when the card is 15% into the viewport - prevents double-fire flicker
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div className={`relative flex items-center ${isEven ? "md:justify-start" : "md:justify-end"}`}>
        
        {/* DOT ON LINE */}
        <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-black border-2 border-white/50 rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <div className="w-full h-full bg-white rounded-full scale-0 transition-transform duration-500 group-hover:scale-100" />
        </div>

        {/* CONTENT CARD */}
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -40 : 40 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
            style={{ willChange: "transform, opacity" }}
            className={`ml-16 md:ml-0 w-full md:w-[45%] p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2`}
        >
             <span className="text-5xl md:text-7xl font-bold text-white/10 absolute -top-10 right-4 md:right-auto md:left-4 select-none pointer-events-none font-mono">
                {item.year}
             </span>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 mt-4">{item.title}</h3>
            <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-white/30" />
                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">{item.company}</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-light">
                {item.desc}
            </p>
        </motion.div>

    </div>
  );
}
