const { log, nats_subscribe, nats_publish } = require('../utils')
const utils = require('../utils/index')


sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

activateProcessor = async (jobid, email) => {
    // log('activating the processor with:' + {jobid:jobid, email:email} )
    nats_publish('autik.email.request', { jobid: jobid, email: email })
}

runIndefinitely = async () =>{
    while (true) {
        for (let index = 0; index < 100; index++) {
            activateProcessor(index, 'pomor@gmail.com' + index)
        }
        await sleep(10000)
    }
}

try {
    log('email nats service trying to connect to NATS')
    nats_connect({ servers: ['nats://nats:4222'], json: true })
    // subscribe to get the answer to my request
    nats_subscribe('autik.email.response', (msg) => {
        // complete the job
        log('completing the job in zeebe:' + msg.jobid + 'at: ' + Date.now())
    })
    runIndefinitely()

} catch (error) {
    log(error)
}

