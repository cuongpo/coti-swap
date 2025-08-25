'use client'

import { motion } from 'framer-motion'
import { DollarSign, Users, PieChart, BarChart } from 'lucide-react'

const stats = [
  {
    icon: DollarSign,
    value: '$1.2B',
    label: 'Total Value Locked',
    color: 'text-green-400'
  },
  {
    icon: Users,
    value: '150K+',
    label: 'Active Users',
    color: 'text-blue-400'
  },
  {
    icon: PieChart,
    value: '25%',
    label: 'Avg. APY',
    color: 'text-purple-400'
  },
  {
    icon: BarChart,
    value: '$5B',
    label: '24h Trading Volume',
    color: 'text-yellow-400'
  }
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Platform{' '}
            <span className="bg-gradient-to-r from-coti-blue to-coti-purple bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track our growth and performance with real-time, transparent data.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-white">
                {stat.value}
              </h3>
              <p className="text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
