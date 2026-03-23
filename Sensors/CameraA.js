class CameraA {
  constructor(location) {
    this.location = location;
  }
  onDetect(callback) {
    callback(`Camera A - Mouvement détecté dans "${this.location}"`);
  }
}

export default CameraA;
