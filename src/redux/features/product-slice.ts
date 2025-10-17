
import { Product } from "@/types/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services";
import { customerProducts } from "@/utils/product";

interface ProductState {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: null,
  loading: false,
  error: null,
};


export const getProducts = createAsyncThunk(
  "products-all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("products?page=1&limit=8");
      const { data } = response.data; 
      const result = customerProducts(data);

      return  result;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Error");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
