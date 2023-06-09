import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, fetchCart, postCart } from '../../JS Redux/actions/CartAction'
import {Table} from 'react-bootstrap'
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


  return (
<>
    <Table>
      <tbody>
        <tr>
          <td style={{display:"flex" , flexWrap:'wrap', width : '80px'}}>
              <img style={{width:"70px"}} alt={cart.productId.title} src={cart.productId.selectedFile}/>
              {/* <h6 style={{marginLeft : "50px"}} >{cart.productId.title}</h6> */}
              {cart.productId.title}
          </td>
          <td style={{width : '30px'}}>{cart.productId.price} DT</td>
          <td style={{width : '30px'}}>
            <ButtonToolbar><Button bsSize="xsmall" onClick={() => setQuantity(quantity + 1)}> + </Button>
            {quantity}
            <Button bsSize="xsmall" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}> - </Button>
            </ButtonToolbar>
          </td>
          <td>{handleTotal()}</td>
        </tr>
      </tbody>
      </Table>
      <Link to="/panier"><Button style={{ marginLeft: '10px' }} onClick={()=>handleEdit(cart.productId, quantity)}> Edit </Button></Link>
      <Button onClick={()=>handleDelete(cart._id)} > Delete</Button>
    
    
    </>
// <div  style={{display:"flex" , flexWrap:'wrap', justifyContent:'center'}}>
//         <Card style={{ width: '18rem', margin:'10px', height:'38rem' }}>
//       <Card.Img style={{ width: '17rem', height:'24rem', marginTop:'10px' }} variant="top" src={cart.productId.selectedFile}/>
//       <Card.Body>
        
//         <Card.Title>Title : {cart.productId.title}</Card.Title> 
//         <Card.Title>Quantity : {quantity} </Card.Title> 

//         {/* <Card.Title></Card.Title> */}
//         {/* <Card.Title>Description : {cart.productId.description}</Card.Title> */}
//         {/* <Button style={{margin:"10px"}} variant="success" >Order Now</Button> */}
//         <Button onClick={() => setQuantity(quantity + 1)} style={{ marginRight: '10px' }}> + </Button>
//           {/* <p className="product-description">{quantity}</p> */}
//         <Button onClick={() => setQuantity(quantity - 1)} style={{ marginLeft: '10px' }} disabled={quantity === 1}> - </Button>
//         <Link to="/panier"><Button style={{ marginLeft: '10px' }} onClick={()=>handleEdit(cart.productId, quantity)}> Edit </Button></Link>
//         <Button onClick={()=>handleDelete(cart._id)} > Delete</Button>
//       </Card.Body>
//     </Card>
//     </div>
  )
}

export default BasketCard