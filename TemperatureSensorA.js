import ISensor from "./ISensor.js";

class TemperatureSensorA extends ISensor {
  constructor(location, threshold) {
    super();
    this.location = location;
    this.threshold = threshold;
  }
  onDetect(callback) {
    callback(
      `TemperatureSensor A - Température dépasse ${this.threshold} deg dans "${this.location}"`,
    );
  }
}

export default TemperatureSensorA;
