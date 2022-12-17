function newUser(name, age, country) {
    var name = name || 'Cinlo';
    var age = age || 36;
    var country = country || 'Arg';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

// 

function newAdmin(name = 'Cinlo', age = 32, country = 'CL'){
    console.log(name, age, country)
}
newAdmin();
newAdmin('Ana', 28, 'BR');