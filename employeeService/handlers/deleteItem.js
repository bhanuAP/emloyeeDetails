const dataPath = "./data/employeeData.json";
const DataHandler = require("../data/DataHandler");

const deleteItem = function(req, res) {
  let dataHandler = new DataHandler();
  let { employeeId } = req.params;
  dataHandler.deleteItem(employeeId);
  let remainingEmployees = dataHandler.getDataList();
  res.send(remainingEmployees);
}

module.exports = deleteItem;
