import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-brand font-medium' : 'hover:text-brand'

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <NavLink to="/" className="font-bold text-lg">
          Urban Nest
        </NavLink>
        <nav className="hidden md:flex space-x-4" aria-label="Primary">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <button className="px-4 py-2 rounded bg-brand text-white">Sign in</button>
        </div>
        <button
          className="md:hidden p-2"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}