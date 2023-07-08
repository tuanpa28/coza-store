import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCartUser } from "../api/cart";

interface initialState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cart: any;
  isLoading: boolean;
}

const initialState: initialState = {
  cart: {},
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getCartByUser: any = createAsyncThunk(
  "cart/getCartUser",
  async () => {
    const { data } = await getCartUser();

    return data.cart;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCartByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartByUser.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isLoading = false;
      })
      .addCase(getCartByUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default cartSlice.reducer;
