//  class User {};   declaramos un clase

// const newUser = new User();   creamos una instancia de la clase


class user {
  // metodos
greeting() {
    return 'Hello';
}
};

const cinlo = new user();
console.log(cinlo.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());
// tenemos dos instancias distintas de la misma clase


// constructor

class user {
    // contructor
    constructor() {
        console.log('nuevo usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this
class user {
    constructor(name) {
      this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());


// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
    return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);

