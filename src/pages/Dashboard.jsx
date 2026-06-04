import {
  Users,
  Handshake,
  CheckSquare,
  DollarSign,
  TrendingUp,
  Activity,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'

const stats = [
  {
    label: 'Total Contacts',
    value: '2,847',
    change: '+12%',
    up: true,
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    label: 'Open Deals',
    value: '143',
    change: '+8%',
    up: true,
    icon: Handshake,
    color: 'bg-indigo-500',
  },
  {
    label: 'Tasks Due',
    value: '27',
    change: '-3%',
    up: false,
    icon: CheckSquare,
    color: 'bg-amber-500',
  },
  {
    label: 'Revenue (MTD)',
    value: '$184,200',
    change: '+21%',
    up: true,
    icon: DollarSign,
    color: 'bg-emerald-500',
  },
]

const activities = [
  { user: 'Alice Johnson', action: 'added a new contact', target: 'Bob Martinez', time: '2 min ago', avatar: 'AJ' },
  { user: 'Chris Lee', action: 'moved deal', target: '"Enterprise SaaS" to Proposal', time: '18 min ago', avatar: 'CL' },
  { user: 'Dana White', action: 'completed task', target: 'Follow-up call with Acme Corp', time: '1 hr ago', avatar: 'DW' },
  { user: 'Eve Torres', action: 'created a new company', target: 'Stellar Dynamics Inc.', time: '3 hr ago', avatar: 'ET' },
  { user: 'Frank Castle', action: 'closed deal', target: '"Q2 Expansion" — $42,000', time: '5 hr ago', avatar: 'FC' },
]

const pipeline = [
  { stage: 'Lead', count: 34, value: '$128,000', color: 'bg-gray-400' },
  { stage: 'Qualified', count: 21, value: '$94,500', color: 'bg-blue-400' },
  { stage: 'Proposal', count: 15, value: '$210,000', color: 'bg-indigo-400' },
  { stage: 'Negotiation', count: 8, value: '$176,000', color: 'bg-purple-400' },
  { stage: 'Won', count: 12, value: '$385,000', color: 'bg-emerald-400' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex items-center gap-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${s.color} shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className={`text-xs flex items-center gap-0.5 mt-0.5 font-medium ${s.up ? 'text-emerald-600' : 'text-red-500'}`}>
                  {s.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                  {s.change} vs last month
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent activity */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <ul className="space-y-4">
            {activities.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold shrink-0">
                  {a.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-gray-900">{a.user}</span>{' '}
                    {a.action}{' '}
                    <span className="font-medium text-indigo-600">{a.target}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pipeline summary */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base font-semibold text-gray-900">Deals Pipeline</h2>
          </div>
          <ul className="space-y-3">
            {pipeline.map((p) => (
              <li key={p.stage}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{p.stage}</span>
                  <span className="text-gray-500">{p.count} deals · {p.value}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${p.color}`}
                    style={{ width: `${(p.count / 34) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
