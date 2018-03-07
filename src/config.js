import axios from 'axios';
export const url = 'https://joy-shoppinglist.herokuapp.com';
export const http = axios.create({
  headers: {
    'Authorization': localStorage.getItem('token'),
  },
});
export default url;
