class AdapterTemperatureSensorA extends ISensor {
  constructor(sensor) {
    super();
    this.adapter = sensor;
  }
  onDetect(callback) {
    this.adapter.onDetect(callback);
  }
}
