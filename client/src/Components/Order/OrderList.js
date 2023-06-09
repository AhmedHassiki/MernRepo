import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../JS Redux/actions/CartAction'
import { Button, Form, Spinner, Table } from 'react-bootstrap'
import CheckoutOrder from './checkoutOrder'

const OrderList = () => {
    const dispatch = useDispatch()
    const basket = useSelector((state)=>state.cartReducer.basket)
    // console.log("lpanier :", basket)
    const loading = useSelector((state)=>state.cartReducer.loading)
    
    useEffect(()=>{
        dispatch(fetchCart())
    },[])
  return (
    <div>
      <h2>Votre Commande</h2>
          <div>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Shipping Address</Form.Label>
                  <Form.Control style={{ width: '150px' }} type="text" placeholder="Enter your shipping address" />
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control style={{ width: '250px' }} type="number" placeholder="Enter your phone number" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            
            label="Livraison par E-mail"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
           
            label="Livraison à domicile"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
        </div>
        ))}
      
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label=" Paiement en ligne (E-dinar - Sobflouss - D17)"
                  />
                <Form.Check // prettier-ignore
                    disabled
                    type="switch"
                    label="Paiement à la livraison"
                    id="disabled-custom-switch"
                  />
                
              </Form>
                <Table className='table'>
                <thead>
                  <tr>
                    <th colSpan={1}>Produits</th>
                    <th>Total</th>
                  </tr>
                  </thead>
                  </Table>
            </div>

      {/* {basket.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (   basket.map((el) => (<BasketCard key={el._id} cart={el}/>)))} */}
      { loading ? (<Spinner animation="border" variant="danger" />) : basket.length === 0 ? (
      <h2>There's no cart in the basket</h2> 
      ) : ( basket.map((el)=> <CheckoutOrder key={el._id} cart={el} /> ) ) }
      {/* <Link ><Button >Payer</Button></Link> */}
      <p>Sous-total</p>
      <Button variant="primary" type="submit">
                  Buy
                </Button>
      
      
    </div>
  )
}

export default OrderList