import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import categoryReducer from "../features/categorySlice";
import cartReducer from "../features/cartSlice";
// import { productApi } from "../store/api/Product";

const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
    // [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
