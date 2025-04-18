import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useEmailSubmission } from '../hooks/useEmailSubmission';
import PricingComponent from '../components/blocks/Pricing';

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

interface AllServicePricing {
  automations: PricingPlan[];
  software: PricingPlan[];
  web: PricingPlan[];
}

export function Pricing() {
  const { submitEmail, isSubmitting, error, success } = useEmailSubmission();
  const [formData, setFormData] = useState<string>('');
  const [activeService, setActiveService] = useState<keyof AllServicePricing>('automations');

  const allPricingData: AllServicePricing = {
    automations: [
      {
        name: "Automation Essentials",
        price: "2500", yearlyPrice: "24000", period: "month",
        features: [
          "Up to 3 core process automations",
          "Basic tool integration",
          "Standard documentation",
          "Email support"
        ],
        description: "Perfect for small businesses starting with automation.",
        buttonText: "Get Started", href: "https://calendly.com/your-calendar-link/15min", isPopular: false,
      },
      {
        name: "Automation Growth",
        price: "4450", yearlyPrice: "42720", period: "month",
        features: [
          "Up to 7 core process automations",
          "Advanced tool integration (API)",
          "Custom automation workflows",
          "Staff training session",
          "Priority email & chat support",
          "1 month post-launch monitoring"
        ],
        description: "Ideal for growing businesses needing broader automation.",
        buttonText: "Book a Call", href: "https://calendly.com/your-calendar-link/15min", isPopular: true,
      },
      {
        name: "Automation Scale",
        price: "7000", yearlyPrice: "67200", period: "month",
        features: [
          "Unlimited core process automations",
          "Complex integrations & custom logic",
          "Full workflow optimization analysis",
          "Multiple training sessions",
          "Dedicated support channel",
          "3 months post-launch monitoring"
        ],
        description: "Comprehensive automation for scaling operations.",
        buttonText: "Book a Call", href: "https://calendly.com/your-calendar-link/15min", isPopular: false,
      },
    ],
    software: [
      {
        name: "Software Foundation",
        price: "5000", yearlyPrice: "48000", period: "month",
        features: [
          "Core feature development (up to 5 modules)",
          "Standard UI/UX design",
          "Basic user management",
          "Deployment assistance"
        ],
        description: "Essential custom software for specific needs.",
        buttonText: "Get Started", href: "https://calendly.com/your-calendar-link/15min", isPopular: false,
      },
      {
        name: "Software Pro",
        price: "8000", yearlyPrice: "76800", period: "month",
        features: [
          "Comprehensive feature development",
          "Custom UI/UX design & branding",
          "Advanced user roles & permissions",
          "Integration with 2 external services",
          "Dedicated project manager",
          "3 months of free support"
        ],
        description: "Full-featured software tailored to your operations.",
        buttonText: "Book a Call", href: "https://calendly.com/your-calendar-link/15min", isPopular: true,
      },
      {
        name: "Software Enterprise",
        price: "15000", yearlyPrice: "144000", period: "month",
        features: [
          "Full-suite enterprise application",
          "Pixel-perfect custom design",
          "Scalable architecture design",
          "Multiple complex integrations",
          "On-site training option",
          "Ongoing maintenance contract",
          "6 months of free support"
        ],
        description: "For large-scale, mission-critical software needs.",
        buttonText: "Book a Call", href: "https://calendly.com/your-calendar-link/15min", isPopular: false,
      },
    ],
    web: [
      {
        name: "Web Presence",
        price: "2000", yearlyPrice: "19200", period: "month",
        features: [
          "5-page custom website",
          "Mobile-responsive design",
          "Basic SEO setup",
          "Contact form integration"
        ],
        description: "Establish your online presence professionally.",
        buttonText: "Get Started", href: "https://calendly.com/your-calendar-link/15min", isPopular: false,
      },
      {
        name: "Web Growth",
        price: "3500", yearlyPrice: "33600", period: "month",
        features: [
          "Up to 15-page custom website",
          "Custom design & branding",
          "Advanced SEO optimization",
          "Content management system (CMS)",
          "Blog setup",
          "1 month of free support"
        ],
        description: "A powerful website designed for growth and results.",
        buttonText: "Book a Call", href: "https://calendly.com/your-calendar-link/15min", isPopular: true,
      },
      {
        name: "Web Application",
        price: "6000", yearlyPrice: "57600", period: "month",
        features: [
          "Custom web application development",
          "User authentication & dashboards",
          "Database integration",
          "API integrations",
          "Scalable hosting setup",
          "2 months of free support"
        ],
        description: "Complex web apps with custom functionality.",
        buttonText: "Book a Call", href: "https://calendly.com/your-calendar-link/15min", isPopular: false,
      },
    ]
  };

  // Map keys to desired button labels
  const buttonLabels: Record<keyof AllServicePricing, string> = {
    automations: "Business Automations",
    software: "Custom Software",
    web: "Web Development"
  };

  // Get the plans for the currently active service
  const activePlans = allPricingData[activeService];

  return (
    <div className="min-h-screen text-white pt-32 md:pt-40">
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {(Object.keys(allPricingData) as Array<keyof AllServicePricing>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveService(key)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300
                ${activeService === key 
                  ? 'bg-[#00FF79] text-[#121316]' 
                  : 'bg-[#22232A] text-white hover:bg-[#32333A]'}
              `}
            >
              {buttonLabels[key]}
            </button>
          ))}
        </div>
      </div>

      <PricingComponent
        key={activeService}
        plans={activePlans}
        title={`${buttonLabels[activeService]} Pricing`}
        description={`Choose the ${buttonLabels[activeService].toLowerCase()} plan that best fits your needs.`}
      />

      <div className="container mx-auto px-4 md:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#22232A] p-8 md:p-12 rounded-2xl border border-[#32333A] max-w-3xl mx-auto mt-16"
        >
          <div className="text-center mb-8">
            <Mail className="w-12 h-12 text-[#248AFF] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-[#99999A]">
              Let us help you find the perfect solution for your business needs
            </p>
          </div>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={formData}
              onChange={(e) => setFormData(e.target.value)}
              className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FC61]"
            />
            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                if (formData) {
                  await submitEmail('pricing', formData);
                }
              }}
              className={`px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting || !formData}
            >
              {isSubmitting ? 'Submitting...' : 'Reach Out'}
            </button>
          </form>
          {error && (
            <p className="text-red-500 mt-4 text-center">{error}</p>
          )}
          {success && (
            <p className="text-[#00FF79] mt-4 text-center">
              Thanks! We'll be in touch soon.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}