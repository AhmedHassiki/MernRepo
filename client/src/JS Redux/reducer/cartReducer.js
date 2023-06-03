import { ADD_TO_CART, FETCH_CART_FAILURE, FETCH_CART_SUCCESS } from '../constant/CartConstant';

const initialState = {
  basket : []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, basket : [...state.basket, action.payload] }
    case FETCH_CART_SUCCESS:
        return {...state, basket : action.payload, loading: false, error: false};
    case FETCH_CART_FAILURE:
        return {...state, basket : [], loading: false, error: true};
    default:
      return state
  }
}