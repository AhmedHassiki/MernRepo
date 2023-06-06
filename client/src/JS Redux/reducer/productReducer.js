import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_LOAD, GET_PRODUCTS_ERROR, GET_ONE_PRODUCT, EDIT_PRODUCT } from '../constant/constTypes'
// import {  ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../constant/actionTypes'

const initialState = {
    product : {},
    products : [],
    loadProducts : false,
    user : {},
    editProduct : "",
    errors : [],
    cart: [],
    cartItems: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LOAD:
            return {...state, loadProducts:true}
        case GET_PRODUCTS_SUCCESS:
            return {...state, loadProducts:false, products : action.payload}
        case GET_PRODUCTS_ERROR:
            return {...state, loadProducts:false, errors : action.payload}
        case GET_ONE_PRODUCT:
            return {...state, product : action.payload}
        case EDIT_PRODUCT:
            return {...state, editProduct : action.payload}
        default :
            return state
    }
}