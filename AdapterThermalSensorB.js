class AdapterThermalSensorB extends ISensor {
  constructor(sensor) {
    super();
    this.adapter = sensor;
  }
  onDetect(callback) {
    this.adapter.triggerHeatSignature(callback);
  }
}
