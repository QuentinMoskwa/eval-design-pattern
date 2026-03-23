class Discord {
  constructor(config) {
    this.server = config.server;
  }
  notify({ message, room }) {
    console.log(`Discord = ${this.server} [${room.name}] ${message}`);
  }
}

export default Discord;