import { Plus, Search, MoreHorizontal } from 'lucide-react'

const contacts = [
  { name: 'Alice Johnson', email: 'alice@acmecorp.com', phone: '+1 (555) 234-5678', company: 'Acme Corp', status: 'Active', lastContact: 'Jun 2, 2026' },
  { name: 'Bob Martinez', email: 'bob@stellardynamics.io', phone: '+1 (555) 876-5432', company: 'Stellar Dynamics', status: 'Lead', lastContact: 'May 30, 2026' },
  { name: 'Carol White', email: 'carol@nexustech.com', phone: '+1 (555) 345-6789', company: 'Nexus Tech', status: 'Active', lastContact: 'Jun 1, 2026' },
  { name: 'David Kim', email: 'd.kim@orbitventures.com', phone: '+1 (555) 654-3210', company: 'Orbit Ventures', status: 'Inactive', lastContact: 'Apr 15, 2026' },
  { name: 'Eva Torres', email: 'eva@brightpath.co', phone: '+1 (555) 987-6543', company: 'Bright Path', status: 'Active', lastContact: 'Jun 3, 2026' },
  { name: 'Frank Castle', email: 'frank@ironwall.net', phone: '+1 (555) 111-2222', company: 'Iron Wall Security', status: 'Lead', lastContact: 'May 28, 2026' },
  { name: 'Grace Lin', email: 'grace@quantumleap.ai', phone: '+1 (555) 333-4444', company: 'Quantum Leap AI', status: 'Active', lastContact: 'Jun 4, 2026' },
  { name: 'Henry Scott', email: 'h.scott@blueprintco.com', phone: '+1 (555) 555-6666', company: 'Blueprint Co.', status: 'Inactive', lastContact: 'Mar 20, 2026' },
]

const statusColors = {
  Active: 'bg-emerald-100 text-emerald-700',
  Lead: 'bg-blue-100 text-blue-700',
  Inactive: 'bg-gray-100 text-gray-500',
}

export default function Contacts() {
  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts..."
            className="pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          <Plus className="w-4 h-4" />
          Add Contact
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Name', 'Email', 'Phone', 'Company', 'Status', 'Last Contact', ''].map((h) => (
                <th
                  key={h}
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {contacts.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold shrink-0">
                      {c.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-gray-900">{c.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{c.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{c.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{c.company}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[c.status]}`}>
                    {c.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{c.lastContact}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-700 transition">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-400 text-right">{contacts.length} contacts</p>
    </div>
  )
}
