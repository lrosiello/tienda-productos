const apiModel = require("../apiModel/index");
const csv = require("csv");
const xlsx = require("xlsx");
const fs = require("fs");
exports.getinfo = async function (req, res, next) {
    try {
      let infoRequired = req.body.info;
      if (
        typeof infoRequired == "number"
      ) {
        res.status(200).send(await apiModel.getInfo(infoRequired))
        res.status(500).send("type of value is not a date");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
    next();
  };