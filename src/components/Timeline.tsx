import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Users, TrendingUp, Rocket, Star, X } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  category: 'milestone' | 'achievement' | 'growth' | 'launch';
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2019',
    title: 'Company Founded',
    description: 'TechVision was established with a vision to transform digital experiences.',
    category: 'launch',
    icon: Rocket,
    details: [
      'Started with 3 team members',
      'First office in downtown',
      'Launched initial website'
    ]
  },
  {
    id: 2,
    year: '2020',
    title: 'First Major Project',
    description: 'Successfully delivered our first enterprise-level web application.',
    category: 'milestone',
    icon: Award,
    details: [
      'E-commerce platform for retail client',
      '500% increase in online sales',
      'Established development processes'
    ]
  },
  {
    id: 3,
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to 15 talented developers and designers.',
    category: 'growth',
    icon: Users,
    details: [
      'Hired 12 new team members',
      'Opened second office location',
      'Implemented agile methodologies'
    ]
  },
  {
    id: 4,
    year: '2022',
    title: 'Award Recognition',
    description: 'Received multiple industry awards for excellence in web development.',
    category: 'achievement',
    icon: Star,
    details: [
      'Best Web Development Agency 2022',
      'Excellence in UI/UX Design',
      'Client Satisfaction Award'
    ]
  },
  {
    id: 5,
    year: '2023',
    title: 'International Expansion',
    description: 'Expanded services to international markets and clients.',
    category: 'growth',
    icon: TrendingUp,
    details: [
      'Served clients in 15+ countries',
      'Opened international office',
      'Launched mobile app division'
    ]
  },
  {
    id: 6,
    year: '2024',
    title: 'AI Integration',
    description: 'Launched AI-powered development tools and services.',
    category: 'milestone',
    icon: Rocket,
    details: [
      'AI-powered development platform',
      'Automated testing solutions',
      'Machine learning integration services'
    ]
  }
];

const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'launch':
        return 'from-blue-500 to-blue-600';
      case 'milestone':
        return 'from-purple-500 to-purple-600';
      case 'achievement':
        return 'from-yellow-500 to-yellow-600';
      case 'growth':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to industry leadership. Explore the key milestones that shaped our company's success.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Event Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700`}
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Year Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getCategoryColor(event.category)} mb-4`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>

                  {/* Category Icon */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCategoryColor(event.category)} flex items-center justify-center`}>
                    <event.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Details Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${getCategoryColor(selectedEvent.category)} flex items-center justify-center`}>
                        <selectedEvent.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedEvent.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedEvent.year}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {selectedEvent.description}
                  </p>

                  {/* Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedEvent.details.map((detail, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "5+", label: "Years Experience", icon: Calendar },
            { number: "200+", label: "Projects Completed", icon: Award },
            { number: "50+", label: "Team Members", icon: Users },
            { number: "15+", label: "Countries Served", icon: TrendingUp }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 
