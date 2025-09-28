
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/services";
import { Brand } from "@/types/brand";

interface BrandState {
  brands: Brand[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: BrandState = {
  brands: null,
  loading: false,
  error: null,
};

export const getBrands = createAsyncThunk(
  "brands-all",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("brands");
      const { data } = res.data; 
      return data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Error");
    }
  }
);

const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default brandSlice.reducer;
