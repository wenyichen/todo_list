var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

var uri = process.env.MONGODB_URI || "mongodb://todolistadmin:todolistpass@ds044689.mlab.com:44689/todolist";
var options = {
    useMongoClient: true,
};
mongoose.connect(uri, options);
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

app.use(express.static(path.resolve(__dirname, './client/build')));
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

      res.json(items);
  });
});

app.post('/api/items', function(req, res) {

  item.create({
    title : req.body.title,
    text : req.body.text
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
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(process.env.PORT || 3001);
console.log('listening on *:' + (process.env.PORT || 3001));
