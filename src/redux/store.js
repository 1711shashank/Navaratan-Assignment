import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./productListSlice";
import userRoleSlice from "./userRoleSlice";

const store = configureStore({
    reducer: {
        userRole: userRoleSlice,
        cart: cartSlice,
        productList: productListSlice
    }
});

export default store;
