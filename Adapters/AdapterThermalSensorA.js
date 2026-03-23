import ISensor from "../Sensors/ISensor.js";

class AdapterThermalSensorA extends ISensor {
  constructor(sensor) {
    super();
    this.adapter = sensor;
  }
  onDetect(callback) {
    this.adapter.onDetect(callback);
  }
}

export default AdapterThermalSensorA;
