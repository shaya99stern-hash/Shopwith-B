import { useState } from 'react'
import { User, Bell, Puzzle, Save, Mail, Phone, Globe } from 'lucide-react'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'integrations', label: 'Integrations', icon: Puzzle },
]

const integrations = [
  { name: 'Slack', description: 'Send deal and task notifications to Slack channels.', connected: true, logo: '💬' },
  { name: 'Google Workspace', description: 'Sync contacts and calendar events from Google.', connected: true, logo: '🔵' },
  { name: 'HubSpot', description: 'Bi-directional sync with HubSpot CRM data.', connected: false, logo: '🟠' },
  { name: 'Salesforce', description: 'Import and export contacts and opportunities.', connected: false, logo: '☁️' },
  { name: 'Zapier', description: 'Automate workflows with 5,000+ app integrations.', connected: false, logo: '⚡' },
  { name: 'Stripe', description: 'Link deals to payment data and invoices.', connected: false, logo: '💳' },
]

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="max-w-3xl space-y-6">
      {/* Tab bar */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === id
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Profile tab */}
      {activeTab === 'profile' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">Profile Information</h2>
            <p className="text-sm text-gray-500">Update your personal details and contact info.</p>
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white text-xl font-bold">
              SA
            </div>
            <div>
              <button className="text-sm font-medium text-indigo-600 hover:underline">Change photo</button>
              <p className="text-xs text-gray-400 mt-0.5">JPG, PNG or GIF · max 2 MB</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input defaultValue="Shaya" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input defaultValue="Admin" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> Email</label>
              <input defaultValue="shaya99stern@gmail.com" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> Phone</label>
              <input defaultValue="+1 (555) 000-1234" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Time Zone</label>
              <select className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                <option>America/New_York (UTC-5)</option>
                <option>America/Chicago (UTC-6)</option>
                <option>America/Los_Angeles (UTC-8)</option>
                <option>Europe/London (UTC+0)</option>
              </select>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Notifications tab */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">Notification Preferences</h2>
            <p className="text-sm text-gray-500">Choose what you get notified about and how.</p>
          </div>

          {[
            { label: 'New deal assigned to me', email: true, push: true },
            { label: 'Task due today', email: true, push: true },
            { label: 'Contact activity updates', email: false, push: true },
            { label: 'Weekly pipeline summary', email: true, push: false },
            { label: 'Team mentions', email: true, push: true },
            { label: 'Integration sync errors', email: true, push: false },
          ].map((n, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <span className="text-sm text-gray-800">{n.label}</span>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" defaultChecked={n.email} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  Email
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                  <input type="checkbox" defaultChecked={n.push} className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  Push
                </label>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              <Save className="w-4 h-4" />
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Integrations tab */}
      {activeTab === 'integrations' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-1">Integrations</h2>
            <p className="text-sm text-gray-500">Connect ShopWith CRM with your favourite tools.</p>
          </div>

          <div className="grid gap-3">
            {integrations.map((intg) => (
              <div key={intg.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-indigo-200 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl w-10 text-center">{intg.logo}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{intg.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{intg.description}</p>
                  </div>
                </div>
                <button
                  className={`text-sm font-medium px-4 py-1.5 rounded-lg transition ${
                    intg.connected
                      ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {intg.connected ? 'Connected' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
