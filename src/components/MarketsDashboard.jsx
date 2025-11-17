import React from 'react'
import CollapsibleSection from './CollapsibleSection'
import MarketTable from './MarketTable'

const mockData = {
  chicago: [
    { symbol: 'ZC', name: 'Corn Futures', price: 474.25, change: -3.5, pct: -0.73 },
    { symbol: 'ZW', name: 'Wheat Futures', price: 573.75, change: 4.25, pct: 0.75 },
    { symbol: 'ZS', name: 'Soybean Futures', price: 1123.5, change: -6.0, pct: -0.53 },
  ],
  sp500: [
    { symbol: 'SPY', name: 'SPDR S&P 500', price: 510.34, change: 1.21, pct: 0.24 },
    { symbol: 'AAPL', name: 'Apple Inc.', price: 189.12, change: -0.84, pct: -0.44 },
    { symbol: 'MSFT', name: 'Microsoft Corp', price: 409.22, change: 2.31, pct: 0.57 },
  ],
  nasdaq: [
    { symbol: 'QQQ', name: 'Invesco QQQ', price: 433.87, change: 0.96, pct: 0.22 },
    { symbol: 'NVDA', name: 'NVIDIA Corp', price: 118.57, change: 3.41, pct: 2.96 },
    { symbol: 'AMZN', name: 'Amazon.com', price: 176.44, change: -1.02, pct: -0.58 },
  ],
}

export default function MarketsDashboard() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Markets Overview</h1>
      <p className="text-gray-600 mb-4">Collapsible tables showing different markets.</p>

      <CollapsibleSection title="Chicago Board of Trade (CBOT)" defaultOpen>
        <MarketTable rows={mockData.chicago} />
      </CollapsibleSection>

      <CollapsibleSection title="S&P 500"
      >
        <MarketTable rows={mockData.sp500} />
      </CollapsibleSection>

      <CollapsibleSection title="NASDAQ 100">
        <MarketTable rows={mockData.nasdaq} />
      </CollapsibleSection>
    </div>
  )
}
