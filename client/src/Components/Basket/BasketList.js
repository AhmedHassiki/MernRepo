import React from 'react'
import { useSelector } from 'react-redux'
import BasketCard from './BasketCard'

const BasketList = () => {

    const { basket, loading, error } = useSelector(state=>state.cartReducer)

    if (loading){
      return <h1>Loading . . .</h1>
    }
    if (error){
      return <h1>An error has occured when getting carts from basket</h1>
    }

  return (
    <div>
      <h2>Mon panier</h2>
      {basket.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
          basket.map(el => (<BasketCard key={el._id} cart={el}/>)))}
    </div>
  )
}

export default BasketList