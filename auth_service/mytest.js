
const { request } = require('../utils');
const testjson = JSON.stringify({ meno: 'jozo', priezvisko: 'hrdlo' })


get = async () => {
    const headers = {
        'Content-Type': 'application/json',
        'Host': 'fe_service_notauth.localhost'
    }

    try {
        const response = await request('http://localhost:80',
            testjson, { headers: headers })
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

get()