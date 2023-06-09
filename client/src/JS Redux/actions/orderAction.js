import axios from "axios";
import { CREATE_ORDER, SET_SHIPPING_ADDRESS, GET_ORDER } from "../constant/orderConstant";

export const createOrder = (checkoutOrder) => async (dispatch) => {
    try {
        const config = {
            headers:{
                "x-auth-token": localStorage.getItem('token')
            }
        };
    const { data } = await axios.post("/api/order", checkoutOrder, config);
    dispatch({
    type: CREATE_ORDER,
    payload: data.order,
    });
} catch (error) {
    console.log(error);
}
};

export const setShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SET_SHIPPING_ADDRESS,
    payload: data.order,
  });
};

export const getOrder = () => async(dispatch) => {
    try {
        const config = {
            headers:{
                "x-auth-token": localStorage.getItem('token')
            }
        };
    const order = await axios.get("/api/order/", config);
    dispatch({
        type : GET_ORDER,
        payload : order.data.response
    })
    } catch (error) {
        console.log(error);
    }
}
