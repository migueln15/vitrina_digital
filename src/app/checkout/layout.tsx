import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Checkout - ElectroShop',
  description: 'Proceso de compra de ElectroShop',
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <div className='md:mt-24 bg-gray-50'>
        <main>{children}</main>
      </div>
    </div>
  )
}

