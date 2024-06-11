import {createAsyncThunk , createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/const.js";


const initialState = {
    list: [],
    filtered:[],
    // related:[]
}

export const getProducts = createAsyncThunk(
    'products/getProducts' ,
    async (_, thunkAPI) =>{
        try {
            const res = await axios.get(`${BASE_URL}/products`);

            return res.data


        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error)


        }

    }
    )

const productsSlice = createSlice( {
    name : 'products' ,
    initialState ,
    reducers:{
        filterByPrice:(state, action) => {
            state.filtered = state.list.filter((item)=>item.price <= action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {

            state.list = action.payload

        });
    },


});


export const {filterByPrice} = productsSlice.actions;
export default productsSlice.reducer;