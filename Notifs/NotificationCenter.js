import NotificationFactory from "./NotificationFactory.js";

class NotificationCenter {
  constructor(roomList, notifications) {
    for (let room of roomList) {
      for (let notif of notifications) {
        room.addEvent(NotificationFactory.create(notif.type, notif.config));
      }
    }
  }
}

export default NotificationCenter;
