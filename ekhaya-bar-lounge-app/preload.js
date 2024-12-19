import { ipcRenderer, contextBridge } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })






// Navigate to the second page when the button is clicked
const navigateButton = document.getElementById('navigateButton');
if (navigateButton) {
  navigateButton.addEventListener('click', () => {
    ipcRenderer.send('navigate-to-second-page');
  });
}




contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => ipcRenderer.on(channel, callback)
});