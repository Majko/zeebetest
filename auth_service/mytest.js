
const { request } = require('../utils');
const testjson = JSON.stringify({ meno: 'jozo', priezvisko: 'hrdlo' })

retNoAuthHeaders = () => {
    const headersNoAuth = {
        'Content-Type': 'application/json',
        'Host': 'fe_service_notauth.localhost'
    }
    return headersNoAuth
}

retAuthHeaders = () => {
    const headersAuth = {
        'Content-Type': 'application/json',
        'Host': 'fe_service_auth.localhost',
        'Authentication': 'iamok'
    }
    return headersAuth
}

post = async (headers) => {
    try {
        const response = await request('http://localhost:80',
            testjson, { headers: headers })
        console.log(response.data)
        return response
    } catch (error) {
        console.log(error)
    }
}
// Start timing now
console.time("concatenation");

for (let i = 0; i < 1; i++) {
    post(retNoAuthHeaders()).then(() => {
        post(retAuthHeaders())
    })
}

// ... and stop.
console.timeEnd("concatenation");
