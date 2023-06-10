import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, CartState } from 'src/types/types';

const initialCartState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    increaseProductCount(state, action: PayloadAction<number>) {
      const isProductInCart = state.list.some(
        (item) => item.id === action.payload
      );
      if (isProductInCart) {
        state.list.forEach((item) => {
          if (item.id === action.payload) {
            item.count += 1;
          }
        });
      }
      return;
    },
    decreaseProductCount(state, action: PayloadAction<number>) {
      const currentItem = state.list.find((item) => item.id === action.payload);

      if (!currentItem) return;

      if (currentItem && currentItem.count > 1) {
        currentItem.count -= 1;
      } else {
        state.list = state.list.filter((item) => item.id !== action.payload);
      }
    },
    toggleProduct(state, action: PayloadAction<CartProduct>) {
      const currentItem = state.list.find((item) => {
        return item.id === action.payload.id;
      });

      if (!currentItem) {
        state.list.push(action.payload);
      } else {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { increaseProductCount, decreaseProductCount, toggleProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
