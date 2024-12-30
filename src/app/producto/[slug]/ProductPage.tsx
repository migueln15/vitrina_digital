'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Minus, Plus, Store, Truck, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"
import type { ProductProps } from '@/types/product'
import { useCart } from '@/lib/cartContext'
import { useToast } from "@/components/ui/UseToast"

export default function ProductPage({ 
  id,
  name,
  brand,
  sku,
  price,
  originalPrice,
  discount,
  images,
  description,
  hasHomeDelivery = false,
  hasStorePickup = true
}: ProductProps) {
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const incrementQuantity = () => setQuantity(q => q + 1)
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1))

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleAddToCart = () => {
    addToCart({ id, name, brand, sku, price, originalPrice, discount, images, description, hasHomeDelivery, hasStorePickup }, quantity)
    toast({
      title: "Producto agregado al carrito",
      description: `${quantity} x ${name}`,
    })
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl md:mt-24">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-primary">
          Inicio
        </Link>
        <span className="text-gray-500">&gt;</span>
        <span className="text-gray-900">{name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Galería de imágenes */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            {discount > 0 && (
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-[#ffa726] text-white px-3 py-1 rounded-md font-semibold">
                  -{discount}%
                </span>
              </div>
            )}
            <Image
              src={images[currentImage]}
              alt={name}
              fill
              className="object-contain"
            />
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                className={`w-16 h-16 border rounded-lg overflow-hidden flex-shrink-0 ${index === currentImage ? 'border-primary' : 'border-gray-200'}`}
                onClick={() => setCurrentImage(index)}
              >
                <Image 
                  src={img} 
                  alt={`${name} vista ${index + 1}`} 
                  width={64} 
                  height={64} 
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div>
          <div className="mb-6">
            <Link href="#" className="text-primary hover:underline">
              {brand}
            </Link>
            <h1 className="text-2xl font-bold text-[#1a237e] mt-1">
              {name}
            </h1>
            <p className="text-gray-600 mt-2">
              SKU {sku}
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#1a237e]">
                S/ {price.toFixed(2)}
              </span>
              {originalPrice > price && (
                <span className="text-lg text-gray-500 line-through">
                  S/ {originalPrice.toFixed(2)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm bg-[#ffa726] text-white px-2 py-1 rounded">
                  -{discount}%
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={decrementQuantity}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 text-center border-0"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={incrementQuantity}
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white" onClick={handleAddToCart}>
              Agregar al carrito
            </Button>
            <Button variant="outline" size="icon" className="text-gray-500">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <Truck className={`h-5 w-5 ${hasHomeDelivery ? 'text-primary' : 'text-gray-400'}`} />
              <span>{hasHomeDelivery ? 'Disponible envío a domicilio' : 'No disponible envío a domicilio'}</span>
            </div>
            <div className="flex items-start gap-3">
              <Store className={`h-5 w-5 ${hasStorePickup ? 'text-primary' : 'text-gray-400'} shrink-0 mt-1`} />
              <div>
                <div className="text-gray-900">{hasStorePickup ? 'Disponible retiro en tienda y lockers' : 'No disponible retiro en tienda'}</div>
                {hasStorePickup && (
                  <Link href="#" className="text-primary hover:underline text-sm">
                    Consultar
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6 relative">
            <h3 className="text-lg font-medium mb-2">Garantía adicional</h3>
            <Select>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Sin garantías adicionales" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Sin garantías adicionales</SelectItem>
                <SelectItem value="1year">1 año de garantía extendida</SelectItem>
                <SelectItem value="2year">2 años de garantía extendida</SelectItem>
              </SelectContent>
            </Select>
            <Link href="#" className="text-primary hover:underline text-sm block mt-2">
              Ver Términos y Condiciones
            </Link>
          </div>

          <div className="text-gray-600">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

