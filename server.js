/* global __dirname, process */
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/client'));
app.set('views', __dirname + '/client');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
