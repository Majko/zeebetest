const {json, send} = require('micro')
// vsetky foldre su brane z Dockerfile, v /src je kod, v /utils su utility
const {log} = require('../utils')

module.exports = async (req, res) => {
  try {
    const js = await json(req)
    log("backservice handler received request:")
    log(js)
    send(res, 200, {
        service:"backservice", vratene: 'OK'
    })
} catch (error) {
    log(error)
    send(res, 400, {
        error: error
    })
}
}