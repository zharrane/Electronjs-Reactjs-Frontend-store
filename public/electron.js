const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  //Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //Insert Menu
  //Menu.setApplicationMenu(mainMenu);
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}
//creating menu template which is void
const mainMenuTemplate = [];
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
