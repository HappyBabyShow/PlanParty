'use client';

import { motion } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Perfect for simple celebrations',
    features: [
      'AI event recommendations',
      'Basic vendor search',
      'Simple budget tracker',
      'Email support',
      'Up to 2 events per month',
      'Standard templates'
    ],
    gradient: 'bg-gradient-to-br from-gray-100 to-gray-200',
    textColor: 'text-gray-900',
    buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary',
    popular: false
  },
  {
    name: 'Premium',
    price: '€10',
    period: '/month',
    description: 'For families who love to celebrate',
    features: [
      'Everything in Basic',
      'Priority vendor access',
      'Advanced budget analytics',
      'Real-time notifications',
      'Unlimited events',
      'Premium templates',
      'Timeline automation',
      'Multi-language support',
      'Phone support'
    ],
    gradient: 'bg-gradient-primary',
    textColor: 'text-white',
    buttonStyle: 'bg-white text-primary hover:bg-gray-50',
    popular: true
  },
  {
    name: 'Family Pro',
    price: '€25',
    period: '/month',
    description: 'For event planning professionals',
    features: [
      'Everything in Premium',
      'White-label solution',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      'Advanced analytics',
      'Custom branding',
      'Priority support',
      'Bulk vendor management'
    ],
    gradient: 'bg-gradient-secondary',
    textColor: 'text-white',
    buttonStyle: 'bg-white text-secondary hover:bg-gray-50',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and upgrade as your party planning needs grow. 
            All plans include our core AI recommendations and vendor marketplace.
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-gray-600">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition-transform"></div>
            </div>
            <span className="text-gray-600">
              Yearly 
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-3xl p-8 shadow-xl ${plan.gradient} ${
                plan.popular ? 'ring-4 ring-primary ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <StarIcon className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`text-center mb-8 ${plan.textColor}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-lg opacity-80">{plan.period}</span>}
                </div>
                <p className="opacity-80">{plan.description}</p>
              </div>

              <ul className={`space-y-4 mb-8 ${plan.textColor}`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                    <span className="text-sm opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all ${plan.buttonStyle}`}
              >
                {plan.price === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🎁 Special Launch Offer
            </h3>
            <p className="text-gray-600 mb-6">
              Get 3 months free when you upgrade to Premium or Family Pro during our launch period. 
              Plus, all plans include free access to our vendor network and 24/7 customer support.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
