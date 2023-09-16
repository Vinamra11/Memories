import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
    tagTypes: ['cart'],
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => 'cart',
            transformResponse: res => res.sort((a, b) => b.id - a.id),// not required kept for memory
            providesTags: ['cart'],
        }),
        addToCart: builder.mutation({
            query: (product) => ({ //() for single line return
                url: 'cart',
                method: 'POST',
                body: product,
            }),
            invalidatesTags: ['cart']
        }),
        updateCart: builder.mutation({
            query: (product) => ({ //() for single line return
                url: `cart/${product.id}`,
                method: 'PATCH', //PUT -> replacing full record, PATCH -> replacing a part of record
                body: product
            }),
            invalidatesTags: ['cart']
        }),
        deleteFromCart: builder.mutation({
            query: ({ id }) => ({
                url: `cart/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['cart']
        }),
    })
})

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useUpdateCartMutation,
    useDeleteFromCartMutation,
} = cartApi