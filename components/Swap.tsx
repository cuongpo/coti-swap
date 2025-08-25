'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Settings, ChevronDown } from 'lucide-react'
import TokenModal from './TokenModal'

// Mock token data
const tokens = [
  { name: 'COTI', symbol: 'COTI' },
  { name: 'Ethereum', symbol: 'ETH' },
  { name: 'Tether', symbol: 'USDT' },
  { name: 'USD Coin', symbol: 'USDC' },
]

export default function Swap() {
  const [fromToken, setFromToken] = useState(tokens[0])
  const [toToken, setToToken] = useState(tokens[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'from' | 'to'>('from')
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = () => {
    setIsConnected(true)
  }

  const openModal = (type: 'from' | 'to') => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const handleSelectToken = (token: { name: string; symbol: string }) => {
    if (modalType === 'from') {
      setFromToken(token)
    } else {
      setToToken(token)
    }
    setIsModalOpen(false)
  }

  // Placeholder for swap logic
  const handleAmountChange = (amount: string) => {
    setFromAmount(amount)
    if (amount) {
      setToAmount((parseFloat(amount) * 1234.56).toFixed(2))
    } else {
      setToAmount('')
    }
  }

  const handleSwapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);

    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
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
        <h2 className="text-xl font-bold text-white">Swap</h2>
        <button onClick={() => alert('Settings clicked!')} className="text-gray-400 hover:text-white">
          <Settings size={20} />
        </button>
      </div>

      {/* From Token Input */}
      <div className="bg-white/5 p-4 rounded-xl space-y-2">
        <div className="flex justify-between text-sm text-gray-400">
          <span>From</span>
          <span>Balance: 1,234.56</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            placeholder="0.0"
            value={fromAmount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="bg-transparent text-3xl font-bold text-white w-full outline-none"
          />
          <button onClick={() => openModal('from')} className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <span className="font-semibold">{fromToken.symbol}</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Swap Arrow */}
      <div className="flex justify-center">
        <button onClick={handleSwapTokens} className="p-2 bg-white/10 rounded-full border-4 border-coti-dark hover:rotate-180 transition-transform">
          <ArrowDown size={20} />
        </button>
      </div>

      {/* To Token Input */}
      <div className="bg-white/5 p-4 rounded-xl space-y-2">
        <div className="flex justify-between text-sm text-gray-400">
          <span>To</span>
          <span>Balance: 0.00</span>
        </div>
        <div className="flex justify-between items-center">
          <input
            type="number"
            placeholder="0.0"
            value={toAmount}
            readOnly
            className="bg-transparent text-3xl font-bold text-white w-full outline-none"
          />
          <button onClick={() => openModal('to')} className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <span className="font-semibold">{toToken.symbol}</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Swap Details */}
      <div className="text-sm text-gray-400 space-y-1 pt-2">
        <div className="flex justify-between">
          <span>Price</span>
          <span>1 {fromToken.symbol} = 1,234.56 {toToken.symbol}</span>
        </div>
        <div className="flex justify-between">
          <span>Slippage Tolerance</span>
          <span>0.5%</span>
        </div>
      </div>

      {/* CTA Button */}
      {isConnected ? (
        <button
          onClick={() => alert(`Swapping ${fromAmount} ${fromToken.symbol} for ${toAmount} ${toToken.symbol}`)}
          className="w-full bg-gradient-to-r from-coti-blue to-coti-purple py-4 rounded-xl text-lg font-bold text-white hover:shadow-lg transition-shadow"
        >
          Swap
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="w-full bg-gradient-to-r from-coti-blue to-coti-purple py-4 rounded-xl text-lg font-bold text-white hover:shadow-lg transition-shadow"
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
