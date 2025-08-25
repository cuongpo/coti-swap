'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Plus, Minus } from 'lucide-react'
import Link from 'next/link'

interface Pool {
  id: number;
  tokenA: { symbol: string; name: string };
  tokenB: { symbol: string; name: string };
  tvl: string;
  volume24h: string;
  fees24h: string;
  apr: string;
}

export default function PoolDetails({ pool }: { pool: Pool }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link href="/pool" passHref>
          <button className="text-gray-400 hover:text-white">
            <ArrowLeft size={24} />
          </button>
        </Link>
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 bg-gray-600 rounded-full border-2 border-slate-800"></div>
            <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-slate-800"></div>
          </div>
          <h2 className="text-2xl font-bold text-white">{pool.tokenA.symbol} / {pool.tokenB.symbol}</h2>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-sm text-gray-400">TVL</p>
          <p className="text-xl font-bold font-mono">{pool.tvl}</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-sm text-gray-400">Volume (24H)</p>
          <p className="text-xl font-bold font-mono">{pool.volume24h}</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-sm text-gray-400">Fees (24H)</p>
          <p className="text-xl font-bold font-mono">{pool.fees24h}</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg">
          <p className="text-sm text-gray-400">APR</p>
          <p className="text-xl font-bold font-mono text-coti-blue">{pool.apr}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4 pt-4">
        <Link href="/pool/add" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-coti-blue to-coti-purple px-8 py-3 rounded-full text-white font-semibold flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add Liquidity</span>
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Remove Liquidity clicked!')}
          className="bg-white/10 px-8 py-3 rounded-full text-white font-semibold flex items-center space-x-2"
        >
          <Minus size={20} />
          <span>Remove Liquidity</span>
        </motion.button>
      </div>
    </motion.div>
  )
}


