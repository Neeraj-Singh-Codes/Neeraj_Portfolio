"use client";

import { motion } from "framer-motion";
import { User, Github, Linkedin, Mail, Twitter, Download, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  const socials = [
    { name: "GitHub", icon: Github, link: "https://github.com/Neeraj-Singh-Codes" },
    { name: "LinkedIn", icon: Linkedin, link: "#" },
    { name: "Email", icon: Mail, link: "mailto:neeraj023582@gmail.com" },
    { name: "Twitter", icon: Twitter, link: "#" },
  ];

  return (
    <section id="contacts" className="bg-black text-white min-h-screen py-24 px-5 md:px-20 flex flex-col justify-center relative overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto w-full mb-16 md:mb-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-6xl md:text-[8rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-none"
        >
          About Me
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
        {/* LEFT COLUMN: IMAGE PREVIEW */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
           className="relative flex justify-center lg:justify-end"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 relative group">
            {/* Background glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-white/30 transition-all duration-500" />
            {/* Image Placeholder (replace inner div with an <img> later) */}
            <div className="w-full h-full bg-white/5 rounded-3xl flex items-center justify-center overflow-hidden relative backdrop-blur-sm">
                {/* Fallback Icon */}
                <User className="size-32 md:size-48 text-white/20 group-hover:text-white/40 transition-colors duration-500" />
                {/* To add your image: */}
                {/* <img src="/your-profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            </div>
            
            {/* Accents */}
            <div className="absolute -top-4 -right-4 size-12 border-t-2 border-r-2 border-white/50 rounded-tr-xl" />
            <div className="absolute -bottom-4 -left-4 size-12 border-b-2 border-l-2 border-white/50 rounded-bl-xl" />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: TEXT & BUTTONS */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
           viewport={{ once: true }}
           className="flex flex-col gap-8 text-center lg:text-left"
        >
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-4 font-general">
              Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Neeraj Singh</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/50 font-mono">Modern Web Engineer</p>
          </div>

          <p className="text-gray-400 leading-relaxed font-light text-lg md:text-xl max-w-2xl">
            I specialize in crafting immersive, high-performance web experiences. 
            With a strong foundation in modern Javascript frameworks and an eye for 
            premium aesthetics, I transform ideas into scalable and beautifully 
            designed digital products. When I&apos;m not coding, I&apos;m exploring new technologies 
            or diving deep into the world of AI.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-4">
             <Link href="#">
               <button className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300">
                 <Download className="size-5" />
                 Resume
               </button>
             </Link>
             <Link href="#">
               <button className="flex items-center gap-2 px-8 py-4 bg-black border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300">
                 <MessageSquare className="size-5" />
                 Contact Me
               </button>
             </Link>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION: SOCIAL LINKS */}
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.4 }}
         viewport={{ once: true }}
         className="max-w-7xl mx-auto w-full border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
            Connect With Me
        </p>

        <div className="flex items-center gap-4 md:gap-6">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <Link key={idx} href={social.link} target="_blank" className="group p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="size-6 md:size-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
