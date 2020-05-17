const {json, send} = require('micro')
const {log} = require('../utils')

/**
 * @summary Example simple service returning response 200 if everything OK
 * @param {HttpRequest} request, containing json 
 * @param {HttpResponse} response
 * @returns {} none, sends bakck status 200 if OK, 400 if error
 */
module.exports = async (req, res) => {
  try {
    const js = await json(req)
    log("fe_service_auth handler received request:")
    log(js)
    send(res, 200, {
        service: "fe_service_auth", vratene: 'OK'
    })
} catch (error) {
    log(error)
    send(res, 400, {
        error: error
    })
}
}