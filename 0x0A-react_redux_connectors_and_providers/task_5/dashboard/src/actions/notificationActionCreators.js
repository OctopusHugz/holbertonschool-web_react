import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";
import fetch from "node-fetch";

const notificationsList = [
  {
    id: 1,
    type: "default",
    value: "New course available",
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available",
  },
  {
    id: 3,
    type: "urgent",
    value: "New data available",
  },
];

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export function fetchNotificationsSuccess() {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: notificationsList,
  };
}

export function setLoadingState(boolean) {
  return {
    type: SET_LOADING_STATE,
    payload: boolean,
  };
}

export function setNotifications(array) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: array,
  };
}

export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("/notifications.json")
      .then((data) => data.json())
      .then((array) => dispatch(setNotifications(array)))
      .catch((err) => console.log(err))
      .then(() => dispatch(setLoadingState(false)));
  };
}
