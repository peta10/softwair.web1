"use client";
import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  direction?: "up" | "down";
  className?: string;
  delayMultiplier?: number;
}

export function ScrollAnimatedSection({
  children,
  direction = "up",
  className = "",
  delayMultiplier = 0
}: ScrollAnimatedSectionProps) {
  const { rotate, scale, translateY, opacity, ref } = useScrollAnimation(direction);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        translateY,
        scale,
        rotateX: rotate,
      }}
      transition={{
        duration: 0.4,
        delay: delayMultiplier * 0.1,
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
} 