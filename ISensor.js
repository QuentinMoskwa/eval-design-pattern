class ISensor {
  onDetect(callback) {
    throw new Error("onDetect() doit être implémenté");
  }
}

export default ISensor;
