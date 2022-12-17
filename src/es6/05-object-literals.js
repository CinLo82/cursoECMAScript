// enahced object literals

function newUser(user, age, country, uId) {
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('Cinlo', 36, 'Arg', 1));

