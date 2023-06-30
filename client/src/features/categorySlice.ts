import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../api/category";
import ICategory from "../interfaces/category";

const initialState = {
  categories: [],
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllCategory: any = createAsyncThunk(
  "category/getCategory",
  async (): Promise<ICategory[]> => {
    const {
      data: { categories },
    } = await getCategories();
    return categories;
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hendleCreateCategory: any = createAsyncThunk(
  "category/createCategory",
  async (category: ICategory): Promise<ICategory> => {
    const { data } = await createCategory(category);
    return data.category;
  }
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hendleRemoveCategory: any = createAsyncThunk(
  "category/removeCategory",
  async (id: string): Promise<string> => {
    await deleteCategory(id);
    return id;
  }
);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hendleUpdateCategory: any = createAsyncThunk(
  "category/updateCategory",
  async (category: ICategory): Promise<ICategory> => {
    const { data } = await updateCategory(category);
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categories = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllCategory.rejected, (state) => {
        state.isLoading = false;
      })
      // create category
      .addCase(hendleCreateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hendleCreateCategory.fulfilled, (state, action) => {
        state.categories = state.categories.concat(action.payload);
        state.isLoading = false;
      })
      .addCase(hendleCreateCategory.rejected, (state) => {
        state.isLoading = false;
      })
      // delete category
      .addCase(hendleRemoveCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hendleRemoveCategory.fulfilled, (state, action) => {
        state.categories = state.categories?.filter(
          (category: ICategory) => category._id !== action.payload
        );

        state.isLoading = false;
      })
      .addCase(hendleRemoveCategory.rejected, (state) => {
        state.isLoading = false;
      })
      // update category
      .addCase(hendleUpdateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(hendleUpdateCategory.fulfilled, (state) => {
        // state.categories = state.categories?.map((category: ICategory) =>
        //   category._id === action.payload?.category?._id
        //     ? action.payload?.category
        //     : category
        // );
        state.isLoading = false;
      })
      .addCase(hendleUpdateCategory.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setIsLoading } = categorySlice.actions;
export default categorySlice.reducer;
