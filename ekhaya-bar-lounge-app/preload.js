const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
  }
});

contextBridge.exposeInMainWorld('env', {
  API_KEY: process.env.API_KEY,
  API_URL: process.env.API_URL,
});