import { combineReducers } from "redux";
import {productReducer} from './productReducer'
import {editReducer} from './editReducer'
import { authReducer } from './authReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({productReducer, editReducer, authReducer, cartReducer});

export default rootReducer;