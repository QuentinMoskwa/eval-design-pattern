class ThermalSensorB {
  constructor(position) {
    this.position = position;
  }
  triggerHeatSignature(process) {
    const data = {
      sensor: `ThermalSensorB${this.position}`,
      detection: "thermal",
      date: new Date(),
    };
    const message = `[ThermalSensorB] nom: "${data.sensor}", type: ${data.detection}, date: ${data.date}`;
    process(message);
  }
}
