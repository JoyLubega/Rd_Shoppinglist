import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {http} from '../config'

export const NOT_LOGGEDIN = 'not_loggedin';
export const LOGIN_SUCCESS = 'login_success';
export const LOGOUT_ERROR = 'logout_error';

const BASE_URL = 'https://joy-shoppinglist.herokuapp.com';

export const loginUser = (values) => {
    console.log("here",values)
    return function (dispatch){
        return http.post(`${BASE_URL}/auth/login`, values).then(response=>{
            dispatch({type: LOGIN_SUCCESS});
            localStorage.setItem('token', response.data.token)
        })
        .catch(xhr=>{
            console.log(xhr)
            toast.error(xhr.response.data.message);          
        })
    };
}

export const logoutUser = () => {
    localStorage.clear();
    return({
        type: NOT_LOGGEDIN
    });
}