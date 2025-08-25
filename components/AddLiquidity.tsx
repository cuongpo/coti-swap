'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings, ChevronDown, Plus, ArrowLeft } from 'lucide-react'
import TokenModal from './TokenModal'
import Link from 'next/link'

// Mock token data
const tokens = [
  { name: 'COTI', symbol: 'COTI' },
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Tether', symbol: 'USDT' },
  { name: 'USD Coin', symbol: 'USDC' },
]

export default function AddLiquidity() {
  const [tokenA, setTokenA] = useState(tokens[0])
  const [tokenB, setTokenB] = useState(tokens[1])
  const [amountA, setAmountA] = useState('')
  const [amountB, setAmountB] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'A' | 'B'>('A')
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = () => {
    setIsConnected(true)
  }

  const openModal = (type: 'A' | 'B') => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const handleSelectToken = (token: { name: string; symbol: string }) => {
    if (modalType === 'A') {
      setTokenA(token)
    } else {
      setTokenB(token)
    }
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-4"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <Link href="/pool" passHref>
            <button className="text-gray-400 hover:text-white">
                <ArrowLeft size={20} />
            </button>
          </Link>
          <h2 className="text-xl font-bold text-white">Add Liquidity</h2>
          <button onClick={() => alert('Settings clicked!')} className="text-gray-400 hover:text-white">
            <Settings size={20} />
          </button>
        </div>

        {/* Token A Input */}
        <div className="bg-white/5 p-4 rounded-xl space-y-2">
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0.0"
              value={amountA}
              onChange={(e) => setAmountA(e.target.value)}
              className="bg-transparent text-3xl font-bold text-white w-full outline-none"
            />
            <button onClick={() => openModal('A')} className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              <span className="font-semibold">{tokenA.symbol}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Plus Icon */}
        <div className="flex justify-center">
          <Plus size={24} className="text-gray-400" />
        </div>

        {/* Token B Input */}
        <div className="bg-white/5 p-4 rounded-xl space-y-2">
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0.0"
              value={amountB}
              onChange={(e) => setAmountB(e.target.value)}
              className="bg-transparent text-3xl font-bold text-white w-full outline-none"
            />
            <button onClick={() => openModal('B')} className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20">
              <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
              <span className="font-semibold">{tokenB.symbol}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* CTA Button */}
        {isConnected ? (
          <button
            onClick={() => alert(`Adding liquidity with ${amountA} ${tokenA.symbol} and ${amountB} ${tokenB.symbol}`)}
            className="w-full bg-gradient-to-r from-coti-blue to-coti-purple py-4 rounded-xl text-lg font-bold text-white hover:shadow-lg transition-shadow mt-4"
          >
            Add Liquidity
          </button>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-coti-blue to-coti-purple py-4 rounded-xl text-lg font-bold text-white hover:shadow-lg transition-shadow mt-4"
          >
            Connect Wallet
          </button>
        )}
      </motion.div>

      <TokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectToken={handleSelectToken}
      />
    </>
  )
}


