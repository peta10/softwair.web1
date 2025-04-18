import { motion } from 'framer-motion';

export function Steps() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Scope</h2>
          <p className="text-xl font-semibold mb-2">Our Process, Step by Step</p>
          <p className="text-[#99999A] max-w-2xl mx-auto">
            From the initial proposal to the final product at your hand. A clear view of what you can expect at every stage!
          </p>
        </motion.div>
          
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-16">
            Your all in one<br />design partner.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#248AFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#248AFF] text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-[#99999A]">
              We learn about your business needs, goals, and current processes to identify potential solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#00FF79]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#00FF79] text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
            <p className="text-[#99999A]">
              Our team creates custom solutions tailored to your specific requirements and business objectives.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#248AFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <span className="text-[#248AFF] text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Implementation</h3>
            <p className="text-[#99999A]">
              We deploy your custom solutions and provide training to ensure a smooth transition for your team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}