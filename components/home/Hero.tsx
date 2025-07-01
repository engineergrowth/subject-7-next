import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-950 text-white pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden" role="banner" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-3xl" style={{backgroundColor: '#FD7855', opacity: 0.05}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-8"
        >
          <span className="inline-block">Ditch Manual Testing</span>
          <br />
          <span className="text-purple-700 inline-block">Supercharge Your Deployments</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Focus on building. Let our platform handle the repetitive QA work. 
          Ship faster, catch bugs sooner, and drive your roadmap forward. We are the{" "}
          <span className="text-purple-700 font-semibold">#1 trusted QA Automation platform</span>{" "}
          of GovTech & Enterprise companies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://calendly.com/d/csyv-3fx-d89/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-800 hover:bg-purple-700 text-white py-4 px-10 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
            >
              Book a Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
