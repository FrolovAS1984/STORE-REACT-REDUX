import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "./categories/categoriesSlice.js";
import prodactsSlice from "./prodacts/prodactsSlice.js";
export const store = configureStore({
    reducer:{
        categories: categoriesSlice,
        products: prodactsSlice

    },
    devTools: true,

})