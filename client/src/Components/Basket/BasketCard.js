import React from 'react'
import { Button, Card } from 'react-bootstrap'
// import { useSelector } from 'react-redux';

const BasketCard = ({cart}) => {


  return (

<div>
        <Card style={{ width: '18rem', margin:'10px', height:'38rem' }}>
      <Card.Img style={{ width: '17rem', height:'24rem', marginTop:'10px' }} variant="top" src={cart.productId.selectedFile}/>
      <Card.Body>
        <Card.Title>Quantity : {cart.count}</Card.Title>
        <Card.Title>Title : {cart.productId.title}</Card.Title>
        <Card.Title>Description : {cart.productId.description}</Card.Title>

        {/* <Card.Text>{product.description}</Card.Text> */}
        {/* <Card.Text>{cart.count}</Card.Text> */}
        {/* <Button style={{margin:"10px"}} variant="success" >Order Now</Button> */}
      </Card.Body>
    </Card>
    </div>




  //   <div className="cart">
  //   <div className="cart-item">
  //     <img className="product-image" src={product.selectedFile} alt={product.title} />
  //     {/* <img className="product-image" src={cart.selectedFile} alt={product.title} /> */}
  //     <div className="product-details">
  //       {/* <h2 className="product-title"> cart.title{cart.title}</h2> */}
  //       {/* <h2 className="product-title">cart.productId {cart.productId}</h2> */}
  //       {/* <p className="product-description">cart.description  {cart.description}</p> */}
  //       <p className="product-description">product.price  {product.price}</p>
  //       <div className="product-quantity">
  //         {/* <label>Quantity: {cart.count }</label> */}
  //         <div className="quantity-buttons">
  //         <Button onClick={() => setQuantity(quantity + 1)} style={{ marginRight: '10px' }}> + </Button>
  //           <p className="product-description">{quantity}</p>
  //         <Button onClick={() => setQuantity(quantity - 1)} style={{ marginLeft: '10px' }} disabled={quantity === 1}> - </Button>
  //         </div>
  //       </div>
  //       {/* <button className="add-to-cart">Add to Cart</button> */}
  //     </div>
  //   </div>
  // </div>
  )
}

export default BasketCard