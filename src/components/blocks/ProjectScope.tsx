"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming utils is in lib

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProjectScopeProps {
  className?: string;
}

const stepsData: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We learn about your business needs, goals, and current processes to identify potential solutions.",
  },
  {
    number: 2,
    title: "Design & Development",
    description:
      "Our team creates custom solutions tailored to your specific requirements and business objectives.",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "We deploy your custom solutions and provide training to ensure a smooth transition for your team.",
  },
];

function ProjectScope({ className }: ProjectScopeProps) {
  const [activeStep, setActiveStep] = useState(2); // Default to step 2 as highlighted in image

  return (
    <div className={cn("py-16 md:py-24 text-gray-200", className)}>
      <div className="container mx-auto px-4">
        {/* Top Titles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
            Project Scope
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Our Process, Step by Step
          </p>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            From the initial proposal to the final product at your hand. A
            clear view of what you can expect at every stage!
          </p>
        </div>

        {/* Central Heading */}
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Your all in one <br className="sm:hidden" />
            <span className="text-white">design partner.</span>
          </h3>
        </div>

        {/* Interactive Steps */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 lg:gap-16 text-center">
          {stepsData.map((step) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center cursor-pointer group flex-1 max-w-xs"
              onClick={() => setActiveStep(step.number)}
              initial={{ opacity: 0.8, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Step Indicator Circle */}
              <motion.div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-2 transition-colors duration-300",
                  activeStep === step.number
                    ? "bg-green-600 border-green-500 text-white scale-110" // Highlight color from image
                    : "bg-blue-800 border-blue-700 text-blue-200 group-hover:bg-blue-700 group-hover:border-blue-600" // Default blue from image
                )}
                whileHover={{ scale: activeStep === step.number ? 1.1 : 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {step.number}
              </motion.div>

              {/* Step Title */}
              <h4
                className={cn(
                  "text-xl font-semibold mb-3 transition-colors duration-300",
                  activeStep === step.number ? "text-white" : "text-gray-300 group-hover:text-white"
                )}
              >
                {step.title}
              </h4>

              {/* Step Description */}
              <p
                className={cn(
                  "text-sm transition-colors duration-300",
                  activeStep === step.number
                    ? "text-gray-300"
                    : "text-gray-500 group-hover:text-gray-400"
                )}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectScope; 