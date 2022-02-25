import { SET_ERRORS } from './types';

const initialState = {
    errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state
  }
}

