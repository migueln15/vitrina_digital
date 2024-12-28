import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Value of the Day', href: '/value-of-day' },
  { name: 'Top 100 Offers', href: '/top-offers' },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Computers & Accessories', href: '/computers' },
  { name: 'Cameras, Audio & Video', href: '/cameras' },
  { name: 'Mobiles & Tablets', href: '/mobiles' },
  { name: 'Movies, Music & Video Games', href: '/entertainment' },
  { name: 'TV & Audio', href: '/tv-audio' },
  { name: 'Watches & Eyewear', href: '/watches' },
  { name: 'Car, Motorbike & Industrial', href: '/automotive' },
  { name: 'Accessories', href: '/accessories' },
]

export default function CategoryPanel() {
  return (
    <div className="py-2">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex items-center justify-between px-4 py-2 text-sm hover:bg-blue-50 text-blue-800"
        >
          {category.name}
          <ChevronRight className="h-4 w-4 text-blue-600" />
        </Link>
      ))}
    </div>
  )
}

