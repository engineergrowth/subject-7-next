import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, Headphones } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get help from our team",
      value: "support@subject7.com",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Sales Inquiries",
      description: "Learn about our solutions",
      value: "sales@subject7.com",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Customer Success",
      description: "Existing customer support",
      value: "success@subject7.com",
      color: "from-purple-600 to-violet-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      description: "We're quick to respond",
      value: "Within 24 hours",
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            How We Can Help
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the best way to reach our team based on your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true }}
                className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {React.cloneElement(info.icon, { className: "text-white" })}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{info.description}</p>
              <p className="text-purple-400 font-medium">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;