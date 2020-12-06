const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyPasrer = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyPasrer.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);

app.use(express.static(__dirname + '/public'));
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');                                                                       
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});