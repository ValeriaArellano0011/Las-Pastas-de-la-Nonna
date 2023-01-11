import React, { useState, useEffect } from "react";
import { CartState } from "../../../Context/Context";
import { ListGroup, Button, Row, Col, Image, Form } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import './Cart.css';

const Cart = () => {

    const { state: {cart}, dispatch} = CartState()

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])    


    return(
        <div className="cart-section">
            <div className="product-container">
                <ListGroup>
                    {cart.map((prod, i) => (
                        <ListGroup.Item key={i}>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.photoURL} alt={prod.product} fluid rounded/>
                                </Col>
                                <Col md={2}>
                                    <span>{prod.product}</span>
                                </Col>
                                <Col md={2}>{prod.flavor}</Col>
                                <Col md={2}>${prod.price}</Col>  
                                <Col>
                                    <Button onClick={() => {dispatch({type: 'REMOVE_ONE_FROM_CART', payload: prod})}}>
                                        <AiFillDelete
                                            fontSize="20px"
                                            style={{cursor: 'pointer'}}
                                            />
                                    </Button>
                                </Col>
                                                              
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className="summary">
                <div>
                    <span className="title">Subtotal ({cart.length}) productos</span>
                    <br/>
                    <span style={{fontWeight: 700, fontSize: 20, alignSelf:'center'}}>Total: ${total}</span>
                    <br/>
                    <Form action="http://localhost:5000/checkout" method="POST">
                        <input type="hidden" name="cartProducts" value={JSON.stringify(cart)}></input>
                        <Button type="submit" disabled={cart.length === 0}>Proceder con el pago</Button>
                    </Form>
                </div>
                
            </div>
            
        </div>
    )
}

export default Cart;