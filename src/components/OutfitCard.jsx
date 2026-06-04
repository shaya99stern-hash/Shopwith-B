import { useState } from 'react'
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { recordClick } from '../utils/tracking'

const categoryColors = {
  Women: 'bg-rose-100 text-rose-700',
  Girls: 'bg-pink-100 text-pink-700',
  Boys: 'bg-sky-100 text-sky-700',
  Babies: 'bg-lavender-100 text-purple-600',
  Husbands: 'bg-stone-100 text-stone-700',
}

export default function OutfitCard({ outfit }) {
  const [open, setOpen] = useState(false)

  function handleItemClick(item) {
    recordClick(outfit.name, item.name, item.brand)
  }

  const badgeClass = categoryColors[outfit.category] || 'bg-stone-100 text-stone-600'

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2 ${badgeClass}`}>
              {outfit.category}
            </span>
            <h3 className="font-serif text-lg text-stone-800">{outfit.name}</h3>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mt-1 p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          >
            {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <ul className="mt-3 space-y-1.5">
          {outfit.items.map((item) => (
            <li key={item.name} className="flex items-center justify-between text-sm">
              <div>
                <span className="text-stone-700 font-medium">{item.name}</span>
                <span className="text-stone-400 ml-1.5">· {item.brand}</span>
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleItemClick(item)}
                className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-medium ml-2 shrink-0"
              >
                Shop <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="border-t border-rose-50 bg-rose-50/40 px-5 py-4">
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Item Details</p>
          <div className="space-y-3">
            {outfit.items.map((item) => (
              <div key={item.name} className="text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-stone-700">{item.name}</span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleItemClick(item)}
                    className="text-xs text-rose-600 hover:underline flex items-center gap-1"
                  >
                    {item.brand} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                {item.notes && (
                  <p className="text-xs text-stone-400 mt-0.5">{item.notes}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
