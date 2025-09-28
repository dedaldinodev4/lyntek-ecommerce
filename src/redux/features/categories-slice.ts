
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services";
import { Category } from "@/types/category";

interface CategoryState {
  categories: Category[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: null,
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "categories-all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("categories");
      const { data } = res.data; 
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Error");
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
