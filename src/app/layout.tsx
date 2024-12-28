import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ElectroShop - Tu tienda de electrónica',
  description: 'Encuentra los mejores productos electrónicos al mejor precio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className='bg-gray-50'>
          {children}
        </main>
        <footer className="bg-blue-900 text-white py-4 sm:py-6">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm sm:text-base">&copy; 2023 ElectroShop. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

