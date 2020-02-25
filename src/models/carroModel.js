"use strict";

const objectId = require("mongodb").ObjectId;

function Carro (connection) {
    this._conn = connection;
}

Carro.prototype.getAll = function (req, res, next) {
    const connection = this._conn();
    connection.connect()
        .then((client) => {
            const col = client.db("Api")
                .collection("Carro");
            col.find().toArray((err, result) => {
                res.status(200).json(result);
            });
        })
}

Carro.prototype.getOne = function (req, res, next) {
    const id = req.params.id;
    const connection = this._conn();
    connection.connect()
        .then((client) => {
            const col = client.db("Api")
                .collection("Carro");
            col.find({ _id: objectId(id) }).toArray((err, result) => {
                res.status(200).json(result);
            });
        });
}

Carro.prototype.create = function (req, res, next) {
    const data = req.body;
    const connection = this._conn();
    connection.connect()
        .then((client) => {
            const col = client.db("Api")
                .collection("Carro");
            col.insertOne(data, (err, result) => {
                if (!err) { res.status(201).send("Inserido"); }
                else { res.status(400).send("Erro"); }
            });
        });
}

Carro.prototype.update = function (req, res, next) {
    const id = req.params.id;
    const data = req.body;
    const connection = this._conn();
    connection.connect()
        .then((client) => {
            const col = client.db("Api")
                .collection("Carro");
            col.updateOne({ _id: { $eq: objectId(id) } },
                { $set: { "Modelo": data.Modelo, "Marca": data.Marca, "Ano": data.Ano } },
                (err, result) => {
                    if (!err) { res.status(200).send("Atualizado"); }
                    else { res.status(400).send(err); }
                });
        });
}

Carro.prototype.remove = function (req, res, next) {
    const id = req.params.id;
    const connection = this._conn();
    connection.connect()
        .then((client) => {
            const col = client.db("Api")
                .collection("Carro");
            col.remove({ _id: objectId(id) }, (err, result) => {
                if (!err) { res.status(200).send("Removido"); }
                else { res.status(400).send(err); }
            });
        });
}

module.exports = Carro;