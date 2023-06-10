export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
};

export type ProductState = {
  list: Product[];
  status: 'loading' | 'fulfilled' | 'rejected';
  error: null | string;
};
