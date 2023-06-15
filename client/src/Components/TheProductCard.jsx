import React from 'react'
// import  windowsminipng from './windowsminipng.png'
import { Card, Button} from 'react-bootstrap';
// import { Container, Row, Col, Image } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getOneProduct } from '../JS Redux/actions/productAction'
import { Link } from 'react-router-dom'
import { toggleTrue } from '../JS Redux/actions/edit'

const TheProductCard = ({product}) => {
  

  const dispatch = useDispatch();
  const delProduct = (id) => dispatch(deleteProduct(id)); // delete one product
  const getProduct = (id) => dispatch(getOneProduct(id));// get one product to edit it
  const editTrue = () => dispatch(toggleTrue()); // toggle button between add product and edit product

  // const isAuth = useSelector(state=>state.authReducer.isAuth);
  const userAuth = useSelector(state=>state.authReducer.user)
  
  return (
<>
        <Link to={`/desc/${product._id}`} onClick={()=>getProduct(product._id)} style={{ textDecoration:"none", color:"black" }}>
      <Card.Img variant="top" src={product.selectedFile} style={{ height: '380px', width: '100%', objectFit: 'cover', padding :"15px" }} />
      <Card.Body>
        <Card.Title style={{ fontSize: '0.9rem', margin:'15px'}}>{product.title}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Card.Text style={{ fontSize: '0.9rem', margin:'15px'}}>{product.price} DT</Card.Text>
        {/* <Card.Text>Category : {product.category}</Card.Text> */}
        {/* <Link to={`/desc/${product._id}`} onClick={()=>getProduct(product._id)}>More Info</Link> */}
        {/* {userAuth.role === "admin" ? <></> : <Button variant="primary" style={{margin:"10px"}}>Buy</Button>} */} 
        
      </Card.Body>
    </Link>
    <div> 
      {/* i have moved this conditions coz when i delete a product it linked me to the /desc/id of the product it has been deleted :/   */}
    {
      userAuth.role === "admin" ? 
      <>
      <Link to={`/edit/${product._id}`}><Button style={{margin:"10px"}} variant="success" onClick={()=>{getProduct(product._id); editTrue()}}>Edit</Button></Link>
      <Button style={{margin:"10px"}} variant="danger" onClick={()=>delProduct(product._id)}>Delete</Button>
      </>
      : 
      <></>
    }
        </div>
        </>
  )
}

export default TheProductCard






// import React from 'react'
// // import  windowsminipng from './windowsminipng.png'
// import { Card, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteProduct, getOneProduct } from '../JS Redux/actions/productAction'
// import { Link } from 'react-router-dom'
// import { toggleTrue } from '../JS Redux/actions/edit'

// const TheProductCard = ({product}) => {
  

//   const dispatch = useDispatch();
//   const delProduct = (id) => dispatch(deleteProduct(id)); // delete one product
//   const getProduct = (id) => dispatch(getOneProduct(id));// get one product to edit it
//   const editTrue = () => dispatch(toggleTrue()); // toggle button between add product and edit product

//   // const isAuth = useSelector(state=>state.authReducer.isAuth);
//   const userAuth = useSelector(state=>state.authReducer.user)
  
//   return (
//     <div>
//         <Link to={`/desc/${product._id}`} onClick={()=>getProduct(product._id)} style={{ textDecoration:"none", color:"black" }}>

//           <Card style={{ width: '18rem', margin:'10px', height:'38rem' }}>
//       <Card.Img style={{ width: '17rem', height:'24rem', marginTop:'10px' }} variant="top" src={product.selectedFile}/>
//       <Card.Body>
//         <Card.Title>{product.title}</Card.Title>
//         {/* <Card.Text>{product.description}</Card.Text> */}
//         <Card.Text>Price : {product.price}$</Card.Text>
//         {/* <Card.Text>Category : {product.category}</Card.Text> */}
//         {/* <Link to={`/desc/${product._id}`} onClick={()=>getProduct(product._id)}>More Info</Link> */}
//         {/* {userAuth.role === "admin" ? <></> : <Button variant="primary" style={{margin:"10px"}}>Buy</Button>} */} 
//         {
//           userAuth.role === "admin" ? 
//           <>
//           <Link to={`/edit/${product._id}`}><Button style={{margin:"10px"}} variant="success" onClick={()=>{getProduct(product._id); editTrue()}}>Edit</Button></Link>
//           <Button style={{margin:"10px"}} variant="danger" onClick={()=>delProduct(product._id)}>Delete</Button>
//           </>
//           : 
//           <></>
//         }
//       </Card.Body>
//     </Card>
//     </Link>
//     </div>
//   )
// }

// export default TheProductCard