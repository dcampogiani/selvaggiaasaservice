var express = require('express');
var app = express();
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

  var data = [
    "http://www.siciliainformazioni.com/wp-content/uploads/2016/08/Selvaggia-Lucarelli-1.jpg",
    "http://media.gossipblog.it/9/9df/selvaggia-lucarelli-foto-sky.jpg",
    "http://www.chedonna.it/wp-content/uploads/Selvaggia_Lucarelli.jpg",
    "http://www.mywhere.it/wp-content/uploads//2014/06/selvaggia-lucarelli.jpg",
    "http://gds.it.cdn-immedia.net/2015/01/Selvaggia-Lucarelli-9.jpg",
    "http://ilarge.lisimg.com/image/2826136/1037full-selvaggia-lucarelli.jpg",
    "http://www.speakerscorner.me/wp-content/uploads/2016/04/selvaggia7.jpg",
    "https://s-media-cache-ak0.pinimg.com/736x/9e/d7/26/9ed726487342d1bc5e3923dc5691ff34.jpg",
    "http://www.bellaweb.it/files/2013/03/Selvaggia-Lucarelli.jpg",
    "http://www.lettera43.it/upload/images/11_2014/l43-selvaggia-lucarelli-141118170545_big.jpg",
    "http://www.superstarz.com/wp-content/uploads/2015/01/SELVAGGIA-LUCARELLI-NAPOLI.jpg"
  ];

  var index = randomIntInc(0,data.length - 1);
  var imageUrl = data[index];

  requestLib.get(imageUrl).pipe(response);

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
