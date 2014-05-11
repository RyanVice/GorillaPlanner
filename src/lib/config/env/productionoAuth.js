var oauthProviders = {
  facebook: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://gorillaplanner.heroku.com/auth/facebook/callback'
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: "http://gorillaplanner.heroku.com/auth/twitter/callback"
  },
  github: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://gorillaplanner.heroku.com/auth/github/callback"
  },
  google: {
    returnURL: 'http://gorillaplanner.heroku.com/auth/google/callback',
    realm: 'http://gorillaplanner.heroku.com'
  }
}

module.exports = oauthProviders;