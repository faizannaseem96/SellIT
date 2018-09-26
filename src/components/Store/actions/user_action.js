import { REGISTER_USER, LOGIN_USER } from '../types';
import firebase from 'firebase';

export function signUpUser(data) {
    return function (dispatch) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(data.email, data.password)
        .then(user => {
            dispatch ({
                type: REGISTER_USER,
                payload: user
            })
        })
        .catch( () => {  })
    }
}   

export function signInUser(data) {
    return function (dispatch) {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(user => {
            dispatch ({
                type: LOGIN_USER,
                payload: user
            })
        })
        .catch( () => {  })
    }
} 