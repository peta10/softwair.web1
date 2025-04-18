"use client"

import { HeroSection } from "@/components/ui/hero-section"
import { Icons } from "@/components/ui/icons"

export function HeroSectionDemo() {
  const projectsIcon = <Icons.code className="h-5 w-5" />;

  return (
    <HeroSection
      badge={{
        text: "Introducing our custom software solutions",
        action: {
          text: "Learn more",
          href: "/services",
        },
      }}
      title="Custom Software & Automations to Grow Your Business"
      description="We help business owners take back their time by eliminating manual tasks through custom software solutions and automations tailored to their operations."
      actions={[
        {
          text: "Take the Time Audit",
          href: "/time-audit",
          variant: "default",
        },
        {
          text: "View our Projects",
          href: "/projects",
          variant: "glow",
        },
      ]}
    />
  )
} 