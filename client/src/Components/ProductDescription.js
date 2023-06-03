import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProductDescription.css'
import { Button } from 'react-bootstrap'
import { postCart } from '../JS Redux/actions/CartAction'


const ProductDescription = () => {

  const dispatch = useDispatch();
  // const basket = useSelector(state=>state.cartReducer.basket)
  const product = useSelector(state=>state.productReducer.product);
  const [quantity, setQuantity] = useState(1)
  const handleAddtocart = () => {
    dispatch(postCart(product, quantity))
  }

  return (

<div className="cart">
  <div className="cart-item">
    <img className="product-image" src={product.selectedFile} alt={product.title} />
    <div className="product-details">
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-description">{product.price}</p>
      <div className="product-quantity">
        <label>Quantity:</label>
        <div className="quantity-buttons">
        <Button onClick={() => setQuantity(quantity + 1)} style={{ marginRight: '10px' }}> + </Button>
          <p className="product-description">{quantity}</p>
        <Button onClick={() => setQuantity(quantity - 1)} style={{ marginLeft: '10px' }} disabled={quantity === 1}> - </Button>
        </div>
      </div>
      <button className="add-to-cart" onClick={handleAddtocart} >Add to Cart</button>
    </div>
  </div>
</div>
  )
}

export default ProductDescription