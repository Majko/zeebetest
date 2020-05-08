const axios = require('axios')
log = (message)=>{
    console.log(message)
}

request = async (url, json) =>{
    this.log('callin axios')
    const ret = await axios.post(url, json)
    return ret 
}

module.exports = {
    log:log,
    request:request,
} 