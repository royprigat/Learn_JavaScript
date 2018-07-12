// A simple promise object. resolve-reject
const promise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Every promise has a .then method
promise
    .then((resolvedValue) => {console.log(resolvedValue);})
    .catch((err) => {console.log(err)});