const axios = require('axios')
const NATS = require('nats')

log = (message) => {
    console.log(message)
}

request = async (url, json, headers = {}) =>{
    const ret = await axios.post(url, json, headers)
    return ret 
}

// in dcoker-compose nats is the name of the service
// const servers = ['nats://nats:4222']
let nc = null

nats_connect = (host) => {
    log('Util connecting to:' + host)
    nc = NATS.connect(host)

    // currentServer is the URL of the connected server.
    nc.on('connect', () => {
        console.log('Utils Connected to ' + nc.currentServer.url.host)
    })

    nc.on('error', (err) => {
        console.log(err)
      })

    // emitted whenever the client disconnects from a server
    nc.on('disconnect', () => {
        console.log('disconnect')
    })
  
    // emitted whenever the client is attempting to reconnect
    nc.on('reconnecting', () => {
        console.log('reconnecting')
    })
    
    // emitted whenever the client reconnects
    // reconnect callback provides a reference to the connection as an argument
    nc.on('reconnect', (nc) => {
        console.log(`reconnect to ${nc.currentServer.url.host}`)
    })
    
    // emitted when the connection is closed - once a connection is closed
    // the client has to create a new connection.
    nc.on('close', function () {
        console.log('close')
    })  

    return nc
}
/**
 * Subscribe to nats topic
 * @param channel {String} channel to which subscribe
 * @param handler  {Method} method handling incomming messages, paramater is msg
 */
nats_subscribe = (channel, handler) =>{
    nc.subscribe(channel,handler)
}

/**
 * Publishes message to NATS
 * @param channel {String} channel to which publish
 * @param message {JSON} Json message to be published
 */
nats_publish = (channel, json_message) =>{
    try {
        JSON.parse(json_message)
    } catch (error) {
        error
    }
    nc.publish(channel, json_message)
}

module.exports = {
    log: log,
    request: request,
    nats_publish: nats_publish,
    nats_connect: nats_connect,
    nats_subscribe: nats_subscribe
} 