Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', {
  name: 'home',
  template: 'Home'
});

if (Meteor.isServer) {
  crypto = Meteor.npmRequire('crypto');
  Router.route('/webhook', function () {
    var hmac;
    console.log('fire in the hole!!!!1');
    hmac = SHA256(JSON.stringify(this.request.body));
    console.log('hmachmac:', hmac);
    console.log('x-dropbox-signature:', this.request.headers['x-dropbox-signature']);

    if (this.request.headers['x-dropbox-signature'] === hmac) {
      console.log('gotcha!');
    }

    console.log('delta', this.request.body.delta);
    dropbox.pullChanges(this.request.body.delta.users[0]);
    this.response.end(this.params.query.challenge);
  }, {where: 'server'});

  Router.route('/post', function () {
    console.log('yup', this);
    this.response.end('post accepted');
  }, {where: 'server'});
}

