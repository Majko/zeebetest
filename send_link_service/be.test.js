// do package.json je pre testovanie axios pridat : "jest": { "testEnvironment": "node" }
const { request } = require('../utils');
const logic = require('./logic')

describe('backe end service', () => {
    test('returns status code 200 on json.name:"maros" ', async () => {
        const response = await logic({ name: 'maros' })
        expect(response.status).toEqual(200);
    })

    test('throws error on any other json name ', async () => {
        expect.assertions(1);
        try {
            const response = await logic({ name: 'fero' })
        } catch (e) {
            expect(e.message).toMatch(/Wrong name/);
        }
    })
})