import React from "react";
import { Dropdown, Badge, Button, Image } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"
import { CartState } from "../../../Context/Context";
import { Link } from 'react-router-dom'
import './Dropdown.css'

const Dropdownn = () => {

    const { state: {cart}, dispatch } = CartState()

    return(
            <Dropdown style={{float: 'left', top: 90, position: 'fixed', zIndex: 34}} >
                <Dropdown.Toggle variant="danger">
                    <FaShoppingCart color="burlywood" fontSize="25px"/>
                    <Badge bg="secondary">{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth: 370}}>
                    {cart.length > 0 ? (
                        <>
                            {cart.map((prod) =>  (
                                <>
                                    <span className="cardItem" key={prod.id}>
                                    <Image className="cardItemImg" src={prod.photoURL} alt={prod.product} />
                                    <div className="cardItemDetail">
                                        <span>{prod.product}</span>
                                        <span>{prod.flavor}</span>
                                        <span>${prod.price}</span>                               
                                        
                                    </div>
                                    <AiFillDelete
                                            fontSize="20px"
                                            style={{cursor: 'pointer'}}
                                            onClick={() => {dispatch({type: 'REMOVE_FROM_CART', payload: prod})}}/>
                                    </span>
                                </>                              
                            ))}
                            <Link to="/cart">
                                <Button style={{width: '95%', margin: '0 10px'}}>
                                    Ir al carrito
                                </Button>
                            </Link>
                                
                            
                        </>
                        

                    ) : <span style={{padding: 10}}>El carrito está vacío!</span>}
                    
                </Dropdown.Menu>
            </Dropdown>
        
    )
}

export default Dropdownn;