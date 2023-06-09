import { CREATE_ORDER, SET_SHIPPING_ADDRESS, GET_ORDER, LOAD_ORDER} from "../constant/orderConstant";

const initialState = {
    order: [],
    loading : false,
    shippingAddress: {}
  };
  
  export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_ORDER:
        return {...state, loading: true}
      // case CREATE_ORDER:
      //   return {...state, order: action.payload, loading: false}
      case SET_SHIPPING_ADDRESS:
        return {...state, shippingAddress: action.payload, loading: false}
      case GET_ORDER:
        return {...state, order : action.payload, loading: false }
      default:
        return state;
    }
  };