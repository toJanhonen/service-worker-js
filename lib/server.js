var express = require('express');
var path = require('path');

var app = module.exports = express();

app.use(express.static(path.resolve(__dirname, '../')));

if (!module.parent) {
    app.listen(3007);
    console.log('application rdy @ http://127.0.0.1:3007');
}
