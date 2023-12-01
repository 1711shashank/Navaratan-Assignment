import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import orderHistoryListSlice from "./orderHistoryListSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        productList: productListSlice,
        orderHistoryList: orderHistoryListSlice
    }
});

export default store;
