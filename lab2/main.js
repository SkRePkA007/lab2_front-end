import people from './peopleArray.js';
import search from './searchFunction.js';

console.log("Пошук за параметрами: name = 'Alex'");
search(people, "name", "Alex")
    .then(results => {
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo("gender"));
        });
    })
    .catch(error => console.error(error));

console.log("Пошук за параметрами: age = 99");
search(people, "age", 99)
    .then(results => {
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo("gender"));
        });
    })
    .catch(error => console.error(error));
