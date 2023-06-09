import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import { Button, Form, Spinner, Table } from "react-bootstrap";
import { fetchCart } from "../../JS Redux/actions/CartAction";
import { Link } from "react-router-dom";
import { createOrder } from "../../JS Redux/actions/orderAction";

const BasketList = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.cartReducer.basket);
  // console.log("lpanier :", basket)
  const loading = useSelector((state) => state.cartReducer.loading);
  //*********** state for the checkbox payment and shipping */
  // const [checkpayment, setCheckpayment] = useState(false)
  // const handleChange = (e) => {
  //   setCheckpayment(e.target.checked)
  // }
  const [checkpayment, setCheckpayment] = useState(false);
  console.log("checkpayment : ",checkpayment)
  // const handleChange = (e) => {
  //   setCheckpayment(e.target.name : e.target.checked);
  // };

  //*********** state for data that'll be sent to database */
  const [newOrder, setNewOrder] = useState({
    shippingAddress: "",
    paymentMethod: "koko",
    email: "",
    phone: "",
    checkpayment:false
  });
  console.log("order : " , newOrder)

  const handleOrder = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };
  // console.log("newOrder", newOrder);

  const sendOrder = () => {
    dispatch(createOrder(newOrder));
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

  // console.log(total());

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div>
      <h2>Mon panier</h2>

      <div style={{ display: "flex" }}>
        <Table className="table" style={{ margin: "20px", padding: "20px" }}>
          <thead>
            <tr>
              <th style={{ width: "80px" }}>Produits</th>
              <th style={{ width: "30px" }}>Prix</th>
              <th style={{ width: "30px" }}>Quantité</th>
              <th style={{ width: "30px" }}>Total</th>
            </tr>
          </thead>

          {/* {basket.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (   basket.map((el) => (<BasketCard key={el._id} cart={el}/>)))} */}
          {loading ? (
            <Spinner animation="border" variant="danger" />
          ) : basket.length === 0 ? (
            <h2>There's no cart in the basket</h2>
          ) : (
            basket.map((el) => <BasketCard key={el._id} cart={el} />)
          )}
          <h5> {total()} </h5>
        </Table>
        <Form>
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
            />
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              style={{ width: "250px" }}
              type="text"
              placeholder="Enter your e-mail"
              onChange={handleOrder}
              name="email"
            />
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              style={{ width: "250px" }}
              type="text"
              placeholder="Enter your phone number"
              onChange={handleOrder}
              name="phone"
            />
          </Form.Group>
          {/* {["checkbox"].map((type) => (
            <div key={`reverse-${type}`} className="mb-3">
              <Form.Check
                label="Livraison par E-mail"
                // name="group1"
                type={type}
                id={`reverse-${type}-1`}
                // name = "noShippingCost"
                // onChange={setCheckpayment(checkpayment===true))}
              />
              <Form.Check
                //  onChange={()=>setIsShippingCost(true)}
                label="Livraison à domicile"
                // name="group1"
                type={type}
                id={`reverse-${type}-2`}
                onChange={handleOrder}
                name = "ShippingCost"
              />
            </div>
          ))} */}
          <label>
            <input
              type="checkbox"
              checked={newOrder.checkpayment === "false"}
              onChange={handleOrder}
              name="checkpayment"
              value={false}
            />
            email
          </label>
          <label>
            <input
              type="checkbox"
              checked={newOrder.checkpayment ==="true"}
              name="checkpayment"
              onChange={handleOrder}
              value={true}
            />
            Livraison à domicile + 7DT
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
      <Link to="/order">
        <Button onClick={() => sendOrder()}>Confirmer ma commande</Button>
      </Link>
    </div>
  );
};

export default BasketList;
