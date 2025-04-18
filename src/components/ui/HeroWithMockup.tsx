import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Mockup } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import { GithubIcon } from "lucide-react" // Corrected import name
import React from "react" // Added React import

interface HeroWithMockupProps {
  title: string
  description: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
    icon?: React.ReactNode
  }
  mockupImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
  className?: string
}

export function HeroWithMockup({
  title,
  description,
  primaryCta = {
    text: "Get Started",
    href: "/get-started",
  },
  secondaryCta = {
    text: "GitHub",
    href: "https://github.com/your-repo",
    icon: <GithubIcon className="mr-2 h-4 w-4" />, // Corrected component name
  },
  mockupImage,
  className,
}: HeroWithMockupProps) {
  return (
    <section
      className={cn(
        "relative text-foreground",
        "py-12 px-4 md:py-24 lg:py-32",
        "overflow-hidden",
        className,
      )}
    >
      <div className="relative mx-auto max-w-[1280px] flex flex-col gap-12 lg:gap-24">
        <div className="relative z-10 flex flex-col items-center gap-6 pt-8 md:pt-16 text-center lg:gap-12">
          {/* Heading */}
          <h1
            className={cn(
              "inline-block animate-appear",
              "bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground",
              "bg-clip-text text-transparent",
              "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              "leading-[1.1] sm:leading-[1.1]",
              "drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            )}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "max-w-[550px] animate-appear opacity-0 [animation-delay:150ms]",
              "text-base sm:text-lg md:text-xl",
              "text-muted-foreground",
              "font-medium",
            )}
          >
            {description}
          </p>

          {/* CTAs */}
          <div
            className="relative z-10 flex flex-wrap justify-center gap-4
            animate-appear opacity-0 [animation-delay:300ms]"
          >
            <Button
              asChild
              size="lg"
              className={cn(
                "bg-gradient-to-b from-brand to-brand/90 dark:from-brand/90 dark:to-brand/80",
                "hover:from-brand/95 hover:to-brand/85 dark:hover:from-brand/80 dark:hover:to-brand/70",
                "text-white shadow-lg",
                "transition-all duration-300",
              )}
            >
              <a href={primaryCta.href}>{primaryCta.text}</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className={cn(
                "text-foreground/80 dark:text-foreground/70",
                "transition-all duration-300",
              )}
            >
              <a href={secondaryCta.href}>
                {secondaryCta.icon}
                {secondaryCta.text}
              </a>
            </Button>
          </div>

          {/* Mockup - Conditionally render */}
          {mockupImage && (
            <div className="relative w-full pt-12 px-4 sm:px-6 lg:px-8">
              <Mockup
                className={cn(
                  "animate-appear opacity-0 [animation-delay:700ms]",
                  "shadow-[0_0_50px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]",
                  "border-brand/10 dark:border-brand/5",
                )}
              >
                <img
                  {...mockupImage}
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Mockup>
            </div>
          )}
        </div>
      </div>

      {/* Background Glow - Restored with custom green color */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        // Apply custom styles directly to override Glow's internal CSS variables
        style={{
          '--glow-color-1': 'hsla(149, 100%, 50%, 0.5)', // Corresponds to #00FF79 with 50% alpha
          '--glow-color-2': 'hsla(149, 100%, 50%, 0.3)', // Corresponds to #00FF79 with 30% alpha
        } as React.CSSProperties}
      >
        <div
          // These override the default radial gradients in Glow component
          className={cn(
            "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] sm:h-[512px]",
            "bg-[radial-gradient(ellipse_at_center,var(--glow-color-1)_10%,hsla(var(--brand-foreground)/0)_60%)]", // Use override color 1
          )}
        />
        <div
          className={cn(
            "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] sm:h-[256px]",
            "bg-[radial-gradient(ellipse_at_center,var(--glow-color-2)_10%,hsla(var(--brand-foreground)/0)_60%)]", // Use override color 2
          )}
        />
      </div>

    </section>
  )
} 