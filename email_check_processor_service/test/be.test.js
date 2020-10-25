// do package.json je pre testovanie axios pridat : "jest": { "testEnvironment": "node" }
const { request } = require('../../utils');
const NATS = require('nats')

describe('backe end service', () => {
    test('returns status code 200 on json.name:"maros" ', async () => {
        const nc = NATS.connect({json:true})
        nc.publish('autik.email.request', {sprava: 'plava'})
    })
})