"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // or any arrow icon

export default function FallingArrow() {
  return (
    <motion.div
      className="w-fit cursor-pointer text-white border-2 border-white rounded-full m-0.5 p-0.5 flex justify-center items-center"
      whileHover={{
        y: 12, 
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 12,
      }}
    >
      <ChevronDown size={22} strokeWidth={1.5} />
    </motion.div>
  );
}
