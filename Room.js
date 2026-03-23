class Room {
  constructor(name) {
    this.name = name;
    this.sensors = [];
    this.callbackList = [];
  }

  addSensor(sensor) {
    this.sensors.push(sensor);
  }

  addEvent(event, callback) {
    this.callbackList.push({ event, callback });
  }

  trigger(event, message) {
    for (let item of this.callbackList.filter((e) => e.event === event)) {
      item.callback({ message, room: this });
    }
  }

  activateSensors() {
    this.sensors.forEach((sensor) => {
      sensor.onDetect((message) => this.trigger("detection", message));
    });
  }
}
