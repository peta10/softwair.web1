"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, Code, Layout, Zap } from "lucide-react"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"
import { Link } from "react-router-dom"
import { BackgroundGradient } from "../ui/background-gradient"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  path: string
  index: number
  isActive: boolean
  onClick: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  path,
  index,
  isActive,
  onClick,
}) => {
  const controls = useAnimation()

  useEffect(() => {
    if (isActive) {
      controls.start({
        scale: 1.05,
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      })
    } else {
      controls.start({
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      })
    }
  }, [isActive, controls])

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`
          p-6 cursor-pointer overflow-hidden transition-all duration-300 border border-[#32333A]
          ${isActive ? "bg-[#22232A] shadow-lg" : "bg-[#22232A]/90 hover:bg-[#22232A]"}
        `}
        onClick={onClick}
      >
        <motion.div animate={controls}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-lg bg-[#00FF79]/10 flex items-center justify-center text-[#00FF79]">
                {icon}
              </div>
              {isActive && (
                <Badge variant="outline" className="bg-[#00FF79]/10 text-[#00FF79]">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-[#99999A]">{description}</p>
            
            <Link
              to={path}
              className={`
                inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium 
                bg-[#00FF79]/10 text-[#00FF79] hover:bg-[#00FF79]/20 
                gap-1 transition-all duration-300 group mt-4 
                opacity-100
              `}
            >
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
        
        {isActive && <AnimatedSparkles />}
      </Card>
    </motion.div>
  )
}

const AnimatedSparkles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
            left: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
            opacity: Math.random(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-[#00FF79]/50"
        />
      ))}
    </div>
  </div>
)

interface InteractiveServicesProps {
  className?: string
}

export function InteractiveServices({ className }: InteractiveServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const services = [
    {
      title: "Business Automations",
      description: "Eliminate repetitive tasks and streamline your workflows with our business automation solutions.",
      icon: <Zap className="h-6 w-6" />,
      path: "/services/BusinessAutomations"
    },
    {
      title: "Custom Software",
      description: "All-in-one solution for businesses requiring tailored software developed specifically for their operations.",
      icon: <Code className="h-6 w-6" />,
      path: "/services/CustomSoftware"
    },
    {
      title: "Web Development",
      description: "Professional, modern websites and web applications that drive conversions and deliver results.",
      icon: <Layout className="h-6 w-6" />,
      path: "/services/WebDevelopment"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section id="services" className={`w-full py-20 ${className || ""}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-[#00FF79]/20 text-[#00FF79] hover:bg-[#00FF79]/30">Our Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-[#99999A]">
              We help business owners take back their time by eliminating manual tasks through custom software solutions 
              and automations tailored to their operations.
            </p>
          </div>

          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-full"
              >
                <BackgroundGradient 
                  containerClassName="rounded-[22px] h-full"
                  className="h-full"
                  animate={index === hoveredIndex}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    path={service.path}
                    index={index}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                </BackgroundGradient>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, index) => (
              <button
                key={index}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${index === activeIndex ? "bg-[#00FF79] w-6" : "bg-[#00FF79]/30"}
                `}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveServices 