"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = [
  {
    id: "01",
    name: "Frontend",
    desc: "Crafting immersive, responsive, and performant user interfaces.",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: "02",
    name: "Backend",
    desc: "Architecting robust, scalable server-side systems and databases.",
    skills: ["Node.js", "Express", "MongoDB", "Docker", "Python"],
  },
  {
    id: "03",
    name: "Tools",
    desc: "Optimizing workflows with modern development and deployment tools.",
    skills: ["Git & GitHub", "render", "Linux", "Postman"],
  },
];

export default function TechStack() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="bg-black text-white min-h-screen py-24 flex flex-col justify-center relative overflow-hidden">
      
      {/* MAIN TITLE: Big & Fading from Below */}
      <div className="max-w-7xl mx-auto w-full mb-24 overflow-hidden text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-black/80 leading-[0.9]"
        >
          Tech Stack
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
        
        {/* LEFT COLUMN: NAVIGATION */}
        <div className="flex flex-col justify-center gap-8">
            
            {/* Removed Small Label */}

           <div className="flex flex-col">
              {categories.map((cat, i) => (
                <div 
                    key={i}
                    onMouseEnter={() => setActiveId(i)}
                    className="group py-9 border-b border-white/10 cursor-pointer flex items-baseline gap-8 transition-colors duration-500 hover:border-white/50"
                >
                    <span className={`text-xl font-mono transition-colors duration-500 ${activeId === i ? "text-white" : "text-gray-600"}`}>
                        {cat.id}
                    </span>
                    {/* Lucid Slide Animation */}
                    <h2 
                        className={`text-5xl md:text-8xl font-bold uppercase tracking-tighter transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeId === i ? "translate-x-6 text-white" : "text-white/40 group-hover:text-white/70"}`}
                    >
                        {cat.name}
                    </h2>
                </div>
              ))}
           </div>
        </div>

        {/* RIGHT COLUMN: SHOWCASE */}
        <div className="h-full flex flex-col justify-start pt-4 relative min-h-[40vh]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-8"
                >
                    {/* Description */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-400 font-light leading-relaxed max-w-lg"
                    >
                        {categories[activeId].desc}
                    </motion.p>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap gap-3">
                        {categories[activeId].skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                className="px-6 py-3 text-lg font-bold bg-white/10 border border-white/10 rounded-xl text-white hover:bg-white/20 hover:border-white/30 transition-colors duration-300 cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
