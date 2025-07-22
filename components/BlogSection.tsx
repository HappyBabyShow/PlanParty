'use client';

import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Birthday Party Themes for Kids in 2024',
    excerpt: 'Discover the most popular party themes that children love, from superheroes to unicorns, with budget-friendly decoration ideas.',
    category: 'Party Ideas',
    readTime: '5 min read',
    date: 'January 15, 2024',
    image: '🎭',
    gradient: 'bg-gradient-primary',
    tags: ['Themes', 'Birthday', 'Ideas']
  },
  {
    id: 2,
    title: 'Planning a Party in Lisbon: Local Vendor Guide',
    excerpt: 'Complete guide to the best party vendors in Lisbon, including caterers, entertainers, and venues with insider tips.',
    category: 'Local Guides',
    readTime: '8 min read',
    date: 'January 12, 2024',
    image: '🏛️',
    gradient: 'bg-gradient-secondary',
    tags: ['Lisbon', 'Vendors', 'Portugal']
  },
  {
    id: 3,
    title: 'Budget-Friendly Party Planning: €200 or Less',
    excerpt: 'Learn how to throw an amazing kids party on a tight budget with creative DIY ideas and smart vendor choices.',
    category: 'Budget Tips',
    readTime: '6 min read',
    date: 'January 10, 2024',
    image: '💰',
    gradient: 'bg-gradient-accent',
    tags: ['Budget', 'DIY', 'Tips']
  },
  {
    id: 4,
    title: 'Spanish Party Traditions: Celebrating Like Locals',
    excerpt: 'Explore traditional Spanish celebration customs and how to incorporate them into modern kids parties.',
    category: 'Cultural',
    readTime: '7 min read',
    date: 'January 8, 2024',
    image: '🇪🇸',
    gradient: 'bg-gradient-primary',
    tags: ['Spain', 'Traditions', 'Culture']
  },
  {
    id: 5,
    title: 'Outdoor vs Indoor Parties: Pros and Cons',
    excerpt: 'Weather considerations, venue options, and activity ideas for both outdoor and indoor celebrations.',
    category: 'Planning Tips',
    readTime: '4 min read',
    date: 'January 5, 2024',
    image: '🌳',
    gradient: 'bg-gradient-secondary',
    tags: ['Venues', 'Weather', 'Planning']
  },
  {
    id: 6,
    title: 'Safety First: Kids Party Safety Checklist',
    excerpt: 'Essential safety guidelines for children\'s parties, from food allergies to activity supervision.',
    category: 'Safety',
    readTime: '6 min read',
    date: 'January 3, 2024',
    image: '🛡️',
    gradient: 'bg-gradient-accent',
    tags: ['Safety', 'Guidelines', 'Parents']
  }
];

const categories = ['All', 'Party Ideas', 'Local Guides', 'Budget Tips', 'Cultural', 'Planning Tips', 'Safety'];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Party Planning{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog & Tips
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Expert advice, local insights, and creative ideas to make your child's party 
            unforgettable. Updated weekly with fresh content.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image/Icon header */}
              <div className={`h-48 ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-80">{post.image}</div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ClockIcon className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-primary font-medium"
                >
                  <span>Read More</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            📧 Never Miss a Party Tip!
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our weekly newsletter for the latest party planning tips, 
            vendor spotlights, and exclusive offers for Portugal and Spain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Subscribe Free
            </motion.button>
          </div>
          
          <p className="text-gray-500 text-sm">
            Join 2,000+ parents • Unsubscribe anytime • No spam, ever
          </p>
        </motion.div>

        {/* View all posts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            📚 View All Blog Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
