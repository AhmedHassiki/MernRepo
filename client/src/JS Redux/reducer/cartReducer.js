import { ADD_TO_CART, FETCH_CART_FAILURE, FETCH_CART_SUCCESS, LOAD_CART } from '../constant/CartConstant';

const initialState = {
  basket : [],
  loading : false,
  error : false
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
    return {...state , loading:true}
    case ADD_TO_CART:
      return {...state, basket : action.payload , loading:false }
    case FETCH_CART_SUCCESS:
        return {...state, basket : action.payload, loading: false, error: false};
    case FETCH_CART_FAILURE:
        return {...state, basket : [], loading: false, error: true};
    default:
      return state
  }
}