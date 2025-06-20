import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <section className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.img
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          src="/dashboard.webp"
          alt="Subject7 Dashboard Preview"
          className="w-full h-auto block mx-auto rounded-2xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default DashboardPreview;