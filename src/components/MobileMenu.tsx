import { NavLink } from 'react-router-dom'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 z-40 md:hidden ${open ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <nav
        className="absolute top-0 right-0 w-64 h-full bg-white p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <NavLink to="/" onClick={onClose} className="block">
          Home
        </NavLink>
        <NavLink to="/about" onClick={onClose} className="block">
          About
        </NavLink>
        <NavLink to="/contact" onClick={onClose} className="block">
          Contact
        </NavLink>
      </nav>
    </div>
  )
}