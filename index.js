import CameraA from "./Sensors/CameraA.js";
import TemperatureSensorA from "./Sensors/TemperatureSensorA.js";
import ThermalSensorB from "./Sensors/ThermalSensorB.js";
import AdapterCameraA from "./Adapters/AdapterCameraA.js";
import AdapterTemperatureSensorA from "./Adapters/AdapterThermalSensorA.js";
import AdapterThermalSensorB from "./Adapters/AdapterThermalSensorB.js";
import Room from "./Observer/Room.js";
import NotificationCenter from "./Notifs/NotificationCenter.js";

const entree = new Room("Entrée");
entree.addSensor(new AdapterCameraA(new CameraA("Entrée")));
entree.addSensor( new AdapterTemperatureSensorA(new TemperatureSensorA("Entrée", 30)));

const salleServeur = new Room("Salle Serveur");
salleServeur.addSensor(new AdapterTemperatureSensorA(new TemperatureSensorA("Salle Serveur", 25)));
salleServeur.addSensor(new AdapterThermalSensorB(new ThermalSensorB("room-42")));

const parking = new Room("Parking");
parking.addSensor(new AdapterCameraA(new CameraA("Parking")));
parking.addSensor(new AdapterThermalSensorB(new ThermalSensorB("room-01")));

new NotificationCenter(
  [entree, salleServeur, parking],
  [
    { type: "email", config: { address: "securite@batiment.fr" } },
    { type: "log", config: { filename: "building.log" } },
    { type: "discord", config: { server: "https://discord.com/server" } },
  ],
);

// entree.activateSensors();
parking.activateSensors();
