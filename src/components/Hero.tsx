import type { FormEvent } from 'react'

export default function Hero() {
  const handleSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: 'url(/images/property1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="relative z-10 max-w-xl space-y-4">
        <h1 className="text-4xl font-extrabold">Encuentra tu hogar ideal</h1>
        <p>Descubre las mejores propiedades urbanas.</p>
        <form onSubmit={handleSubmit} className="mt-4 flex max-w-md mx-auto">
          <input
            type="text"
            placeholder="Buscar ciudad o barrio"
            className="flex-1 rounded-l-md border-gray-300"
          />
          <button className="bg-brand text-white px-4 rounded-r-md">Buscar</button>
        </form>
      </div>
    </section>
  )
}