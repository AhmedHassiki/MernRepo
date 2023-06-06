import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../JS Redux/actions/CartAction'
import { Spinner } from 'react-bootstrap'
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
      {/* {basket.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (   basket.map((el) => (<BasketCard key={el._id} cart={el}/>)))} */}
      { loading ? (<Spinner animation="border" variant="danger" />) : basket.length === 0 ? (
      <h2>There's no cart in the basket</h2> 
      ) : ( basket.map((el)=> <CheckoutOrder key={el._id} cart={el} /> ) ) }
      {/* <Link ><Button >Payer</Button></Link> */}
    </div>
  )
}

export default OrderList