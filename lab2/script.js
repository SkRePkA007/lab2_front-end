const currentYear = new Date().getFullYear();
const introduce = (name, birthYear = null) => {
    const age = birthYear ? currentYear - birthYear : "невідомий";
    return `Я ${name}, мені ${age} років`;
};

