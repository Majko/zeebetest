const { json, send } = require('micro')
const { log, request } = require('../utils')

/**
 * @summary Example service calling another backend service, returning response from a backend service
 * @param {HttpRequest} request, containing json 
 * @param {HttpResponse} response
 * @returns {} none, sends back 200 and response from backend service , 400 if error
 */
module.exports = async (req, res) => {
    try {
        const js = await json(req)
        log("fe_service_notauth handler received request:")
        log(js)
        const axios_response = await request('http://be_service:8000', js)
        log('response from be_service json:')
        log(axios_response.data)
        send(res, 200, axios_response.data)
    } catch (error) {
        log(error)
        send(res, 400, {
            error: error
        })
    }
}