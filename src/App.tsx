import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import PricingCalculator from './components/PricingCalculator';
// import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-white">TechVision</h1>
          <p className="text-blue-200 mt-2">Loading amazing experiences...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
{/*           <Testimonials />
          <Blog /> */}
          <PricingCalculator />
{/*           <Timeline />
          <Contact /> */}
        </main>
        <Footer />
        <LiveChat />
      </div>
    </ThemeProvider>
  );
}

export default App; 
