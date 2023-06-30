import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../api/product";
import IProduct from "../interfaces/product";
import { getCategory } from "../api/category";
import { deleteImages } from "../api/upload";

const initialState = {
  products: [],
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllProduct: any = createAsyncThunk(
  "products/getproducts",
  async (query: string): Promise<IProduct[]> => {
    const {
      data: { products },
    } = await getProducts(query);

    return products;
  }
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hendleAddProduct: any = createAsyncThunk(
  "products/addProducts",
  async (product: IProduct): Promise<IProduct> => {
    const { data } = await createProduct(product);

    return data;
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hendleRemoveProduct: any = createAsyncThunk(
  "products/removeProducts",
  async (id: string): Promise<IProduct> => {
    const { data } = await deleteProduct(id);
    // call api xóa image

    await deleteImages(data.product.image.publicId);

    data.product.album.map(
      async (item: { url: string; publicId: string }) =>
        await deleteImages(item.publicId)
    );
    return data;
  }
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hendleUpdateProduct: any = createAsyncThunk(
  "products/updateProducts",
  async (product: IProduct): Promise<IProduct> => {
    const { data } = await updateProduct(product);

    return data;
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getProductsByCategoryId: any = createAsyncThunk(
  "category/getCategoryId",
  async (id: string): Promise<IProduct[]> => {
    const { data } = await getCategory(id);
    return data.category.productId;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isLoading = false;
      })
      // set products by categoryId
      .addCase(getProductsByCategoryId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategoryId.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductsByCategoryId.rejected, (state) => {
        state.isLoading = false;
      })
      // add product
      .addCase(hendleAddProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hendleAddProduct.fulfilled, (state, action) => {
        state.products = state.products.concat(action.payload?.product);
        state.isLoading = false;
      })
      .addCase(hendleAddProduct.rejected, (state) => {
        state.isLoading = false;
      })
      // remove product
      .addCase(hendleRemoveProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hendleRemoveProduct.fulfilled, (state, action) => {
        state.products = state.products?.filter(
          (product: IProduct) => product._id !== action.payload.product._id
        );

        state.isLoading = false;
      })
      .addCase(hendleRemoveProduct.rejected, (state) => {
        state.isLoading = false;
      })
      // update product
      .addCase(hendleUpdateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hendleUpdateProduct.fulfilled, (state) => {
        // const newProducts = state.products?.map((product: IProduct) =>
        //   product._id === action?.payload?.product?._id
        //     ? action.payload.product
        //     : product
        // );
        // state.products = newProducts;
        state.isLoading = false;
      })
      .addCase(hendleUpdateProduct.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setIsLoading } = productsSlice.actions;
export default productsSlice.reducer;
