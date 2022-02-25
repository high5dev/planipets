import {
 
} from './actions';
import { SET_VET } from './types';

const initialState = {
  vet_details:{},
  errors: {},
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VET:
      return {
        ...state,
        loading: false,
        vet_details: action.payload
      }
    default:
      return state
  }
}

