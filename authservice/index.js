const { json, send } = require('micro')
// vsetky foldre su brane z Dockerfile, v /src je kod, v /utils su utility
const { log } = require('../utils')

module.exports = async (req, res) => {
    try {
        const js = await json(req)
        log(js)
        if (isAuthenticated(js))
            send(res, 200, {
                service: "service1", vratene: 'OK'
            })
        else
            send(res, 400, {
                service: "service1", vratene: 'BAD'
            })
    } catch (error) {
        log(error)
        send(res, 400, {
            error: error
        })
    }
}

isAuthenticated = (js) => {
    log('kontrola auth')
    log(js)
    if (js.auth === "iamok")
        return true
    else
        return false
}