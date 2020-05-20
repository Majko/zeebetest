
const { request } = require('../utils');
const testjson = JSON.stringify({ meno: 'jozo', priezvisko: 'hrdlo' })

const headersNoAuth = {
    'Content-Type': 'application/json',
    'Host': 'fe_service_notauth.localhost'
}

const headersAuth = {
    'Content-Type': 'application/json',
    'Host': 'fe_service_auth.localhost',
    'Authentication': 'iamok'
}

get = async (headers) => {
    try {
        const response = await request('http://localhost:80',
            testjson, { headers: headers })
        return response
    } catch (error) {
        console.log(error)
    }
}
// Start timing now
console.time("concatenation");
// Remember when we started
var start = new Date().getTime();

for (let i = 0; i < 1000; i++) {
    get(headersNoAuth).then(() => {
        get(headersAuth)
    })
}

// ... and stop.
console.timeEnd("concatenation");

// Remember when we finished
var end = new Date().getTime();

// Now calculate and output the difference
console.log(end - start, "ms");