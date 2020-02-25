"use strict";

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

module.exports = () => {
    return mongoClient;
}