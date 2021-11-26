const excel4node = require("excel4node");
const Enumerators = require("../enumerators/data-titles");
const DataInputPreceedingTitles = require("../enumerators/data-linked-to-row-level-input");
const {
  getDataToBeScriptedAndTotalRowsRequired,
  getTotalNumberOfRowsPreceedingDataInput,
  extractColumnNames,
  createColumnHeaders,
  insertDoctorsData,
  insertHospitalsData,
  insertMunicipalitiesWithHospitalCountData,
  insertMunicipalitiesWithHospitalsLinkedToDoctorsCountData,
  insertSpecialisationsCountData
} = require("../services/main-excel-scripting-service");

function mainLogicForConvertingDataToExcel() {
  console.log(`Scripting data to excel sheet has commenced`);
  const workBook = new excel4node.Workbook();
  const workSheet = workBook.addWorksheet("Sheet 1");

  const dataToBeScripted = getDataToBeScriptedAndTotalRowsRequired();

  createDoctorsDataTable(workSheet, dataToBeScripted);
  createHospitalsDataTableWithTotalDoctorsCount(workSheet, dataToBeScripted);
  createMunicipalitiesDataTableWithHospitalsCount(workSheet, dataToBeScripted);
  createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(workSheet, dataToBeScripted);
  createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(workSheet, dataToBeScripted);

  workBook.write("Doctors-directory-stats.xlsx");
  console.log(`Congratulations the data has been scripted successfuly... :)!!!`);
}

function createDoctorsDataTable(workSheet, data) {
  const doctorsData = data.filter((content) => content.dataSet.title === Enumerators.Doctors);

  const columnNames = extractColumnNames(doctorsData[0].dataSet.data);

  createColumnHeaders(workSheet, columnNames, 1);

  insertDoctorsData(workSheet, 1, doctorsData[0].dataSet.data);
}

function createHospitalsDataTableWithTotalDoctorsCount(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.SecondDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const startingRowForDataInput = getTotalNumberOfRowsPreceedingDataInput(rowsOfPreceedingData, 2);

  const hospitalsData = data.filter((content) => content.dataSet.title === Enumerators.DoctorsCountInHospitals);

  const columnNames = extractColumnNames(hospitalsData[0].dataSet.data);

  createColumnHeaders(workSheet, columnNames, startingRowForDataInput);

  insertHospitalsData(workSheet, startingRowForDataInput, hospitalsData[0].dataSet.data);
}

function createMunicipalitiesDataTableWithHospitalsCount(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.ThirdDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const startingRowForDataInput = getTotalNumberOfRowsPreceedingDataInput(rowsOfPreceedingData, 3);

  const municipalitiesData = data.filter(
    (content) => content.dataSet.title === Enumerators.HospitalsCountInMunicipalities
  );

  const columnNames = extractColumnNames(municipalitiesData[0].dataSet.data);

  createColumnHeaders(workSheet, columnNames, startingRowForDataInput);

  insertMunicipalitiesWithHospitalCountData(workSheet, startingRowForDataInput, municipalitiesData[0].dataSet.data);
}

function createMunicipalitiesDataTableWithHospitalsAndLinkedDoctorsCount(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.FourthDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const startingRowForDataInput = getTotalNumberOfRowsPreceedingDataInput(rowsOfPreceedingData, 4);

  const municipalitiesData = data.filter(
    (content) => content.dataSet.title === Enumerators.DoctorsCountInMunicipalitiesGroupedByHospitals
  );

  const columnNames = extractColumnNames(municipalitiesData[0].dataSet.data);

  createColumnHeaders(workSheet, columnNames, startingRowForDataInput);

  insertMunicipalitiesWithHospitalsLinkedToDoctorsCountData(
    workSheet,
    startingRowForDataInput,
    municipalitiesData[0].dataSet.data
  );
}

function createSpecialisationsDataTableWithTotalDoctorsCountGroupedBySpecialisation(workSheet, data) {
  const preceedingData = data.filter((content) =>
    DataInputPreceedingTitles.FifthDataInputPreceedingTitles.includes(content.dataSet.title)
  );

  const rowsOfPreceedingData = preceedingData.reduce((total, amount) => {
    return total + amount.rows;
  }, 0);

  const startingRowForDataInput = getTotalNumberOfRowsPreceedingDataInput(rowsOfPreceedingData, 5);

  const specialitiesData = data.filter(
    (content) => content.dataSet.title === Enumerators.DoctorsCountGroupedBySpecialisation
  );

  const columnNames = extractColumnNames(specialitiesData[0].dataSet.data);

  createColumnHeaders(workSheet, columnNames, startingRowForDataInput);

  insertSpecialisationsCountData(workSheet, startingRowForDataInput, specialitiesData[0].dataSet.data);
}

module.exports = { mainLogicForConvertingDataToExcel };
