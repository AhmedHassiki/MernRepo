import React from 'react'
import { Button, Card } from 'react-bootstrap'

const OrderCard = ({order}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        {/* <Card.Title>{order.products.map((el)=>el.count)}</Card.Title> */}
        <Card.Text>
        {order.phone}
        </Card.Text>
        <Button variant="primary">Click to see products</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default OrderCard