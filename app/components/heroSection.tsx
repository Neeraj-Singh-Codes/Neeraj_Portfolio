"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen w-full bg-black text-white flex items-center justify-center px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Top Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-bold leading-tight"
        >
          Hi, I’m <span className="text-gray-700">Dark Yagami</span>.
          <br />I build modern & fast web experiences.
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl text-gray-600 mt-6 max-w-xl"
        >
          Full Stack Developer specializing in React, Next.js, Node.js & modern
          UI engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-4 mt-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full text-sm md:text-base hover:bg-gray-900 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-black rounded-full text-sm md:text-base hover:bg-black hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
