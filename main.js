import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

let mb = menubar({maxWidth: 2000, maxHeight: 2000, minWidth: 600, minHeight: 300, height: 300, width: 600, alwaysOnTop: true, icon: './sketch/logoSmallest.png' || './sketch/logoSmallest.png@2x' });

mb.on('ready', () => {
  console.log('Application is ready');
  mb.showWindow();
});

mb.on('after-create-window', () => {
  mb.window.loadURL(`file://${__dirname}/src/index.html`);
});
