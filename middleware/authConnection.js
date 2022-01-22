const { getConnection } = require("../config/dbConnectionManager")
exports.authConnection = (req, res, next) => {
    let connection = getConnection()
    if (!connection) return res.status(401).json({ msg: "Unauthorized tenant." })
    req.tenant = connection
    next()
}