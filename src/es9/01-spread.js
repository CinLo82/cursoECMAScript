const user = { username: "cinlo", age: 36, coutry: "ARG" };
const { username, ...values } = user;
console.log(username);
console.log(values);