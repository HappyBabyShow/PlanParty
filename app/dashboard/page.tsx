'use client';

import { motion } from 'framer-motion';
import { 
  CalendarDaysIcon,
  CurrencyEuroIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const events = [
  {
    id: 1,
    name: 'Sofia\'s 6th Birthday',
    date: '2024-02-15',
    status: 'planning',
    budget: 400,
    spent: 280,
    guests: 20,
    progress: 70,
    tasks: {
      completed: 7,
      total: 10
    }
  },
  {
    id: 2,
    name: 'Miguel\'s Graduation',
    date: '2024-03-20',
    status: 'confirmed',
    budget: 600,
    spent: 580,
    guests: 35,
    progress: 95,
    tasks: {
      completed: 9,
      total: 10
    }
  },
  {
    id: 3,
    name: 'Twin Birthday Party',
    date: '2024-04-10',
    status: 'draft',
    budget: 800,
    spent: 0,
    guests: 40,
    progress: 15,
    tasks: {
      completed: 2,
      total: 12
    }
  }
];

const upcomingTasks = [
  { id: 1, task: 'Confirm caterer for Sofia\'s party', due: '2024-01-25', priority: 'high' },
  { id: 2, task: 'Send invitations for Miguel\'s graduation', due: '2024-01-28', priority: 'medium' },
  { id: 3, task: 'Book entertainment for twin party', due: '2024-02-01', priority: 'low' },
  { id: 4, task: 'Order decorations for Sofia\'s party', due: '2024-02-05', priority: 'medium' }
];

const recentActivity = [
  { id: 1, action: 'Booked venue for Sofia\'s party', time: '2 hours ago', type: 'booking' },
  { id: 2, action: 'Received quote from Magic Entertainment', time: '5 hours ago', type: 'quote' },
  { id: 3, action: 'Updated budget for Miguel\'s graduation', time: '1 day ago', type: 'budget' },
  { id: 4, action: 'Added new vendor to favorites', time: '2 days ago', type: 'vendor' }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Maria! 👋</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 animate-pulse-glow"
            >
              <PlusIcon className="w-5 h-5" />
              <span>New Event</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <CalendarDaysIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-gray-600 text-sm">Active Events</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <CurrencyEuroIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">€860</p>
                <p className="text-gray-600 text-sm">Total Spent</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">95</p>
                <p className="text-gray-600 text-sm">Total Guests</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">€340</p>
                <p className="text-gray-600 text-sm">Money Saved</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Events</h2>
              
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.name}</h3>
                        <p className="text-gray-600 text-sm flex items-center space-x-1">
                          <CalendarDaysIcon className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        event.status === 'planning' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">€{event.spent}</p>
                        <p className="text-xs text-gray-600">of €{event.budget}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">{event.guests}</p>
                        <p className="text-xs text-gray-600">guests</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-gray-900">{event.tasks.completed}/{event.tasks.total}</p>
                        <p className="text-xs text-gray-600">tasks</p>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{event.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${event.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upcoming Tasks</h3>
              
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      task.priority === 'high' ? 'bg-red-400' :
                      task.priority === 'medium' ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{task.task}</p>
                      <p className="text-xs text-gray-600 flex items-center space-x-1">
                        <ClockIcon className="w-3 h-3" />
                        <span>Due {task.due}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                      activity.type === 'booking' ? 'bg-green-100 text-green-600' :
                      activity.type === 'quote' ? 'bg-blue-100 text-blue-600' :
                      activity.type === 'budget' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {activity.type === 'booking' ? '📅' :
                       activity.type === 'quote' ? '💰' :
                       activity.type === 'budget' ? '📊' : '⭐'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
