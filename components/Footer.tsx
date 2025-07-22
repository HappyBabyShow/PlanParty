'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How it Works', href: '#' },
    { name: 'API Documentation', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Support', href: '#' },
    { name: 'Status Page', href: '#' },
    { name: 'Community', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold">HAPPYBABYSHOW</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Making children's party planning effortless and joyful across Portugal and Spain. 
                Join thousands of families creating unforgettable memories.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>hello@happybabyshow.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <PhoneIcon className="w-5 h-5" />
                  <span>+351 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPinIcon className="w-5 h-5" />
                  <span>Lisbon, Portugal & Madrid, Spain</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400">
              Get party planning tips, vendor spotlights, and exclusive offers delivered to your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0"
            >
              <span>Made with</span>
              <HeartIcon className="w-5 h-5 text-red-500 animate-pulse" />
              <span>for families in Portugal & Spain</span>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            <p>&copy; 2024 HAPPYBABYSHOW. All rights reserved.</p>
            <p className="mt-2">
              Supporting families across Portugal 🇵🇹 and Spain 🇪🇸 in creating magical moments.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
