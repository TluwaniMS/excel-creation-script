const excel4node = require("excel4node");
const Enumerators = require("../enumerators/data-titles");
const DataInputPreceedingTitles = require("../enumerators/data-linked-to-row-level-input");
const {
  getDataToBeScriptedAndTotalRowsRequired,
  getTotalNumberOfRowsPreceedingDataInput
} = require("../services/main-excel-scripting-service");

function mainLogicForConvertingDataToExcel() {
  const workBook = new excel4node.Workbook();
  const workSheet = workBook.addWorksheet("Sheet 1");

  const dataToBeScripted = getDataToBeScriptedAndTotalRowsRequired();

  createDoctorsDataTable(workSheet, dataToBeScripted);
  createHospitalsDataTableWithTotalDoctorsCount(workSheet, dataToBeScripted);
  createMunicipalitiesDataTableWithHospitalsCount(workSheet, dataToBeScripted);
  createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(workSheet, dataToBeScripted);
  createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(workSheet, dataToBeScripted);
}

function createDoctorsDataTable(workSheet, data) {
  const doctorsData = data.filter((content) => content.dataSet.title === Enumerators.Doctors);
}

function createHospitalsDataTableWithTotalDoctorsCount(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.SecondDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const hospitalsData = data.filter((content) => content.dataSet.title === Enumerators.DoctorsCountInHospitals);
}

function createMunicipalitiesDataTableWithHospitalsCount(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.ThirdDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const municipalitiesData = data.filter(
    (content) => content.dataSet.title === Enumerators.HospitalsCountInMunicipalities
  );
}

function createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.FourthDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const municipalitiesData = data.filter(
    (content) => content.dataSet.title === Enumerators.DoctorsCountInMunicipalitiesGroupedByHospitals
  );
}

function createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.FifthDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const specialitiesData = data.filter(
    (content) => content.dataSet.title === Enumerators.DoctorsCountGroupedBySpecialisation
  );
}

module.exports = { mainLogicForConvertingDataToExcel };
