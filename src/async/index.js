const doSomethingAsync= () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('Do Something Async');
            }, 3000)
        }else{
            reject(new Error('Ups!!'));
        }
    });
}


const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch (error){
        console.error(error)
    }
}

console.log('Before another')
anotherFunction()
console.log('After another')