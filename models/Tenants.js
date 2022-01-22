const mongoose = require('mongoose')
const autoIncreament = require('mongoose-auto-increment')
const mongoosePaginate = require('mongoose-paginate-v2')

const TenantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = connection => {
    mongoosePaginate(TenantSchema)
    return connection.model('tenant', TenantSchema)
}
