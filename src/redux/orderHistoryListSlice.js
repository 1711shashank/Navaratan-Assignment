import { createSlice } from "@reduxjs/toolkit";

const orderHistoryListSlice = createSlice({
    name: 'orderHistoryList',
    initialState: {
        items: []
    },
    reducers: {
        addToOrderList: (state, action) => {

            const productData = action.payload;
            state.items.push(productData);

        },
        clearOrderHistory: (state) => {
            state.items = [];
        }
    }
})

export const { addToOrderList, clearOrderHistory } = orderHistoryListSlice.actions;
export default orderHistoryListSlice.reducer;

