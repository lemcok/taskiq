const { app, BrowserWindow, Tray, Menu } = require('electron');
// const path = require('path'); 
// const { connectDB } = require('../config/connectDB');

let tray = null;
app.whenReady().then(()=> {

  tray =  new Tray('src/assets/img/logo.png')
  tray.on('click', () => { 
    if(!app.isReady){
      win.hide();
    }
    win.show() 
  })

  const  contextMenu = Menu.buildFromTemplate([
    { label: 'Show App', click: function() {
      win.show();
    }},
    { label: 'Quit', click: function() {
      app.isQuiting = true;
      app.quit();
    } },
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})

let win;
function createWindow () {
    win = new BrowserWindow({
      // transparent: true,
      // frame: false,
      width: 500,
      height: 680,
      x: 420,
      y: 20,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        // devTools:false,
        // preload:path.join(app.getAppPath(), 'src/MainScreen/main.js')
      },
      icon: 'src/assets/img/logo.png'

    })
    win.loadFile('src/mainScreen/index.html')
    win.removeMenu();
    // app.setBadgeCount(12) //crea un contador en el icono

    win.on('minimize',function(event){
      event.preventDefault();
      win.hide();
    });
    
    win.on('close', function (event) {
      if(!app.isQuiting){
          event.preventDefault();
          win.hide();
      }
    
      return false;
    });
} 



module.exports = {
    createWindow,
}