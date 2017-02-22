const electron = require ("electron")
const {app, BrowserWindow} = electron

app.on("ready", () => {
  let win = new BrowserWindow({width:1500, height:700})
  win.loadURL("https://vk.com")
})
