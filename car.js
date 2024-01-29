// Derived class representing a specific type of vehicle: Car
class Car extends Vehicle {
    // Constructor for initializing car-specific properties and calling the base class constructor
    constructor(carCost, topSpeed) {
        super(topSpeed); // Inheritance: Calling the constructor of the base class (Vehicle)
        this._carCost = carCost;
    }

    // Setter for car cost
    set carCost(howMuch) {
        this._carCost = howMuch;
    }

    // Method for displaying car-specific information along with inherited information from the base class
    carInfo() {
        console.log(`Price: ${this._carCost} ${super.vehicleInfo()}`); // Inheritance: Calling the method of the base class (Vehicle)
    }
}

// Car1
console.log(" ");
console.log("Car1");
let toyota = new Car(125000000, 95);
for (let i = 0; i < 4; i++) {
    toyota.drive();
}
toyota.reverse();
toyota.carInfo();

// Car2
console.log(" ");
console.log("Car2");
let kia = new Car(75000, 60);
for (let i = 0; i < 2; i++) {
    kia.drive();
}
for (let i = 0; i < 4; i++) {
    kia.reverse();
}
kia.carInfo();

// Car3
console.log(" ");
console.log("Car3");
const honda = new Car(150000, 120);
for (let i = 0; i < 4; i++) {
    honda.reverse();
}
honda.carInfo();
