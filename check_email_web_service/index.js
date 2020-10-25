const {json, send} = require('micro')
const {log} = require('../utils')
const logic = require('./logic')

/**
 * @summary Example simple service returning response 200 if everything OK
 * @param {HttpRequest} request, containing json 
 * @param {HttpResponse} response
 * @returns {} none, sends bakck status 200 if OK, 400 if error
 */
module.exports = async (req, res) => {
  try {
    const js = await json(req)
    log("check_mail_service handler received request:")
    log(js)
    const returned = await logic(js)
    send(res, returned.status, returned.message)
} catch (error) {
    log(error)
    send(res, 400, {
        error: error
    })
}
}