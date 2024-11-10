import Human from './Human.js';

class Man extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, "man");
    }
    
    greeting() {
        return `Hi! I'm ${this.name}, I'm ${this.age} years old.`;
    }
}

export default Man;
