//  changing cart for RTK query

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import STATUS from '../constants/status';

const initialState = {
    data: [],
    status: STATUS.IDLE
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.status = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = STATUS.ERROR;
            })
    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('product/get', async () => {
    const result = await fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
    return result;
}); 