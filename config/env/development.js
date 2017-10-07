module.exports = {
    mongoUri: 'mongodb://localhost/test001',
    // or use 
    // mongoUri: 'mongodb://admin:password@localhost:27017/myFirstNode',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '842212791997-0ti4ktbfqkivde1fv95vq4jia4f17a1d.apps.googleusercontent.com',
        clientSecret: 'Nc12dcfJfXmpRWoKnq8a4as2',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}

