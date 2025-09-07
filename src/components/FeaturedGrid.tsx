import properties from '../data/properties'

export default function FeaturedGrid() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Properties</h2>
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <article key={p.id} className="card-hover rounded overflow-hidden bg-white">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="w-full aspect-video object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-brand font-bold">{p.price}</p>
              <p className="text-sm text-gray-600">
                {p.city} • {p.beds} camas • {p.baths} baños
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}