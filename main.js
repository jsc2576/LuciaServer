let express = require('express');
let route = require('./routes/image.js');
let nunjucks = require('nunjucks');
let mongoose = require('./routes/mongo.js');
let app = express();

app.set('views', __dirname+'/views'); //ejs 경로
app.set('view engine', 'html'); //ejs 사용
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static(__dirname+'/public')); // css 경로

app.get('/', (req, res)=>{
  res.redirect('/image');
});
app.get('/image', route.SendImage);
app.get('/upload', route.UploadImage);
app.listen(8080);
