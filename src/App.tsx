import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 min-h-[70vh]">
      <Outlet />
    </main>
    <Footer />
  </div>
  )
}
