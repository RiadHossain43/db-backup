require('dotenv').config()
const paintConsole = require('./config/paintConsole');
global.console = paintConsole
const { spawn } = require('child_process')
const path = require('path')
const express = require('express');
const { connectAllDb } = require('./config/dbConnectionManager');
const app = express();
const upload = require("express-fileupload")
const corsProtection = require("./middleware/corsProtection")
const { logRequest } = require("./middleware/logRequest")
const { resolveConnection } = require('./middleware/resolveConnection')
const { authConnection } = require('./middleware/authConnection')
const { secureQuery } = require('./middleware/trimQuery');
const { formatResponse } = require('./middleware/formatResponse');
const { runBackup } = require('./processes/runBackup');
// Connect Database
connectAllDb();

app.use(corsProtection)
app.use(secureQuery)
app.use(formatResponse)
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(resolveConnection)
app.use(authConnection)
app.use(upload())
app.use(logRequest)
runBackup()
const PORT = process.env.PORT || 5000;
const httpServer = app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const socket = require('./config/webSocket').init(httpServer)
socket.on('connection', (client) => {
  console.success("Client connected...", 'ClientId', client.id)
  client.on('disconnect', () => console.warn("Client disconnected...", "ClientId", client.id))
})



