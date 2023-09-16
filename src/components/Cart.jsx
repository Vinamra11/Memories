// import { useSelector } from 'react-redux'
import ProdCard from './ProdCard'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

import { useGetCartQuery } from '../services/apiSlice'

function Products() {

    const {
        data: cart,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCartQuery()

    // console.log("from Query", cart1, isLoading, isError, isSuccess)


    // const cart = useSelector(state => state.cart) // for simple redux

    if (cart?.length === 0) {
        return (
            <div className='row align-items-center' style={{ minHeight: "80vh" }}>
                <div className='text-center'>
                    <h1>No Product in the Cart.</h1>
                    <Link to='/'>Continue Shopping</Link>
                </div>
            </div>
        )
    }


    const cards = (
        <div className='row' style={{ justifyContent: 'space-around' }}>
            {cart?.map(product => < ProdCard key={product.id} product={product} onCart />)}
        </div>
    )

    const total = (
        <div className='container' style={{ width: '100%' }}>
            <p className="justify-content-end">Total ₹ {Math.floor(cart?.map(a => a.price * a.quantity).reduce((a1, a2) => a1 + a2) * 60)}</p>
        </div>
    )

    const content = (
        <div>
            {
                isLoading ? (
                    <div className='row align-items-center justify-content-center' style={{ minHeight: "80vh" }}>
                        <Spinner animation="border" role="status" className='col-md-12'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : isSuccess ? (
                    <div className='container'>
                        {total}
                        {cards}
                    </div>
                ) : isError ? (
                    <div className='text-center'>
                        <Alert variant="danger" >
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                                {error} Try Again.
                            </p>
                        </Alert>
                    </div>
                ) : (
                    <p>SomeThing Went So Wrong. Even Error Handlers couldn't catch it.</p>
                )
            }
        </div>
    )

    return content
}

export default Products

