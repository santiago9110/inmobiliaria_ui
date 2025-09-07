import SocialIcon from './SocialIcon'
import { socials } from '../data/socials'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-8">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">Urban Nest</span>
          <div className="flex space-x-3">
            {socials.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>
        </div>
        <nav className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-white">Contact Us</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </nav>
      </div>
    </footer>
  )
}