#!/bin/env node
import express from 'express'
import path from 'path'

import {Schema} from './data/schema';
import graphQLHTTP from 'express-graphql';

const server_port = process.env.PORT || 3000

var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src/frontend/public/index.html"));
})

app.use('/style', express.static(path.resolve(__dirname, '../src/frontend/public/style')));
app.use('/utils', express.static(path.resolve(__dirname, '../src/frontend/public/utils')));

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src/frontend/public/bundle.js"));
})

app.use('/graphql', graphQLHTTP({ schema: Schema, pretty: true, graphiql: true}));


app.listen(server_port, (err) => {
    if(err) return console.log(err)
    console.log('Server is now running on port ' + server_port);
})



