const resolvedPromise=()=> {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve('resolved');
        },500)
    })

}

const rejectedPromise =()=> {
    setTimeout(() => {
        setTimeout(() => {
            throw new Error("Whoops!");
        }, 500);
    })
}

resolvedPromise();
rejectedPromise();