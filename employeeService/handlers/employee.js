const employeeData = require('../data/employeeData.json');
const DataHandler = require("../data/DataHandler");

const serveEmployees = function(req, res) {
  let dataHandler = new DataHandler();
  let employeeData = dataHandler.getDataList();
  res.send(employeeData);
}

module.exports = serveEmployees;
