import { useState, useEffect } from 'react'
import { Save, Lock } from 'lucide-react'

const SETTINGS_KEY = 'shopwith_b_settings'

const defaults = {
  handle: '',
  baseUrl: 'https://shopmy.us/collections/',
  igHandle: '',
  displayName: 'Shop with B',
}

export default function Settings() {
  const [form, setForm] = useState(defaults)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(SETTINGS_KEY)
    if (stored) setForm({ ...defaults, ...JSON.parse(stored) })
  }, [])

  function handleSave(e) {
    e.preventDefault()
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(form))
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  function field(key, label, placeholder, type = 'text') {
    return (
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">{label}</label>
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
          placeholder={placeholder}
          className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>
    )
  }

  return (
    <div className="p-8 max-w-lg">
      <h1 className="font-serif text-3xl text-stone-800 mb-2">Settings</h1>
      <p className="text-stone-500 text-sm mb-8">Configure your ShopMy account details.</p>

      <div className="flex items-start gap-2 mb-6 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs">
        <Lock className="w-4 h-4 mt-0.5 shrink-0" />
        <span>All settings are stored in your browser's localStorage only — never sent anywhere or shared.</span>
      </div>

      {saved && (
        <div className="mb-6 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
          Settings saved!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-5 bg-white border border-stone-100 rounded-2xl p-6 shadow-sm">
        {field('displayName', 'Display Name', 'Shop with B')}
        {field('handle', 'ShopMy Handle / Username', 'e.g. shopwithb')}
        {field('baseUrl', 'ShopMy Affiliate Base URL', 'https://shopmy.us/collections/')}
        {field('igHandle', 'Instagram Handle', '@shopwithb')}

        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2.5 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors"
        >
          <Save className="w-4 h-4" /> Save Settings
        </button>
      </form>
    </div>
  )
}
