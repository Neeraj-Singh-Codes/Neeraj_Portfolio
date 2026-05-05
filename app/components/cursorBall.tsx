"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useAnimationFrame } from "framer-motion";

export default function CursorBall() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Adjusted springs for a snappier, smoother response
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Extract velocity dynamically without relying on React renders
  const velocityX = useVelocity(cursorX);
  const velocityY = useVelocity(cursorY);

  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);
  const rotation = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half dimensions (w-3 h-3 is 12px -> offset 6px)
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useAnimationFrame(() => {
    const vx = velocityX.get();
    const vy = velocityY.get();
    const speed = Math.sqrt(vx * vx + vy * vy);

    // Compute dynamic rotation directly towards velocity vector
    // Higher threshold (50 instead of 10) prevents the cursor from flipping randomly when the trailing spring bounces back
    if (speed > 50) {
      const angle = (Math.atan2(vy, vx) * 180) / Math.PI;
      
      // Prevent rapid 360 degree snapping by normalizing the delta rotation to the nearest shortest path
      const currentRotate = rotation.get();
      let delta = angle - (currentRotate % 360);
      
      if (delta > 180) delta -= 360;
      else if (delta < -180) delta += 360;
      
      // Apply smoothed rotational addition instead of direct set
      rotation.set(currentRotate + delta);
    }

    // Morph the shape relative to speed - Made less stretchable
    // Changed divisor from 1000 to 2500, capped stretch at 0.25 max
    const stretch = Math.min(speed / 2500, 0.25); 
    scaleX.set(1 + stretch);
    scaleY.set(1 - stretch * 0.35); // Less severe squeeze
  });

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        scaleX: scaleX,
        scaleY: scaleY,
        rotate: rotation,
      }}
      className="pointer-events-none fixed top-0 left-0 w-3 h-3 rounded-full bg-white z-[999999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}
