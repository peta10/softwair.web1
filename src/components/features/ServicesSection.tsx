import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesSection() {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-[#00ff77]" />,
      title: "Business Automations",
      description: "Eliminate repetitive tasks and streamline your workflows with our business automation solutions.",
      path: "/services/BusinessAutomations"
    },
    {
      icon: <Code className="w-12 h-12 text-[#248AFF]" />,
      title: "Custom Software",
      description: "All-in-one solution for businesses requiring tailored software developed specifically for their operations.",
      path: "/services/CustomSoftware"
    },
    {
      icon: <Layout className="w-12 h-12 text-[#00FF79]" />,
      title: "Web Development",
      description: "Professional, modern websites and web applications that drive conversions and deliver results.",
      path: "/services/WebDevelopment"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-[#99999A] max-w-3xl mx-auto">
            We help business owners take back their time by eliminating manual tasks through custom software solutions and automations tailored to their operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#22232A] p-8 rounded-2xl border border-[#32333A] flex flex-col h-full"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#99999A] mb-6 flex-grow">{service.description}</p>
              <Link
                to={service.path}
                className="mt-auto group px-6 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 inline-flex items-center justify-center gap-2 w-full relative overflow-hidden shadow-lg hover:shadow-[#00FF79]/20 transform hover:scale-105 outline-none focus:outline-none focus:ring-2 focus:ring-[#00FF79]/50"
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FF79] to-[#00FF79]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 