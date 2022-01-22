const { getConnectionByTenant } = require("../config/dbConnectionManager")

exports.resolveWssConnection = (client) => {
    let clientUrl = client.handshake.headers.referer
    let tenantName = clientUrl.split(".")[0].split("://")[1]
    client.tenant = getConnectionByTenant(tenantName)
    return client 
}