import { configureStore } from "@reduxjs/toolkit";

import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";
import userInfoReducer from './features/user-slice'
import authReducer from './features/auth-slice'
import productReducer from './features/product-slice'
import categoryReducer from './features/categories-slice'
import brandReducer from './features/brands-slice'
import productPaginationReducer from './features/product-pagination-slice'

import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
    userInfoReducer,
    authReducer,
    productReducer,
    categoryReducer,
    brandReducer,
    productPaginationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
