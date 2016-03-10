#!/bin/env node
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _schema = require('./data/schema');

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server_port = process.env.PORT || 3000;

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, "../src/frontend/public/index.html"));
});

app.use('/style', _express2.default.static(_path2.default.resolve(__dirname, '../src/frontend/public/style')));
app.use('/utils', _express2.default.static(_path2.default.resolve(__dirname, '../src/frontend/public/utils')));

app.get('/bundle.js', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, "../src/frontend/public/bundle.js"));
});

app.use('/graphql', (0, _expressGraphql2.default)({ schema: _schema.Schema, pretty: true, graphiql: true }));

app.listen(server_port, function (err) {
    if (err) return console.log(err);
    console.log('Server is now running on port ' + server_port);
});