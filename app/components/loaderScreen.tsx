"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onFinish })  {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;
      setPercentage(start);

      if (start >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false),
        onFinish() , 400);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-black flex flex-row items-center justify-center text-white z-[9999] gap-2"
        >
          {/* Percentage Text */}
          <span className="text-xl font-bold mb-6">{percentage}%</span>

          {/* Horizontal Loading Bar Container */}
          <div className="w-22 h-1 bg-neutral-700 rounded-full overflow-hidden mb-6">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${percentage}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
              className="h-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
