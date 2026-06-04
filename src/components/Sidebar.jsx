import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Building2,
  Handshake,
  CheckSquare,
  Settings,
  Zap,
} from 'lucide-react'

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/contacts', icon: Users, label: 'Contacts' },
  { to: '/companies', icon: Building2, label: 'Companies' },
  { to: '/deals', icon: Handshake, label: 'Deals' },
  { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-[#1e1b4b] text-white shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-indigo-800">
        <div className="flex items-center justify-center w-9 h-9 bg-indigo-500 rounded-lg">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">ShopWith CRM</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'
              }`
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User profile */}
      <div className="px-4 py-4 border-t border-indigo-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 bg-indigo-500 rounded-full text-sm font-semibold">
            SA
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">Shaya Admin</p>
            <p className="text-xs text-indigo-300 truncate">shaya99stern@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
