class TemperatureSensorA {
  constructor(location, threshold) {
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
