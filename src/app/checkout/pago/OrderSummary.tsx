'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Separator } from "@/components/ui/Separator"
import { useCart } from '@/lib/cartContext'

export default function OrderSummary() {
  const { cart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 0 // Free shipping

  if (cart.length === 0) {
    return (
      <div className="bg-blue-50 rounded-lg p-4 sm:p-6 sticky top-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Resumen de pedido</h2>
        <p className="text-sm text-gray-600 mb-4">Tu carrito está vacío</p>
        <Link href="/">
          <Button className="w-full">Continuar comprando</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 rounded-lg p-4 sm:p-6 sticky top-4">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Resumen de pedido</h2>
      <p className="text-gray-600 mb-4">{cart.length} Productos</p>

      <div className="space-y-3 sm:space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-12 sm:w-16 h-12 sm:h-16 relative flex-shrink-0">
              <Image
                src={item.images[0]}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500">{item.brand}</p>
              <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
              <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
              <p className="text-sm font-semibold">S/ {item.price.toFixed(2)}</p>
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

