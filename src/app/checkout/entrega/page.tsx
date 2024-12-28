'use client'

import { useState } from 'react'
import { Truck, Store } from 'lucide-react'
import { Input } from "@/components/ui/Input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
import { Label } from "@/components/ui/Label"
import CartProgress from '../components/CartProgress'
import StoreLocations from './StoreLocations'
import OrderSummary from './OrderSummary'

export default function DeliveryPage() {
  const [deliveryMethod, setDeliveryMethod] = useState<'home' | 'store'>('store')
  const [email, setEmail] = useState('')

  return (
    <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4 max-w-7xl">
      <CartProgress currentStep="delivery" />
      
      <h1 className="text-lg sm:text-2xl font-bold text-gray-900 my-2 sm:my-6">Método de entrega</h1>
      
      <div className="grid lg:grid-cols-3 gap-3 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-3 sm:p-6 mb-4 sm:mb-6">
            <p className="text-gray-600 mb-6">
              Puedes seleccionar envío a domicilio o retiro en tienda, lockers y puntos autorizados.
            </p>

            <RadioGroup
              defaultValue="store"
              onValueChange={(value) => setDeliveryMethod(value as 'home' | 'store')}
              className="space-y-4"
            >
              <div className={`flex items-center space-x-4 border rounded-lg p-4 cursor-pointer ${deliveryMethod === 'home' ? 'border-primary' : 'border-gray-200'}`}>
                <RadioGroupItem value="home" id="home" />
                <Label htmlFor="home" className="flex items-center gap-3 cursor-pointer">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Envío a domicilio</span>
                </Label>
              </div>

              <div className={`flex items-center space-x-4 border rounded-lg p-4 cursor-pointer ${deliveryMethod === 'store' ? 'border-primary' : 'border-gray-200'}`}>
                <RadioGroupItem value="store" id="store" />
                <Label htmlFor="store" className="flex items-center gap-3 cursor-pointer">
                  <Store className="h-5 w-5 text-primary" />
                  <span>Retiro en tienda, lockers y puntos autorizados</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="bg-white rounded-lg shadow p-3 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-xl font-semibold mb-4">Ingresa tu correo</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Correo Electrónico *</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@correo.com"
                    className="mt-1"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Aún no tienes una cuenta con nosotros. Te invitamos a llenar tus datos para realizar tu pedido. Puedes registrarte como cliente luego de realizar el pago.
              </p>
            </div>
          </div>

          {deliveryMethod === 'store' && (
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <StoreLocations />
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

