import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

// import cartSlice from '../store/cartSlice';
import productSlice from '../features/productSlice';
import { cartApi } from '../services/apiSlice';

const store = configureStore({
    reducer: {
        // cart: cartSlice,
        products: productSlice,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    devTools: true,//for development
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartApi.middleware)
});

setupListeners(store.dispatch)

export default store;
