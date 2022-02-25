import { SELECTED_SCHEDULE, SET_BUCKET_USER, SET_DATE, SET_PAYMENT_MODE, SET_PROF_STAFF } from './types';

const initialState = {
    errors: {},
    category: 0,
    service: 0,
    schedule: 0,
    staff_id: 0,
    loading: false,
    staff: {},
    meeting_type: '',
    event_date : '',    
    fullname : '', 
    email : '',         
    scheduled_date_id : '', 
    payment_mode :  'cash',  
    category_id : '',   
    address: '',
    phone_number: '',
    validated: true,
    shop_id: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_PROF_STAFF: 
      return {
        ...state,
        staff_id: action.payload
      }

    case SELECTED_SCHEDULE:
      return {
        ...state,
        staff: action.payload.staff,
        schedule: action.payload.schedule,
        category: action.payload.category,
        service: action.payload.service,
        meeting_type: action.payload.meeting_type,
        loading: false,
        scheduled_date_id: action.payload.schedule.id,
        staff_id: action.payload.staff.staff_id,
        category_id: action.payload.category && action.payload.category.id,
        event_date: action.payload.schedule.for_date,
        shop_id: action.payload.category && action.payload.category.shop_id
      }

    case SET_BUCKET_USER:
      return {
        ...state,
        fullname: action.payload.fullname,
        email: action.payload.email,
        phone_number: action.payload.phone_number,
        address: action.payload.address,
      }

    case SET_DATE:
      return {
        ...state,
        schedule_id: action.payload.schedule_id
      }

    case SET_PAYMENT_MODE:
      return {
        ...state,
        payment_mode: action.payload.payment_mode,
        validated: true
      }

    default:
      return state
  }
}

