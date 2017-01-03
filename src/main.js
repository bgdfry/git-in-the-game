import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

let mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 760,
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});
