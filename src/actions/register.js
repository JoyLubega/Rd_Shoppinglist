import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {http} from '../config'

export const NOT_REG = 'not_registered';
export const REG_SUCCESS = 'registered';


const BASE_URL = 'https://joy-shoppinglist.herokuapp.com';

export const registerUser = (values) => {
    return function (dispatch){
        return http.post(`${BASE_URL}/auth/register`, values).then(response=>{
            dispatch({type: REG_SUCCESS});
            localStorage.setItem('token', response.data.token)
        })
        .catch(xhr=>{
            
            toast.error(xhr.response.data.message);          
        })
    };
}

