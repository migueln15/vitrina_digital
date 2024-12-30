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
    images: ['/images/RefriSamsung384LT.png?text=Samsung1', '/images/RefriSamsung384LT_2.png?text=Samsung2', '/images/RefriSamsung384LT_3.png?text=Samsung3'],
    description: 'Refrigeradora Samsung con tecnología Twin Cooling Plus™ que mantiene los alimentos frescos por más tiempo.',
    hasHomeDelivery: true,
    hasStorePickup: true
  },
  {
    id: 2,
    brand: 'Indurama',
    name: 'Cocina Indurama Canta-bria 5 Hornillas Croma',
    price: 1199.00,
    originalPrice: 1599.00,
    discount: 25,
    sku: 'IND5HORN',
    images: ['/images/CociIndu5HorCrom_1.png?text=Indurama1', '/images/CociIndu5HorCrom_2.png?text=Indurama2', '/images/CociIndu5HorCrom_3.png?text=Indurama3', '/images/CociIndu5HorCrom_4.png?text=Indurama4', '/images/CociIndu5HorCrom_5.png?text=Indurama5'],
    description: 'Cocina Indurama de 5 hornillas con encendido eléctrico y timer digital.',
    hasHomeDelivery: true,
    hasStorePickup: false
  },
  {
    id: 3,
    brand: 'Bord',
    name: 'Refrigeradora Bord 207LT Frost RE207FS-M Silver',
    price: 799.00,
    originalPrice: 999.00,
    discount: 20,
    sku: 'BORD207',
    images: ['/images/RefriBord207lt.png?text=Bord1', '/images/RefriBord207lt_2.png?text=Bord2', '/images/RefriBord207lt_3.png?text=Bord3'],
    description: 'Refrigeradora Bord con sistema No Frost y acabado plateado.',
    hasHomeDelivery: false,
    hasStorePickup: true
  },
  {
    id: 4,
    brand: 'Oster',
    name: 'Licuadora Oster 700W BLSTBH4655053',
    price: 399.00,
    originalPrice: 499.00,
    discount: 20,
    sku: 'BLSTBH4655053',
    images: ['/images/LicOster700w_1.png?text=Oster1', '/images/LicOster700w_2.png?text=Oster2'],
    description: 'Tu nueva aliada en la cocina será la novedosa licuadora BLSTBH4655053 de 700W. Adquiere este producto Oster',
    hasHomeDelivery: true,
    hasStorePickup: true
  },
  {
    id: 5,
    brand: 'Telstar',
    name: 'Televisor Smart FHD Telstar 43 pulgadas TTL-TV43FEW5F3PE',
    price: 769.00,
    originalPrice: 1059.00,
    discount: 30,
    sku: '765167673152',
    images: ['/images/TvTel43_1.png?text=Karcher1', '/images/TvTel43_2.png?text=Karcher2', '/images/TvTel43_3.png?text=Karcher3', '/images/TvTel43_4.png?text=Karcher4'],
    description: 'Hidrolavadora Karcher de alta presión, ideal para limpieza exterior.',
    hasHomeDelivery: true,
    hasStorePickup: false
  }
]

export async function getProduct(id: number): Promise<ProductProps | null> {
  // Simulate a database query
  return products.find(product => product.id === id) || null
}

