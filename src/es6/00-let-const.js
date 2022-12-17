var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);



let fuit = 'Aple';
fuit = 'kiwi';
console.log(fuit);



const animal = 'dog';
animal = 'cat';
console.log(animal);



const fruits = () => {
    if (true) {
        var fruit1 = 'aple'; // function scope 
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

