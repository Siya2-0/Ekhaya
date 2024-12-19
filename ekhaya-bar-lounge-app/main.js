const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,//change window size
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }

  ipcMain.on('navigate-to-second-page', () => {
    mainWindow.loadFile('second.html');
  });


  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })