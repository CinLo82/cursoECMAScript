// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;


console.log(a, fruits[1]); 

// object destructuring

let user = { username: 'Cinlo', age: 36};
let { username, age } = user;
console.log(username, age);


// spread operator

let person = {'name': 'Cinlo','age': 32};
let country = 'Arg';

let data = { id: 1, ...person, country};
console.log(data);


// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 3, 4);















let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)