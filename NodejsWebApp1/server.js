var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use(express.static('content'));

app.get('/', function (req, res) {
    res.render('test', { 'name': 'Joel' });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});