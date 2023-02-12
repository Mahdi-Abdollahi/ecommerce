import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServices from "../../api/product";

const initialState = {
  allCategories: [],
  category: {},
  status: "idle",
};

export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async () => {
    const response = await productServices.getAllCategoriesAPI();
    return response.data;
  }
);

export const getCatetegory = createAsyncThunk(
  "category/getCategory",
  async (categoryName) => {
    const response = await productServices.getCategoryAPI(categoryName);
    return response.data[0];
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.allCategories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getCatetegory.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getCatetegory.fulfilled, (state, action) => {
        state.status = "idle";
        state.category = action.payload;
      })
      .addCase(getCatetegory.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const selectAllCategory = (state) => state.category.allCategories;
export const selectCategory = (state) => state.category.category;

export default categorySlice.reducer;
