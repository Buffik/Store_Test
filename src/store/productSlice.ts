import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AnyAction,
} from '@reduxjs/toolkit';
import { Response, ProductState } from 'src/types/types';

const initialState: ProductState = {
  list: {
    limit: 20,
    products: [],
    total: 100,
    skip: 0,
  },
  status: 'loading',
  error: null,
};

export const fetchProducts = createAsyncThunk<
  Response,
  undefined,
  { rejectValue: string }
>('product/fetchProducts', async function (_, { rejectWithValue }) {
  const response = await fetch('https://dummyjson.com/products?limit=20');

  if (!response.ok) {
    return rejectWithValue(`Server rejected with ${response.statusText}`);
  }

  const data = (await response.json()) as Response;

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
