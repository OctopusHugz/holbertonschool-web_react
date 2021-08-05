import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";
import fetch from "node-fetch";
import path from "path";

const urlPath = path.join(process.cwd(), "../../dist", "login-success.json");
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// const store = createStore(() => {}, applyMiddleware(thunk));

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export function loginRequest(email, password) {
  return function (dispatch) {
    // the function should dispatch the login action
    // using the action creator previously created
    dispatch(login(email, password));
    return (
      // the function should fetch the API /login-success.json
      // server must be running for this to work
      fetch("http://localhost:8564/login-success.json")
        // if it succeeds, dispatch the loginSuccess action
        .then(() => dispatch(loginSuccess()))
        // if the API fails, dispatch the loginFailure action
        .catch(() => dispatch(loginFailure()))
    );
  };
}

// export function loginRequest(email, password) {
//   // the function should dispatch the login action
//   // using the action creator previously created
//   store.dispatch(login(email, password));
//   // the function should fetch the API /login-success.json
//   fetch("/login-success.json")
//     // if it succeeds, dispatch the loginSuccess action
//     .then(() => store.dispatch(loginSuccess()))
//     // if the API fails, dispatch the loginFailure action
//     .catch(() => store.dispatch(loginFailure()));
// }
