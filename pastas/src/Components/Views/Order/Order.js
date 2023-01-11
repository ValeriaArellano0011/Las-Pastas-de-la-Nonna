import React from "react";
import styled from "styled-components";
import { CartState } from "../../../Context/Context";
import Dropdownn from "../../Components/Dropdown/Dropdown";
import { Form, Button } from "react-bootstrap"
import toast, { Toaster } from 'react-hot-toast';

const CardsContainer = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    margin-top: 50px
`

export default function Order(){

    const notifySuccess = (text) => toast.success(text);
    const notifyError = (text) => toast.error(text);

    const {state: {cart}, dispatch} = CartState()

    const { state: {products} } = CartState()

    const [ val, setVal ] = React.useState('')

    const [selectedVariant, setSelectedVariant] = React.useState('');
    const [productSelected, setProductSelected] = React.useState('');

    const formSubmit = (e, product )=> {

        e.preventDefault()

        console.log('esta es la variante: ', selectedVariant)
        console.log('esta es el producto: ', productSelected)

        if(selectedVariant !== -1 && selectedVariant){

            if(product.flavors.indexOf(selectedVariant) >= 0 && product === productSelected){
               
                dispatch({type: 'ADD_TO_CART', payload: 
                {
                    id: product.id,
                    product: product.product,
                    flavor: selectedVariant,
                    price: product.price,
                    photoURL: product.photoURL,
                    units: product.units
                }
                })
                notifySuccess('Agregado al carrito!')
                setVal('')
            }else{
                notifyError('Debes elegir un sabor primero.')
            }

            
        }else{
            notifyError('Debes elegir un sabor primero.')
        }
        
    }

    return(
        <div>
            <div>
                <Dropdownn/>
            </div>
            
            <Toaster />

            

            <CardsContainer>
                {products.map((product, i) => 
                    <div className="card" style={{width: '18rem', alignSelf: 'center', justifySelf: 'center'}} key={i}>
                        <img src={product.photoURL} class="card-img-top" alt="pastas"/>
                        <h5 class="card-title">{product.product}</h5>
                        <div class="card-body">
                            <Form onSubmit={(e) => formSubmit(e, product)} name={product}>
                            <Form.Control as="select"
                                onChange={(e)=> {
                                    const selectedVariant = e.target.value;
                                    setSelectedVariant(selectedVariant);
                                    setProductSelected(product)
                                }} >
                                <option value="" disabled selected hidden>
                                Elegí un sabor
                                </option>
                                {product.flavors.map((flavor) => (
                                <option value={flavor}>{flavor}</option>
                                ))}
                            </Form.Control>
                            <p class="card-text">{product.units}</p>
                            <p class="card-text">${product.price}</p> 
                            <Button type="submit">Añadir al carrito</Button>
                            </Form>
                        </div>
                    </div>
                )}
            </CardsContainer>
        </div>
        
    )
}