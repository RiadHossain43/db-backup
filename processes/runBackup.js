const { spawn } = require('child_process')
const path = require('path')
const { getConnectionMap } = require("../config/dbConnectionManager");

exports.runBackup = async () => {
    console.log("Backup started")
    let tenants = [{ name: 'localhost' }]
    tenants.forEach(tenant => {
        console.log(tenant.name)
        const ARCHIVE_PATH = path.join(__dirname, 'backups', `${tenant.name}.gzip`)
        const child = spawn('mongodump', [
            // `--db=${tenant.name}`,
            // `--archive=${ARCHIVE_PATH}`,
            // `--gzip`
        ])
        child.stdout.on('data', data => {
            console.success('stdout:')
            console.log(Buffer.from(data).toString())
        })
        child.stderr.on('data', data => {
            console.error('stderror:')
            console.log(Buffer.from(data).toString())
        })
        child.on('error', error => {
            console.error('error:')
            console.log(error)
        })
        child.on('exit', (code, signal) => {
            if (code)
                console.info("Process exited with code", code)
            else if (signal)
                console.info("Process killed with signal", signal)
            else console.success("Backup successfull.")
        })
    })
}