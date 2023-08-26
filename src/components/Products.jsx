import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert';




import { getProducts } from '../features/productSlice'
import ProdCard from './ProdCard'
import STATUS from '../constants/status'

function Products() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const { data: products, status } = useSelector(state => state.products)

    if (status === STATUS.ERROR) {
        return (
            <div className='text-center'>
                <Alert variant="danger" >
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        try again.
                    </p>
                </Alert>
            </div>

        )
    }

    if (status === STATUS.LOADING) {
        return (
            <div className='row align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
                <Spinner animation="border" role="status" className='col-md-12'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

        )
    }

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
