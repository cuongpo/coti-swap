'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Search } from 'lucide-react'

// Mock token data - this can be passed as a prop
const tokens = [
  { name: 'COTI', symbol: 'COTI' },
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Tether', symbol: 'USDT' },
  { name: 'USD Coin', symbol: 'USDC' },
  { name: 'Wrapped BTC', symbol: 'WBTC' },
  { name: 'Chainlink', symbol: 'LINK' },
]

interface TokenModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectToken: (token: { name: string; symbol: string }) => void
}

export default function TokenModal({ isOpen, onClose, onSelectToken }: TokenModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md m-4 text-white"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h3 className="font-bold">Select a token</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search name or paste address"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-coti-blue"
                />
              </div>
            </div>

            {/* Token List */}
            <div className="h-80 overflow-y-auto p-4 pt-0">
              <ul className="space-y-2">
                {tokens.map((token) => (
                  <li key={token.symbol}>
                    <button
                      onClick={() => {
                        onSelectToken(token)
                        onClose()
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-left">{token.name}</p>
                        <p className="text-sm text-gray-400 text-left">{token.symbol}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


