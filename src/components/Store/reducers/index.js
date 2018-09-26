import { combineReducers } from 'redux';
import user from './user_reducer';
import Articles from './article_reducer';

export default combineReducers ({
    user: user,
    Articles

})