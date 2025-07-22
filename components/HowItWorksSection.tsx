'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  CurrencyEuroIcon,
  CalendarDaysIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    title: 'Tell Us About Your Party',
    description: 'Fill out our smart questionnaire about your event preferences, budget, and requirements.',
    icon: ClipboardDocumentListIcon,
    gradient: 'bg-gradient-primary',
    details: [
      'Event type (birthday, christening, graduation)',
      'Child\'s age and interests',
      'Number of guests',
      'Budget range',
      'Preferred location',
      'Special requirements'
    ],
    example: 'Example: "Superhero birthday party for 5-year-old, 20 guests, €500 budget in Lisbon"'
  },
  {
    id: 2,
    title: 'Get AI Recommendations',
    description: 'Our AI analyzes your preferences and suggests perfect vendors, venues, and party packages.',
    icon: MagnifyingGlassIcon,
    gradient: 'bg-gradient-secondary',
    details: [
      'Curated vendor matches',
      'Venue recommendations',
      'Theme suggestions',
      'Entertainment options',
      'Catering choices',
      'Decoration ideas'
    ],
    example: 'AI suggests: Local superhero entertainer (€120), community center venue (€80), themed decorations (€50)'
  },
  {
    id: 3,
    title: 'Manage Your Budget',
    description: 'Track expenses in real-time and get alerts to stay within your budget.',
    icon: CurrencyEuroIcon,
    gradient: 'bg-gradient-accent',
    details: [
      'Real-time expense tracking',
      'Budget alerts and warnings',
      'Cost comparison tools',
      'Payment scheduling',
      'Savings suggestions',
      'Final cost breakdown'
    ],
    example: 'Budget tracker: Venue €80 + Entertainment €120 + Food €150 = €350 (€150 remaining)'
  },
  {
    id: 4,
    title: 'Follow Your Timeline',
    description: 'Get a personalized timeline with all tasks and deadlines to ensure nothing is forgotten.',
    icon: CalendarDaysIcon,
    gradient: 'bg-gradient-primary',
    details: [
      'Automated task scheduling',
      'Vendor confirmation reminders',
      'Shopping lists',
      'Setup timeline',
      'Day-of schedule',
      'Post-event follow-up'
    ],
    example: 'Timeline: Book venue (4 weeks before) → Confirm catering (2 weeks) → Send invitations (1 week)'
  },
  {
    id: 5,
    title: 'Celebrate Successfully',
    description: 'Enjoy your perfectly planned party while we handle the coordination and support.',
    icon: CheckCircleIcon,
    gradient: 'bg-gradient-secondary',
    details: [
      'Day-of coordination support',
      'Vendor communication',
      'Real-time updates',
      'Emergency assistance',
      'Photo sharing platform',
      'Post-event feedback'
    ],
    example: 'Party day: All vendors confirmed, timeline shared, support team available via chat'
  }
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              HAPPYBABYSHOW
            </span>
            {' '}Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to celebration in 5 simple steps. Our AI-powered platform 
            guides you through every stage of party planning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === step.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${step.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-primary">
                        Step {step.id}
                      </span>
                      {activeStep === step.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            <AnimatePresence mode="wait">
              {steps.map((step) => (
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 ${step.gradient} rounded-2xl flex items-center justify-center animate-pulse-glow`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-primary">
                          Step {step.id} of 5
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-400">
                      <h5 className="font-semibold text-blue-900 mb-2">
                        Real Example:
                      </h5>
                      <p className="text-blue-800 text-sm italic">
                        {step.example}
                      </p>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Planning? 🎉
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of families who have created unforgettable memories with HAPPYBABYSHOW. 
              Start your free party planning journey today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
            >
              🚀 Start Planning Your Party
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
