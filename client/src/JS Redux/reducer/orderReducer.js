import { CREATE_ORDER, SET_SHIPPING_ADDRESS, GET_ORDER } from "../constant/orderConstant";

const initialState = {
    order: [],
    shippingAddress: {}
  };
  
  export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER:
        return {...state, order: action.payload}
      case SET_SHIPPING_ADDRESS:
        return {...state, shippingAddress: action.payload}
      case GET_ORDER:
        return {...state, order : action.payload }
      default:
        return state;
    }
  };