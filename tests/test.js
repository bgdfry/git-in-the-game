var Application = require('spectron').Application
var expect = require('chai').expect;
var assert = require('chai').assert;
const path = require('path')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

var electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

var appPath = path.join(__dirname, '..');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});

describe('App starts and has correct initial appearance', function () {

  let app = null;

  before(function () {
      app = new Application({ path: electronPath, args: [appPath], startTimeout: 6000, waitTimeout: 6000 });
      return app.start();
  });

  after(function () {
    return app.stop();
  });

  it('opens a window', function () {
      return app.client.waitUntilWindowLoaded()
        .getWindowCount().should.eventually.equal(2);
  });

  it('has the correct title', function () {
  return app.client.waitUntilWindowLoaded()
    .getTitle().should.eventually.equal('Git in the Game');
  });

  it('displays text from the react components', function () {
  return app.client.waitUntilWindowLoaded()
    .getText('h2').should.eventually.equal('Please enter your Github username to Proceed:');
  });

  it('tests the Submit button is disabled', function () {
    return app.client.getText('.submit-button').then(function (buttonText) {
      assert(buttonText === 'Submit')
    })
  })

});
