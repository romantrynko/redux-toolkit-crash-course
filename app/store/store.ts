import { cartReducer } from './cart/cart.slice';
import { productApi } from './products/product.api';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { [productApi.reducerPath]: productApi.reducer, cart: cartReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>