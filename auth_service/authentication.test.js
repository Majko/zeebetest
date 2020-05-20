
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

describe('send POST request', () => {
    it('returns status code 2000 to non authentcation service', async () => {
        const response = await get(headersNoAuth)
        expect(response.statusCode).toEqual(200);
    })

    test('to  authentcation service', async () => {
        const response = await get(headersAuth)
        expect(response.statusCode).toEqual(200);
    })
})