const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('dotenv').config();

let mainWindow;

app.on('ready', () => {
  createLoginWindow();
});

function createLoginWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Correctly set to preload.js
      contextIsolation: true, // Isolate context for security
      enableRemoteModule: false,
      nodeIntegration: false, // Ensure this is set to false
      // devTools: false
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'renderer/login.html'));
}

function createHomeWindow() {
  mainWindow.loadFile(path.join(__dirname, 'renderer/home.html'));
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('navigate-to-home', () => {
  createHomeWindow();
});

module.exports = { createHomeWindow };