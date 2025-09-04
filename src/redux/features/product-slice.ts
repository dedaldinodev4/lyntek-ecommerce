
import type { Product } from "@/types/product";
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { api } from "@/services";

interface ProductState {
  items: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: null,
  loading: false,
  error: null,
};

// buscar produtos
export const getProducts = createAsyncThunk(
  "products-all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("products");
      return res.data;
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
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;
