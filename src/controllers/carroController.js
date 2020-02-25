"use strict";

const conn = require("../../bin/dbConnection");
const model = require("../models/carroModel");

exports.get = ("/", (req, res, next) => {
    const carro = new model(conn);
    carro.getAll(req, res, next);
});

exports.getOne = ("/:id", (req, res, next) => {
    const carro = new model(conn);
    carro.getOne(req, res, next);
});

exports.post = ("/", (req, res, next) => {
    const carro = new model(conn);
    carro.create(req, res, next);
});

exports.put = ("/:id", (req, res, next) => {
    const carro = new model(conn);
    carro.update(req, res, next);
});

exports.delete = ("/:id", (req, res, next) => {
    const carro = new model(conn);
    carro.remove(req, res, next);
});