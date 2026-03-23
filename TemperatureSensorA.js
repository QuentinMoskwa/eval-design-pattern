class TemperatureSensorA extends ISensor {
  constructor(location, threshold) {
    super();
    this.location = location;
    this.threshold = threshold;
  }
  onDetect(callback) {
    callback(
      `[TemperatureSensorA] Température dépasse ${this.threshold} deg dans "${this.location}"`,
    );
  }
}
