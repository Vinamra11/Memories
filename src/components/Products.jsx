import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../store/productSlice'
import ProdCard from './ProdCard'

function Products() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const products = useSelector(state => state.products.data)

    const cards = (
        <div className='row' style={{ justifyContent: 'space-around' }}>
            {products.map(product => < ProdCard key={product.id} product={product} />)}
        </div>
    )

    const content = (
        <div>
            {/* <h1 className='text-center'>Product Dashbord</h1> */}
            <div className='container'>
                {cards}
            </div>
        </div>
    )

    return content
}

export default Products
