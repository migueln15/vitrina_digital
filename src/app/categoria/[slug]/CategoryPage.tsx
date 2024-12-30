'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Grid, List, SlidersHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select"
import { Separator } from "@/components/ui/Separator"
import { Slider } from "@/components/ui/Slider"
import { Checkbox } from "@/components/ui/Checkbox"
import { ScrollArea } from "@/components/ui/ScrollArea"
import { useCart } from '@/lib/cartContext'
import type { ProductProps, FilterState } from '@/types/product'

// Sample data - In a real app, this would come from an API
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

const brands = ['Samsung', 'LG', 'Sony', 'Hyundai', 'TCL', 'Philips']
const operatingSystems = ['WebOS', 'Tizen', 'Android TV', 'Roku', 'Google TV', 'Vidaa']
const screenSizes = ['32"', '43"', '50"', '55"', '65"', '75"', '85"']

export default function CategoryPage({ slug }: { slug: string }) {
  console.log(slug)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 10000],
    brands: [],
    operatingSystems: [],
    screenSizes: []
  })
  const { addToCart } = useCart()

  const handleFilterChange = (type: keyof FilterState, value: FilterState[keyof FilterState]) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 10000],
      brands: [],
      operatingSystems: [],
      screenSizes: []
    })
  }

  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-primary">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-500" />
        <Link href="/tecnologia" className="text-gray-500 hover:text-primary">
          Tecnología
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-500" />
        <Link href="/tecnologia/televisores" className="text-gray-500 hover:text-primary">
          Televisores
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-500" />
        <span className="text-gray-900 font-medium">Smart TV</span>
      </nav>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Filters - Desktop */}
        <div className="hidden lg:block">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          {/* Mobile Filter Button & Sort */}
          <div className="flex items-center justify-between mb-6">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetTitle>Filtros</SheetTitle>
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                />
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevancia</SelectItem>
                  <SelectItem value="price-asc">Menor precio</SelectItem>
                  <SelectItem value="price-desc">Mayor precio</SelectItem>
                  <SelectItem value="discount">Mayor descuento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={
            viewMode === 'grid'
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              : "space-y-6"
          }>
            {products.map((product) => (
              <div
                key={product.id}
                className={
                  viewMode === 'grid'
                    ? "relative group flex flex-col"
                    : "relative group flex gap-6"
                }
              >
                <div className={
                  viewMode === 'grid'
                    ? "relative aspect-square mb-2"
                    : "relative w-48 aspect-square flex-shrink-0"
                }>
                  {product.discount > 0 && (
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-[#ffa726] text-white px-2 py-1 rounded-md font-semibold">
                        -{product.discount}%
                      </span>
                    </div>
                  )}
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <Link href={`/producto/${product.sku}`}>
                    <h3 className="font-medium text-gray-900 group-hover:text-primary text-sm">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        S/ {product.price.toFixed(2)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          S/ {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => addToCart(product, 1)}
                      className="w-full mt-2 text-sm py-1 h-auto"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface FilterSidebarProps {
  filters: FilterState
  onFilterChange: (type: keyof FilterState, value: FilterState[keyof FilterState]) => void
  onClearFilters: () => void
}

function FilterSidebar({ filters, onFilterChange, onClearFilters }: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Precio</h3>
        <div className="space-y-4">
          <Slider
            value={filters.priceRange}
            min={0}
            max={10000}
            step={100}
            onValueChange={(value) => onFilterChange('priceRange', value as [number, number])}
          />
          <div className="flex items-center justify-between text-sm">
            <span>S/ {filters.priceRange[0]}</span>
            <span>S/ {filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Marca</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={filters.brands.includes(brand)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onFilterChange('brands', [...filters.brands, brand])
                    } else {
                      onFilterChange('brands', filters.brands.filter(b => b !== brand))
                    }
                  }}
                />
                <label
                  htmlFor={`brand-${brand}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Sistema operativo</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-3">
            {operatingSystems.map((os) => (
              <div key={os} className="flex items-center space-x-2">
                <Checkbox
                  id={`os-${os}`}
                  checked={filters.operatingSystems.includes(os)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onFilterChange('operatingSystems', [...filters.operatingSystems, os])
                    } else {
                      onFilterChange('operatingSystems', filters.operatingSystems.filter(o => o !== os))
                    }
                  }}
                />
                <label
                  htmlFor={`os-${os}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {os}
                </label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium mb-4">Tamaño de pantalla</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-3">
            {screenSizes.map((size) => (
              <div key={size} className="flex items-center space-x-2">
                <Checkbox
                  id={`size-${size}`}
                  checked={filters.screenSizes.includes(size)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onFilterChange('screenSizes', [...filters.screenSizes, size])
                    } else {
                      onFilterChange('screenSizes', filters.screenSizes.filter(s => s !== size))
                    }
                  }}
                />
                <label
                  htmlFor={`size-${size}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <Separator />

      <Button
        variant="outline"
        className="w-full"
        onClick={onClearFilters}
      >
        Limpiar filtros
      </Button>
    </div>
  )
}

