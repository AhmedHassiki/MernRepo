import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_LOAD, GET_PRODUCTS_ERROR, GET_ONE_PRODUCT, EDIT_PRODUCT } from "../constant/constTypes";
import axios from 'axios'

export const getProducts = () => async(dispatch)=>{
    dispatch({type: GET_PRODUCTS_LOAD})
    try {
        let result = await axios.get('/api/product')
        // console.log(result.data.response)
        dispatch({
            type: GET_PRODUCTS_SUCCESS, 
            payload: result.data.response})
            
    } catch (error) {
        console.log(error)
        dispatch({ type: GET_PRODUCTS_ERROR, payload:error})
    }
}

export const deleteProduct = (id) => async(dispatch)=>{
    try {
        // console.log("id:" , id)
        await axios.delete(`/api/product/${id}`);
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}

export const getOneProduct = (id) => (dispatch) =>{
    axios
    .get(`/api/product/${id}`)
    .then((res)=>dispatch({type:GET_ONE_PRODUCT, payload:res.data.response}))
    .catch((err)=>console.log(err))
}

export const postProduct = (product) => async(dispatch) => {
    try {
        await axios.post("/api/product", product)
        dispatch(getProducts())
    } catch (error) {
        console.log(error)
    }
}


export const editProduct = (id, product) => async(dispatch) => {
    try {
        const result = axios.patch(`/api/product/${id}`, product)
        dispatch({type: EDIT_PRODUCT, payload: result.data.msg}, getProducts() )
    } catch (error) {
        console.log(error)
    }
}
