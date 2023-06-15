// import React, { useState } from 'react'
// import { Button, Card } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { deleteCart, fetchCart, postCart } from '../../JS Redux/actions/CartAction'
// import {Link} from "react-router-dom"
// import {Table} from 'react-bootstrap'
// // import { useSelector } from 'react-redux';

// const CheckoutOrder = ({cart}) => {

//   const basket = useSelector(state => state.cartReducer.basket)
//     const handleTotal = () => {
//         return cart.productId.price * cart.count}

//         // const sousTotal = () => {
//         //   return cart.reduce((total, product) => {
//         //     return total + (product.productId.price * product.count);
//         //   }, 0);
//         // };
//         const cartArr = Object.values(cart);
// // console.log("cartArr", cartArr);
// const sousTotal = () => {
//   return cart.reduce((total, product) => {
//     const price = typeof product.productId.price === 'number' ? product.productId.price : 0;
//     const count = typeof product.count === 'number' ? product.count : 0;
//     return total + (price * count);
//   }, 0);
// };
// // console.log("sousTotal", sousTotal)

//     return (

    
//       <Table>
//       <tbody>
//         <tr>
//           <td colSpan={1} style={{display:"flex" , flexWrap:'wrap'}}>
//               <img style={{width:"70px"}} alt={cart.productId.title} src={cart.productId.selectedFile}/>
//               <h6 style={{marginLeft : "50px"}} >{cart.productId.title}</h6>
//           </td>
            
//           {/* <td>{cart.productId.price} DT</td> */}
//           <td>{handleTotal()} DT</td>
//         </tr>
//       </tbody>
//       {/* <td>{sousTotal()} DT</td> */}

//     </Table>













// // <div  style={{display:"flex" , flexWrap:'wrap', justifyContent:'center'}}>
// //         <Card style={{ width: '18rem', margin:'10px', height:'38rem' }}>
// //       <Card.Img style={{ width: '17rem', height:'24rem', marginTop:'10px' }} variant="top" src={cart.productId.selectedFile}/>
// //       <Card.Body>
        
// //         <Card.Title>Title : {cart.productId.title}</Card.Title> 
// //         <Card.Title>Quantity : {quantity} </Card.Title> 

// //         {/* <Card.Title></Card.Title> */}
// //         {/* <Card.Title>Description : {cart.productId.description}</Card.Title> */}
// //         {/* <Button style={{margin:"10px"}} variant="success" >Order Now</Button> */}
// //         <Button onClick={() => setQuantity(quantity + 1)} style={{ marginRight: '10px' }}> + </Button>
// //           {/* <p className="product-description">{quantity}</p> */}
// //         <Button onClick={() => setQuantity(quantity - 1)} style={{ marginLeft: '10px' }} disabled={quantity === 1}> - </Button>
// //         <Link to="/panier"><Button style={{ marginLeft: '10px' }} onClick={()=>handleEdit(cart.productId, quantity)}> Edit </Button></Link>
// //         <Button onClick={()=>handleDelete(cart._id)} > Delete</Button>
// //       </Card.Body>
// //     </Card>
// //     </div>
//   )
// }

// export default CheckoutOrder;

















// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { createOrder, setShippingAddress } from "../../JS Redux/actions/orderAction";

// // const CheckoutOrder = ({ history }) => {
// // const cart = useSelector((state) => state.cart);
// // const { cartItems, shippingAddress } = cart;

// // const dispatch = useDispatch();

// // const [shippingAddressData, setShippingAddressData] = useState({
// //                                                                     address: shippingAddress.address || "",
// //                                                                     city: shippingAddress.city || "",
// //                                                                     postalCode: shippingAddress.postalCode || "",
// //                                                                     country: shippingAddress.country || "",
// //                                                                 });

// // const handleChange = (e) => {
// //     setShippingAddressData({ ...shippingAddressData, [e.target.name]: e.target.value});
// //     };

// // const handleSubmit = (e) => {
// //     e.preventDefault();
// //     dispatch(setShippingAddress(shippingAddressData));
// //     dispatch(createOrder({
// //                             orderItems: cartItems,  
// //                             shippingAddress: shippingAddressData,
// //                             paymentMethod: "paypal",
// //                             itemsPrice: cartItems.reduce(
// //                             (acc, item) => acc + item.price * item.quantity,
// //                             0
// //                             ),
// //                             shippingPrice: 0,
// //                             taxPrice: 0,
// //                             totalPrice: cartItems.reduce(
// //                             (acc, item) => acc + item.price * item.quantity,
// //                             0
// //                             ),
// //                             })
// //                             );
// //                                 history.push("/order/success");
// //                             };

// // return (
// //     <div>
// //         <h2>Livraison</h2>
// //         <form onSubmit={handleSubmit}>
// //             <div>
// //             <label htmlFor="address">Adresse</label>
// //             <input
// //             type="text"
// //             id="address"
// //             name="address"
// //             value={shippingAddressData.address}
// //             onChange={handleChange}
// //             />
// //             </div>
// //             <div>
// //             <label htmlFor="city">Ville</label>
// //             <input
// //             type="text"
// //             id="city"
// //             name="city"
// //             value={shippingAddressData.city}
// //             onChange={handleChange}
// //             />
// //             </div>
// //             <div>
// //             <label htmlFor="postalCode">Code postal</label>
// //             <input
// //                 type="text"
// //                 id="postalCode"
// //                 name="postalCode"
// //                 value={shippingAddressData.postalCode}
// //                 onChange={handleChange}
// //             />
// //         </div>
// //         <div>
// //             <label htmlFor="country">Pays</label>
// //             <input
// //                 type="text"
// //                 id="country"
// //                 name="country"
// //                 value={shippingAddressData.country}
// //                 onChange={handleChange}
// //             />
// //             </div>
// //             <button type="submit">Passer la commande</button>
// //         </form>
// //     </div>
// //   );
// // };

// // export default CheckoutOrder;
