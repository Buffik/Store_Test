import { Product } from 'src/types/types';

const sortProducts = (productsArray: Product[], searchParamsObject: string) => {
  const arr = [...productsArray];
  switch (searchParamsObject) {
    case 'price-ascending':
      return arr.sort((a, b) => a.price - b.price);
    case 'price-descending':
      return arr.sort((a, b) => b.price - a.price);
    case 'alphabet-ascending':
      return arr.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    case 'alphabet-descending':
      return arr.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    default:
      return arr;
  }
};

export default sortProducts;
