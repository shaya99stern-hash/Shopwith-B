import { useState } from 'react'
import { PlusCircle, Trash2, CheckCircle } from 'lucide-react'
import { CATEGORIES } from '../data/outfits'

const emptyItem = () => ({ name: '', brand: '', url: '', notes: '' })

export default function AddOutfit({ onAdd }) {
  const [outfitName, setOutfitName] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [items, setItems] = useState([emptyItem()])
  const [saved, setSaved] = useState(false)

  function updateItem(index, field, value) {
    setItems((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)))
  }

  function addItem() {
    setItems((prev) => [...prev, emptyItem()])
  }

  function removeItem(index) {
    setItems((prev) => prev.filter((_, i) => i !== index))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newOutfit = {
      id: `custom-${Date.now()}`,
      name: outfitName.trim(),
      category,
      items: items.filter((it) => it.name.trim()),
    }
    if (onAdd) onAdd(newOutfit)
    setOutfitName('')
    setCategory(CATEGORIES[0])
    setItems([emptyItem()])
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-stone-800">Add Outfit</h1>
        <p className="text-stone-500 mt-1 text-sm">Build a new look for your lookbook</p>
      </div>

      {saved && (
        <div className="mb-6 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm">
          <CheckCircle className="w-4 h-4 shrink-0" />
          Outfit saved! It will appear in your Lookbook this session.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">Outfit Name</label>
            <input
              required
              type="text"
              value={outfitName}
              onChange={(e) => setOutfitName(e.target.value)}
              placeholder="e.g. Spring Shabbos Look"
              className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-stone-700">Items</h2>
            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-1.5 text-xs font-medium text-rose-600 hover:text-rose-800 transition-colors"
            >
              <PlusCircle className="w-4 h-4" /> Add Item
            </button>
          </div>

          <div className="space-y-5">
            {items.map((item, index) => (
              <div key={index} className="relative border border-stone-100 rounded-xl p-4 bg-stone-50/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Item {index + 1}</span>
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="text-stone-300 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2">
                    <label className="block text-xs text-stone-500 mb-1">Item Name</label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => updateItem(index, 'name', e.target.value)}
                      placeholder="e.g. Sage Midi Skirt"
                      className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 mb-1">Brand</label>
                    <input
                      type="text"
                      value={item.brand}
                      onChange={(e) => updateItem(index, 'brand', e.target.value)}
                      placeholder="e.g. J.Crew"
                      className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 mb-1">ShopMy Affiliate URL</label>
                    <input
                      type="url"
                      value={item.url}
                      onChange={(e) => updateItem(index, 'url', e.target.value)}
                      placeholder="https://shopmy.us/..."
                      className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs text-stone-500 mb-1">Notes (optional)</label>
                    <input
                      type="text"
                      value={item.notes}
                      onChange={(e) => updateItem(index, 'notes', e.target.value)}
                      placeholder="e.g. Fully lined, below knee"
                      className="w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 rounded-xl text-sm transition-colors shadow-sm"
        >
          Save Outfit to Lookbook
        </button>
      </form>
    </div>
  )
}
