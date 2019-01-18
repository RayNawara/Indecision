class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I'm ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` They are majoring in ${this.major}.`
        }

        return description;
        }
    }   
    
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let location = super.getGreeting();

        if (this.hasLocation()) {
            location += ` I'm visiting from ${this.homeLocation}.`
        }

        return location;
        }
    }   

const me = new Traveler('Ray Nawara', 70, 'Brooksville');
// console.log(me.getGreeting());
console.log(me.getGreeting());

const other = new Traveler();
// console.log(other.getGreeting());
console.log(other.getGreeting());