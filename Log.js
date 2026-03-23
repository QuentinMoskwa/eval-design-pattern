class Log {
  constructor(config) {
    this.filename = config.filename;
  }
  notify({ message, room }) {
    console.log(`Log = ${this.filename} ${room.name} ${message}`);
  }
}

export default Log;