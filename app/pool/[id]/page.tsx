'use client'

import Navbar from '@/components/Navbar'
import PoolDetails from '@/components/PoolDetails'

export default function PoolDetailsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-coti-dark via-slate-900 to-coti-dark">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-16">
        <PoolDetails />
      </div>
    </main>
  )
}

