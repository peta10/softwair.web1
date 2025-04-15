import { motion } from 'framer-motion';
import { Calendar, Receipt, Users, UserCog, Package, Flower as GitFlow, Code, GitMerge, Settings, Workflow, Zap } from 'lucide-react';

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
    </div>
  );
}