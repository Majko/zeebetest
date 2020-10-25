// do package.json je pre testovanie axios pridat : "jest": { "testEnvironment": "node" }
const { log } = require('../../utils');
const NATS = require('nats')

const nc = NATS.connect({ json: true })
for (i = 0; i < 5; i++) {
    nc.publish('autik.email.request', { sprava: 'plava' })
    log('publikovana plava')
}
nc.flush(function () {
    nc.close()
  })