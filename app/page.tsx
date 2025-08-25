'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coti-dark via-slate-900 to-coti-dark">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Stats />
      <Footer />
    </main>
  )
}
