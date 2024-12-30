import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Tecnología', href: '/tecnologia' },
  { name: 'Electrohogar', href: '/electrohogar' },
  { name: 'Dormitorio', href: '/dormitorio' },
  { name: 'Zona Gamer', href: '/zona-gamer' },
  { name: 'Motos', href: '/motos' },
  { name: 'Negocios', href: '/negocios' }
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

