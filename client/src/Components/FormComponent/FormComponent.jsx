import React, { useEffect, useState } from 'react'
// import FileBase from "react-file-base64";
import './FormComponent.css'
import {Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, postProduct } from '../../JS Redux/actions/productAction';
import { Link } from 'react-router-dom';


const FormComponent = () => {
  const dispatch = useDispatch()

    const edit = useSelector((state)=>state.editReducer.edit)
    const productReducer = useSelector((state)=>state.productReducer.product)
    
    const [product, setProduct] = useState({title:"", description:"", price:"", category:"", selectedFile:""})

    useEffect(()=> {
      edit ? setProduct(productReducer) : setProduct({title:"", description:"", price:"", category:"", selectedFile:""})
    }, [edit, productReducer])

    const handleChange = (e) => {
      setProduct({...product, [e.target.name]: e.target.value})
    }

    const handleProduct = () => {
      if(!edit) {
        dispatch(postProduct(product))
      } else {
        dispatch(editProduct(productReducer._id, product))
      }
    }

  return (
    <div>
        <Form className='form-component'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" value={product.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={product.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={product.price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" name="category" value={product.category} onChange={handleChange} />
        <Form.Label>Link image</Form.Label>
        <Form.Control type="text" name="selectedFile" value={product.selectedFile} onChange={handleChange} />
        {/* <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                    setProduct({ ...product, selectedFile: base64 })
                    }
                /> */}
      </Form.Group>
      <Link to="/"><Button onClick={handleProduct}>{ edit? "Edit product" : "Add product" }</Button></Link>
    </Form>
    </div>
  )
}

export default FormComponent