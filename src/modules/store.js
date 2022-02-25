import { OTP_LOADING, RESEND_LOADING } from './actions';
import { BOOK_APPOINTMENT, GET_CATEGORIES,RESEND_OTP,SEND_OTP, SET_ANIMALS, SET_CATEGORIES, SET_CAT_SERVICES, SET_FILTER, SET_SCHEDULE, SET_SERVICES, SET_STAFF, SET_VETS, UNSET_VET, VERIFY_OTP } from './types';

const initialState = {
  categories: [],
  services: [],
  staff: [],
  productLoading: false,
  vets: [],
  schedule: [],
  schedule_dates: [],
  cat_services:[],
  animals:[],
  types:[],
  book:[],
  otp:{},
  otploading:false,
  resendloading:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return {
        ...state,
        productLoading: true,
      };

    case GET_CATEGORIES: 
      return {
        ...state,
        productLoading: true
      }

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case SET_SERVICES:
      return {
        ...state,
        services: action.payload
      }

    case SET_STAFF:
      return {
        ...state,
        staff: action.payload
      }

    case SET_SCHEDULE:

      return {
        ...state,
        schedule: action.payload,
        schedule_dates: action.payload.scheduled_dates
      }

    case SET_CAT_SERVICES:
      return {
        ...state,
        cat_services: action.payload
      }

    case SET_VETS:
      return {
        ...state,
        vets: action.payload
      }
    
    case UNSET_VET:
      return {
        ...state,
        vets: []
      }

    case SET_FILTER:
      return {
        ...state,
        animals: action.payload.animals,
        types: action.payload.types
      }
    case BOOK_APPOINTMENT:
      console.log('action.payload',action.payload)
      return {
        ...state,
        book: action.payload,
        // types: action.types
      }
      
    case SEND_OTP:
      console.log('action.payload',action.payload)
      return {
        ...state,

        types: action.types,
        otp: action.payload,
        // otpSend:true
      }
    case VERIFY_OTP:
      console.log('action.payload',action.payload)
      return {
        ...state,

        types: action.types,
        otpverfiy: action.payload,
        // otpSend:true
      }
    case RESEND_OTP:
      console.log('action.payload',action.payload)
      return {
        ...state,

        types: action.types,
        resendOtp: action.payload,
        // otpSend:true
      }
      case OTP_LOADING:
        return {
          ...state,
          otploading:action.payload
        }
        case RESEND_LOADING:
          return {
            ...state,
            resendloading:action.payload
          }

      

    default:
      return state
  }
}

