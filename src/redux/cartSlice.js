import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {

            const productData = action.payload;

            const existingItem = state.items.find((item) => item.products.id === productData.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ products: productData, quantity: 1 });
            }
        },
        removeItem: (state, action) => {

            const productData = action.payload;
            state.items = state.items.filter((item) => item.products.id !== productData.id);

        },
        reduceQuantity: (state, action) => {
            const productData = action.payload;

            const existingItem = state.items.find((item) => item.products.id === productData.id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.products.id !== productData.id);
            } else {
                existingItem.quantity -= 1;
            }

        }
    }
})

export const { addItem, removeItem, reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;

