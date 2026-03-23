import ISensor from "../Sensors/ISensor.js";

class AdapterCameraA extends ISensor {
  constructor(camera) {
    super();
    this.adapter = camera;
  }
  onDetect(callback) {
    this.adapter.onDetect(callback);
  }
}

export default AdapterCameraA;
