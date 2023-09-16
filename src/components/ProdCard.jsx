import { useDispatch, useSelector } from 'react-redux'

// import { add, remove, inc, dec } from '../store/cartSlice'
import { useAddToCartMutation, useUpdateCartMutation, useDeleteFromCartMutation, useGetCartQuery } from '../services/apiSlice'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function ProdCard({ product, onCart }) {

    const { data: cart } = useGetCartQuery()
    const [addToCart, result1] = useAddToCartMutation()
    const [updateCart, result2] = useUpdateCartMutation()
    const [deleteFromCart, result3] = useDeleteFromCartMutation()

    const incQunatity = (product) => {
        updateCart({ ...product, quantity: product.quantity + 1 })
    }

    const decQunatity = (product) => {
        if (product.quantity === 1) deleteFromCart(product)
        else updateCart({ ...product, quantity: product.quantity - 1 })
    }

    // to inc dec quantity from products page
    let cartIndex, inCart, prodFromCart
    if (cart?.length > 0) cartIndex = cart?.findIndex(item => item.id === product.id)
    if (cartIndex != undefined && cartIndex !== -1) {
        inCart = true
        prodFromCart = cart[cartIndex]
    } else inCart = false
    // console.log(cart?.map(item => item.id), product.id, cartIndex, inCart)

    // console.log(result1, result2, result3) // for checking Mutauion Results

    const content = (
        <Card style={{ width: '18rem', margin: '5px 0' }} className='col-md-3'>
            <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{ height: '250px' }} />
            </div>
            <Card.Body>
                <Card.Title>{product.title.slice(0, 20)}{(product.title.length > 20) && "..."}</Card.Title>
                <Card.Text>
                    {product.description.slice(0, 50)}{(product.description.length > 50) && "..."}
                </Card.Text>
                <Card.Text>
                    ₹ {Math.floor(product.price * 60)}
                </Card.Text>
                {
                    onCart && (
                        <div className="text-center">
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary" onClick={() => decQunatity(product)}>-</button>
                                <button type="button" className="btn btn-outline-primary" disabled>{product.quantity}</button>
                                <button type="button" className="btn btn-primary" onClick={() => incQunatity(product)}>+</button>
                            </div>
                        </div>
                    )
                }

            </Card.Body>

            <Card.Footer style={{ background: '#fff' }} className='text-center'>
                {
                    (onCart ?
                        <Button variant="danger" onClick={() => deleteFromCart(product)}>Remove Item</Button> :
                        (
                            inCart ? (
                                <div className="text-center">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary" onClick={() => decQunatity(prodFromCart)}>-</button>
                                        <button type="button" className="btn btn-outline-primary" disabled>{prodFromCart?.quantity}</button>
                                        <button type="button" className="btn btn-primary" onClick={() => incQunatity(prodFromCart)}>+</button>
                                    </div>
                                </div>
                            ) : <Button variant="primary" onClick={() => addToCart({ ...product, quantity: 1 })}>Add To Cart</Button>
                        )
                    )}
            </Card.Footer>
        </Card>
    )

    return content
}

export default ProdCard;
