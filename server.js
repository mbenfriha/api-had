const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 6001;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'had',
    port     : 8889
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/approutes'); //importing route
routes(app); //register the route


/*
import http from "http";
import app from "./app";

//Use system configuration for port or use 6001 by default.
const port = process.env.port || 6001;

//Create server with exported express app
const server = http.createServer(app);
server.listen(port);*/
