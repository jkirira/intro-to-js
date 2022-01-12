resolvePromise = false; 

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if( resolvePromise ){
            resolve("Promise Resolved")
        } else {
            reject("Promise Rejected")
        }
    }, 1000); 
})


test('testPromise', () => {
    return promise.catch((value) => {
        expect.assertions(1)
        expect(value).toBe("Promise Rejected")
    })
})