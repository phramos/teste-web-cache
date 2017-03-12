var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=31557600');

    res.render('public/index.html');
    // res.json({
    //     'Cache-Control': 'public, max-age=30',
    //     'Message': 'This request will be cached for 30 seconds'
    // });
});

app.get('/cache30Seconds', function (req, res) {
    res.setHeader('Cache-Control', 'public, max-age=30');
    res.sendfile('public/index.html');
    // res.json({
    //     'Cache-Control': 'public, max-age=30',
    //     'Message': 'This request will be cached for 30 seconds'
    // });
});
//
// app.get('/cache1Minute', function (req, res) {
//     res.setHeader('Cache-Control', 'public, max-age=60');
//     res.render('cache1Minute.html');
//     // res.json({
//     //     'Cache-Control': 'public, max-age=60',
//     //     'Message': 'This request will be cached for 1 minute'
//     // });
// });
//
// app.get('/cache1Week', function (req, res) {
//     res.setHeader('Cache-Control', 'public, max-age=604800');
//     res.render('cache1Week.html');
//     // res.json({
//     //     'Cache-Control': 'public, max-age=604800',
//     //     'Message': 'This request will be cached for 1 week'
//     // });
// });
//
// app.get('/cache1Year', function (req, res) {
//     res.setHeader('Cache-Control', 'public, max-age=31557600');
//     res.render('cache1Year.html');
//     // res.json({
//     //     'Cache-Control': 'public, max-age=31557600',
//     //     'Message': 'This request will be cached for 30 1 year'
//     // });
// });


app.listen(port, function () {
    console.log(`Proxy Cache application is running on port: ${port}`);
});