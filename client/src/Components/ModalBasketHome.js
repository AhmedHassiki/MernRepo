// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';

// const ModalBasketHome = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
  

//   const handleShow = () => setShow(true);


//   return (
//     <div>
//         <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//               <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>
//         <Modal.Header closeButton>
//           <Modal.Title>Félicitation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         Un nouveau article a été ajouté à votre panier
//         </Modal.Body>
//         <Modal.Footer>
//             <Link to="/" onClick={handleClose}><Button variant="secondary" onClick={handleClose}> Continuer vos achats </Button></Link>
//             <Link to="/panier" onClick={handleClose}><Button variant="primary">Vers Panier</Button></Link>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }

// export default ModalBasketHome

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postCart } from '../JS Redux/actions/CartAction';

function ModalBasketHome({laquantite}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const product = useSelector(state=>state.productReducer.product);
  const basket = useSelector((state) => state.cartReducer.basket);


  const handleAddtocart = () => {
    dispatch(postCart(product._id, laquantite))
  }

  return (
    <>
      <Button variant="primary" onClick={()=>{handleAddtocart(); handleShow()}}>
      Add to Cart
      </Button>
      {/* <Button className="add-to-cart" onClick={()=>{handleAddtocart(); handleShow()}} >Add to Cart</Button> */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Félicitation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Un nouvel article a été ajouté à votre panier.
          Vous avez actuellement {basket.length} articles.
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
          Continuer vos achats
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Vers Panier
          </Button> */}
          <Link to="/"><Button variant="secondary" onClick={handleClose}> Continuer vos achats </Button></Link>
          <Link to="/panier"><Button variant="primary" onClick={handleClose}>Vers Panier</Button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBasketHome;