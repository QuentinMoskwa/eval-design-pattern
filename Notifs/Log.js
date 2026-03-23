class Log {
  constructor(config) {
    this.filename = config.filename;
  }
  notify({ message, room }) {
    console.log(`LOG ${this.filename} = ${room.name} | ${message}`);
  }
}

export default Log;