const { json, send } = require('micro')
// vsetky foldre su brane z Dockerfile, v /src je kod, v /utils su utility
const { log } = require('../utils')

/**
 * @summary Authenticates the request based on http header content (authentication header)
 * @param {HttpRequest} request
 * @param {HttpResponse} HttpResponse
 * @returns {} none, sends bakck status 200 if authenticated, 400 if not authenticated
 */
module.exports = async (req, res) => {
    try {
        // const js = await json(req)
        log("fe_service_auth handler received request:")
        // log(req.headers)
        if (isAuthenticated(req.headers))
            send(res, 200, {
                service: "fe_service_auth", vratene: 'OK authenticated'
            })
        else
            send(res, 400, {
                service: "fe_service_auth", vratene: 'BAD authenticated'
            })
    } catch (error) {
        log(error)
        send(res, 400, {
            error: error
        })
    }
}

/**
 * @summary checks if the header contains valid authentication
 * @param {HttpRequest Object} Headers object
 * @returns {Boolean} true or false depending on the authentication validation
 */
isAuthenticated = (headers) => {
    if (headers.authentication === "iamok") //zjednodusena logika
        return true
    else
        return false
}