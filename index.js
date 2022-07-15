var express = require("express");
var mongo = require("mongodb").MongoClient;

var app = express();

mongo.connect("mongodb://localhost:27017");
