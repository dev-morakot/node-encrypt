const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


// settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
};

// routes
app.use('/api', require('./backend/routes/aes_256.routes'));

//error hadler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

// starting the server
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})