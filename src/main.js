import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

let mb = menubar({width: 300, height: 300, alwaysOnTop: true});

mb.on('ready', () => {
  console.log('Application is ready')
  mb.showWindow();
});

mb.on('after-create-window', () => {
  mb.window.loadURL(`file://${__dirname}/renderer/index.html`);
});
