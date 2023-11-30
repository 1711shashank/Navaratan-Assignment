import { createSlice } from "@reduxjs/toolkit";
import { initalProductList } from "../data/productList";

const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        items: initalProductList
    },
    reducers: {
        addNewProduct: (state, action) => {
            const productData = action.payload;
            state.items.push(productData);
        },
        removeProduct: (state, action) => {
            const productData = action.payload;
            state.items = state.items.filter((item) => item.products.id !== productData.id);
        }
    }
})

export const { addNewProduct, removeProduct } = productListSlice.actions;
export default productListSlice.reducer;

