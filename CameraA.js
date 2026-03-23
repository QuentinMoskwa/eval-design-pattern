import ISensor from "./ISensor.js";

class CameraA extends ISensor {
  constructor(location) {
    super();
    this.location = location;
  }
  onDetect(callback) {
    callback(`Camera A - Mouvement détecté dans "${this.location}"`);
  }
}

export default CameraA;
