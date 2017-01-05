import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

let mb = menubar({maxWidth: 300, maxHeight: 300, minWidth: 300, minHeight: 300, alwaysOnTop: true});

mb.on('ready', () => {
  console.log('Application is ready')
  mb.showWindow();
});

mb.on('after-create-window', () => {
  mb.window.loadURL(`file://${__dirname}/src/index.html`);
});
