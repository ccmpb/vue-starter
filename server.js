const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(helmet());
server.use(morgan('combined'));

const PORT = 3000;

server.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});