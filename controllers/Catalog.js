'use strict';

var utils = require('../utils/writer.js');
var Catalog = require('../service/CatalogService');

module.exports.catalogGetUsingGET = function catalogGetUsingGET (req, res, next, xBrokerAPIVersion) {
  console.log("********* CATALOG GET **********");
  console.log(JSON.stringify(req.headers));
  console.log(JSON.stringify(res));
  Catalog.catalogGetUsingGET(xBrokerAPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
