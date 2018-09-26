import { REGISTER_USER, LOGIN_USER } from "../types";

export default function(state={}, action) {
    switch(action.type) {
        
        case REGISTER_USER:
            return {...state, user: action.payload }
        case LOGIN_USER:
            return {...state, user: action.payload }
        default:
            return state
    }
}