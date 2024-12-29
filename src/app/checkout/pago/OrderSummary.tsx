'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
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
  const shipping = 0 // Free shipping

  return (
    <div className="bg-blue-50 rounded-lg p-4 sm:p-6 sticky top-24">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Resumen de pedido</h2>
      <p className="text-gray-600 mb-4">{products.length} Productos</p>

      <div className="space-y-3 sm:space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex gap-3">
            <div className="w-12 sm:w-16 h-12 sm:h-16 relative flex-shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">{product.brand}</p>
              <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
              <p className="text-sm text-gray-500">Cantidad: {product.quantity}</p>
              <p className="text-sm font-semibold">S/ {product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Cupón de descuento"
            className="flex-1"
          />
          <Button variant="secondary" className="ml-2">
            Aplicar
          </Button>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">S/ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Costo de envío</span>
          <span className="text-green-600 font-medium">¡Gratis!</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>Total Pedido</span>
          <span>S/ {(subtotal + shipping).toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Precio incluye IGV
        </p>
      </div>
    </div>
  )
}

