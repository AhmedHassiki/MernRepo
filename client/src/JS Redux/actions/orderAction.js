import axios from "axios";
import { CREATE_ORDER, SET_SHIPPING_ADDRESS } from "../constant/orderConstant";

export const createOrder = (order) => async (dispatch) => {
    try {
        const config = {
            headers:{
                "x-auth-token": localStorage.getItem('token')
            }
        };
    const { data } = await axios.post("/api/order", order, config);
    dispatch({
    type: CREATE_ORDER,
    payload: data,
    });
} catch (error) {
    console.log(error);
}
};

export const setShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SET_SHIPPING_ADDRESS,
    payload: data,
  });
};