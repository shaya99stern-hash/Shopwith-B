import { useState } from 'react'
import { outfits, CATEGORIES } from '../data/outfits'
import OutfitCard from '../components/OutfitCard'

export default function Lookbook() {
  const [activeCategory, setActiveCategory] = useState('All')
  const tabs = ['All', ...CATEGORIES]

  const filtered = activeCategory === 'All'
    ? outfits
    : outfits.filter((o) => o.category === activeCategory)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-stone-800">Lookbook</h1>
        <p className="text-stone-500 mt-1 text-sm">Modest outfits for the whole family · Spring 2026</p>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveCategory(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === tab
                ? 'bg-rose-600 text-white'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-rose-300 hover:text-rose-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  )
}
