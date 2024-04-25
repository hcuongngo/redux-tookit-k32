import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    selectProduct: (state, action) => {
      state.product = action.payload
    },
    removeSelectedProduct: (state, action) => {
      state.product = {}
    }
  }
})

export const { setProducts, selectProduct, removeSelectedProduct } = productSlice.actions
export default productSlice.reducer
