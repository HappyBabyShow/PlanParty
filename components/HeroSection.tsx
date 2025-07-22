'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, HeartIcon, GiftIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-float"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-accent rounded-full opacity-30 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-primary rounded-full opacity-15 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow"
            >
              <SparklesIcon className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HappyBaby
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">
              🎉 Perfect Parties Made Easy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered event planning platform for unforgettable children's celebrations 
            in Portugal and Spain. From budget planning to vendor booking - we've got you covered!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
          >
            🎉 Start Planning Now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            📹 Watch Demo
          </motion.button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 animate-float">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Recommendations</h3>
            <p className="text-gray-600 text-center">Get personalized party suggestions based on your preferences and budget</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Vendors</h3>
            <p className="text-gray-600 text-center">Connect with verified local vendors in Portugal and Spain</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '1s' }}>
              <GiftIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Budget Control</h3>
            <p className="text-gray-600 text-center">Track expenses and stay within budget with our smart planning tools</p>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Trusted by families across Portugal and Spain</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">🇵🇹</div>
            <div className="text-2xl">🇪🇸</div>
            <div className="text-sm text-gray-400">500+ Happy Families</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
