import type { ISignInRequest, ISignUpRequest } from "@/types/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

// login
export const loginUser = createAsyncThunk(
  "auth-login",
  async (credentials: ISignInRequest, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3333/api/v1/auth/login", credentials);
      return res.data; // { access_token: "..." }
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || "Erro no login");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth-register",
  async (data: ISignUpRequest, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3333/api/v1/auth/register",data);
      return res.data; // { access_token: "..." }
    } catch (err: any) {
      return rejectWithValue(err.response.data.message || "Erro no login");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("lyntek-token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.access_token;
        localStorage.setItem("lyntek-token", action.payload.access_token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
