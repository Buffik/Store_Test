import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit';
import { Product, ProductState } from 'src/types/types';

const initialState: ProductState = {
  list: [],
  status: 'loading',
  error: null,
};

export const fetchProducts = createAsyncThunk<
  Product[],
  undefined,
  { rejectValue: string }
>('product/fetchProducts', async function (_, { rejectWithValue }) {
  const response = await fetch('https://dummyjson.com/products?limit=20');

  if (!response.ok) {
    return rejectWithValue('Server Error!');
  }

  const data = await response.json();

  return data;
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'fulfilled';
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'rejected';
      });
  },
});

export default productSlice.reducer;
