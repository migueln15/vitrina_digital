export interface ProductProps {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  sku: string;
  images: string[];


  description: string;
  hasHomeDelivery?: boolean;
  hasStorePickup?: boolean;
}

export interface FilterState {
  priceRange: [number, number]
  brands: string[]
  operatingSystems: string[]
  screenSizes: string[]
}

