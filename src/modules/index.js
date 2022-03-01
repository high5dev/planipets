import { combineReducers } from "redux";
import store from "./store";
import auth from "./auth";
import vet from "./vet";
import scheduler from "./scheduler";
import UI from "./UI";
import appointment from "./appointment";

export default combineReducers({
  store,
  auth,
  vet,
  scheduler,
  UI,
  appointment,
});
