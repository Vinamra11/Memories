import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart1',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload); // we are changing the original state
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload.id); // since we are returning a new state 
        },
        dec(state, action) {
            const product = action.payload

            return state.map(item => (item.id === action.payload.id) ? { ...product, quantity: product.quantity - 1 } : item)
        },
        inc: {
            reducer: (state, action) => {
                return state.map(item => (item.id === action.payload.id) ? action.payload : item)
            },
            prepare: (product) => {
                return { payload: { ...product, quantity: product.quantity + 1 } }
            }

        }

    }
});

// export const { add, remove, inc, dec } = cartSlice.actions;
// export default cartSlice.reducer;