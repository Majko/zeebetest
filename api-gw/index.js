const { json, send } = require('micro')
// vsetky foldre su brane z Dockerfile, v /src je kod, v /utils su utility
const { log , request} = require('../utils')

// curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8001
module.exports = async (req, res) => {
    try {
        const js = await json(req)
        log('input json:')
        log(js)
        const axios_response = await request('http://service1:8000',js)
        log('reaponse from service json:')
        log(axios_response.data)
        send(res, 200, axios_response.data)
    } catch (error) {
        log(error)
        send(res, 400, {
            error: error
        })
    }
}