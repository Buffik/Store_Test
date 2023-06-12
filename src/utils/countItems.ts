import { CartProduct } from 'src/types/types';

export const countItems = (data: CartProduct[]) =>
  data.reduce((acc, item) => {
    return (acc += item.count);
  }, 0);

export const countPrice = (data: CartProduct[]) =>
  data.reduce((acc, item) => {
    return (acc += item.count * item.price);
  }, 0);
