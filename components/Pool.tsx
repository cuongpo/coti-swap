'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, TrendingUp } from 'lucide-react'
import Link from 'next/link'

// Mock pool data
const mockPools = [
  {
    id: 1,
    tokenA: { symbol: 'COTI', name: 'COTI' },
    tokenB: { symbol: 'ETH', name: 'Ethereum' },
    tvl: '$1,234,567',
    volume24h: '$456,789',
    fees24h: '$1,234',
    apr: '12.5%',
    userPool: true
  },
  {
    id: 2,
    tokenA: { symbol: 'USDT', name: 'Tether' },
    tokenB: { symbol: 'USDC', name: 'USD Coin' },
    tvl: '$2,345,678',
    volume24h: '$789,012',
    fees24h: '$2,367',
    apr: '8.3%',
    userPool: false
  },
  {
    id: 3,
    tokenA: { symbol: 'COTI', name: 'COTI' },
    tokenB: { symbol: 'USDT', name: 'Tether' },
    tvl: '$987,654',
    volume24h: '$234,567',
    fees24h: '$701',
    apr: '15.2%',
    userPool: true
  }
]

export default function Pool() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showMyPools, setShowMyPools] = useState(false)

  const filteredPools = mockPools.filter(pool => {
    const searchMatch = searchTerm === '' ||
      pool.tokenA.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pool.tokenB.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pool.tokenA.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pool.tokenB.name.toLowerCase().includes(searchTerm.toLowerCase());

    const poolTypeMatch = !showMyPools || pool.userPool;

    return searchMatch && poolTypeMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Pools</h2>
        <Link href="/pool/add" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-coti-blue to-coti-purple px-6 py-2 rounded-full text-white font-medium flex items-center space-x-2 hover:shadow-lg transition-shadow"
          >
            <Plus size={18} />
            <span>New Position</span>
          </motion.button>
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search pools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-coti-blue"
          />
        </div>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
          <button
            onClick={() => setShowMyPools(false)}
            className={`px-4 py-1 rounded-md text-sm font-medium ${!showMyPools ? 'bg-white/10 text-white' : 'text-gray-400'}`}
          >
            All Pools
          </button>
          <button
            onClick={() => setShowMyPools(true)}
            className={`px-4 py-1 rounded-md text-sm font-medium ${showMyPools ? 'bg-white/10 text-white' : 'text-gray-400'}`}
          >
            My Pools
          </button>
        </div>
      </div>

      {/* Pool List Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-4 text-sm font-semibold text-gray-400">
        <div className="col-span-4">Pool</div>
        <div className="col-span-2 text-right">TVL</div>
        <div className="col-span-2 text-right">Volume 24H</div>
        <div className="col-span-2 text-right">Fees 24H</div>
        <div className="col-span-2 text-right">APR</div>
      </div>

      {/* Pool List */}
      <div className="space-y-3 h-96 overflow-y-auto pr-2">
        {filteredPools.map((pool) => (
          <Link href={`/pool/${pool.id}`} key={pool.id} passHref>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              className="grid grid-cols-12 gap-4 items-center p-4 rounded-lg cursor-pointer bg-white/5 border border-transparent hover:border-white/10 transition-colors"
            >
              <div className="col-span-12 md:col-span-4 flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-slate-800"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-slate-800"></div>
                </div>
                <span className="font-semibold">{pool.tokenA.symbol} / {pool.tokenB.symbol}</span>
              </div>
              <div className="col-span-6 md:col-span-2 text-left md:text-right font-mono">{pool.tvl}</div>
              <div className="col-span-6 md:col-span-2 text-left md:text-right font-mono">{pool.volume24h}</div>
              <div className="col-span-6 md:col-span-2 text-left md:text-right font-mono">{pool.fees24h}</div>
              <div className="col-span-6 md:col-span-2 text-left md:text-right font-mono text-coti-blue flex items-center justify-end gap-1">
                {pool.apr} <TrendingUp size={16} />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

