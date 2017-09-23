// create new file ./config/express.js
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';


module.exports = function () {
    const app = express();

    if (process.env.NODE_ENV === "development") {
        app.use(morgan('dev'));
    }
    else {
        app.use(compression());
    }
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    var config = require('./config');
    app.use(session({
        secret: config.sessionSecret,
        resave: false,
        saveUninitializeed: true
    }));
    app.use(passport.initialize()); // start passport
    app.use(passport.session()); // use session via express-session
    require('../app/routes/index.route')(app);
    require('../app/routes/user.route')(app);

    return app;
}