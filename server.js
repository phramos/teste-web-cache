var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/cache30Seconds', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=30');
    res.render('pages/cache30Seconds');
});

app.get('/cache1Minute', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=60');
    res.render('pages/cache1Minute');
});

app.get('/cache1Week', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=604800');
    res.render('pages/cache1Week');
});

app.get('/cache1Year', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=31557600');
    res.render('pages/cache1Year');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});


