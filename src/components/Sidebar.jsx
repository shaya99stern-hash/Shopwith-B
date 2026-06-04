import { NavLink } from 'react-router-dom'
import { BookOpen, PlusCircle, Settings, BarChart2 } from 'lucide-react'

const navItems = [
  { to: '/lookbook', icon: BookOpen, label: 'Lookbook' },
  { to: '/add', icon: PlusCircle, label: 'Add Outfit' },
  { to: '/analytics', icon: BarChart2, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 bg-white border-r border-rose-100 shrink-0">
      <div className="px-6 py-6 border-b border-rose-100">
        <p className="font-serif text-2xl text-rose-700 tracking-wide">Shop with B</p>
        <p className="text-xs text-rose-400 mt-0.5">Modest Family Looks</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-rose-100 text-rose-700'
                  : 'text-stone-500 hover:bg-rose-50 hover:text-rose-600'
              }`
            }
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
