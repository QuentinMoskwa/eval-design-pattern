class CameraA extends ISensor {
  constructor(location) {
    super();
    this.location = location;
  }
  onDetect(callback) {
    callback(`[CameraA] Mouvement détecté dans "${this.location}"`);
  }
}
