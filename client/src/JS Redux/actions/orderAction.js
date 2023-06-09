import axios from "axios";
import { CREATE_ORDER, SET_SHIPPING_ADDRESS, GET_ORDER, LOAD_ORDER } from "../constant/orderConstant";

export const createOrder = (checkoutOrder) => async (dispatch) => {
    dispatch(loading())
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
    dispatch(getOrder()) // zedneha wa9t state yjibou array, ki na3mel create ywalli object, w commentina create f reducer
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
    dispatch(loading())
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
    console.log("order.data.response", order.data.response)
    // console.log(order.email)
    } catch (error) {
        console.log(error);
    }
}
export const loading = (dispatch) => {
    return{
      type:LOAD_ORDER
    }
  }