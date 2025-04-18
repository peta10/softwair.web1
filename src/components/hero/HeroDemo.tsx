import { HeroWithMockup } from "@/components/ui/HeroWithMockup" // Adjusted import path
import { GithubIcon, ArrowRightIcon } from "lucide-react" // Import icons

export function HeroDemo() {
  return (
    <HeroWithMockup
      title="Custom Software & Automations to Grow Your Business"
      description="We help business owners take back their time by eliminating manual tasks through custom software solutions and automations tailored to their operations."
      primaryCta={{
        text: "Take the Time Audit",
        href: "/time-audit",
      }}
      secondaryCta={{
        text: "View our Projects",
        href: "/projects",
        icon: <ArrowRightIcon className="ml-2 h-4 w-4" />,
      }}
    />
  )
} 