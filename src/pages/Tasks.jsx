import { useState } from 'react'
import { Plus, Calendar, User } from 'lucide-react'

const initialTasks = [
  { id: 1, title: 'Follow-up call with Acme Corp', done: false, due: 'Jun 5, 2026', assignee: 'Alice J.', priority: 'High' },
  { id: 2, title: 'Send proposal to Stellar Dynamics', done: false, due: 'Jun 6, 2026', assignee: 'Chris L.', priority: 'High' },
  { id: 3, title: 'Review contract for Q3 Expansion', done: true, due: 'Jun 4, 2026', assignee: 'Eve T.', priority: 'Medium' },
  { id: 4, title: 'Update CRM data for Nexus Tech', done: false, due: 'Jun 7, 2026', assignee: 'Dana W.', priority: 'Low' },
  { id: 5, title: 'Schedule demo with Quantum Leap AI', done: false, due: 'Jun 9, 2026', assignee: 'Frank C.', priority: 'High' },
  { id: 6, title: 'Onboarding checklist for Bright Path', done: true, due: 'Jun 3, 2026', assignee: 'Grace L.', priority: 'Medium' },
  { id: 7, title: 'Quarterly business review prep', done: false, due: 'Jun 12, 2026', assignee: 'Alice J.', priority: 'Medium' },
  { id: 8, title: 'Close out Blueprint Co. account', done: false, due: 'Jun 14, 2026', assignee: 'Bob M.', priority: 'Low' },
]

const priorityStyles = {
  High: 'bg-red-100 text-red-600',
  Medium: 'bg-amber-100 text-amber-600',
  Low: 'bg-gray-100 text-gray-500',
}

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggle = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const pending = tasks.filter((t) => !t.done)
  const completed = tasks.filter((t) => t.done)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {pending.length} pending &middot; {completed.length} completed
        </p>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Pending tasks */}
        {pending.length > 0 && (
          <>
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pending</span>
            </div>
            <ul className="divide-y divide-gray-100">
              {pending.map((task) => (
                <TaskRow key={task.id} task={task} onToggle={toggle} />
              ))}
            </ul>
          </>
        )}

        {/* Completed tasks */}
        {completed.length > 0 && (
          <>
            <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 border-t border-gray-200">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Completed</span>
            </div>
            <ul className="divide-y divide-gray-100">
              {completed.map((task) => (
                <TaskRow key={task.id} task={task} onToggle={toggle} />
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

function TaskRow({ task, onToggle }) {
  return (
    <li className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition ${task.done ? 'opacity-60' : ''}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${task.done ? 'line-through text-gray-400' : 'text-gray-900'}`}>
          {task.title}
        </p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityStyles[task.priority]}`}>
          {task.priority}
        </span>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <User className="w-3.5 h-3.5" />
          {task.assignee}
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <Calendar className="w-3.5 h-3.5" />
          {task.due}
        </div>
      </div>
    </li>
  )
}
