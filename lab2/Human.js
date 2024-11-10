class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    
    getInfo(prop = null) {
        return prop ? this[prop] : { name: this.name, age: this.age, weight: this.weight, gender: this.gender };
    }
    
    greeting() {
        return "Hi!";
    }
}

export default Human;
