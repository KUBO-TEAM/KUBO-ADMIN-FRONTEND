const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const recipesRouter = require('./routes/recipes');
const loginRouter = require('./routes/login');
const yolov4Router = require('./routes/yolov4');
const yolov4TinyRouter = require('./routes/yolov4-tiny');
const notificationRouter = require('./routes/notification');
const indexRouter = require('./routes/index');
const generateScheduleRouter = require('./routes/generate-schedule');
const feedbacksRouter = require('./routes/feedbacks');

const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use(function(err, req, res, next) {
  console.log('ERROR');
  res.status(500);
  res.end('');
  console.error(err.stack);
});

app.use('/', indexRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/login', loginRouter);

app.use('/api/generate-schedule', generateScheduleRouter);

app.use('/api/yolov4', yolov4Router);
app.use('/api/yolov4-tiny', yolov4TinyRouter);

app.use('/api/notification', notificationRouter);

app.use('/api/feedbacks', feedbacksRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  res.render('index.html');
});

module.exports = app;
