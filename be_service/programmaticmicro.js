const http = require('http')
const micro = require('micro')
const logic = require('./logic')

const server = new http.Server(micro(async (req, res) => {
    try {
        const js = await json(req)
        log("be_service handler received request:")
        log(js)
        const returned = await logic(js)
        send(res, returned.status, returned.message)
    } catch (error) {
        log(error)
        send(res, 400, {
            error: error
        })
    }
}))

server.listen(3000, ()=>{
    console.log('Running on port 3000')
})