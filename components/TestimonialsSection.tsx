'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    id: 1,
    name: 'Maria Santos',
    location: 'Lisbon, Portugal',
    avatar: '👩‍💼',
    rating: 5,
    event: 'Birthday Party for Sofia (6 years)',
    quote: 'HappyBaby made planning my daughter\'s superhero party so easy! The AI recommendations were spot-on, and we found amazing local vendors. The budget tracker helped us stay within €400, and everything was perfect!',
    highlight: 'Saved €200 and 15 hours of planning',
    flag: '🇵🇹'
  },
  {
    id: 2,
    name: 'Carlos Rodriguez',
    location: 'Madrid, Spain',
    avatar: '👨‍👩‍👧‍👦',
    rating: 5,
    event: 'Graduation Celebration for Miguel (12 years)',
    quote: 'As a busy father, I was stressed about organizing Miguel\'s graduation party. The platform\'s timeline feature and vendor marketplace made everything seamless. The entertainer we found was fantastic!',
    highlight: 'Organized in just 3 days',
    flag: '🇪🇸'
  },
  {
    id: 3,
    name: 'Ana Pereira',
    location: 'Porto, Portugal',
    avatar: '👩‍🦱',
    rating: 5,
    event: 'Christening Party for João (1 year)',
    quote: 'The multilingual support was perfect for our international family. We planned everything in Portuguese, and the local vendor recommendations in Porto were excellent. Highly recommend!',
    highlight: 'Perfect for international families',
    flag: '🇵🇹'
  },
  {
    id: 4,
    name: 'Elena Volkov',
    location: 'Barcelona, Spain',
    avatar: '👩‍🦰',
    rating: 5,
    event: 'Princess Birthday Party for Katya (4 years)',
    quote: 'Being new to Spain, finding trusted vendors was challenging. HappyBaby connected us with verified local suppliers, and the Russian language support made everything comfortable for our family.',
    highlight: 'Great for expat families',
    flag: '🇪🇸'
  },
  {
    id: 5,
    name: 'João Silva',
    location: 'Braga, Portugal',
    avatar: '👨‍💻',
    rating: 5,
    event: 'Twin Birthday Party for Lucas & Laura (8 years)',
    quote: 'Planning a party for twins seemed impossible until I found HappyBaby. The AI suggested creative dual-theme ideas, and the budget planner helped manage costs for double everything!',
    highlight: 'Perfect for complex events',
    flag: '🇵🇹'
  },
  {
    id: 6,
    name: 'Isabella Garcia',
    location: 'Valencia, Spain',
    avatar: '👩‍🎨',
    rating: 5,
    event: 'Art-themed Party for Carmen (7 years)',
    quote: 'The creativity suggestions were amazing! We found a local art instructor who taught painting to all the kids. The timeline feature ensured we had all supplies ready. Carmen loved every minute!',
    highlight: 'Unique creative themes',
    flag: '🇪🇸'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Families{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join over 500 happy families across Portugal and Spain who have created 
            unforgettable memories with HappyBaby.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-gray-600 flex items-center justify-center">
                <span className="mr-1">Average Rating</span>
                <StarIcon className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">€300</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12h</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                      <span>{testimonial.name}</span>
                      <span className="text-lg">{testimonial.flag}</span>
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Event Type */}
              <div className="bg-gradient-primary/10 rounded-lg px-3 py-2 mb-4">
                <p className="text-sm font-medium text-primary">
                  {testimonial.event}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-green-800">
                    {testimonial.highlight}
                  </span>
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
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Happy Families? 🎊
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start planning your perfect party today and create memories that will last a lifetime. 
              Our AI-powered platform makes it easy, affordable, and fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
              >
                🎉 Start Planning Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                📞 Talk to Our Team
              </motion.button>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              No credit card required • Free forever plan available • 30-day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
