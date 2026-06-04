import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Lookbook from './pages/Lookbook'
import AddOutfit from './pages/AddOutfit'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-rose-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/lookbook" replace />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/add" element={<AddOutfit />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
    </div>
  )
}
