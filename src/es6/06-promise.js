const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            reject('Whooooops!');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err));


    
    const anotherFuncion2 = () => {
        return new Promise((resolve, reject) => {
            if (false) {
                resolve('Hey!!');
            } else {
                reject('Whooooops!');
            }
        })
    }
    
    anotherFuncion2()
        .then(response => console.log(response))
        .catch(err => console.log(err));
    