"use strict";

exports.get = ("/", (req, res, next) => {
    res.status(200).json({ "Message": "Api on" });
});