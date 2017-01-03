import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

let mb = menubar({width: 600, height: 600, windowPosition: 'topRight', alwaysOnTop: true});

mb.on('ready', () => {
  console.log('Application is ready')
  mb.showWindow();
});

mb.on('after-create-window', () => {
  mb.window.loadURL(`file://${__dirname}/renderer/index.html`);
});
