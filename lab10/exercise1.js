/**
 * Implement the Factory pattern and create two types of light bulbs, 
 * regular bulbs and energy saver bulbs.
 * Regular bulbs have a range of lumens between 50 and 100 and last for 1 year.
 * Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years.
 */
class Bulb {
    constructor(rangeOfLumens, last) {
        this.rangeOfLumens = rangeOfLumens;
        this.last = last;
    }
}
class RegularBulb extends Bulb {
    constructor() {
        super([50, 100], 1);
    }
}

class EnergyBulb extends Bulb{
    constructor() {
        super([5, 40], 10);
    }
}

class Factory {
    createBulb(type) {
        let bulb = new RegularBulb();;
        if (type === "energy") {
            bulb = new EnergyBulb();
        }
        return bulb;
    }
}
const factory = new Factory();
console.log(factory.createBulb("regular"));
console.log(factory.createBulb("energy"));
