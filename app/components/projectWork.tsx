// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { projects } from "./data";

// export default function HorizontalProjects() {
//   const ref = useRef(null);

//   // Track scroll progress through the whole section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // Move horizontally based on scroll
//   const x = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", `-${(projects.length - 1) * 60}%`]
//   );

//   // (removed large centered heading animation so projects are fully visible)

//   return (
//     <section ref={ref} className="relative bg-black text-white h-[300vh]">
//       {/* STICKY VIEWPORT */}
//       <div className="sticky top-0 left-0 h-screen w-screen overflow-hidden">
//         {/* removed big centered heading so slides are not occluded */}

//         {/* HORIZONTAL TRACK */}
//         <motion.div style={{ x }} className="flex h-screen w-max z-10">
//           <div className="h-screen w-screen text-[250px] flex items-center justify-center">Projects</div>
//           {projects.map((p, i) => (
//             <div
//               key={i}
//               className="w-screen h-screen flex items-center justify-center gap-20 shrink-0"
//             >
              
//               {/* IMAGE */}
//               <div className="w-[40vw] h-[60vh] rounded-2xl overflow-hidden">
//                 <img
//                   src={p.image}
//                   className="h-full w-full object-cover"
//                   alt=""
//                 />
//               </div>

//               {/* TEXT */}
//               <div className="w-[40vw] flex flex-col">
//                 <h2 className="text-5xl font-bold text-gray-500 mb-2">
//                   {p.id}
//                 </h2>
//                 <h1 className="text-6xl font-bold mb-4">{p.title}</h1>
//                 <p className="text-lg opacity-70 max-w-md mb-8">{p.desc}</p>

//                 <a
//                   href={p.link}
//                   className="flex items-center gap-2 text-xl hover:gap-4 transition-all"
//                 >
//                   View Project <ArrowUpRight />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export default function HorizontalProjects() {
  const ref = useRef(null);

  // Total slides = Title Slide (1) + Projects (n)
  const totalSlides = projects.length + 1;
  
  // We want to scroll enough to cover all slides.
  // Standard pin scrolling: Height = TotalSlides * 100vh
  const sectionHeight = `${totalSlides * 100}vh`;

  // Track scroll progress through the whole section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Calculate the total horizontal distance to move.
  // We have 'totalSlides' sections, each 100vw wide.
  // The first one is visible initially. We need to move the rest into view.
  // Distance = (totalSlides - 1) * 100vw
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(totalSlides - 1) * 100}vw`]
  );

  // Parallax effects
  // We can use the progress 0..1 to drive other animations if needed.
  // Keeping it simple and precise first as requested.

  return (
    <section 
      id="projects"
      ref={ref} 
      className="relative bg-black text-white"
      style={{ height: sectionHeight }}
    >
      {/* STICKY VIEWPORT */}
      <div className="sticky top-0 left-0 h-screen w-screen overflow-hidden">
        
        {/* HORIZONTAL TRACK */}
        {/* We use x transform to move the track leftwards */}
        <motion.div style={{ x }} className="flex h-screen w-max z-10">

          {/* 1. INTRO SLIDE */}
          <div className="w-screen h-screen flex items-center justify-center shrink-0">
            <h1 className="text-[10vw] font-bold text-gray-800 uppercase tracking-tighter">
              Projects
            </h1>
          </div>

          {/* 2...N. PROJECT SLIDES */}
          { projects.map((p: any, i) => (
            <div
              key={i}
              className="w-screen h-screen flex items-center justify-center gap-20 shrink-0 px-10"
            >
              
              {/* LHS: IMAGE */}
              <div className="w-[45vw] h-[65vh] rounded-2xl overflow-hidden relative group">
                <img
                  src={p.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={p.title}
                />
              </div>

              {/* RHS: TEXT */}
              <div className="w-[35vw] flex flex-col justify-center">
                <span className="text-8xl font-bold text-gray-800 mb-4 block leading-none opacity-50">
                  {p.id}
                </span>
                <h2 className="text-6xl font-bold mb-6 leading-tight">
                  {p.title}
                </h2>
                <p className="text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
                  {p.desc}
                </p>

                <a
                  href={p.link ? p.link : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-xl font-medium hover:gap-6 transition-all duration-300 border-b border-white/20 pb-1 w-fit hover:border-white"
                >
                  View Project <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
