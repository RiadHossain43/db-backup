const { createNamespace } = require('continuation-local-storage')
const { getConnectionByTenant } = require('../config/dbConnectionManager')

let nameSpace = createNamespace(process.env.CONNECTION_CONTEXT)

exports.resolveConnection = (req, res, next) => {
    let tenant = req.header('x-tenant')
    if (req.headers.origin && !tenant)
        tenant = req.headers.origin.split(".")[0].split("://")[1]

    if (!tenant) return res.status(400).json({ msg: "No tenant specified." })
    nameSpace.run(() => {
        nameSpace.set(process.env.CONNECTION, getConnectionByTenant(tenant))
        next()
    })
}