// first route


import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: [] };

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload; // we are changing the original state
        },
    }
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        //api call
        const result = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());

        dispatch(fetchProducts(result));
    }
}