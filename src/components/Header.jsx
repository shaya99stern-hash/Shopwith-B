import { useLocation } from 'react-router-dom'
import { Bell, Search, Plus } from 'lucide-react'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/contacts': 'Contacts',
  '/companies': 'Companies',
  '/deals': 'Deals',
  '/tasks': 'Tasks',
  '/settings': 'Settings',
}

export default function Header() {
  const { pathname } = useLocation()
  const title = pageTitles[pathname] ?? 'CRM'

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 shrink-0">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 text-sm bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white focus:border-indigo-300 w-56 transition"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="flex items-center justify-center w-9 h-9 bg-indigo-600 rounded-full text-sm font-semibold text-white cursor-pointer">
          SA
        </div>
      </div>
    </header>
  )
}
