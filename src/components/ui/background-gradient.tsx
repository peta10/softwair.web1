import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion"; // Changed from "motion/react" to "framer-motion" based on common usage

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Corrected syntax
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          // Use a green radial gradient - conditionally apply based on animate prop
          animate ? "bg-[radial-gradient(circle_farthest-side_at_50%_50%,#34D399_40%,transparent_100%)]" : ""
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
           // Use a green radial gradient - conditionally apply based on animate prop
           animate ? "bg-[radial-gradient(circle_farthest-side_at_50%_50%,#34D399_40%,transparent_100%)]" : ""
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}; 