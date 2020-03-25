const express = require ('express');
const port = 3000;
const logger = require('morgan');
const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');

const app = express();

require('./config/database');

app.set('view engine', 'ejs');

app.use(logger('dev'))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);

app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
})
