// Base class representing a generic vehicle
class Vehicle {
    // Constructor for initializing common properties
    constructor(topSpeed) {
        this._topSpeed = topSpeed;
        this._kms = 0;
    }

    // Setter for top speed
    set topSpeed(howFast) {
        this._topSpeed = howFast;
    }

    // Method for simulating driving
    drive() {
        console.log("Driving");
        this._kms += 8;
    }

    // Method for simulating reversing
    reverse() {
        console.log('Reversing');
        if (this._kms >= 4) {
            this._kms -= 4;
        }
    }

    // Method for displaying generic vehicle information
    vehicleInfo() {
        return `Top Speed: ${this._topSpeed} Kilometer: ${this._kms}`;
    }
}
