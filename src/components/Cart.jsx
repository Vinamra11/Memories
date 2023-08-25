import { useSelector } from 'react-redux'
import ProdCard from './ProdCard'
import { Link } from 'react-router-dom'

function Products() {


    const cart = useSelector(state => state.cart)

    if (cart.length === 0) {
        return (
            <div className='text-center'>
                <h1>No Product in the Cart.</h1>
                <Link to='/'>Continue Shopping</Link>
            </div>
        )
    }


    const cards = (
        <div className='row' style={{ justifyContent: 'space-around' }}>
            {cart.map(product => < ProdCard key={product.id} product={product} onCart />)}
        </div>
    )

    const total = (
        <div className='container' style={{ width: '100%' }}>
            <p className="justify-content-end">Total ₹ {Math.floor(cart.map(a => a.price).reduce((a1, a2) => a1 + a2) * 60)}</p>
        </div>
    )

    const content = (
        <div>
            {/* <h1 className='text-center'>Product Dashbord</h1> */}
            <div className='container'>

                {total}
                {cards}
            </div>
        </div>
    )

    return content
}

export default Products

