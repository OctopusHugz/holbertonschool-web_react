import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

const filterTypeSelected = (state) => state.get("filter");

const getNotifications = (state) => {
  const notifications = state.getIn([
    "notifications",
    "entities",
    "notifications",
  ]);
  console.log(`notifications`, notifications);
  return Map(notifications);
};

// Create another selector for the notifications named getUnreadNotifications,
// that will return the list of unread notifications in a Map format
const getUnreadNotifications = (state) => {
  const unreadNotifications = [];
  const notificationsObj = state.getIn([
    "notifications",
    "entities",
    "notifications",
  ]);
  // .toJS();
  for (const notificationId in notificationsObj) {
    if (notificationsObj[notificationId].isRead === false) {
      unreadNotifications.push(notificationsObj[notificationId]);
    }
  }
  const normalizedUnreadNotifications =
    notificationsNormalizer(unreadNotifications);
  return Map(normalizedUnreadNotifications.entities.notifications);
};

export { filterTypeSelected, getNotifications, getUnreadNotifications };
