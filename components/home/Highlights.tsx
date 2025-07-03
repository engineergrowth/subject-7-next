import { MonitorPlay, Server, Layers3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Highlights = () => {
  const highlights = [
    {
      icon: MonitorPlay,
      title: "Unified Test Automation",
      description:
        "Author, run, and manage tests across web, desktop, API, and DB. One powerful platform, total coverage.",
      color: "bg-gradient-to-r from-purple-700 to-purple-800"
    },
    {
      icon: Layers3,
      title: "Codeless by Design",
      description:
        "Build tests visually without writing code. Empower QA teams to move fast with confidence.",
      color: "bg-gradient-to-r from-purple-700 to-purple-800"
    },
    {
      icon: Server,
      title: "CI/CD Ready",
      description:
        "Connect seamlessly to GitHub, Azure, and other tools to fit right into your existing workflows.",
      color: "bg-gradient-to-r from-purple-700 to-purple-800"
    },
    {
      icon: ShieldCheck,
      title: "Secure & Compliant",
      description:
        "Trusted by leading federal agencies and enterprises alike.",
      color: "bg-gradient-to-r from-purple-700 to-purple-800"
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unified Test Automation, Redefined
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Subject7 brings together everything your QA team needs. Codeless creation. Full test coverage. Seamless delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {highlights.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="flex items-start space-x-6 bg-gray-900/80 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 h-full">
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 rounded-xl ${point.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                >
                  <point.icon className="text-white" size={28} />
                </motion.div>
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
