var oauthProviders = {
  facebook: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: 'http://23.120.225.29:9000/auth/facebook/callback'
  },
  twitter: {
    consumerKey: 'get_your_own',
    consumerSecret: 'get_your_own',
    callbackURL: "http://23.120.225.29:9000/auth/twitter/callback"
  },
  github: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://23.120.225.29:9000/auth/github/callback"
  },
  google: {
    returnURL: 'http://23.120.225.29:9000/auth/google/callback',
    realm: 'http://23.120.225.29:9000'
  }
}

module.exports = oauthProviders;