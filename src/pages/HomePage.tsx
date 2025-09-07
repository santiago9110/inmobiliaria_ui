import Hero from '../components/Hero'
import FeaturedGrid from '../components/FeaturedGrid'
import SocialIcon from '../components/SocialIcon'
import { socials } from '../data/socials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container mx-auto py-12 px-4 space-y-4">
        <h2 className="text-2xl font-bold">Sobre nosotros</h2>
        <p>
          Somos una inmobiliaria comprometida con encontrar tu hogar ideal.
        </p>
        <div className="flex space-x-3">
          {socials.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </section>
      <FeaturedGrid />
    </>
  )
}