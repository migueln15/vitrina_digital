'use client'

import { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, ChevronDown, Menu } from 'lucide-react'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/Sheet"
import CategoryPanel from './CategoryPanel'
import { useCart } from '@/lib/cartContext'
import Link from 'next/link'
import CategoryMenu from './CategoryMenu'

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className={`bg-bgHeader text-gray-800 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-lg font-semibold mb-2">Categorías</SheetTitle>
              <nav className="flex flex-col gap-4">
                <CategoryPanel/>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href={'/'}>
            <div className="text-2xl font-bold text-primary">
              electro
            </div>
          </Link>

          {/* Categories and Search (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-3xl mx-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded px-4 font-medium bg-primary text-white hover:bg-primary/90">
                  Categories
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white overflow-auto max-h-[80vh]">
                <CategoryPanel />
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex-1">
              <form className="flex w-full">
                <Input
                  type="search"
                  placeholder="Search for products"
                  className="rounded-l-none focus:ring-primary focus:border-primary ml-4"
                />
                <Button type="submit" variant="ghost" size="icon" className="ml-2 text-primary hover:bg-primary/10">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Buscar</span>
                </Button>
              </form>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex text-primary hover:bg-primary/10">
              <User className="h-5 w-5 mr-2" />
              <span>Account</span>
            </Button>
            <Link href="/checkout/carrito">
              <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 relative">
                <ShoppingCart className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">Carrito</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="lg:hidden text-primary" onClick={() => setIsSearchVisible(!isSearchVisible)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
      <CategoryMenu/>

      {/* Mobile Search (Floating) */}
      {isSearchVisible && (
        <div className="fixed inset-x-0 top-16 z-50 lg:hidden">
          <div className="bg-white shadow-md p-4">
            <form className="flex w-full">
              <Input
                type="search"
                placeholder="Search for products"
                className="flex-1 focus:ring-primary focus:border-primary"
                autoFocus
              />
              <Button type="submit" variant="ghost" size="icon" className="ml-2 text-primary hover:bg-primary/10">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

