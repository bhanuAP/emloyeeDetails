const fs = require('fs');

class DataHandler {
  constructor(fs) {
    this.dataPath = "./data/employeeData.json";
    this.encoder = "utf8";
  }

  getData() {
    return fs.readFileSync(this.dataPath, this.encoder);
  }

  getDataList() {
    let data = this.getData();
    let parsedData =  JSON.parse(data);
    return Object.values(parsedData);
  }

  deleteItem(id) {
    let data = this.getData();
    let parsedData =  JSON.parse(data);
    delete parsedData[id];
    this.storeContent(JSON.stringify(parsedData));
  }

  storeContent(data) {
    fs.writeFileSync(this.dataPath, data);
  }
}

module.exports = DataHandler;
