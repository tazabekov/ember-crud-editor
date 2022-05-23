'use strict';

const validatePeerDependencies = require('validate-peer-dependencies');

module.exports = {
  name: require('./package').name,

  init() {
    this._super.init.apply(this, arguments);

    validatePeerDependencies(__dirname, {
      resolvePeerDependenciesFrom: this.parent.root,
    });
  },

  included(app) {
    this._super.included.apply(this, arguments);

    // The app argument passed to included is the host app or parent addon.
    // And the addon has a `import` api exposed since ember-cli/ember-cli#5877.
    // If the `app.import` is available we can just use that.
    if (typeof app.import !== 'function') {
      // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
      // use that.
      if (typeof this._findHost === 'function') {
        app = this._findHost();
      } else {
        // Otherwise, we'll use this implementation borrowed from the _findHost()
        // method in ember-cli.
        let current = this;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
      }
    }
  },
};
