'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Wallet } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = () => {
    setIsConnected(true)
    setWalletAddress('0x123...AbCdE')
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" passHref>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-coti-blue to-coti-purple rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-white">COTI</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/swap" className="text-gray-300 hover:text-white transition-colors">
              Swap
            </Link>
            <Link href="/pool" className="text-gray-300 hover:text-white transition-colors">
              Pool
            </Link>
            {isConnected ? (
              <div className="bg-white/10 px-4 py-2 rounded-full text-white font-mono text-sm">
                {walletAddress}
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={connectWallet}
                className="bg-gradient-to-r from-coti-blue to-coti-purple px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2 hover:shadow-lg transition-shadow"
              >
                <Wallet size={18} />
                <span>Connect Wallet</span>
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <Link href="/swap" className="block text-gray-300 hover:text-white transition-colors">
              Swap
            </Link>
            <Link href="/pool" className="block text-gray-300 hover:text-white transition-colors">
              Pool
            </Link>
            {isConnected ? (
              <div className="bg-white/10 px-4 py-2 rounded-full text-white font-mono text-sm text-center">
                {walletAddress}
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="w-full bg-gradient-to-r from-coti-blue to-coti-purple px-6 py-2 rounded-full text-white font-medium flex items-center justify-center space-x-2"
              >
                <Wallet size={18} />
                <span>Connect Wallet</span>
              </button>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
