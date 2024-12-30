'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/Separator"
import { useCart } from '@/lib/cartContext'

export default function OrderSummary() {
  const { cart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cart.length === 0) {
    return (
      <div className="bg-blue-50 rounded-lg p-3 sm:p-6 sticky top-4">
        <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Resumen de pedido</h2>
        <p className="text-sm text-gray-600 mb-3 sm:mb-4">Tu carrito está vacío</p>
        <Link href="/">
          <Button className="w-full">Continuar comprando</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-blue-50 rounded-lg p-3 sm:p-6 sticky top-4">
      <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Resumen de pedido</h2>
      <p className="text-sm text-gray-600 mb-3 sm:mb-4">{cart.length} Productos</p>

      <div className="space-y-3">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-2 sm:gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 relative flex-shrink-0">
              <Image
                src={item.images[0]}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm text-gray-500">{item.brand}</p>
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">{item.name}</h3>
              <p className="text-xs sm:text-sm text-gray-500">Cantidad: {item.quantity}</p>
              <p className="text-xs sm:text-sm font-semibold">S/ {item.price.toFixed(2)}</p>
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
        <Button className="w-full mt-4 sm:mt-6 text-white" size="lg">
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

