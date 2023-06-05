import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketCard from './BasketCard'
import { Spinner } from 'react-bootstrap'
import { fetchCart } from '../../JS Redux/actions/CartAction'

const BasketList = () => {

  

    // const basket= useSelector(state=>state.cartReducer.basket)
    // const loading = useSelector(state=>state.cartReducer.loading)
    // const error= useSelector(state=>state.cartReducer.error)
    // console.log("lpanier :", basket)

    // if (error){
    //   return <h1>An error has occured when getting carts from basket</h1>
    // }
    const dispatch = useDispatch()
    const basket = useSelector((state)=>state.cartReducer.basket)
    console.log("lpanier :", basket)
    const loading = useSelector((state)=>state.cartReducer.loading)
    
    useEffect(()=>{
        dispatch(fetchCart())
    },[])
  

  return (
    <div>
      <h2>Mon panier</h2>
      {/* {basket.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (   basket.map((el) => (<BasketCard key={el._id} cart={el}/>)))} */}
      { loading ? (<Spinner animation="border" variant="danger" />) : basket.length === 0 ? (
      <h2>There's no cart in the basket</h2> 
      ) : ( basket.map((el)=> <BasketCard key={el._id} cart={el} /> ) ) }

    </div>
  )
}

export default BasketList