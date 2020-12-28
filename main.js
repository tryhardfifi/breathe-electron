
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
 width: 200,
    height: 200,
    alwaysOnTop: true,
    focusable: false,
    show: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

win.setAlwaysOnTop(true, "floating", 1);
win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: true});
win.setFullScreenable(false);
win.loadFile('index.html')

     win.setFocusable(true)
  }

const init = () => {
  /** Create app window */
  createWindow();

   
};
app.whenReady().then(init)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
