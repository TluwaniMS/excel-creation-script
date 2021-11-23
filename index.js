const {
  getDataToBeScriptedAndTotalRowsRequired
} = require("./services/main-excel-scripting-service");
const {
  mainLogicForConvertingDataToExcel
} = require("./excel-scripting/main-excel-scripting");

mainLogicForConvertingDataToExcel();
