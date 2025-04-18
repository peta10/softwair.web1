import { motion } from 'framer-motion';
import { Code, Zap, BarChart, Users } from 'lucide-react';

const solutions = [
  {
    icon: <Zap className="w-12 h-12 text-[#248AFF]" />,
    title: "Success as a Service",
    description: "We have been transforming SaaS products for over 5 years by designing unique interfaces and driving growth."
  },
  {
    icon: <BarChart className="w-12 h-12 text-[#00FF79]" />,
    title: "Conversion-Focused Design",
    description: "Websites so stunning that it will increase your conversion rate by 120%, decrease the bounce-rate and improve engagement."
  },
  {
    icon: <Users className="w-12 h-12 text-[#248AFF]" />,
    title: "Stay Ahead of the Market",
    description: "Designs that make you and your venture shine in the crowd of similar looking websites. Be the one that leads the industry.",
    stats: [
      { label: "User Retention", value: "+80%" },
      { label: "Leads", value: "+150%" }
    ]
  }
];

export function CoreSolutions() {
  return (
    <section className="py-20 bg-[#1A1B1F]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-2xl font-semibold mb-2">Crafting Designs That Drive Growth</p>
          <p className="text-[#99999A] max-w-2xl mx-auto">
            Fits best for: Agencies, SaaS, Digital Creators, Businesses, E-Commerce
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#22232A] p-8 rounded-2xl border border-[#32333A]"
            >
              <div className={`bg-${solution.icon.props.className.includes("00FF79") ? "[#00FF79]" : "[#248AFF]"}/10 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-[#99999A]">
                {solution.description}
              </p>
              
              {solution.stats && (
                <div className="mt-6 pt-6 border-t border-[#32333A]">
                  <div className="flex justify-between">
                    {solution.stats.map((stat, statIndex) => (
                      <div key={statIndex}>
                        <p className="text-xl font-semibold">{stat.label}</p>
                        <p className="text-[#00FF79] font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}