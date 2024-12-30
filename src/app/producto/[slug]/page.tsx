import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import ProductPage from './ProductPage'
import { getProduct } from '@/lib/getProduct'

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  const id = resolvedSearchParams.id;

  if (!id || Array.isArray(id)) {
    notFound();
  }

  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    notFound();
  }

  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ProductPage {...product} />
    </Suspense>
  );
}

