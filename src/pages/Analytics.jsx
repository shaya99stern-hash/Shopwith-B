import { useState } from 'react'
import { getClickSummary, clearClicks } from '../utils/tracking'
import { Trash2, TrendingUp } from 'lucide-react'

export default function Analytics() {
  const [summary, setSummary] = useState(() => getClickSummary())

  function handleClear() {
    if (window.confirm('Clear all click data?')) {
      clearClicks()
      setSummary([])
    }
  }

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-stone-800">Analytics</h1>
          <p className="text-stone-500 text-sm mt-1">Track which items get the most clicks.</p>
        </div>
        {summary.length > 0 && (
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Clear data
          </button>
        )}
      </div>

      {summary.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-stone-400">
          <TrendingUp className="w-12 h-12 mb-4 opacity-30" />
          <p className="text-sm">No clicks recorded yet. Start shopping the Lookbook!</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 text-xs text-stone-500 uppercase tracking-wide">
                <th className="text-left px-5 py-3 font-medium">Item</th>
                <th className="text-left px-5 py-3 font-medium">Brand</th>
                <th className="text-left px-5 py-3 font-medium">Outfit</th>
                <th className="text-center px-5 py-3 font-medium">Clicks</th>
                <th className="text-left px-5 py-3 font-medium">Last Clicked</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {summary.map((row, i) => (
                <tr key={i} className="hover:bg-rose-50/30 transition-colors">
                  <td className="px-5 py-3 font-medium text-stone-800">{row.itemName}</td>
                  <td className="px-5 py-3 text-stone-500">{row.brand}</td>
                  <td className="px-5 py-3 text-stone-500">{row.outfitName}</td>
                  <td className="px-5 py-3 text-center">
                    <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {row.count}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-stone-400 text-xs">{formatDate(row.lastClicked)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
