import Email from "./Email.js";
import Log from "./Log.js";
import Discord from "./Discord.js";

class NotificationFactory {
  static create(type, config) {
    switch (type) {
      case "email":
        return new Email(config).notify.bind(
          new Email(config),
        );
      case "log":
        return new Log(config).notify.bind(
          new Log(config),
        );
      case "discord":
        return new Discord(config).notify.bind(
          new Discord(config),
        );
      default:
        throw new Error(`Type inconnu : ${type}`);
    }
  }
}
