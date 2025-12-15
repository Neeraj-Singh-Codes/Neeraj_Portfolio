"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorBall() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      setPosition({ x: newX, y: newY });

      // velocity = difference between frames
      setVelocity({
        x: newX - lastPosition.x,
        y: newY - lastPosition.y,
      });
      
      setLastPosition({ x: newX, y: newY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [lastPosition]);

  // Determine stretch based on how fast you move
  const speed = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
  const stretch = Math.min(speed / 90, 0.35); // max stretch

  return (
    <motion.div
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scaleX: 1 - stretch,
        scaleY: 1 + stretch,
      }}
      transition={{
        type: "spring",
        mass: 0.2,
        damping: 8,
        stiffness: 100,
      }}
      className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full bg-white z-[999999]"
    />
  );
}
