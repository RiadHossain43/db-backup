function responseLog(code) {
    code = parseInt(code)
    if (code >= 200 || code <= 299)
        return console.success("success", code)
    if (code >= 400 || code <= 599)
        return console.error("error", code)
    return console.info("info", code)
}
exports.formatResponse = async (req, res, next) => {
    const originJson = res.json
    res.json = (jsonData) => {
        const fixedResponse = {
            statusCode: res.statusCode
        }
        originJson.call(res, { ...jsonData, ...fixedResponse })
    }
    next()
    responseLog(res.statusCode)
}