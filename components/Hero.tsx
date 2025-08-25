'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const handleScroll = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coti-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-coti-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-coti-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm"
          >
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            <span>Next-Generation DeFi Platform</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            The Future of{' '}
            <span className="bg-gradient-to-r from-coti-blue via-coti-purple to-coti-green bg-clip-text text-transparent">
              Decentralized Finance
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            COTI provides a next-generation platform for decentralized finance, 
            offering unparalleled stability, scalability, and security for the modern financial ecosystem.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              <span>Secure</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Fast</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
              <span>Scalable</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/swap" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-coti-blue to-coti-purple px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-shadow"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScroll}
              className="border border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
