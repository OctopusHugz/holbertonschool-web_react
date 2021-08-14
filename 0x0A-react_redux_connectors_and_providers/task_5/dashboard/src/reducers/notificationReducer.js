import { Map } from "immutable";
import { normalize } from "normalizr";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map({
  loading: false,
  messages: [],
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedNotifications = notificationsNormalizer(action.payload);
      const allNotifications = {
        messages: Object.entries(normalizedNotifications.entities.messages).map(
          (notification, index) => ({ ...notification[1], id: index })
        ),
      };
      return state.mergeDeep(allNotifications);
    }
    case MARK_AS_READ: {
      return state.setIn(
        [
          "notifications",
          "entities",
          "notifications",
          action.index.toString(),
          "isRead",
        ],
        true
      );
    }
    case SET_TYPE_FILTER: {
      return state.set("filter", action.filter);
    }
    case SET_LOADING_STATE: {
      return state.set("loading", action.payload);
    }
    default:
      return state;
  }
}

export const fetchNotificationsSuccessAction = {
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
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
  ],
};

// console.log(`normalizedNotifications`, normalizedNotifications);
// const allNotifications = {
//   notifications: notificationsNormalizer(action.payload).entities
//     .notifications,
//   users: notificationsNormalizer(action.payload).entities.users,
//   messages: notificationsNormalizer(action.payload).entities.messages,
// };
// console.log(`allNotifications`, allNotifications);

// Remaking notificationObjs like task_4, not sure here

// const fullNotificationsObjs = action.payload.map((notification) => ({
//   id: notification.id,
//   ...notification.context,
// }));
// // console.log(`fullNotificationsObjs`, fullNotificationsObjs);
// const allNotifications = {
//   notifications: fullNotificationsObjs,
// };
// // const allNotifications = {
// //   notifications: notificationsNormalizer(fullNotificationsObjs),
// // };
// console.log(`allNotifications`, allNotifications);
// return state.mergeDeep(allNotifications);
// // return state.mergeDeep(
// //   allNotifications.notifications.entities.notifications
// // );
