
const { request } = require('../utils');
const testjson = JSON.stringify({ meno: 'jozo', priezvisko: 'hrdlo' })

describe('send POST request', () => {
    test('to non authentcation service', async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Host': 'fe_service_notauth.localhost'
        }
        const response = await request('http://localhost:80',
            testjson, { headers: headers })
        expect(response.statusCode = 200)
    })

    test('to  authentcation service', async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Host': 'fe_service_auth.localhost',
            'authentication': 'iamok'
        }
        const response = await request('http://localhost:80',
            testjson, { headers: headers })
        expect(response.statusCode = 200)
    })
})