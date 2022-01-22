const mongoose = require('mongoose');
const Tetants = require('../models/Tenants')
const { getNamespace } = require('continuation-local-storage')
let tenantsMap = []
let databaseCluster = {}
// create new connection...
const connect = db => mongoose.createConnection(process.env.MONGO_URI + `/${db}?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
	autoIndex: true,
});

exports.connectAllDb = () => new Promise(async (resolve, reject) => {
	try {
		let adminConnection = await connect(process.env.ADMIN_DB)
		let tenants = await Tetants(adminConnection).find({})
		databaseCluster = adminConnection
		console.log('MongoDB admin Connected...\ntenants:', tenants)
		tenantsMap = tenants
		resolve("Tenants cached successfully.")
		console.log("Tenants cached successfully.")
	} catch (err) {
		console.error(err);
		reject(err)
		// Exit process with failure
		process.exit(1);
	}
})
exports.getConnectionByTenant = (tenantName) => {
	let connection = null
	if (/localhost/.test(tenantName)) {
		connection = databaseCluster.useDb('localhost', { useCache: true })
		return connection
	}
	connection = databaseCluster.useDb(tenantName, { useCache: true })
	return connection
}
exports.getConnection = () => {
	const nameSpace = getNamespace(process.env.CONNECTION_CONTEXT)
	const connection = nameSpace.get(process.env.CONNECTION)
	if (!connection) return null
	return connection
}
exports.getConnectionMap = () => {
	return tenantsMap
}
exports.getCluster = () => databaseCluster