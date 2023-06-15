import React, { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import ShowProductOrdered from "./ShowProductOrdered";

const OrderCard = ({ order }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>
            {order.user.name} {order.user.lastName}
          </td>
          <td>{order.products.length}</td>
          <td>{order.phone}</td>
          <td>{order.totalCost}</td>
          <td>{order.email}</td>
          <td>{order.createdAt}</td>
        </tr>
      </tbody>
      <ShowProductOrdered order={order} />
    </>
  );
};

export default OrderCard;

// import React, { useState } from 'react'
// import { Button, Card } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import ShowProductOrdered from './ShowProductOrdered'

// const OrderCard = ({order}) => {

//   return (
//     <div>
//         <Card style={{ width: '18rem' }}>
//       {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//       <Card.Body>
//         {/* <Card.Title>{order.products.map((el)=>el.count)}</Card.Title> */}
//         <Card.Text>
//         <h6>Nom d'utilisateur : {order.user.name} {order.user.lastName}</h6>
//         <h6>Quantité : {order.products.length}</h6>
//         <h6>Téléphone : {order.phone}</h6>
//         <h6>Total : {order.totalCost}</h6>
//         <h6>E-mail : {order.email}</h6>
//         <h6>Créer le : {order.createdAt}</h6>
//         </Card.Text>

//         <ShowProductOrdered order={order}/>
//       </Card.Body>
//     </Card>
//     </div>
//   )
// }

// export default OrderCard
