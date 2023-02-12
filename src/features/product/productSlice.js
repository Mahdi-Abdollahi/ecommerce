import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServices from "../../api/product";

const initialState = {
  products: [],
  product: {},
  similarProduct: [],
  status: "idle",
};

export const getProductsByCategory = createAsyncThunk(
  "product/getProducts",
  async ({ categoryName, sort }) => {
    const response = await productServices.getProductsPerCategoryAPI(
      categoryName,
      sort
    );
    return response.data;
  }
);
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  const response = await productServices.getProductByIdAPI(id);
  return response.data;
});
export const getSimilarProducts = createAsyncThunk(
  "product/getSimilarProducts",
  async (id) => {
    const response = await productServices.getSimilarProductsAPI(id);
    return response.data;
  }
);
export const getProductAndSimilarProducts = createAsyncThunk(
  "product/getProductAndSimilarProducts",
  async (productId) => {
    const response = await productServices.getProductAndSimilarProductsAPI(
      productId
    );
    return response;
  }
);
export const getProductsBySubCategories = createAsyncThunk(
  "product/getProductsBySubCategories",
  async ({ category, subCategories, sort }) => {
    const response = await productServices.getProductsBySubCategoriesAPI(
      category,
      subCategories,
      sort
    );
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductsByCategory.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getSimilarProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getSimilarProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.similarProduct = action.payload;
      })
      .addCase(getSimilarProducts.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getProductsBySubCategories.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getProductsBySubCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(getProductsBySubCategories.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getProductAndSimilarProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getProductAndSimilarProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.product = action.payload.product;
        state.similarProduct = action.payload.similarProducts.filter(
          (product) => product.id !== action.payload.product.id
        );
      })
      .addCase(getProductAndSimilarProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectSimilarProducts = (state) => state.products.similarProduct;
export const selectProduct = (state) => state.products.product;
export const selectLoading = (state) => state.products.state === "loading";
export const selectProductState = (state) => state.products.state;

export default productSlice.reducer;
