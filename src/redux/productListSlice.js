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
        updateProduct: (state, action) => {
            const productData = action.payload;
            const index = state.items.findIndex((item) => item.id === productData.id);

            if (index !== -1) {
                state.items[index] = action.payload;
            }

        },
        removeProduct: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        }
    }
})

export const { addNewProduct, updateProduct, removeProduct } = productListSlice.actions;
export default productListSlice.reducer;

