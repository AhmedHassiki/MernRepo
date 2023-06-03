import { ADD_TO_CART, FETCH_CART_SUCCESS, FETCH_CART_FAILURE } from '../constant/CartConstant';
import axios from 'axios'



export const postCart = (product, count) => async (dispatch) => {
  try {
    const config = {
      headers:{
          "x-auth-token": localStorage.getItem('token')
      }
    };
    const { data } = await axios.post('/api/cart/add', { productId: product._id, count }, config);
    dispatch({ type: ADD_TO_CART, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCart = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem('token')
      }
    };
    const { data } = await axios.get('/api/cart/items', config);
    dispatch({ type: FETCH_CART_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_CART_FAILURE });
  }
};