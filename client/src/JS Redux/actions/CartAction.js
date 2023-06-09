import { ADD_TO_CART, FETCH_CART_SUCCESS, FETCH_CART_FAILURE , LOAD_CART } from '../constant/CartConstant';
import axios from 'axios'



export const postCart = (id, count) => async (dispatch) => {
   dispatch(loading())
  try {
    const config = {
      headers:{
          "x-auth-token": localStorage.getItem('token')
      }
    };
    const { data } = await axios.post('/api/cart', { productId: id, count }, config);
    dispatch({ type: ADD_TO_CART, payload: data.cart } );
    // dispatch(fetchCart())
  } catch (error) {
    console.log(error);
  }
};

export const fetchCart = () => async(dispatch) => {
  dispatch(loading())
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem('token')
      }
    };
    let result = await axios.get('/api/cart', config);
    // console.log("result.data.response : ", result.data.response)
    dispatch({ 
      type: FETCH_CART_SUCCESS, 
      payload: result.data.response });

  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_CART_FAILURE });
  }
};

export const loading = (dispatch) => {
  return{
    type:LOAD_CART
  }
}

export const deleteCart = (id) => async(dispatch)=>{
  try {
      // console.log("id:" , id)
      await axios.delete(`/api/cart/${id}`);
      dispatch(fetchCart())
  } catch (error) {
      console.log(error)
  }
}