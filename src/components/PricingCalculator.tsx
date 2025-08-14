import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, Check } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  multiplier: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const services: ServiceOption[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    basePrice: 5000,
    description: 'Custom websites and web applications',
    features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Analytics Integration']
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    basePrice: 8000,
    description: 'Native and cross-platform mobile apps',
    features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Submission']
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    basePrice: 3000,
    description: 'Beautiful and intuitive user interfaces',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design System']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Platform',
    basePrice: 10000,
    description: 'Complete online store solutions',
    features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics']
  },
  {
    id: 'backend-development',
    name: 'Backend Development',
    basePrice: 6000,
    description: 'Robust and scalable backend systems',
    features: ['API Development', 'Database Design', 'Security', 'Scalability']
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Support',
    basePrice: 500,
    description: 'Ongoing support and maintenance',
    features: ['24/7 Support', 'Regular Updates', 'Security Monitoring', 'Performance Optimization']
  }
];

const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    multiplier: 1,
    description: 'Essential features for startups',
    features: ['Basic Design', 'Standard Features', 'Email Support', '3 Months Warranty']
  },
  {
    id: 'professional',
    name: 'Professional',
    multiplier: 1.5,
    description: 'Advanced features for growing businesses',
    features: ['Custom Design', 'Advanced Features', 'Priority Support', '6 Months Warranty', 'Performance Optimization'],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    multiplier: 2.5,
    description: 'Full-featured solutions for large organizations',
    features: ['Premium Design', 'All Features', '24/7 Support', '1 Year Warranty', 'Custom Integrations', 'Dedicated Manager']
  }
];

const PricingCalculator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedTier, setSelectedTier] = useState('professional');
  const [timeline, setTimeline] = useState(3);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = useCallback(() => {
    let baseTotal = 0;
    
    // Calculate base price from selected services
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        baseTotal += service.basePrice;
      }
    });

    // Apply tier multiplier
    const tier = pricingTiers.find(t => t.id === selectedTier);
    if (tier) {
      baseTotal *= tier.multiplier;
    }

    // Apply timeline adjustment (longer timeline = slight discount)
    const timelineMultiplier = timeline <= 1 ? 1.2 : timeline <= 3 ? 1 : timeline <= 6 ? 0.9 : 0.8;
    baseTotal *= timelineMultiplier;

    setTotalPrice(Math.round(baseTotal));
  }, [selectedServices, selectedTier, timeline]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing Calculator
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get an instant quote for your project. Select your services, choose your tier, and see the real-time pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Services Selection */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Select Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleService(service.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedServices.includes(service.id)
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {service.name}
                      </h4>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedServices.includes(service.id)
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {selectedServices.includes(service.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {service.description}
                    </p>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {formatPrice(service.basePrice)}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Pricing Tier */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Choose Your Tier
              </h3>
              <div className="space-y-4">
                {pricingTiers.map((tier) => (
                  <motion.button
                    key={tier.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedTier === tier.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500'
                    } ${tier.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {tier.name}
                          {tier.popular && (
                            <span className="ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {tier.description}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedTier === tier.id
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}>
                        {selectedTier === tier.id && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Project Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Timeline (months)</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{timeline} months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={timeline}
                  onChange={(e) => setTimeline(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>1 month</span>
                  <span>12 months</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Total Price */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Estimated Total</h3>
              <div className="text-6xl font-bold mb-4">
                {formatPrice(totalPrice)}
              </div>
              <p className="text-blue-100">
                {selectedServices.length > 0 
                  ? `For ${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''}`
                  : 'Select services to see pricing'
                }
              </p>
            </div>

            {/* Price Breakdown */}
            {selectedServices.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Price Breakdown
                </h3>
                <div className="space-y-3">
                  {selectedServices.map((serviceId) => {
                    const service = services.find(s => s.id === serviceId);
                    const tier = pricingTiers.find(t => t.id === selectedTier);
                    if (!service || !tier) return null;
                    
                    const servicePrice = Math.round(service.basePrice * tier.multiplier);
                    return (
                      <div key={serviceId} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="text-gray-700 dark:text-gray-300">{service.name}</span>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {formatPrice(servicePrice)}
                        </span>
                      </div>
                    );
                  })}
                  <div className="flex justify-between items-center py-2 border-t-2 border-gray-300 dark:border-gray-600">
                    <span className="font-bold text-gray-900 dark:text-white">Total</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            {selectedTier && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {pricingTiers.find(t => t.id === selectedTier)?.name} Tier Features
                </h3>
                <ul className="space-y-2">
                  {pricingTiers.find(t => t.id === selectedTier)?.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started with This Quote
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator; 