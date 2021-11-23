const excel4node = require("excel4node");
const {
  getDataToBeScriptedAndTotalRowsRequired
} = require("../services/main-excel-scripting-service");

function mainLogicForConvertingDataToExcel() {
  const workBook = new excel4node.Workbook();
  const workSheet = workBook.addWorksheet("Sheet 1");
  const dataToBeScripted = getDataToBeScriptedAndTotalRowsRequired();
  console.log(dataToBeScripted);
}

function createDoctorsDataTable(workSheet, data) {}

function createHospitalsDataTableWithTotalDoctorsCount(workSheet, data) {}

function createMunicipalitiesDataTableWithHospitalsCount(workSheet, data) {}

function createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(
  workSheet,
  data
) {}

function createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(
  workSheet,
  data
) {}

module.exports = { mainLogicForConvertingDataToExcel };
