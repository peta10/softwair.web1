import { motion } from 'framer-motion';
import { Calendar, Receipt, Users, UserCog, Package, Flower as GitFlow, Code, GitMerge, Settings, Workflow, Zap } from 'lucide-react';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

const automationFeatures = [
  {
    icon: <Calendar className="w-12 h-12 text-[#248AFF]" />,
    title: "Automated Scheduling",
    description: "Auto-booking and confirmation emails. Reschedule and cancel without manual input."
  },
  {
    icon: <Receipt className="w-12 h-12 text-[#248AFF]" />,
    title: "Invoicing & Payments",
    description: "Generate invoices automatically based on completed work. Automate payment collection and reminders."
  },
  {
    icon: <Users className="w-12 h-12 text-[#248AFF]" />,
    title: "Client Follow-Ups",
    description: "Send automatic updates, reminders, and marketing emails. Improve customer engagement without lifting a finger."
  },
  {
    icon: <UserCog className="w-12 h-12 text-[#248AFF]" />,
    title: "Employee Management",
    description: "Track employee hours and automatically calculate payroll. Manage shifts, time off, and performance tracking."
  },
  {
    icon: <Package className="w-12 h-12 text-[#248AFF]" />,
    title: "Inventory Control",
    description: "Auto-restocking alerts and supplier notifications. Reduce downtime caused by stock shortages."
  },
  {
    icon: <GitFlow className="w-12 h-12 text-[#248AFF]" />,
    title: "Custom Workflows",
    description: "Set up automated task flows across departments. Reduce bottlenecks and streamline team coordination."
  }
];

const softwareFeatures = [
  {
    icon: <Code className="w-12 h-12 text-[#248AFF]" />,
    title: "Industry-Specific Software",
    description: "Fully customized CRM, job tracking, workflow automation, and reporting tools designed for your industry."
  },
  {
    icon: <GitMerge className="w-12 h-12 text-[#248AFF]" />,
    title: "Project Management",
    description: "Organize, assign, and track progress seamlessly. Keep your team aligned and on schedule."
  },
  {
    icon: <Users className="w-12 h-12 text-[#248AFF]" />,
    title: "Client & Employee Portals",
    description: "Secure dashboards for easy communication, document sharing, and updates. Improve collaboration."
  },
  {
    icon: <Settings className="w-12 h-12 text-[#248AFF]" />,
    title: "Data & Analytics",
    description: "Track real-time business performance. Identify bottlenecks and areas for improvement."
  },
  {
    icon: <Workflow className="w-12 h-12 text-[#248AFF]" />,
    title: "API Integrations",
    description: "Connect to QuickBooks, HubSpot, Zapier, Salesforce, and other tools. Sync data across platforms."
  },
  {
    icon: <Zap className="w-12 h-12 text-[#248AFF]" />,
    title: "Custom Features",
    description: "Need something unique? We build it. Example: Auto-generate blueprints & project specs."
  }
];

// Testimonials data converted to the format expected by TestimonialsSection
const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

function FeatureGrid({ features, title }: { features: typeof automationFeatures, title: string }) {
  return (
    <div className="mb-20">
      <h3 className="text-2xl md:text-4xl font-bold mb-12 tracking-tight">{title}</h3>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-[#248AFF]/5 p-8 rounded-2xl border border-[#248AFF]/20 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#248AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 mb-4">
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-[#99999A] leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function Features() {
  return (
    <div className="py-32">
      <div className="container mx-auto px-8 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 tracking-tight text-center bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
          Features & Capabilities
        </h2>
        <FeatureGrid 
          title="⚡ Features of Business Automations" 
          features={automationFeatures} 
        />
        <FeatureGrid 
          title="🛠️ Features of Custom Software" 
          features={softwareFeatures} 
        />
      </div>
      
      {/* New Testimonials Section with Marquee */}
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
        className="bg-[#1A1B1F] mt-16"
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently asked questions
            </h2>
            <p className="text-[#99999A] max-w-2xl mx-auto">
              We've gathered the most common questions to make things simple. If you don't find your answer here, feel free to reach out!
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]">
              <h3 className="text-xl font-semibold mb-2">How long does it take to complete a project?</h3>
              <p className="text-[#99999A]">
                Project timelines vary based on complexity. A basic automation solution might take 2-4 weeks, while a comprehensive custom software solution could take 3-6 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]">
              <h3 className="text-xl font-semibold mb-2">What is included in the development process?</h3>
              <p className="text-[#99999A]">
                Our comprehensive process includes: initial consultation, business analysis, solution design, development, testing, deployment, training, and ongoing support. We work closely with you at every stage to ensure the solution meets your specific needs.
              </p>
            </div>

            <div className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]">
              <h3 className="text-xl font-semibold mb-2">Do you offer post-launch support?</h3>
              <p className="text-[#99999A]">
                Yes, we provide post-launch support for all our solutions. Each package includes a free support period, and we offer ongoing maintenance plans to ensure your solution continues to perform optimally as your business evolves.
              </p>
            </div>

            <div className="bg-[#22232A] p-6 rounded-2xl border border-[#32333A]">
              <h3 className="text-xl font-semibold mb-2">Can I customize the package?</h3>
              <p className="text-[#99999A]">
                Absolutely! Our packages are starting points, and we specialize in creating custom solutions tailored to your specific needs. During our consultation, we'll discuss your requirements and adjust the package accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}