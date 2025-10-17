
import { Product } from "@/types/product";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services";
import { customerProducts } from "@/utils/product";

interface ProductState {
  products: Product[];
  paginator: {
    totalResults: number | null;
    pages: number | null;
    currentPage: number| null;
    prevPage: number | null;
    nextPage: number | null;
    perPage: number | null;
    totalCurrentResults: number | null;
    lastPage: number | null;
  },
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  paginator: {
    totalResults: 0,
    pages: 10,
    currentPage: 0,
    prevPage: 0,
    nextPage: 0,
    perPage: 12,
    totalCurrentResults: 0,
    lastPage: 0,
  },
  loading: false,
  error: null,
};


export const findAllProducts = createAsyncThunk(
  "products-pagination",
  async ({ page = 1, limit = 12 }: { page?: number; limit?: number }, { rejectWithValue }) => {
    try {
      const response = await api.get(`products?page=${page}&limit=${limit}`);
      const result = response.data; 
      return  result;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Error");
    }
  }
);

const productPaginationSlice = createSlice({
  name: "products-pagination-all",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(findAllProducts.fulfilled, (state, action) => {
        const { data, paginator,  } = action.payload
        state.loading = false;
        state.products =customerProducts(data);
        state.paginator = paginator;
      })
      .addCase(findAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productPaginationSlice.reducer;
