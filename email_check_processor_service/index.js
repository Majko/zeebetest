const { log, nats_subscribe, nats_publish } = require('../utils')
const utils = require('../utils/index')

sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

 processJob = async (jobid, email) =>{
    // await sleep(10000)
    nats_publish('autik.email.response', {jobid:jobid, email:email, })
}

try {
    log('email processor service trying to connect to NATS')
    nats_connect({ servers: ['nats://nats:4222'], json: true })
    // subscribe to get the answer to my request
    nats_subscribe('autik.email.request', (msg) => {
        // complete the job
        log('received request to process the job:' + msg.jobid)
        processJob(msg.jobid, msg.email)   
    })
} catch (error) {
    log(error)
}


