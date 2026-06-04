import { Plus, MoreHorizontal, DollarSign } from 'lucide-react'

const columns = [
  {
    id: 'lead',
    label: 'Lead',
    color: 'bg-gray-400',
    headerBg: 'bg-gray-100',
    deals: [
      { title: 'Cloud Migration Project', company: 'Acme Corp', value: '$24,000', owner: 'Alice J.' },
      { title: 'SaaS License Bundle', company: 'Iron Wall Security', value: '$8,500', owner: 'Frank C.' },
      { title: 'Annual Support Contract', company: 'Blueprint Co.', value: '$5,200', owner: 'Grace L.' },
    ],
  },
  {
    id: 'qualified',
    label: 'Qualified',
    color: 'bg-blue-400',
    headerBg: 'bg-blue-50',
    deals: [
      { title: 'Enterprise AI Suite', company: 'Quantum Leap AI', value: '$67,000', owner: 'Chris L.' },
      { title: 'Security Audit Package', company: 'Nexus Tech', value: '$18,000', owner: 'Dana W.' },
    ],
  },
  {
    id: 'proposal',
    label: 'Proposal',
    color: 'bg-indigo-400',
    headerBg: 'bg-indigo-50',
    deals: [
      { title: 'Q3 Expansion Deal', company: 'Stellar Dynamics', value: '$112,000', owner: 'Eve T.' },
      { title: 'Data Analytics Platform', company: 'Orbit Ventures', value: '$45,000', owner: 'Alice J.' },
      { title: 'CRM Integration', company: 'Bright Path', value: '$22,500', owner: 'Bob M.' },
    ],
  },
  {
    id: 'negotiation',
    label: 'Negotiation',
    color: 'bg-purple-400',
    headerBg: 'bg-purple-50',
    deals: [
      { title: 'Global Rollout Agreement', company: 'Acme Corp', value: '$280,000', owner: 'Frank C.' },
      { title: 'Managed Services 2-yr', company: 'Quantum Leap AI', value: '$95,000', owner: 'Chris L.' },
    ],
  },
  {
    id: 'won',
    label: 'Won / Lost',
    color: 'bg-emerald-400',
    headerBg: 'bg-emerald-50',
    deals: [
      { title: 'Initial Pilot ✓', company: 'Nexus Tech', value: '$14,000', owner: 'Grace L.', won: true },
      { title: 'SMB Package ✓', company: 'Bright Path', value: '$6,800', owner: 'Dana W.', won: true },
      { title: 'Custom Dev ✗', company: 'Blueprint Co.', value: '$32,000', owner: 'Eve T.', won: false },
    ],
  },
]

export default function Deals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Drag cards between stages to update deal status</p>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          <Plus className="w-4 h-4" />
          Add Deal
        </button>
      </div>

      {/* Kanban board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div key={col.id} className="flex flex-col min-w-[230px] w-[230px] shrink-0">
            {/* Column header */}
            <div className={`flex items-center justify-between px-3 py-2 rounded-t-xl ${col.headerBg} border border-b-0 border-gray-200`}>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                <span className="text-sm font-semibold text-gray-700">{col.label}</span>
              </div>
              <span className="text-xs font-medium text-gray-400 bg-white px-1.5 py-0.5 rounded-full border border-gray-200">
                {col.deals.length}
              </span>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-2 p-2 bg-gray-100 border border-t-0 border-gray-200 rounded-b-xl min-h-[120px]">
              {col.deals.map((deal, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition cursor-pointer ${
                    deal.won === false ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <p className="text-sm font-medium text-gray-900 leading-snug">{deal.title}</p>
                    <button className="text-gray-300 hover:text-gray-500 shrink-0 mt-0.5">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{deal.company}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-emerald-700 font-semibold text-sm">
                      <DollarSign className="w-3.5 h-3.5" />
                      {deal.value.replace('$', '')}
                    </div>
                    <span className="text-xs text-gray-400">{deal.owner}</span>
                  </div>
                </div>
              ))}

              <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-indigo-600 px-1 py-1 transition mt-1">
                <Plus className="w-3.5 h-3.5" />
                Add card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
