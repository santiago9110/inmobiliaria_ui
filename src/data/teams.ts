export interface Member {
  id: number
  name: string
  role: string
  photo: string
  instagram: string
  linkedin: string
  whatsapp: string
}

export const team: Member[] = [
  {
    id: 1,
    name: 'Carlos Pérez',
    role: 'Director',
    photo: '/images/team1.jpg',
    instagram: '#',
    linkedin: '#',
    whatsapp: '#'
  },
  {
    id: 2,
    name: 'María López',
    role: 'Agente',
    photo: '/images/team2.jpg',
    instagram: '#',
    linkedin: '#',
    whatsapp: '#'
  },
  {
    id: 3,
    name: 'Jorge Gómez',
    role: 'Ventas',
    photo: '/images/team3.jpg',
    instagram: '#',
    linkedin: '#',
    whatsapp: '#'
  },
  {
    id: 4,
    name: 'Lucía Fernández',
    role: 'Marketing',
    photo: '/images/team4.jpg',
    instagram: '#',
    linkedin: '#',
    whatsapp: '#'
  }
]
