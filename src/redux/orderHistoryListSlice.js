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
    }
})

export const { addToOrderList, } = orderHistoryListSlice.actions;
export default orderHistoryListSlice.reducer;

