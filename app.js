/**
 * Created by jbush_000 on 5/29/2016.
 */
"use strict";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var serv = require('http').Server(app);
var io = require('socket.io')(serv, {});

app.use('/',express.static(__dirname + '/client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/api', function(req, res) {
  res.send("Welcome to the Guild Mates api");
});

app.get('/api/game', function(req, res) {
  res.json(testData);
});

serv.listen(2000, () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

var testData = {
  game: {
    name: "Everquest",
    characters: [
      {character: "Blazemore", class: "Cleric", guild: "Valiant Crusaders"},
      {character: "Araceli", class: "Warrior", guild: "Ring of Valor"}]
  }
};

