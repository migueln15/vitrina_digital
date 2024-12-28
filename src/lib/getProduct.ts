import { ProductProps } from '@/types/product'

const products: ProductProps[] = [
  {
    id: 1,
    brand: 'Samsung',
    name: 'Refrigeradora Samsung 384LT Top Mount Freezer',
    price: 2099.00,
    originalPrice: 2799.00,
    discount: 25,
    sku: 'SAM384LT',
    images: ['/placeholder.svg?text=Samsung1', '/placeholder.svg?text=Samsung2', '/placeholder.svg?text=Samsung3'],
    description: 'Refrigeradora Samsung con tecnología Twin Cooling Plus™ que mantiene los alimentos frescos por más tiempo.'
  },
  {
    id: 2,
    brand: 'Indurama',
    name: 'Cocina Indurama Canta-bria 5 Hornillas Croma',
    price: 1199.00,
    originalPrice: 1599.00,
    discount: 25,
    sku: 'IND5HORN',
    images: ['/placeholder.svg?text=Indurama1', '/placeholder.svg?text=Indurama2', '/placeholder.svg?text=Indurama3'],
    description: 'Cocina Indurama de 5 hornillas con encendido eléctrico y timer digital.'
  },
  {
    id: 3,
    brand: 'Bord',
    name: 'Refrigeradora Bord 207LT Frost RE207FS-M Silver',
    price: 799.00,
    originalPrice: 999.00,
    discount: 20,
    sku: 'BORD207',
    images: ['/placeholder.svg?text=Bord1', '/placeholder.svg?text=Bord2', '/placeholder.svg?text=Bord3'],
    description: 'Refrigeradora Bord con sistema No Frost y acabado plateado.'
  },
  {
    id: 4,
    brand: 'Oster',
    name: 'Licuadora Oster 700W BLSTBH4655053',
    price: 399.00,
    originalPrice: 499.00,
    discount: 20,
    sku: 'BLSTBH4655053',
    images: ['/placeholder.svg?text=Oster1', '/placeholder.svg?text=Oster2', '/placeholder.svg?text=Oster3'],
    description: 'Tu nueva aliada en la cocina será la novedosa licuadora BLSTBH4655053 de 700W. Adquiere este producto Oster en EFE'
  },
  {
    id: 5,
    brand: 'Karcher',
    name: 'Hidrolavadora Karcher Compacta 1200W Amarillo',
    price: 199.00,
    originalPrice: 499.00,
    discount: 60,
    sku: 'KAR1200W',
    images: ['/placeholder.svg?text=Karcher1', '/placeholder.svg?text=Karcher2', '/placeholder.svg?text=Karcher3'],
    description: 'Hidrolavadora Karcher de alta presión, ideal para limpieza exterior.'
  }
]

export async function getProduct(id: number): Promise<ProductProps | null> {
  // Simulate a database query
  return products.find(product => product.id === id) || null
}

