'use client'

import Navbar from '@/components/Navbar'
import Pool from '@/components/Pool'

export default function PoolPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coti-dark via-slate-900 to-coti-dark">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-16">
        <Pool />
      </div>
    </main>
  )
}

