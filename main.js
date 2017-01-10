import {app, BrowserWindow} from 'electron';
import menubar from 'menubar';

const storage = require('electron-storage');
let mb = menubar({maxWidth: 600, maxHeight: 300, minWidth: 600, minHeight: 300, alwaysOnTop: true, icon: './sketch/logoSmallest.png' || './sketch/logoSmallest.png@2x' });

mb.on('ready', () => {
  console.log('Application is ready');
  doesStorageExist();
  retrieveStorage();
  mb.showWindow();
});

mb.on('after-create-window', () => {
  mb.window.loadURL(`file://${__dirname}/src/index.html`);
});

const doesStorageExist = () => {
  storage.isPathExists('saved-github-data.json')
    .then(itDoes => {
      if (!itDoes) {
        storage.set('saved-github-data', defaultData)
          .catch((err) => console.log(err));
      }
    });
};

const retrieveStorage = () => {
  storage.get('saved-github-data')
    .then(data => sendGithubData(data))
    .catch(err => console.log(err));
};

const sendGithubData = (data) => {
  console.log(data);
  mb.window.webContents.send('retrievedGithubData', data);
};

const saveUsername = exports.saveUsername = (usernameData) => {
  storage.set('saved-github-data', usernameData);
};

const clearUserName = exports.clearUserName = () => {
  storage.set('saved-github-data', defaultData);
};

const defaultData = { username: null };
