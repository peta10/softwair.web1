import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface ScrollAnimationValues {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
  ref: React.RefObject<HTMLDivElement>;
}

export function useScrollAnimation(direction: "up" | "down" = "up"): ScrollAnimationValues {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Different animation values based on direction
  const rotateValues = direction === "up" ? [10, 0] : [0, 10];
  const scaleValues = direction === "up" 
    ? (isMobile ? [0.8, 1] : [0.9, 1]) 
    : (isMobile ? [1, 0.8] : [1, 0.9]);
  const translateValues = direction === "up" ? [100, 0] : [0, -100];
  const opacityValues = direction === "up" ? [0.3, 1] : [1, 0.7];

  const rotate = useTransform(scrollYProgress, [0, 1], rotateValues);
  const scale = useTransform(scrollYProgress, [0, 1], scaleValues);
  const translateY = useTransform(scrollYProgress, [0, 1], translateValues);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityValues);

  return { rotate, scale, translateY, opacity, ref };
} 