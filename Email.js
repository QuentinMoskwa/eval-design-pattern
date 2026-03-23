class Email {
  constructor(config) {
    this.address = config.address;
  }
  notify({ message, room }) {
    console.log(`email = ${this.address} ${room.name} ${message}`);
  }
}

export default Email;