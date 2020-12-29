
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
 width: 200,
    height: 200,
    alwaysOnTop: true,
    // focusable: false,
    resizable: true,
frame: true,

movable: true,
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
//app.whenReady().then(init)

const Config = require('electron-config')
const config = new Config()
let win
app.on('ready', () => {
  let opts = { width: 200,
    height: 200,
    alwaysOnTop: true,
    // focusable: false,
    show: true,
    resizable: true,
frame: true,

movable: true,
    webPreferences: {
      nodeIntegration: true
    }}
  Object.assign(opts, config.get('winBounds'))
  win = new BrowserWindow(opts)
  win.loadURL(`file://${__dirname}/app/index.html`)

win.setAlwaysOnTop(true, "floating", 1);
win.setVisibleOnAllWorkspaces(true, {visibleOnFullScreen: true});
win.setFullScreenable(false);
win.loadFile('index.html')
     win.removeMenu();
     win.setFocusable(true)
     win.once('ready-to-show', win.show)

  // save window size and position
  win.on('close', () => {
    config.set('winBounds', win.getBounds())
  })
})

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
