import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";
import notificationReducer from "./notificationReducer";
import notifications from "../../../../notifications.json";
import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";

const defaultState = Map({
  loading: false,
  messages: [],
});

const fetchNotificationsAction = {
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
};

describe("notificationReducer", () => {
  it("should return the initial state for the default case", () => {
    const newState = notificationReducer(defaultState, "");
    expect(newState.toJS().loading).toEqual(false);
    expect(newState.toJS().messages).toEqual([]);
  });

  it("should return data from fetchNotifications", () => {
    const newState = notificationReducer(
      defaultState,
      fetchNotificationsAction
    );
    const normalizedNotifications = notificationsNormalizer(
      fetchNotificationsAction.payload
    );
    const allNotifications = {
      messages: Object.entries(normalizedNotifications.entities.messages).map(
        (notification, index) => ({ ...notification[1], id: index })
      ),
    };
    expect(newState.toJS().messages).toEqual(allNotifications.messages);
    expect(newState.toJS().loading).toEqual(false);
  });
});
