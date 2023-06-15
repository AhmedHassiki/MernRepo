import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ProductDescription.css'
import { Button} from 'react-bootstrap'
import ModalBasketHome from './ModalBasketHome'
import { getOneProduct } from '../JS Redux/actions/productAction'
import { useParams } from 'react-router-dom'


const ProductDescription = () => {
  const {id} = useParams(); //**! when i refresh the ProductDescription, it can't get again the id of the product, so it shows nothing
  // console.log("firstID : " , id)//**! so i took the id with useParams and gave it to like a pram in the useEffect.
  const product = useSelector(state=>state.productReducer.product);
  const [quantity, setQuantity] = useState(1)

// //*********** modal functions from reactbootstrap modals */
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


  // const handleAddtocart = () => {
  //   dispatch(postCart(product._id, quantity))
  // }
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getOneProduct(id))
    },[]) 


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
     {/* <Button className="add-to-cart" onClick={()=>{handleAddtocart(); handleShow()}} >Add to Cart</Button> */}
     <ModalBasketHome laquantite={quantity}/>
     {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Félicitation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Un nouveau article a été ajouté à votre panier
        </Modal.Body>
        <Modal.Footer>
          <Link to="/"><Button variant="secondary" onClick={handleClose}> Continuer vos achats </Button></Link>
          <Link to="/panier"><Button variant="primary" onClick={handleClose}>Vers Panier</Button></Link>
        </Modal.Footer>
      </Modal> */}
    </div>
  </div>
</div>
  )
}

export default ProductDescription



