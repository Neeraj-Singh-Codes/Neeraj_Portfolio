// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Navbar from "./navbar";
// import FallingArrow from "./fallingArrow";

// export default function Hero() {
//   return (
//     <div className="h-screen w-full bg-black text-white relative">
//       <Navbar />

//       <div className="ml-[5%] mt-[5%]  font-general font-medium ">
//         <h1 className="text-gray-400 font-bold text-6xl lg:text-7xl xl:text-8xl 2xl:text-[148px]">
//           MODERN
//         </h1>
//         <h1 className="text-gray-400 font-bold text-6xl lg:text-7xl xl:text-8xl 2xl:text-[148px]">
//           WEB ENGINEER
//         </h1>
//       </div>

//       <p className="absolute text-lg tracking-widest text-white right-[32.4%] top-[47.5%] font-bold flex items-center">
//         BASED IN MUMBAI <ArrowUpRight className="size-5"/>
//       </p>

//       <div className="w-full mt-35 text-end pr-10 py-3 font-general font-medium text-lg">
//         <p>Available for InternShips</p>
//         <p> and Freelancing</p>
//         </div>
//         <div className="flex justify-between items-center p-10 font-general font-medium mt-41 text-xl ">
//           <p className="hover-underline">CS Student</p>
//           <p className="hover-underline">AI Enthusiast</p>
//           <div className="flex">
//             <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="absolute bottom-10 right-10 flex gap-2"
//       >
//         <motion.div
//           animate={{ y: [0, -6, 0] }}
//           transition={{ repeat: Infinity, duration: 1.2 }}
//         >
//           <FallingArrow />
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, -6, 0] }}
//           transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
//         >
//           <FallingArrow />
//         </motion.div>
//       </motion.div>
//           </div>
//         </div>
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Navbar from "./navbar";
// import FallingArrow from "./fallingArrow";

// export default function Hero({ startAnimation }: { startAnimation: boolean }) {
//   return (
//     <div className="h-screen w-full bg-black text-white relative">

//       <Navbar />

//       {/* MAIN HEADING (only animate when loader finishes) */}
//       <motion.div
//         initial={{ opacity: 0, y: 70 }}
//         animate={startAnimation ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="ml-[5%] mt-[5%] font-general font-medium"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={startAnimation ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="text-gray-400 font-bold text-6xl lg:text-7xl xl:text-8xl 2xl:text-[148px]"
//         >
//           MODERN
//         </motion.h1>

//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={startAnimation ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, delay: 0.35 }}
//           className="text-gray-400 font-bold text-6xl lg:text-7xl xl:text-8xl 2xl:text-[148px]"
//         >
//           WEB ENGINEER
//         </motion.h1>
//       </motion.div>

//       {/* Other parts — all triggered by startAnimation */}
//       <motion.p
//         initial={{ opacity: 0, y: 60 }}
//         animate={startAnimation ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1, delay: 0.35 }}
//         className="absolute text-lg tracking-widest text-white right-[32.4%] top-[47.5%] font-bold flex items-center"
//       >
//         BASED IN MUMBAI <ArrowUpRight className="size-5" />
//       </motion.p>

//       {/* ... (the rest of your animations updated the same way) */}
//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "./navbar";
import FallingArrow from "./fallingArrow";

export default function Hero({ startAnimation }: { startAnimation: boolean }) {
  return (
    <div className="min-h-screen w-full bg-black text-white relative flex flex-col justify-between">
      {/* Navbar sits at the top */}
      <Navbar />

      {/* ================= MAIN CONTENT CENTERED VERTICALLY ================= */}
      <div className=" flex flex-col justify-center px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-general font-medium w-fit"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-gray-400 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[148px]"
          >
            MODERN
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-400 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[148px]"
          >
            WEB ENGINEER
          </motion.h1>

          {/* BASED IN MUMBAI - Repositioned below WEB ENGINEER */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-base sm:text-lg tracking-wider text-white font-bold flex items-center justify-start md:justify-end mt-2 md:-mt-4"
          >
            BASED IN MUMBAI <ArrowUpRight className="size-5 ml-1" />
          </motion.p>
        </motion.div>
      </div>

      {/* ================= AVAILABLE FOR INTERNSHIPS ================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full px-4 md:px-[2.5%] flex justify-center md:justify-end font-general font-medium text-base md:text-lg py-4"
      >
        <div className="text-center md:text-right">
          <p>Available for InternShips</p>
          <p> and Freelancing</p>
        </div>
      </motion.div>

      {/* ================= BOTTOM FOOTER INFO ================= */}
      <div className="w-full px-4 md:px-[2.5%] pb-8 flex flex-row justify-between items-center md:items-end font-general font-medium text-sm md:text-xl">
        
        <p className="hover-underline">CS Student</p>
        
        <p className="hover-underline text-center md:text-left">AI Enthusiast</p>

        {/* Animated Arrows */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={startAnimation ? { opacity: 1 } : {}}
           transition={{ duration: 1, delay: 1 }}
           className="hidden md:flex gap-1"
         >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            <FallingArrow />
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
          >
            <FallingArrow />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
