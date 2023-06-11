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

export type Response = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export type ProductState = {
  list: Response;
  status: 'loading' | 'fulfilled' | 'rejected';
  error: null | string;
};

export type CartProduct = Product & {
  count: number;
};

export type CartState = {
  list: CartProduct[];
};

export type PersonalDataTypes = {
  name: string;
  phone: string;
  mail: string;
  creditCardNumber: string;
  creditCardDate: string;
  creditCardOwner: string;
  cvv: string;
  location: string;
};
