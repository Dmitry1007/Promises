const isMomHappy = false

const willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            }
            resolve(phone) // fulfilled
        } else {
            const reason = new Error('mom is not happy')
            reject(reason) // reject
        }

    }
)

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled)
         // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message)
         // output: 'mom is not happy'
        })
}

askMom()