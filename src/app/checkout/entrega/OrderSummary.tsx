'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/Separator"

interface Product {
  id: number
  brand: string
  name: string
  price: number
  quantity: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    brand: 'Hisense',
    name: 'TV Hisense 32" LED HD Vidaa 32A4K',
    price: 449.00,
    quantity: 1,
    image: '/placeholder.svg'
  },
  {
    id: 2,
    brand: 'Oster',
    name: 'Licuadora Oster 700W BLSTBH4655053',
    price: 399.00,
    quantity: 1,
    image: '/placeholder.svg'
  }
]

export default function OrderSummary() {
  const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0)

  return (
    <div className="bg-blue-50 rounded-lg p-3 sm:p-6 sticky top-4">
      <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Resumen de pedido</h2>
      <p className="text-sm text-gray-600 mb-3 sm:mb-4">{products.length} Productos</p>

      <div className="space-y-3">
        {products.map((product) => (
          <div key={product.id} className="flex gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 relative flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500">{product.brand}</p>
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">{product.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">Cantidad: {product.quantity}</p>
              <p className="text-xs sm:text-sm font-semibold">S/ {product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-3 sm:my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-600">
          <span>Costo de envío</span>
          <span>Revisalo en el paso Pago</span>
        </div>
        <div className="flex justify-between text-base sm:text-lg font-bold">
          <span>Total Pedido</span>
          <span>S/ {subtotal.toFixed(2)}</span>
        </div>
      </div>

      <Link href="/checkout/pago">
        <Button className="w-full mt-4 sm:mt-6" size="lg">
          Siguiente
        </Button>
      </Link>

      <div className="mt-3 sm:mt-4 text-center">
        <p className="text-xs sm:text-sm text-gray-600">
          Si tienes un cupón ¡agrégalo en el paso pago!
        </p>
      </div>
    </div>
  )
}

