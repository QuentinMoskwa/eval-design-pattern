import Email from "./Email.js";
import Log from "./Log.js";
import Discord from "./Discord.js";

class NotificationFactory {
  static create(type, config) {
    let instance;
    switch (type) {
      case "email":
        instance = new Email(config);
        break;
      case "log":
        instance = new Log(config);
        break;
      case "discord":
        instance = new Discord(config);
        break;
      default:
        throw new Error(`Type inconnu : ${type}`);
    }
    return (context) => instance.notify(context);
  }
}

export default NotificationFactory;
