import { Plus, Search, MoreHorizontal, Building2 } from 'lucide-react'

const companies = [
  { name: 'Acme Corp', industry: 'Manufacturing', contacts: 12, revenue: '$1.2M', status: 'Customer' },
  { name: 'Stellar Dynamics', industry: 'Aerospace', contacts: 5, revenue: '$850K', status: 'Prospect' },
  { name: 'Nexus Tech', industry: 'Software', contacts: 9, revenue: '$3.4M', status: 'Customer' },
  { name: 'Orbit Ventures', industry: 'Venture Capital', contacts: 3, revenue: '$500K', status: 'Partner' },
  { name: 'Bright Path', industry: 'Education', contacts: 7, revenue: '$620K', status: 'Customer' },
  { name: 'Iron Wall Security', industry: 'Cybersecurity', contacts: 4, revenue: '$980K', status: 'Prospect' },
  { name: 'Quantum Leap AI', industry: 'Artificial Intelligence', contacts: 11, revenue: '$2.1M', status: 'Customer' },
  { name: 'Blueprint Co.', industry: 'Architecture', contacts: 2, revenue: '$290K', status: 'Churned' },
]

const statusColors = {
  Customer: 'bg-emerald-100 text-emerald-700',
  Prospect: 'bg-blue-100 text-blue-700',
  Partner: 'bg-purple-100 text-purple-700',
  Churned: 'bg-red-100 text-red-600',
}

export default function Companies() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search companies..."
            className="pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          <Plus className="w-4 h-4" />
          Add Company
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Company Name', 'Industry', 'Contacts', 'Revenue', 'Status', ''].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {companies.map((c, i) => (
              <tr key={i} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{c.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{c.industry}</td>
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">{c.contacts}</td>
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">{c.revenue}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[c.status]}`}>
                    {c.status}
                  </span>
                </td>
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

      <p className="text-sm text-gray-400 text-right">{companies.length} companies</p>
    </div>
  )
}
