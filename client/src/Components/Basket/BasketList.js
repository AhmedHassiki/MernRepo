import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import { Button, Form, Spinner, Table } from "react-bootstrap";
import { fetchCart } from "../../JS Redux/actions/CartAction";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../../JS Redux/actions/orderAction";

const BasketList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cartReducer.basket);

  const loading = useSelector((state) => state.cartReducer.loading);
  //*********** state for the checkbox payment and shipping */

  // const [checkpayment, setCheckpayment] = useState(false);


  //*********** state for data that'll be sent to database */
  const [newOrder, setNewOrder] = useState({
    shippingAddress: "",
    paymentMethod: "koko",
    email: "",
    phone: "",
    checkpayment:false
  });
  console.log("basket", basket)

  const handleOrder = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const sendOrder = () => {
    dispatch(createOrder(newOrder));
    navigate('/order')
  };

  const total = () => {
    let t = 0;
    let total = 0;
    basket.map((el) => {
      t = el.productId.price * el.count;
      total = total + t;
    });
    if(newOrder.checkpayment === "true"){
      return total + 7;
    }
    return total;
  };


  const isFormValid = () => {
    return (
      newOrder.shippingAddress.trim() !== "" &&
      newOrder.email.trim() !== "" &&
      newOrder.phone.trim() !== "" &&
      (newOrder.checkpayment === "true" || newOrder.checkpayment === "false")
      
    );
  };

  const [isFormValidated, setIsFormValidated] = useState(false);  

  useEffect(() => {
    setIsFormValidated(isFormValid());
  }, [newOrder]);

  useEffect(() => {
    dispatch(fetchCart());
  },[]);


  return (
    <div>
      <h2>Mon panier</h2>

      <div style={{ display: "flex" }}>
        
        <Table className="table" style={{ margin: "20px", padding: "20px" }}>
          <thead>
            <tr>
              <th >Produits</th>
              <th >Prix</th>
              <th >Quantité</th>
              <th >Total</th>
              <th >Update</th>
              <th >Delete</th>
            </tr>
          </thead>

          {loading ? (
            <Spinner animation="border" variant="danger" />
          ) : basket.length === 0 ? (
            <h2>There's no cart in the basket</h2>
            
          ) : (
            basket.map((el) => <BasketCard key={el._id} cart={el} />)
          )}

        </Table>

        <Form>
        <h5> Montant total : {total()}DT </h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              style={{ width: "250px", height: "100px" }}
              type=""
              placeholder="Enter your shipping address"
              onChange={handleOrder}
              name="shippingAddress"
              required
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              style={{ width: "250px" }}
              type="text"
              placeholder="Enter your e-mail"
              onChange={handleOrder}
              name="email"
              required
            />
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              style={{ width: "250px" }}
              type="number"
              placeholder="Enter your phone number"
              onChange={handleOrder}
              name="phone"
              required
            />
          </Form.Group>
          <label>
            <input
              type="checkbox"
              checked={newOrder.checkpayment === "false"}
              onChange={handleOrder}
              name="checkpayment"
              value={false}
            />
            &nbsp;Livraison par Email
          </label>
          <label>
            <input
              type="checkbox"
              checked={newOrder.checkpayment ==="true"}
              name="checkpayment"
              onChange={handleOrder}
              value={true}
            />
            &nbsp;Livraison à domicile + 7DT
          </label>

          {/* <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label=" Paiement en ligne (E-dinar - Sobflouss - D17)"
          />
          <Form.Check // prettier-ignore
            disabled
            type="switch"
            label="Paiement à la livraison"
            id="disabled-custom-switch"
          /> */}
        </Form>
      </div>
        <Button onClick={() => sendOrder()} disabled={!isFormValid()}>Confirmer ma commande</Button>
    </div>
  );
};

export default BasketList;