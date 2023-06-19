// Nodules
export let carName = 'BMW'

export interface Car {
    brand: string,
    model: string,
    build: number
}

export function move() {
    console.log('Car is moving');
}

class CarClass {
    changeGear(uporDown: string) {
        console.log(`Changing the gear ${uporDown}`);
    }
    brake() {
        console.log('Car is stopping');
    }
}

// solution 2
export {CarClass}

export {carName as myCar}

// default
export default move;