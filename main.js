import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

const storage = require('electron-storage');
let mb = menubar({maxWidth: 600, maxHeight: 300, minWidth: 600, minHeight: 300, icon: './sketch/logoSmallest.png' || './sketch/logoSmallest.png@2x' });

mb.on('ready', () => {
  console.log('Application is ready');
  mb.showWindow();
});

mb.on('after-create-window', () => {
  mb.window.loadURL(`file://${__dirname}/src/index.html`);
});
