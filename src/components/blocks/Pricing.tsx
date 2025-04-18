"use client";

import { buttonVariants } from "../ui/button"; // Adjusted path
import { Label } from "../ui/label"; // Adjusted path
import { Switch } from "../ui/switch"; // Adjusted path
import { useMediaQuery } from "../../hooks/use-media-query"; // Adjusted path
import { cn } from "../../lib/utils"; // Adjusted path
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom"; // Changed from next/link
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function PricingComponent({ // Renamed component to avoid conflict with page
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "#00FF79", // Use brand color
          "#248AFF", // Use brand color
          "#FFFFFF",
          "#99999A",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-10">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-[#99999A] text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-10">
        <span className={`mr-2 font-semibold ${isMonthly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative data-[state=checked]:bg-[#00FF79]"
            thumbClassName="data-[state=checked]:bg-[#121316]"
          />
        </label>
        <span className={`ml-2 font-semibold ${!isMonthly ? 'text-white' : 'text-gray-500'}`}>
          Annual billing <span className="text-[#00FF79]">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4 items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: plan.isPopular && isDesktop ? -20 : 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8, // Adjusted duration
              type: "spring",
              stiffness: 100,
              damping: 20, // Adjusted damping
              delay: index * 0.1, // Stagger delay
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border p-6 bg-[#22232A] text-center lg:flex lg:flex-col relative`,
              plan.isPopular ? "border-[#00FF79] border-2" : "border-[#32333A]",
              "flex flex-col",
              plan.isPopular && isDesktop ? "scale-105 z-10" : "lg:mt-5" // Scale popular on desktop
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-[#00FF79] py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-[#121316] h-4 w-4 fill-current" />
                <span className="text-[#121316] ml-1 font-sans font-semibold text-sm">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-base font-semibold text-[#99999A]">
                {plan.name}
              </p>
              <div className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    formatter={(value) => `$${value.toLocaleString()}`}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="tabular-nums"
                  />
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-[#99999A]">
                  / {plan.period}
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-[#99999A]">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#00FF79] mt-1 flex-shrink-0" />
                    <span className="text-left text-white">{feature}</span>
                  </li>
                ))} 
              </ul>

              <hr className="w-full my-4 border-[#32333A]" />

              <Link
                to={plan.href} 
                className={cn(
                  buttonVariants({ 
                    variant: plan.isPopular ? "default" : "outline", 
                  }),
                  "group relative w-full gap-2 overflow-hidden text-base font-semibold tracking-tighter",
                  "transform-gpu transition-all duration-300 ease-out",
                  plan.isPopular
                    ? "bg-[#00FF79] text-[#121316] hover:bg-[#00FF79]/90 border-0"
                    : "bg-transparent text-white border-[#32333A] hover:bg-[#32333A]/50 hover:text-white"
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-xs leading-5 text-[#99999A]">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PricingComponent; 