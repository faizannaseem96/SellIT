import { GET_ARTICLES } from "../types";
import firebase from 'firebase';

export function getArticles(category) {
    return function (dispatch) { 
        if (category !== 'All') {
            firebase.database().ref('articles').orderByChild('category').equalTo(category)
            .on('value', snapshot => {
                dispatch({ type: GET_ARTICLES, payload: snapshot.val() });
            });
        } else {
            firebase.database().ref('articles')
            .on('value', snapshot => {
                dispatch({ type: GET_ARTICLES, payload: snapshot.val() });
            });
        }
    }
}