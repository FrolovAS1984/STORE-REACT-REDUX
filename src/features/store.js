import { configureStore } from '@reduxjs/toolkit'
import CategoriesSlice from "./categories/categoriesSlice.js";
export const store = configureStore({
    reducer:{
        categories: CategoriesSlice,
    },
    devTools: true,

})