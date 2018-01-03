const isMomHappy = false

const willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone) // fulfilled
        } else {
            const reason = new Error('mom is not happy');
            reject(reason) // reject
        }

    }
);

console.log(willIGetNewPhone)