import { combineReducers } from 'redux';

import user from './login_reducer';


import { NOT_LOGGEDIN } from '../actions/login';

const appReducer = combineReducers ({
    // form,
    user,
    // shoppinglists,
    // items
    
});

const rootReducer = (state, action) => {
    if(action.type === NOT_LOGGEDIN ){
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer;