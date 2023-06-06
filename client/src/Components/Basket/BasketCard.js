import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteCart, fetchCart, postCart } from '../../JS Redux/actions/CartAction'
import {Link} from "react-router-dom"
import {Table} from 'react-bootstrap'
// import { useSelector } from 'react-redux';

const BasketCard = ({cart}) => {

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(cart.count)

  const handleEdit = async(id, count) => {
      dispatch(postCart(id, count));
      dispatch(fetchCart())      
    }
  const handleDelete = (id) => {
    dispatch(deleteCart(id))
    dispatch(fetchCart())
  }
  
  

console.log(cart);

  return (
<>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Produits</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2} style={{display:"flex" , flexWrap:'wrap'}}>
              <img style={{width:"70px"}} alt={cart.productId.title} src={cart.productId.selectedFile}/>
              <h6 style={{marginLeft : "50px"}} >{cart.productId.title}</h6>
          </td>
          <td></td>
          <td>{cart.productId.price} DT</td>
          

          <td style={{display:"flex" , flexWrap:'wrap'}}>
            <Button onClick={() => setQuantity(quantity + 1)} style={{ marginRight: '10px' }}> + </Button>
            <p className="product-description">{quantity}</p>
            <Button onClick={() => setQuantity(quantity - 1)} style={{ marginLeft: '10px' }} disabled={quantity === 1}> - </Button></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    
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