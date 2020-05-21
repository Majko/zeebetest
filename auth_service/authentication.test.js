
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
        // console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

describe('send POST request', () => {
    it('returns status code 2000 to non authentcation service', async () => {
        const response = await post(retNoAuthHeaders())
        expect.assertions(1);
        expect(response.statusCode).toEqual(200);
    })

    test('to  authentcation service', async () => {
        const response = await post(retAuthHeaders())
        expect(response.statusCode).toEqual(200);
    })
})