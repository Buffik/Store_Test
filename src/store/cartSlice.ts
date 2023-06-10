import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, CartState } from 'src/types/types';

const initialCartState: CartState = {
  list: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProduct(state, action: PayloadAction<CartProduct>) {
      const isProductInCart = state.list.some(
        (item) => item.id === action.payload.id
      );
      if (isProductInCart) {
        state.list.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count += 1;
          }
        });
      } else {
        state.list.push(action.payload);
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
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
        console.log(item.id);
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

export const { addProduct, deleteProduct, toggleProduct } = cartSlice.actions;

export default cartSlice.reducer;
