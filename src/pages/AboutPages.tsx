import { Link } from 'react-router-dom'

export default function AboutPage() {
  const highlights = [
    '10 años de experiencia',
    'Cobertura nacional',
    'Equipo dedicado'
  ]

  return (
    <section className="container mx-auto py-12 px-4 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Sobre nosotros</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <p>
        Cras venenatis euismod malesuada. Integer feugiat, magna ac iaculis pharetra, justo leo porta leo, eu dictum elit massa quis mauris.
      </p>
      <ul className="list-disc pl-5">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link to="/contact" className="inline-block mt-4 px-4 py-2 bg-brand text-white rounded">
        Contáctanos
      </Link>
    </section>
  )
}