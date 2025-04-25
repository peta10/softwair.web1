"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuroraText } from "../magicui/aurora-text";
import React from 'react';

// Copied SiteBackground from App.tsx
const SiteBackground = () => (
  <div className="absolute inset-0 -z-10 bg-white dark:bg-[#1a1b1f] overflow-hidden bg-tech-pattern">
    {/* Circuit Lines */}
    <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
      <svg width="100%" height="100%" className="absolute">
        <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-400 dark:text-gray-600"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
    
    {/* Binary numbers */}
    <div className="absolute inset-0 opacity-5 dark:opacity-10">
      <div className="absolute left-[10%] top-[15%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[20%] top-[25%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[30%] top-[45%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[40%] top-[65%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[50%] top-[85%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[60%] top-[35%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[70%] top-[55%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
      <div className="absolute left-[80%] top-[75%] text-xs font-mono text-gray-900 dark:text-gray-200">1</div>
      <div className="absolute left-[90%] top-[5%] text-xs font-mono text-gray-900 dark:text-gray-200">0</div>
    </div>
  </div>
);

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative z-0 min-h-screen w-full flex items-center justify-center overflow-hidden mb-[-100px]">
            {/* Use SiteBackground component */}
            <SiteBackground />
            
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-primary/15"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-secondary/15"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-primary/15"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-secondary/15"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-primary/15"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Badge removed 
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-primary" />
                        <span className="text-sm text-primary tracking-wide">
                            {badge}
                        </span>
                    </motion.div>
                    */}

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="text-foreground">
                                {title1}
                            </span>
                            <br />
                            <AuroraText 
                                colors={["#00FF79", "#00e070", "#06d6ca", "#03b8f4", "#248AFF"]}
                                className="font-bold"
                                speed={0.5}
                            >
                                {title2}
                            </AuroraText>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            We help business owners take back their time by eliminating manual tasks 
                            through custom software solutions and automations.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a 
                            href="/time-audit" 
                            className="px-6 py-3 text-primary-foreground font-medium bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-300 shadow-md shadow-primary/20"
                        >
                            Time Audit
                        </a>
                        <a 
                            href="/book-call" 
                            className="px-6 py-3 text-foreground font-medium bg-transparent hover:bg-secondary/10 border border-secondary rounded-lg transition-colors duration-300"
                        >
                            Book a Call
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export { HeroGeometric } 