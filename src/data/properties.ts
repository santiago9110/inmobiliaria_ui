
export interface Property {
  id: number,
  title: string,
  price: string,
  city: string,
  type: string,
  beds: number,
  baths: number,
  image: string
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Loft moderno',
    price: '€120.000',
    city: 'Madrid',
    type: 'Loft',
    beds: 2,
    baths: 1,
    image: '/images/property1.jpg'
  },
  {
    id: 2,
    title: 'Casa suburbana',
    price: '€230.000',
    city: 'Barcelona',
    type: 'House',
    beds: 4,
    baths: 3,
    image: '/images/property2.jpg'
  },
  {
    id: 3,
    title: 'Apartamento céntrico',
    price: '€150.000',
    city: 'Valencia',
    type: 'Apartment',
    beds: 3,
  baths: 2,
    image: '/images/property3.jpg'
  },
  {
    id: 4,
    title: 'Villa con jardín',
    price: '€450.000',
    city: 'Sevilla',
    type: 'Villa',
    beds: 5,
    baths: 4,
    image: '/images/property4.jpg'
  },
  {
    id: 5,
    title: 'Estudio minimalista',
    price: '€90.000',
    city: 'Bilbao',
    type: 'Studio',
    beds: 1,
    baths: 1,
    image: '/images/property5.jpg'
  },
  {
    id: 6,
    title: 'Dúplex luminoso',
    price: '€200.000',
    city: 'Málaga',
    type: 'Duplex',
    beds: 3,
   baths: 2,
    image: '/images/property6.jpg'
 }
]

export default properties
