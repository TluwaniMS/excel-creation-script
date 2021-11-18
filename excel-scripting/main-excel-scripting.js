const excel4node = require("excel4node");

function mainLogicForConvertingDataToExcel() {
  const workBook = new excel4node.Workbook();
  const workSheet = workBook.addWorksheet("Sheet 1");
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
