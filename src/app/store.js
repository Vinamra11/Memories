import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../store/cartSlice';
import productSlice from '../features/productSlice';
import { cartApi } from '../services/apiSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
        [cartApi.reducerPath]: cartApi.reducer,
    }
});

export default store;
