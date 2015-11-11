var express = require('express');
var app = express();
var client = require('google-images');
var requestLib = require('request');

function randomIntInc(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/selvaggiona', function(request, response) {

  client.search('Selvaggia Lucarelli', {
    page: randomIntInc(1, 10),
    callback: function(err, images) {
      if (err)
        console.error(err);
      else {
        var image = images[randomIntInc(0, images.length - 1)];
        requestLib.get(image.url).pipe(response);
      }
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
