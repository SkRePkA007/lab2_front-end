import Human from './Human.js';

class Woman extends Human {
    constructor(name, age, weight) {
        super(name, age, weight, "woman");
    }
    
    greeting() {
        return `Hi! I'm ${this.name}`;
    }
}

export default Woman;
