import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderServices from "../../api/order";

const initialState = {
  orders: [],
  order: {},
  status: "idle",
};

// export const getProductsByCategory = createAsyncThunk(
//   "product/getProducts",
//   async ({ categoryName, sort }) => {
//     const response = await productServices.getProductsPerCategoryAPI(
//       categoryName,
//       sort
//     );
//     return response.data;
//   }
// );
// export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
//   const response = await productServices.getProductByIdAPI(id);
//   return response.data;
// });
// export const getSimilarProducts = createAsyncThunk(
//   "product/getSimilarProducts",
//   async (id) => {
//     const response = await productServices.getSimilarProductsAPI(id);
//     return response.data;
//   }
// );
// export const getProductAndSimilarProducts = createAsyncThunk(
//   "product/getProductAndSimilarProducts",
//   async (productId) => {
//     const response = await productServices.getProductAndSimilarProductsAPI(
//       productId
//     );
//     return response;
//   }
// );
export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (orderData) => {
    const response = await orderServices.postOrderAPI(orderData);
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = "loading";
      })

      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = "idle";
        state.order = action.payload;
      })
      .addCase(postOrder.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const selectOrders = (state) => state.order.orders;
export const selectProduct = (state) => state.order.product;
export const selectLoading = (state) => state.order.state === "loading";
export const selectProductState = (state) => state.order.state;

export default orderSlice.reducer;
