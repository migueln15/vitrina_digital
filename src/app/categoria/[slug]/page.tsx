import { Suspense } from 'react'
import CategoryPage from './CategoryPage'

interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense fallback={<CategorySkeleton />}>
      <CategoryPage slug={params.slug} />
    </Suspense>
  )
}

function CategorySkeleton() {
  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6" />
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="hidden lg:block">
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 w-32 bg-gray-200 rounded" />
                <div className="space-y-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="h-4 w-full bg-gray-200 rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <div className="h-10 bg-gray-200 rounded" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

