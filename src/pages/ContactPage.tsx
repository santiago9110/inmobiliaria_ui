import { team } from '../data/teams'
import SocialIcon from '../components/SocialIcon'
import { socials } from '../data/socials'

export default function ContactPage() {
  return (
    <section className="container mx-auto py-12 px-4 space-y-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <article key={m.id} className="text-center space-y-2">
            <img
              src={m.photo}
              alt={m.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
              loading="lazy"
            />
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600">{m.role}</p>
            <div className="flex justify-center space-x-2">
              <SocialIcon label="Instagram" href={m.instagram} icon="photo_camera" />
              <SocialIcon label="LinkedIn" href={m.linkedin} icon="work" />
              <SocialIcon label="WhatsApp" href={m.whatsapp} icon="chat" />
            </div>
          </article>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-xl font-bold mb-2">Nuestra oficina</h2>
          <p>Av. Principal 123, Ciudad</p>
          <p>Lunes a Viernes: 9:00 - 18:00</p>
        </div>
        <img
          src="/images/office.jpg"
          alt="Oficina"
          className="w-full h-64 object-cover rounded"
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Seguinos</h2>
        <div className="flex space-x-3">
          {socials.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}