import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products: [],
}

const api = 'https://fakestoreapi.com/products';

export const fetchProducts = createAsyncThunk('products/products', async () => {
    const response = await axios.get(api);
    return response.data;
})

//const api = "/jsonapi/node/product";

// export const fetchProducts = createAsyncThunk("products/products", async () => {
//     const response = await axios.get(api);
//     return response.data.data.map(item => ({
//         id: item.id,
//         title: item.attributes.title,
//         description: item.attributes.body?.value || "",
//         created: item.attributes.created,
//     }));
// });


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            });
    },
})

export default productSlice.reducer;

