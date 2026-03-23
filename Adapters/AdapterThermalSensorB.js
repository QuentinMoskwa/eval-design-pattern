import ISensor from "../Sensors/ISensor.js";

class AdapterThermalSensorB extends ISensor {
  constructor(sensor) {
    super();
    this.adapter = sensor;
  }
  onDetect(callback) {
    this.adapter.triggerHeatSignature(callback);
  }
}

export default AdapterThermalSensorB;
