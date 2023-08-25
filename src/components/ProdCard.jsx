import { useDispatch } from 'react-redux'

import { add, remove } from '../store/cartSlice'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function ProdCard({ product, onCart }) {

    const dispatch = useDispatch()

    const addToCart = (product) => {
        // console.log("addtoCart ", product)
        dispatch(add(product))
    }

    const removeFromCart = (product) => {
        // console.log("removeFromCart ", product)
        dispatch(remove(product))
    }

    return (
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
            </Card.Body>

            <Card.Footer style={{ background: '#fff' }} className='text-center'>
                {
                    (onCart ?
                        <Button variant="danger" onClick={() => removeFromCart(product)}>Remove Item</Button> :
                        <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
                    )}
            </Card.Footer>
        </Card>
    );
}

export default ProdCard;
