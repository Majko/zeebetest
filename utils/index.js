const axios = require('axios')
log = (message) => {
    console.log(message)
}

request = async (url, json) => {
    log('callin axios')
    if (url !== undefined && json !== undefined) {
        const ret = await axios.post(url, json)
        return ret
    }
    else
        throw new Error('url or json canno¾undefined')
}

module.exports = {
    log: log,
    request: request,
} 