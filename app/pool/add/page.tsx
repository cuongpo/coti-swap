'use client'

import Navbar from '@/components/Navbar'
import AddLiquidity from '@/components/AddLiquidity'

export default function AddLiquidityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coti-dark via-slate-900 to-coti-dark">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-16">
        <AddLiquidity />
      </div>
    </main>
  )
}

