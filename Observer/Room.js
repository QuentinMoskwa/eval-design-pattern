class Room {
  constructor(name) {
    this.name = name;
    this.sensors = [];
    this.callbackList = [];
  }

  addSensor(sensor) {
    this.sensors.push(sensor);
  }

  addEvent(callback) {
    this.callbackList.push(callback);
  }

  activateSensors() {
    this.sensors.forEach((sensor) => {
      sensor.onDetect((message) => {
        this.callbackList.forEach((callback) =>
          callback({ message, room: this }),
        );
      });
    });
  }
}

export default Room;
