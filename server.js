var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var uri = process.env.MONGODB_URI;
mongoose.connect(uri);

app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var item = mongoose.model('item', {
  title : String,
  text : String
});

app.get('/api/items', function(req, res) {

  item.find(function(err, items) {

      if (err){
        res.send(err)
      }

      res.json(todos);
  });
});

app.post('/api/items', function(req, res) {

  item.create({
    title : req.body.title,
    text : req.body.text,
    done : false
  }, function(err, todo) {
    if (err) {
      res.send(err);
    }

    item.find(function(err, items) {
      if(err){
        res.send(err);
      }
      res.json(items);
    });
  });
});

app.delete('/api/items/:id', function(req, res) {

  item.remove({
    _id : req.params.id
  }, function(err, todo) {
    if (err){
      res.send(err);
    }

    item.find(function(err, items) {
      if (err){
        res.send(err);
      }
      res.json(items);
    });
  });
});

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

app.listen(process.env.PORT);
console.log('listening on *:' + process.env.PORT);
