import { CREATE_ORDER, SET_SHIPPING_ADDRESS } from "../constant/orderConstant";

const initialState = {
    order: {},
    shippingAddress: {}
  };
  
  export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_ORDER:
        return {...state, order: action.payload}
      case SET_SHIPPING_ADDRESS:
        return {...state, shippingAddress: action.payload}
      default:
        return state;
    }
  };