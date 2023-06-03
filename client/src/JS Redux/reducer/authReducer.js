import { GET_AUTH_USER, USER_LOGIN, USER_REGISTER, LOAD_USER, USER_LOGOUT} from "../constant/actionTypes"

const initialState = {
    isLoading : false,//only this was true, until i called it in all actions and change it to false, then in calling any action it will be true until it gets data
    user : {},
    isAuth : false,
}

export const authReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case USER_REGISTER :
        case USER_LOGIN :

            localStorage.setItem("token",payload.token)
            
            return {...state, isLoading : false, isAuth : true, user : payload.user, msg : payload.msg};
        case GET_AUTH_USER :
            return {...state, isLoading : false, isAuth : true, ...payload} // spread payload howa bidou user:payload.user,msg:payload.msg
        case LOAD_USER : 
            return {...state, isLoading: true}
        case USER_LOGOUT : 
            localStorage.removeItem('token')
            return {...state, isLoading : false, isAuth : false, user : {}, msg:""}
        default:
            return state;
    }
}

export default authReducer;