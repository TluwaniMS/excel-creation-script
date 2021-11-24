const excel4node = require("excel4node");
const Enumerators = require("../enumerators/data-titles");
const {
  getDataToBeScriptedAndTotalRowsRequired
} = require("../services/main-excel-scripting-service");

function mainLogicForConvertingDataToExcel() {
  const workBook = new excel4node.Workbook();
  const workSheet = workBook.addWorksheet("Sheet 1");

  const dataToBeScripted = getDataToBeScriptedAndTotalRowsRequired();

  createDoctorsDataTable(workSheet,dataToBeScripted)
  createHospitalsDataTableWithTotalDoctorsCount(workSheet,dataToBeScripted)
  createMunicipalitiesDataTableWithHospitalsCount(workSheet,dataToBeScripted)
  createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(workSheet,dataToBeScripted)
  createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(workSheet,dataToBeScripted)
}

function createDoctorsDataTable(workSheet, data) {
  const doctorsData = data.filter(
    (content) => content.dataSet.title === Enumerators.Doctors
  );

  console.log(doctorsData)
}

function createHospitalsDataTableWithTotalDoctorsCount(workSheet, data) {
  const hospitalsData = data.filter(
    (content) => content.dataSet.title === Enumerators.DoctorsCountInHospitals
  );

  console.log(hospitalsData)
}

function createMunicipalitiesDataTableWithHospitalsCount(workSheet, data) {
  const municipalitiesData = data.filter(
    (content) =>
      content.dataSet.title === Enumerators.HospitalsCountInMunicipalities
  );

  console.log(municipalitiesData)
}

function createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(
  workSheet,
  data
) {
  const municipalitiesData = data.filter(
    (content) =>
      content.dataSet.title ===
      Enumerators.DoctorsCountInMunicipalitiesGroupedByHospitals
  );

  console.log(municipalitiesData)
}

function createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(
  workSheet,
  data
) {
  const specialitiesData = data.filter(
    (content) =>
      content.dataSet.title === Enumerators.DoctorsCountGroupedBySpecialisation
  );

  console.log(specialitiesData)
}

module.exports = { mainLogicForConvertingDataToExcel };
