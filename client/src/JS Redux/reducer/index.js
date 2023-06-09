import { combineReducers } from "redux";
import {productReducer} from './productReducer'
import {editReducer} from './editReducer'
import { authReducer } from './authReducer'
import { cartReducer } from './cartReducer'
import { orderReducer } from "./orderReducer";

const rootReducer = combineReducers({productReducer, editReducer, authReducer, cartReducer , orderReducer });

export default rootReducer;