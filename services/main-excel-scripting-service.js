const { getAllFormattedSampleDoctors } = require("./doctors-service");
const { getTotalNumberOfDoctorsGroupedBySpecialisation } = require("./specialisations-service");
const {
  getTotalHospitalsCountInMunicipalities,
  getTotalDoctorsCountInMunicipalitiesGroupedByHospitals
} = require("./municipalities-service");
const { getTotalDoctorsCountInHospital } = require("./hospitals-service");
const standardDataSeperatorValue = require("../enumerators/standard-data-seperator");

function getDataToBeScriptedAndTotalRowsRequired() {
  const doctors = getAllFormattedSampleDoctors();
  const totalDoctorsCountInHospital = getTotalDoctorsCountInHospital();
  const totalHospitalCountInMunicipalities = getTotalHospitalsCountInMunicipalities();
  const totalDoctorsCountInMunicipalitiesGroupedByHospital = getTotalDoctorsCountInMunicipalitiesGroupedByHospitals();
  const totalDoctorsCountGroupedBySpecialisation = getTotalNumberOfDoctorsGroupedBySpecialisation();

  const dataArray = [
    doctors,
    totalDoctorsCountInHospital,
    totalHospitalCountInMunicipalities,
    totalDoctorsCountInMunicipalitiesGroupedByHospital,
    totalDoctorsCountGroupedBySpecialisation
  ];

  const arrayWithObjectsContainingDataAndMetaData = formatDataToBeScripted(dataArray);

  return arrayWithObjectsContainingDataAndMetaData;
}

function formatDataToBeScripted(dataArray) {
  const objectWithDataMeta = [];

  dataArray.forEach((content) => {
    const dataLength = content.data.length;

    const dataObject = {
      rows: dataLength,
      dataSet: content
    };

    objectWithDataMeta.push(dataObject);
  });

  return objectWithDataMeta;
}

function getTotalNumberOfRowsPreceedingDataInput(rows, positionOfDataInputOnTheSheet) {
  const spacingValue = standardDataSeperatorValue.standardSeperator * (positionOfDataInputOnTheSheet - 1);

  const totalHeaderColumns = positionOfDataInputOnTheSheet - 1;

  const totalPrecedingRows = spacingValue + totalHeaderColumns + rows;

  return totalPrecedingRows;
}

function extractColumnNames(data) {
  const duplicateObjectKeys = [];

  data.forEach((element) => duplicateObjectKeys.push(...Object.keys(element)));

  const columnNames = [...new Set(duplicateObjectKeys)];

  return columnNames;
}

function createColumnHeaders(workSheet, columnNames, startingRow) {
  columnNames.forEach((name, index) => {
    const column = index + 1;
    workSheet.cell(startingRow, column).string(name);
  });
}

function insertDoctorsData(workSheet, startingRow, data) {
  data.forEach((count, index) => {
    const rowIncrementer = index + 1;
  });
}

function insertHospitalsData(workSheet, startingRow, data) {
  data.forEach((count, index) => {
    const rowIncrementer = index + 1;
  });
}

function insertMunicipalitiesWithHospitalCountData(workSheet, startingRow, data) {
  data.forEach((count, index) => {
    const rowIncrementer = index + 1;
  });
}

function insertMunicipalitiesWithHospitalsLinkedToDoctorsCountData(workSheet, startingRow, data) {
  data.forEach((count, index) => {
    const rowIncrementer = index + 1;
  });
}

function insertSpecialisationsCountData(workSheet, startingRow, data) {
  data.forEach((count, index) => {
    const rowIncrementer = index + 1;
  });
}

module.exports = {
  getDataToBeScriptedAndTotalRowsRequired,
  getTotalNumberOfRowsPreceedingDataInput,
  extractColumnNames,
  createColumnHeaders,
  insertDoctorsData,
  insertHospitalsData,
  insertMunicipalitiesWithHospitalCountData,
  insertMunicipalitiesWithHospitalsLinkedToDoctorsCountData,
  insertSpecialisationsCountData
};
