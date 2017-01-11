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

  it('gets the window bounds', function () {
    return app.browserWindow.getBounds().should.eventually.deep.equal({
      x: 1080,
      y: 23,
      width: 600,
      height: 300
    })
  })

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

  it('resolves if the element contains the given text', function () {
     return app.client.setValue('.username-input', 'bcgodfrey91').should.be.fulfilled
   })
});


describe('App starts and has correct initial appearance', function () {

  let app = null;

  before(function () {
      app = new Application({ path: electronPath, args: [appPath], startTimeout: 6000, waitTimeout: 6000 });
      return app.start();
  });

  after(function () {
    return app.client.click('.logout');
  });

  it('transition pages if Username Input is filled & submit is clicked', function () {
     return app.client.setValue('.username-input', 'bcgodfrey91').click('.submit-button').getText('section').should.eventually.equal([ Array(7) ])
   })
});
