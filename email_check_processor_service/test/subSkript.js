// do package.json je pre testovanie axios pridat : "jest": { "testEnvironment": "node" }
const { log, nats_connect, nats_subscribe } = require('../../utils');
const NATS = require('nats')

log('Starting serivce NAT SUB')
try {
    log('trying to connect to NATS')
    nats_connect('nats:4222', {json:true})
    nats_subscribe('autik.email.request', (msg) => {
        log('prijata spava:' + msg.sprava)
    })
} catch (error) {
    log(error)
}
// nc.close()

