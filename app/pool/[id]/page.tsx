import Navbar from '@/components/Navbar'
import PoolDetails from '@/components/PoolDetails'

const mockPoolsData = [
  {
    id: 1,
    tokenA: { symbol: 'COTI', name: 'COTI' },
    tokenB: { symbol: 'ETH', name: 'Ethereum' },
    tvl: '$1,234,567',
    volume24h: '$456,789',
    fees24h: '$1,234',
    apr: '12.5%',
  },
  {
    id: 2,
    tokenA: { symbol: 'USDT', name: 'Tether' },
    tokenB: { symbol: 'USDC', name: 'USD Coin' },
    tvl: '$2,345,678',
    volume24h: '$789,012',
    fees24h: '$2,367',
    apr: '8.3%',
  },
  {
    id: 3,
    tokenA: { symbol: 'COTI', name: 'COTI' },
    tokenB: { symbol: 'USDT', name: 'Tether' },
    tvl: '$987,654',
    volume24h: '$234,567',
    fees24h: '$701',
    apr: '15.2%',
  }
]

export async function generateStaticParams() {
  return mockPoolsData.map((pool) => ({
    id: pool.id.toString(),
  }))
}

function getPool(id: string) {
    return mockPoolsData.find(pool => pool.id.toString() === id);
}

export default function PoolDetailsPage({ params }: { params: { id: string } }) {
  const pool = getPool(params.id);

  if (!pool) {
      return <div>Pool not found</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-coti-dark via-slate-900 to-coti-dark">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen pt-16">
        <PoolDetails pool={pool} />
      </div>
    </main>
  )
}

