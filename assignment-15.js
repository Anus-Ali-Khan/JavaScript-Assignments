// Create a class named LandVehicle which should have 1 property on it 'wheels' and 2 methods (to get and set the value of that property)

class LandVehicle {
  constructor(wheels) {
    this.wheels = wheels;
  }

  // get getwheels() {
  //   return this.wheels;
  // }

  // set setwheels(wheels) {
  //   this.wheels = wheels;
  // }
}

// const LandVehicle1 = new LandVehicle("Ferrari");

// LandVehicle1.setwheels = "Landcruiuser";

// console.log(LandVehicle1.getwheels);

// Create a class named Car which should have 3 properties on it (wheels, doors, engineQuality) inherit this class from the LandVehicle class and implement the get and set methods for doors and engineQuality. Also create a 'printSummary' function to print the sumamry about the car

class Car extends LandVehicle {
  constructor(wheels, doors, engineQuality) {
    super(wheels);
    this.doors = doors;
    this.engineQuality = engineQuality;
  }

  get getdoors() {
    return this.doors;
  }

  get getengineQuality() {
    return this.engineQuality;
  }

  set setdoors(doors) {
    this.doors = doors;
  }

  set setengineQuality(engineQuality) {
    this.engineQuality = engineQuality;
  }
}

const Car1 = new Car("round", "red", "fourStroke");
// Car1.setdoors = "yellow";
// Car1.setengineQuality = "twoStroke";

console.log(Car1.getdoors);
console.log(Car1.getengineQuality);
