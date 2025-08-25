'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, TrendingUp, Lock, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade encryption and multi-layer security protocols protect your assets 24/7.',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process thousands of transactions per second with near-zero latency.',
    color: 'text-yellow-400'
  },
  {
    icon: TrendingUp,
    title: 'High Yield',
    description: 'Earn competitive returns through our optimized staking and liquidity protocols.',
    color: 'text-blue-400'
  },
  {
    icon: Lock,
    title: 'Self-Custody',
    description: 'Maintain full control of your assets with non-custodial wallet integration.',
    color: 'text-purple-400'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Governed by the community through decentralized autonomous organization (DAO).',
    color: 'text-pink-400'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Access DeFi services from anywhere in the world, 24/7, without restrictions.',
    color: 'text-cyan-400'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
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
            Why Choose{' '}
            <span className="bg-gradient-to-r from-coti-blue to-coti-purple bg-clip-text text-transparent">
              COTI DeFi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of decentralized finance with features designed for the modern investor.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
