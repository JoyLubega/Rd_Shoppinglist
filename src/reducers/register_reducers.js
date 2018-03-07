import { REG_SUCCESS, NOT_REG } from '../actions/register';

export default (state={}, action) => {
  switch(action.type) {
    case REG_SUCCESS:
      return { ...state, authenticated: true };
    case NOT_REG:
      return { state: undefined, authenticated: false };
    default:
      return state;
  } 
}
