import { GET_APPOINTMENTS } from "./types";

const initialState = {
  past_appointments: [
    {
      name: "name1",
      address: "address1",
      type: 1,
      serviceName: "serviceName1",
      date: "2022-02-26T04:00:00.000Z",
    },
  ],
  upcoming_appointments: [
    {
      image:
        "https://res.cloudinary.com/planity/image/upload/t_m_main,f_auto/e7aa2422-d97a-4710-8e01-55163ea835dd",
      name: "name1",
      address: "address1",
      type: 1,
      serviceName: "serviceName1",
      date: "2022-02-26T04:00:00.000Z",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENTS:
      return {
        ...state,
        past_appointments: action.payload.past,
        upcoming_appointments: action.payload.upcoming,
      };

    default:
      return state;
  }
};
