const XLSX = require("xlsx");

class XLReader {
  read_from_excel(sheetName, filePath) {
    const wb = XLSX.readFile(filePath);
    const ws = wb.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(ws);
    return data;
  }
}

module.exports = new XLReader();
