 // A Promise is always in one of three states:
 const promise = new Promise((resolve, reject) => {
    // Pending: Initial state
    // Fulfilled: Operation succeeded (via resolve())
    // Rejected: Operation failed (via reject())
});


const promise2 = new Promise((resolve, reject) => {
    // Async work here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));

    async function getData() {
        try {
            const result = await fetch('api/data');
            return await result.json();
        } catch (error) {
            console.error(error);
        }
    }

    // Sequential execution
async function sequence() {
    const a = await stepOne();
    const b = await stepTwo(a);
    return b;
}