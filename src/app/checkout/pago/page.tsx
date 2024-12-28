'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Store, Pencil } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"
import { Checkbox } from "@/components/ui/Checkbox"
import CartProgress from '../components/CartProgress'
import OrderSummary from './OrderSummary'

interface BuyerData {
  firstName: string
  lastName: string
  phone: string
  documentType: string
  documentNumber: string
  department: string
  province: string
  district: string
  address: string
  addressNumber: string
  reference: string
  marketing: boolean
}

export default function PaymentPage() {
  const [step, setStep] = useState<'buyer' | 'payment'>('buyer')
  const [buyerData, setBuyerData] = useState<BuyerData>({
    firstName: '',
    lastName: '',
    phone: '',
    documentType: 'DNI',
    documentNumber: '',
    department: '',
    province: '',
    district: '',
    address: '',
    addressNumber: '',
    reference: '',
    marketing: false
  })
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'efectiva' | 'yape' | 'store' | 'pagoefectivo'>('card')
  const [documentType, setDocumentType] = useState<'boleta' | 'factura'>('boleta')

  const handleBuyerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handleInputChange = (field: keyof BuyerData, value: string | boolean) => {
    setBuyerData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
      <CartProgress currentStep="payment" />
      
      {step === 'buyer' ? (
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 mt-4 sm:mt-6">
          <div className="lg:col-span-2">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Datos del comprador</h1>
            <p className="text-gray-600 mb-6">
              ¡Ya falta poco! Solo necesitamos tus datos personales para finalizar tu pedido
            </p>

            <form onSubmit={handleBuyerSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nombre *</Label>
                  <Input
                    id="firstName"
                    value={buyerData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Apellidos *</Label>
                  <Input
                    id="lastName"
                    value={buyerData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Celular *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={buyerData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="documentType">Tipo documento *</Label>
                  <Select
                    value={buyerData.documentType}
                    onValueChange={(value) => handleInputChange('documentType', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DNI">DNI</SelectItem>
                      <SelectItem value="CE">Carné de Extranjería</SelectItem>
                      <SelectItem value="PASSPORT">Pasaporte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="documentNumber">Número de Documento *</Label>
                <Input
                  id="documentNumber"
                  value={buyerData.documentNumber}
                  onChange={(e) => handleInputChange('documentNumber', e.target.value)}
                  className="mt-1"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="department">Departamento *</Label>
                  <Select
                    value={buyerData.department}
                    onValueChange={(value) => handleInputChange('department', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lima">Lima</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="province">Provincia *</Label>
                  <Select
                    value={buyerData.province}
                    onValueChange={(value) => handleInputChange('province', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lima">Lima</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="district">Distrito *</Label>
                  <Select
                    value={buyerData.district}
                    onValueChange={(value) => handleInputChange('district', value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate">Ate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address">Dirección (Tipo y nombre de vía, número, manzana/lote) *</Label>
                  <Input
                    id="address"
                    value={buyerData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="addressNumber">Nro. de dpto./Piso</Label>
                  <Input
                    id="addressNumber"
                    value={buyerData.addressNumber}
                    onChange={(e) => handleInputChange('addressNumber', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="reference">Referencia</Label>
                <Input
                  id="reference"
                  value={buyerData.reference}
                  onChange={(e) => handleInputChange('reference', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketing"
                  checked={buyerData.marketing}
                  onCheckedChange={(checked) => handleInputChange('marketing', checked as boolean)}
                />
                <label
                  htmlFor="marketing"
                  className="text-sm text-gray-600"
                >
                  Autorizo que Conecta Retail S.A me mantenga informado de nuevas ofertas y promociones.{' '}
                  <Link href="#" className="text-primary hover:underline">
                    Ver Detalle
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Confirmar
              </Button>
            </form>
          </div>
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8 mt-4 sm:mt-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">Datos del comprador</h2>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p>{buyerData.firstName} {buyerData.lastName}</p>
                    <p>Documento: {buyerData.documentNumber}</p>
                    <p>Cel: {buyerData.phone}</p>
                    <p>Dirección: Av. Javier Prado 1104, Lejos</p>
                    <p>Lima, Ate, Lima</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setStep('buyer')}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Comprobante de pago</h2>
              <p className="text-sm text-gray-600 mb-4">
                Selecciona el comprobante de pago que prefieres.
              </p>
              <RadioGroup
                value={documentType}
                onValueChange={(value) => setDocumentType(value as 'boleta' | 'factura')}
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="boleta" id="boleta" />
                  <Label htmlFor="boleta">Boleta</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="factura" id="factura" />
                  <Label htmlFor="factura">Factura</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h2 className="text-lg font-semibold mb-4">Medio de pago</h2>
              <RadioGroup
                value={paymentMethod}
                onValueChange={(value) => setPaymentMethod(value as typeof paymentMethod)}
                className="space-y-3 sm:space-y-4"
              >
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-3">
                      <span>Pagar con una tarjeta de crédito o débito</span>
                    </Label>
                  </div>
                  {paymentMethod === 'card' && (
                    <div className="mt-4 flex gap-2">
                      <Image src="/placeholder.svg" alt="Visa" width={40} height={25} className="object-contain" />
                      <Image src="/placeholder.svg" alt="Mastercard" width={40} height={25} className="object-contain" />
                      <Image src="/placeholder.svg" alt="American Express" width={40} height={25} className="object-contain" />
                    </div>
                  )}
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="efectiva" id="efectiva" />
                    <Label htmlFor="efectiva" className="flex items-center gap-3">
                      <span>Compra en cuotas sin tarjeta con Crédito Efectiva</span>
                    </Label>
                  </div>
                  {paymentMethod === 'efectiva' && (
                    <div className="mt-4">
                      <Image src="/placeholder.svg" alt="Efectiva" width={120} height={30} className="object-contain" />
                    </div>
                  )}
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yape" id="yape" />
                    <Label htmlFor="yape" className="flex items-center gap-3">
                      <span>Pago con Yape</span>
                    </Label>
                  </div>
                  {paymentMethod === 'yape' && (
                    <div className="mt-4">
                      <Image src="/placeholder.svg" alt="Yape" width={60} height={30} className="object-contain" />
                    </div>
                  )}
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="store" id="store" />
                    <Label htmlFor="store" className="flex items-center gap-3">
                      <Store className="h-5 w-5" />
                      <span>Pago en tienda</span>
                    </Label>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pagoefectivo" id="pagoefectivo" />
                    <Label htmlFor="pagoefectivo" className="flex items-center gap-3">
                      <span>PagoEfectivo</span>
                    </Label>
                  </div>
                  {paymentMethod === 'pagoefectivo' && (
                    <div className="mt-4">
                      <Image src="/placeholder.svg" alt="PagoEfectivo" width={100} height={30} className="object-contain" />
                    </div>
                  )}
                </div>
              </RadioGroup>

              <Button className="w-full mt-4 sm:mt-6" size="lg">
                Pagar
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      )}
    </div>
  )
}

