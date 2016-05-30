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

app.use('/', express.static(path.join(__dirname, 'client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

serv.listen(2000, () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
