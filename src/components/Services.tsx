import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Globe, 
  Zap,
  Shield,
  BarChart3,
  Users,
  Settings
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React/Next.js", "TypeScript", "Node.js", "Full-stack Development"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android", "PWA Development"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience.",
    features: ["Figma/Adobe XD", "Prototyping", "User Research", "Design Systems"],
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust and scalable backend systems and APIs.",
    features: ["Node.js/Python", "PostgreSQL/MongoDB", "AWS/Azure", "Microservices"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms and online store development.",
    features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "Analytics"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience.",
    features: ["Code Optimization", "CDN Integration", "Caching Strategies", "SEO"],
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Keep your applications secure and up-to-date.",
    features: ["Security Audits", "SSL Certificates", "Regular Updates", "Backup Solutions"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: BarChart3,
    title: "Analytics & SEO",
    description: "Data-driven insights and search engine optimization.",
    features: ["Google Analytics", "SEO Optimization", "Performance Monitoring", "Conversion Tracking"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Expert advice on technology strategy and digital transformation.",
    features: ["Technology Audits", "Architecture Planning", "Team Training", "Project Management"],
    color: "from-teal-500 to-teal-600"
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 