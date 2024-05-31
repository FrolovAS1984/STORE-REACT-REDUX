import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/const.js";


const initialState = {
    list: [],
}

export const getCategories = createAsyncThunk(
    'categories/getCategories' ,
    async (_, thunkAPI) =>{
        try {
            const res = await axios.get(`${BASE_URL}/categories`);

            return res.data


        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error)


        }

    }
    )

const categoriesSlice = createSlice( {
    name : 'categories' ,
    initialState ,
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {

            state.list = action.payload

        });
    },


});

export default categoriesSlice.reducer;
