var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=30');
    res.json({
        'Cache-Control': 'public, max-age=30',
        'Message': 'This request will be cached for 30 seconds'
    });
});

app.get('/cache30Seconds', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=30');
    res.json({
        'Cache-Control': 'public, max-age=30',
        'Message': 'This request will be cached for 30 seconds'
    });
});

app.get('/cache1Minute', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=60');
    res.json({
        'Cache-Control': 'public, max-age=60',
        'Message': 'This request will be cached for 1 minute'
    });
});

app.get('/cache1Week', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=604800');
    res.json({
        'Cache-Control': 'public, max-age=604800',
        'Message': 'This request will be cached for 1 week'
    });
});

app.get('/cache1Year', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=31557600');
    res.json({
        'Cache-Control': 'public, max-age=31557600',
        'Message': 'This request will be cached for 30 1 year'
    });
});

app.listen(3000, function () {
    console.log(`Proxy Cache application is running on port: ${port}`);
});