"use client"

import { HeroSection } from "@/components/ui/new-hero"
import { Icons } from "@/components/ui/icons"

export function NewHeroDemo() {
  return (
    <HeroSection
      badge={{
        text: "Premium software solutions",
        action: {
          text: "Learn more",
          href: "/services/CustomSoftware",
        },
      }}
      title="Build your business with custom software"
      description="Eliminate manual tasks and grow your business with tailored software solutions built for your specific needs."
      actions={[
        {
          text: "Get Started",
          href: "/time-audit",
          variant: "default",
        },
        {
          text: "GitHub",
          href: "https://github.com/softwair",
          variant: "glow",
          icon: <Icons.gitHub className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80",
        dark: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80",
        alt: "Software Dashboard Preview",
      }}
    />
  )
} 