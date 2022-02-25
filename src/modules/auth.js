import axios from 'axios'
import {
 
} from './actions';
import { LOGGED_IN, LOGGED_OUT, LOGIN_FAILURE, SET_SHOP, SIGN_IN, SIGN_UP } from './types';

const initialState = {
  logged_in: false,
  loading: false,
  user_credentials:[],
  shop_details: [],
  errors: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
        axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.access_token}`
        localStorage.setItem("cookie-token", 'Bearer ' + action.payload.access_token);
        return {
            ...state,
            logged_in: true,

        }

    case LOGGED_IN:
        return {
            ...state,
            logged_in: true,
            user_credentials: action.payload
        }

    case SET_SHOP:
      return {
        ...state,
        shop_details: action.payload
      }
      
    case LOGGED_OUT:
      return {
        ...state,
        loading: false,
        logged_in: false,
        user_credentials: []
      }

    case LOGIN_FAILURE: 
      return {
        ...state,
        loading: false,
        logged_in: false,
        errors: action.payload
      }

    default:
      return state
  }
}

