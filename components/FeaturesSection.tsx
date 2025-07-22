'use client';

import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  ShoppingBagIcon, 
  CurrencyEuroIcon, 
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: SparklesIcon,
    title: 'AI Event Recommendations',
    description: 'Get personalized party suggestions based on your child\'s age, interests, budget, and guest count. Our AI analyzes thousands of successful events to recommend the perfect celebration.',
    gradient: 'bg-gradient-primary',
    example: 'Example: "Superhero party for 5-year-old, €500 budget, 20 guests" → Complete party plan with venue, entertainment, and catering suggestions.'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Curated Vendor Marketplace',
    description: 'Connect with verified local vendors including caterers, entertainers, decorators, and photographers. All vendors are pre-screened and rated by other families.',
    gradient: 'bg-gradient-secondary',
    example: 'Find face painters in Barcelona under €100, Spanish-speaking entertainers in Lisbon, or themed decorators in Madrid.'
  },
  {
    icon: CurrencyEuroIcon,
    title: 'Smart Budget Planner',
    description: 'Set your budget and track expenses in real-time. Get alerts when approaching limits and suggestions for cost-effective alternatives.',
    gradient: 'bg-gradient-accent',
    example: 'Set €300 budget → Book venue (€150) + catering (€100) → System shows €50 remaining and suggests affordable entertainment options.'
  },
  {
    icon: ClockIcon,
    title: 'Event Timeline Creator',
    description: 'Automated timeline generation with key milestones, vendor confirmations, and preparation tasks. Never miss an important deadline.',
    gradient: 'bg-gradient-primary',
    example: 'Timeline includes: "Confirm caterer by May 1", "Send invitations by May 10", "Final headcount by May 15".'
  },
  {
    icon: MapPinIcon,
    title: 'Local Market Focus',
    description: 'Specialized for Portugal and Spain with local payment methods (MBWAY, Bizum), regional vendors, and cultural considerations.',
    gradient: 'bg-gradient-secondary',
    example: 'Automatic geolocation shows Lisbon venues for Portuguese users, Madrid vendors for Spanish users.'
  },
  {
    icon: UserGroupIcon,
    title: 'Multi-Language Support',
    description: 'Available in English, Portuguese, Spanish, Russian, and Ukrainian with automatic language detection.',
    gradient: 'bg-gradient-accent',
    example: 'Browser detects location and language, automatically showing content in Portuguese for users in Porto.'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Real-Time Updates',
    description: 'Get instant notifications about vendor confirmations, booking changes, and important reminders via WebSocket technology.',
    gradient: 'bg-gradient-primary',
    example: 'Instant notification when your chosen entertainer confirms availability or when a vendor offers a last-minute discount.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Trusted',
    description: 'Secure authentication, encrypted payments, and verified vendor profiles ensure your family\'s safety and privacy.',
    gradient: 'bg-gradient-secondary',
    example: 'All vendors undergo background checks, payments are processed securely through Stripe, and personal data is encrypted.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect Parties
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines AI technology with local expertise 
            to make party planning effortless and enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-14 h-14 ${feature.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 animate-float`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-sm text-gray-700 italic">
                      {feature.example}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
          >
            🚀 Try All Features Free
          </motion.button>
          <p className="text-gray-500 mt-4">No credit card required • Start planning in 2 minutes</p>
        </motion.div>
      </div>
    </section>
  );
}
