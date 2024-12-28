'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel"
import type { ProductProps } from '@/types/product'
import HeroBanner from '@/components/HeroBanner'

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

export default function Home() {
  const router = useRouter()

  const handleProductClick = (product: ProductProps) => {
    // Convert product name to URL-friendly slug
    const slug = product.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  
    // Navigate to product page with id as a query parameter
    router.push(`/producto/${slug}?id=${product.id}`)
  }

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner/>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary-dark">Ofertas Destacadas</h2>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {products.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/4">
                    <Card 
                      className="relative border-none shadow-lg cursor-pointer"
                      onClick={() => handleProductClick(product)}
                    >
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-[#ffa726] text-white px-2 py-1 rounded-md font-semibold">
                          -{product.discount}%
                        </span>
                      </div>
                      <CardContent className="p-0">
                        <div className="relative aspect-square">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-2">
                            <span className="text-sm text-primary font-semibold">{product.brand}</span>
                            <h3 className="font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
                              {product.name}
                            </h3>
                          </div>
                          <div className="mb-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-gray-900">
                                S/ {product.price.toFixed(2)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                S/ {product.originalPrice.toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <Button className="w-full bg-[#0288d1] hover:bg-[#0277bd] text-white">
                            Ver detalles
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary-dark">Categorías Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Laptops', 'Smartphones', 'TVs', 'Audio', 'Cámaras', 'Wearables'].map((category) => (
              <Button key={category} variant="outline" className="h-24 flex flex-col items-center justify-center bg-white border-primary text-primary hover:bg-primary-light hover:text-primary-dark transition-colors duration-300">
                <span className="text-lg font-semibold">{category}</span>
              </Button>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

