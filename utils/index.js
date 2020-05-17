const axios = require('axios')
log = (message) => {
    console.log(message)
}

request = async (url, json, headers = {}) =>{
    log('callin axios')
    const ret = await axios.post(url, json, headers)
    return ret 
}

module.exports = {
    log: log,
    request: request,
} 