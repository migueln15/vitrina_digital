'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Store, Truck, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Separator } from "@/components/ui/Separator"
import CartProgress from '../components/CartProgress'
import { useCart } from '@/lib/cartContext'

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
      <CartProgress currentStep="cart" />
      
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 my-4 sm:my-6">Carrito de compras</h1>

      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">Tu carrito está vacío</p>
          <Link href="/">
            <Button className="mt-4">Continuar comprando</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-center gap-2">
            <span className="text-2xl">🎉</span>
            <p className="text-blue-600">¡Tu pedido aplica para una promoción especial! Conócela aquí</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-24 h-24 relative flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-sm text-gray-500">{item.brand}</p>
                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary">S/ {item.price.toFixed(2)}</p>
                            <p className="text-sm text-gray-500 line-through">S/ {item.originalPrice.toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-4 mb-4 sm:mb-0">
                            <div className="flex items-center border rounded-md">
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="text-primary hover:text-primary hover:bg-primary/10"
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-16 text-center border-0"
                              />
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-primary hover:text-primary hover:bg-primary/10"
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                            {item.hasHomeDelivery ? (
                              <div className="flex items-center gap-2 text-gray-600">
                                <Truck className="h-5 w-5 text-primary" />
                                <span className="text-sm">Disponible envío a domicilio</span>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2 text-gray-400">
                                <Truck className="h-5 w-5" />
                                <span className="text-sm">No disponible envío a domicilio</span>
                              </div>
                            )}
                            {item.hasStorePickup && (
                              <div className="flex items-center gap-2 text-gray-600">
                                <Store className="h-5 w-5 text-primary" />
                                <span className="text-sm">Disponible retiro en tienda</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Resumen de pedido</h2>
                <p className="text-gray-600 mb-4">{cart.length} Productos</p>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">S/ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Pedido</span>
                    <span>S/ {subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout/entrega">
                  <Button className="w-full mt-6" size="lg">
                    Siguiente
                  </Button>
                </Link>

                <Link href="/" className="block text-center mt-4">
                  <Button variant="link" className="text-primary">
                    Añadir más productos
                  </Button>
                </Link>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Si tienes un cupón ¡agrégalo en el paso pago!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

