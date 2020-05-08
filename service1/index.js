const {json, send} = require('micro')
// vsetky foldre su brane z Dockerfile, v /src je kod, v /utils su utility
const {log} = require('../utils')

module.exports = async (req, res) => {
  try {
    const js = await json(req)
    log(js)
    send(res, 200, {
        vratene: 'OK'
    })
} catch (error) {
    log(error)
    send(res, 400, {
        error: error
    })
}
}