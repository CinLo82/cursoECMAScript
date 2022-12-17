async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

// probamos uns funcion sincrona
function* anotherGenerator() {
    yield  Promise.resolve(1);
    yield  Promise.resolve(2);
    yield  Promise.resolve(3);
}

const other1 = anotherGenerator();
console.log(other1.next());
console.log(other1.next());
console.log(other1.next());
console.log(other1.next());
console.log('Hello');


async function arrayOfName(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfName(['Cinlo', 'Ana', 'Camila']);
console.log('After');
