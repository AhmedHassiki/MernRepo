import React, { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../JS Redux/actions/productAction';
import TheProductCard from './TheProductCard';

const TheProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.productReducer.products)
    const loadProducts = useSelector((state)=>state.productReducer.loadProducts)
    
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    

  return (
    <>
    <h1 style={{marginTop:'55px', marginBottom:'10px'}}>Nos Produits</h1>
    <div  style={{display:"flex" , flexWrap:'wrap', justifyContent:'center'}}>
        {/* EACH JSX CODE SHOULD BE IN PARENTHESES */}
      { loadProducts ? (<Spinner animation="border" variant="danger" />) : products.length === 0 ? (
      <h2>There's no product</h2> 
      ) : ( products.map((el)=> <TheProductCard key={el._id} product={el} /> ) ) }
    
    </div>
    </>
  )
}

export default TheProductList