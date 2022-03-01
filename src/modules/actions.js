import axios from '../utils/Axios';
import { BOOK_APPOINTMENT, LOGGED_IN, LOGGED_OUT, LOGIN_FAILURE, SELECTED_SCHEDULE, SEND_OTP, SET_ANIMALS, SET_BUCKET_USER, SET_CAT, SET_CATEGORIES, SET_CAT_SERVICES, SET_DATE, SET_ERRORS, SET_FILTER, SET_PAYMENT_MODE, SET_PROF_STAFF, SET_SCHEDULE, SET_SERVICE, SET_SERVICES, SET_SHOP, SET_STAFF, SET_VET, SET_VETS, SIGN_IN, VERIFY_OTP } from './types';


// product loader true

function productLoader() {
    return dispatch => {
        dispatch(productLoading());
    };
}
export const PRODUCT_LOADING = 'PRODUCT_LOADING';
export const productLoading = (products) => {
    return {
        type: PRODUCT_LOADING,
        payload: {}
    }
}

// get skincare products all
export function fetchSkincareProducts(page, productPerPage, category, filter, mob) {
    return dispatch => {
        dispatch(productLoader())

        dispatch(fetchSkincareProductsSuccess({}, 0, {}));

        return {}
    };
}
export const FETCH_SKINCARE_PRODUCTS_SUCCESS = 'FETCH_SKINCARE_PRODUCTS_SUCCESS';
export const fetchSkincareProductsSuccess = (products, numberOfProducts, brands) => ({
    type: FETCH_SKINCARE_PRODUCTS_SUCCESS,
    payload: { products, numberOfProducts, brands }
});


// fetch categories;
export const fetchCategories = () => dispatch => {
    axios.get('/getCategories', { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        dispatch({
            type: SET_CATEGORIES,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

// fetch getCategoriesWithServices;
export const getCategoriesWithServices = () => dispatch => {
    axios.get('/getCategoriesWithServices', { headers: { Authorization: localStorage.getItem('cookie-token') } })
        .then(res => {
            dispatch({
                type: SET_CAT_SERVICES,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
}


// fetch Services;
export const fetchServices = (cat_id) => dispatch => {
    axios.get('/fetchServices/' + cat_id, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {

        dispatch({
            type: SET_CAT,
            payload: cat_id
        })

        dispatch({
            type: SET_SERVICES,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

// fetch Staff;
export const getStaff = (service_id) => dispatch => {
    axios.get('/staff/' + service_id, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        dispatch({
            type: SET_SERVICE,
            payload: service_id
        })
        dispatch({
            type: SET_STAFF,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: SET_ERRORS,
            payload: err
        })
    })
}

// Fetch Vets;
export const fetchVets = (search_string) => dispatch => {
    axios.get('shops?' + search_string, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        dispatch({
            type: SET_VETS,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchSchedules = (service_id, staff_id, id) => dispatch => {
    axios.get('/scheduleDates/' + service_id + '/' + id, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        dispatch({
            type: SET_DATE,
            payload: service_id
        })

        dispatch({
            type: SET_PROF_STAFF,
            payload: staff_id
        })

        dispatch({
            type: SET_SCHEDULE,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchShopDetails = (search_string) => dispatch => {
    axios.get('/shop?' + search_string, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        console.log(res.data)
        dispatch({
            type: SET_SHOP,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const fetchFilters = () => dispatch => {
    axios.get('/filters').then(res => {
        dispatch({
            type: SET_FILTER,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const loadShopDetails = (shop_id) => dispatch => {
    axios.get('/shop/' + shop_id, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
        dispatch({
            type: SET_VET,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}

export const setScheduler = (schedule) => dispatch => {
    dispatch({
        type: SELECTED_SCHEDULE,
        payload: schedule
    })
}

// setAllData
export const setUserData = (booking) => dispatch => {
    dispatch({
        type: SET_BUCKET_USER,
        payload: booking
    })
}

export const setPaymentMode = (payment_mode) => dispatch => {
    dispatch({
        type: SET_PAYMENT_MODE,
        payload: payment_mode
    })
}

export const storeBooking = (bookingData, setloading) => dispatch => {
    axios.post('/storeBooking', bookingData)
        .then(res => {
            setloading(false)
            console.log("Happy", res.data)
        })
        .catch(err => {
            console.log("error: ", err)
        })
}

export const loginUser = (userData, history) => dispatch => {
    axios.post('/auth/login', userData).then(res => {
        dispatch({
            type: SIGN_IN,
            payload: res.data
        })

        dispatch(getUserCredentials())

        history.push('/')
    }).catch(err => {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err
        })
    })
}





export const registerUser = (userData, history) => dispatch => {
    axios.post('/register', userData).then(res => {
        dispatch(loginUser(userData, history))
    }).catch(err => {
        console.log(err)
    })
}

export const logOutUser = (userData, history) => dispatch => {
    if (localStorage.getItem('cookie-token')) {
        axios.post('/auth/logout', null, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
            dispatch({
                type: LOGGED_OUT
            })
            localStorage.removeItem('cookie-token')
            history.push('/')
        }).catch(err => {
            console.log(err)
        })
    } else {
        localStorage.removeItem('cookie-token')
    }
}

export const getUserCredentials = () => dispatch => {
    if (localStorage.getItem('cookie-token')) {
        axios.post('/auth/me', null, { headers: { Authorization: localStorage.getItem('cookie-token') } }).then(res => {
            dispatch({
                type: LOGGED_IN,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
}

//  BOOK APPOINTMENTS
export const bookAppointment = (id) => {
    return dispatch => {
        // if (localStorage.getItem('cookie-token')) {
        axios.get(`/shop-info/${id}/`).then(res => {
            console.log('succcess===>', res.data)
            dispatch({
                type: BOOK_APPOINTMENT,
                payload: res.data
            })
        })
            .catch(err => {
                console.log('err=====>', err)
            })
        // }
    }
}

export const OTP_LOADING = 'OTP_LOADING';
export const OTPLoading = (bool) => {
    return {
        type: OTP_LOADING,
        payload: bool
    }
}

export const sendOtp = (obj, showModal) => {

    // console.log(data)
    return dispatch => {
        dispatch(OTPLoading(true))
        showModal()
        var data = JSON.stringify(obj);


        var config = {
            method: 'post',
            url: 'https://app.planipets.com/api/send-otp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                showModal()

                dispatch(OTPLoading(false))

                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(OTPLoading(false))

            });

    }
}

export const RESEND_LOADING = 'RESEND_LOADING';
export const resendLoading = (bool) => {
    return {
        type: RESEND_LOADING,
        payload: bool
    }
}

export const resendOtp = (obj) => {

    // console.log(data)
    return dispatch => {
        dispatch(resendLoading(true))
        var data = JSON.stringify(obj);
        // showModal()

        var config = {
            method: 'post',
            url: 'https://app.planipets.com/api/resend-otp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                dispatch(resendLoading(false))
                //   showModal()f
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                dispatch(resendLoading(false))
                console.log(error);
            });

    }
}
export const recieveOtp = (obj, setotpVerify, handleCancel,next) => {

    return dispatch => {
        dispatch(OTPLoading(true))

        var data = JSON.stringify(obj);

        var config = {
            method: 'post',
            url: 'https://app.planipets.com/api/verify-otp',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setotpVerify(true);
                handleCancel()
                dispatch(OTPLoading(false))
                next()
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(OTPLoading(false))

            });

    }

}


let obj = [
    {
        categoryName: 'ABC',
        service: [
            {
                serviceName: 'abcService',
                staffMember: [
                    {
                        staffName: 'staffname',
                        meetingtype: [
                            {
                                type: 'A domicile',
                                appointment: [],
                            }
                        ]
                    },
                    // {
                    //     staffName: 'staffname',
                    // }
                ]
            },

        ]
    },
    {
        categoryName: 'ABC2',
        service: [
            {
                serviceName: 'abcService',
                staffMember: [
                    {
                        staffName: 'staffname',
                        meetingtype: [
                            {
                                type: 'A domicile',
                                appointment: [],
                            }
                        ]
                    },
                    // {
                    //     staffName: 'staffname',
                    // }
                ]
            },

        ]
    },
    {
        categoryName: 'ABC3',
        service: [
            {
                serviceName: 'abcService',
                staffMember: [
                    {
                        staffName: 'staffname',
                        meetingtype: [
                            {
                                type: 'A domicile',
                                appointment: [],
                            }
                        ]
                    },
                    // {
                    //     staffName: 'staffname',
                    // }
                ]
            },

        ]
    },
    {
        categoryName: 'ABC4',
        service: [
            {
                serviceName: 'abcService',
                staffMember: [
                    {
                        staffName: 'staffname',
                        meetingtype: [
                            {
                                type: 'A domicile',
                                appointment: [],
                            }
                        ]
                    },
                    // {
                    //     staffName: 'staffname',
                    // }
                ]
            },

        ]
    }
]
