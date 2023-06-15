import React, { useEffect, useState } from 'react'
import Home from './screen/Home';
import Add from './screen/Add';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from './JS Redux/actions/edit'
import QuiSommesNous from './screen/QuiSommesNous';
import Footer from './screen/Footer';
import Mention from './screen/Mention';
import PrivateRoute from './Components/PrivateRoute';
import FormLogin from './Components/FormLogin';
import FormRegister from './Components/FormRegister';
import { getAuthUser, logout } from './JS Redux/actions/authActions';
import ProductDescription from './Components/ProductDescription';
import BasketList from './Components/Basket/BasketList';
import { fetchCart } from './JS Redux/actions/CartAction';
import OrderList from './Components/Order/OrderList';

function App() {
const navigate = useNavigate();
const dispatch = useDispatch()
const editFalse = () => dispatch(toggleFalse())
const userAuth = useSelector((state)=>state.authReducer.user)
const auth = useSelector((state)=>state.authReducer.isAuth)

const basket = useSelector(state=>state.cartReducer.basket)

const [message, setMessage] = useState("");


const logOut = () => {
  dispatch(logout());
  navigate('/')
}

const getUser = async() =>{
  await dispatch(getAuthUser());
}
useEffect(()=>{
    if(localStorage.getItem("token")){
    getUser()    
  } 
},[])

useEffect(() => {
  fetch("https://authentikey-mern-app.onrender.com/")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
},[]);

// ! this use effect i've used it to refresh and get basket.length in front of Panier in the navbar
useEffect(()=>{
  dispatch(fetchCart())
},[auth,userAuth])

  return (
    <div>

      {message}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">AuthentiKey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Link to="/"><Button className="border-0 bg-transparent" variant="none" style={{color: "white"}}>Home</Button></Link>
              {userAuth.role === "admin" ? (<Link to="/add"><Button onClick={editFalse} className="border-0 bg-transparent" variant="none" style={{color: "white"}}>Add</Button></Link>) :(<></>) }
          </Nav>
          <Nav>
          { auth ? 
          <>
            <Button variant="dark" style={{marginRight:"3rem"}} onClick={logOut}>Logout</Button>
            <Link to="/order"><Button className="border-0 bg-transparent" variant="none" style={{color: "white"}}>Vos Achats</Button></Link>
          </>
          : (
          <>
            <FormLogin /> 
            <FormRegister />
          </>
          )
        }
      {/* {basket.map(el=><Link to="/panier"><Button className="border-0 bg-transparent" variant="none" style={{color: "white"}}>Panier {el.count}  </Button></Link>)} */}
      <Link to="/panier"><Button className="border-0 bg-transparent" variant="none" style={{color: "white"}}>Panier {basket.length === 0  ? <></> : basket.length}</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <Link to="/"><Button>Home</Button></Link> */}
      {/* <Link to="/add" onClick={editFalse}><Button>Add</Button></Link> */}
      {/* {(isAuth && user.role==="admin") ? <Link to="/add" onClick={editFalse}><Button>Add</Button></Link> : <></>} */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PrivateRoute><Add /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><Add /></PrivateRoute>} />
        <Route path="/quisommesnous" element={<QuiSommesNous />} />
        <Route path="/mention" element={<Mention />} />        
        <Route path="/desc/:id" element={<ProductDescription />}/>
        <Route path="/panier" element={<BasketList />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App; 