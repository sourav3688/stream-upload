// grab the packages we need
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(methodOverride());

// view engine setup
/* app.engine('html', function (path, opt, fn) {
  fs.readFile(path, 'utf-8', function (error, str) {
    if (error) return str;
    return fn(null, str);
  });
});
app.set('view engine', 'html'); */

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Origin, Host, Accept, Origin, Referer, User-Agent');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(express.static(path.join(__dirname, './public/')));

// API Router Area
app.use('/upload', function (req, res, next) {
  
  req.on('data', function (chunk) {
    fs.appendFileSync('./uploads/'+req.query['fileName'], chunk);
  });

  req.once('end', function (chunk) {
    res.json({code: 200, msg: "Uploaded!!"});
  });

  req.on('error', function (chunk) {
    res.json({code: 201, msg: "Error!!"});
  });
})

app.use('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);