const SEARCH_DELAY = 1000;

const search = (list, searchField, searchValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = list.filter(person => person[searchField] === searchValue);
            if (results.length > 0) {
                resolve(results);
            } else {
                reject(`По запиту ${searchField}: ${searchValue} нічого не знайдено`);
            }
        }, SEARCH_DELAY);
    });
};

export default search;
