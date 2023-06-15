import React,{ useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Modal , Form} from 'react-bootstrap';
import { userLogin } from '../JS Redux/actions/authActions';
import { fetchCart } from '../JS Redux/actions/CartAction';

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");


  //   const refreshPage = ()=>{
  //     window.location.reload();
  //  }
    const handleClose = () => setShow(false);
    const handleShow  = () => setShow(true);
    const handleLogin = () => {
      dispatch(userLogin({email, password})); // userLogin from actions
      dispatch(fetchCart())
      navigate('/');
      // ! when i login it cannot render rapidly the item in the cart, so i made 1 second latency, to refresh the page automatically 
      // setTimeout( function() { refreshPage() }, 1000);
    }

  //   const refreshPage = ()=>{
  //     window.location.reload();
  //  }

    useEffect(()=>{      
        dispatch(fetchCart())
    },[])

    
    

  return (
    <div>
        <Button variant="dark" onClick={handleShow} style={{marginRight:"3rem"}}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleLogin() ;handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FormLogin