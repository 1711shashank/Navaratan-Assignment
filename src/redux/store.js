import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        productList: productListSlice
    }
});

export default store;
