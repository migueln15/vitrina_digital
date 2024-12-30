import Link from 'next/link'
import { Laptop, Smartphone, Tv, Headphones, Camera, Gamepad2 } from 'lucide-react'

const categories = [
  { name: 'Televisores', icon: Tv },
  { name: 'Celulares', icon: Smartphone },
  { name: 'Laptops', icon: Laptop },
  { name: 'Audio', icon: Headphones },
  { name: 'Cámaras', icon: Camera },
  { name: 'PlayStation ', icon: Gamepad2 },
]

export default function CategoryMenu() {
  return (
    <nav className="bg-slate-800 py-1 px-20 hidden lg:block">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-between items-center">
          {categories.map((category) => (
            <li key={category.name} className="mx-2 my-1">
              <Link href={`/categoria/${category.name.toLowerCase()}`} className="flex items-center text-white hover:text-sky-700">
                <category.icon className="h-5 w-5 mr-2" />
                <span className=''>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

