import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ShowProductOrdered = ({order}) => {
    const orders = useSelector(state => state.orderReducer.order)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const products = order.products
    console.log("my order", products)
return (
    <>
    <Button variant="primary" onClick={handleShow}>
        Click to see products bought
        </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      {
          products.map((el)=> 
        //   {el.products.map(
    <tbody>
        <tr>
          <td><img style={{width:"70px"}} alt={el.product.title} src={el.product.selectedFile}/>
          {el.product.title}</td>
          <td>{el.product.price} DT</td>
        </tr>
      </tbody>
          )}
        </Table>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ShowProductOrdered