class NotificationFactory {
  static create(type, config) {
    let instance;
    switch (type) {
      case "email":
        instance = new EmailNotification(config);
        break;
      case "log":
        instance = new LogNotification(config);
        break;
      case "discord":
        instance = new DiscordNotification(config);
        break;
      default:
        throw new Error(`Type inconnu : ${type}`);
    }
    return (context) => instance.notify(context);
  }
}
