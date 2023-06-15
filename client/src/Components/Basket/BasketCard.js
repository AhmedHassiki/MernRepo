import './Basket.css'
import React, {  useState } from 'react'
import { Button, CloseButton, Modal } from 'react-bootstrap'
import { useDispatch, } from 'react-redux'
import { deleteCart, postCart } from '../../JS Redux/actions/CartAction'
import { Link } from 'react-router-dom'

// import { useSelector } from 'react-redux';

const BasketCard = ({cart}) => {

  // const quantityBasket = useSelector(state => state.cartReducer.count)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(cart.count)

  const handleEdit = (id, count) => {
    dispatch(postCart(id, count));
    // dispatch(fetchCart())      
  }
  const handleDelete = (id) => {
    dispatch(deleteCart(id))
    // dispatch(fetchCart())
  }
  const handleTotal = () => {
    return cart.productId.price * quantity}

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
      <tbody>
        <tr style={{alignItems : "center"}}>
          <td style={{display:"flex" , flexWrap:'wrap'}}>
              <img style={{width:"70px"}} alt={cart.productId.title} src={cart.productId.selectedFile}/>
              {cart.productId.title}
          </td>
          <td>{cart.productId.price} DT</td>
          <td>
            <Button variant="outline-primary" onClick={() => setQuantity(quantity + 1)}> + </Button>
            {/* {quantity} */}
            <input className="counter" value={quantity} />
            <Button variant="outline-primary" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}> - </Button>
          
          </td>
          <td>{handleTotal()} DT</td>
          <td>
          <Link to="/panier"><Button  variant="outline-secondary" onClick={()=>handleEdit(cart.productId, quantity)}> Edit </Button></Link>
          </td>
          <td><CloseButton variant="Danger" onClick={handleShow} /></td>
          {/* <td><Button  variant="outline-danger" onClick={handleShow} >&times;</Button></td> */}
        </tr>
      </tbody>
      {/* <Button variant="primary" onClick={handleShow} >Launch demo modal</Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>{handleDelete(cart._id); handleClose()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default BasketCard