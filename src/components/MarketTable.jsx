import React from 'react'

function formatNumber(n) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n)
}

export default function MarketTable({ rows = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="py-2 pr-4">Symbol</th>
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Price</th>
            <th className="py-2 pr-4">Change</th>
            <th className="py-2 pr-4">% Change</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => {
            const up = r.change >= 0
            return (
              <tr key={r.symbol + idx} className="border-b last:border-0">
                <td className="py-2 pr-4 font-medium text-gray-800">{r.symbol}</td>
                <td className="py-2 pr-4 text-gray-700">{r.name}</td>
                <td className="py-2 pr-4 tabular-nums">{formatNumber(r.price)}</td>
                <td className={`py-2 pr-4 tabular-nums ${up ? 'text-emerald-600' : 'text-rose-600'}`}>{up ? '+' : ''}{formatNumber(r.change)}</td>
                <td className={`py-2 pr-4 tabular-nums ${up ? 'text-emerald-600' : 'text-rose-600'}`}>{up ? '+' : ''}{formatNumber(r.pct)}%</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
