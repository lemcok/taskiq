const { app } = require('electron')
const { createWindow } = require('./mainScreen/main')

// require('./config/connectDB')
require('electron-reload')(__dirname)

app.whenReady().then(() => {
    createWindow()
})
