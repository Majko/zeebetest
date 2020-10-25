module.exports = async (json) => {
    // perform logic of the microservice
    const name = json.name
    if (name === 'maros')
        // if ok, return result in form of object with status=XXX, message
        return { status: 200, message: { service: "check_mail_service", vratene: 'OK' } }
    else
        throw new Error('Wrong name')
}