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
  data.forEach((info, index) => {
    const rowIncrementer = index + 1;
    const currentRow = startingRow + rowIncrementer;

    workSheet.cell(currentRow, 1).string(info.firstName);
    workSheet.cell(currentRow, 2).string(info.lastName);
    workSheet.cell(currentRow, 3).string(info.gender);
    workSheet.cell(currentRow, 4).string(info.email);
    workSheet.cell(currentRow, 5).string(info.hospital);
    workSheet.cell(currentRow, 6).string(info.specialty);
  });
}

function insertHospitalsData(workSheet, startingRow, data) {
  data.forEach((info, index) => {
    const rowIncrementer = index + 1;
    const currentRow = startingRow + rowIncrementer;

    workSheet.cell(currentRow, 1).string(info.hospitalKey);
    workSheet.cell(currentRow, 2).string(info.hospitalName);
    workSheet.cell(currentRow, 3).string(info.municipality);
    workSheet.cell(currentRow, 4).number(info.total);
  });
}

function insertMunicipalitiesWithHospitalCountData(workSheet, startingRow, data) {
  data.forEach((info, index) => {
    const rowIncrementer = index + 1;
    const currentRow = startingRow + rowIncrementer;

    workSheet.cell(currentRow, 1).string(info.municipalityKey);
    workSheet.cell(currentRow, 1).string(info.municipalityName);
    workSheet.cell(currentRow, 1).string(info.total);
  });
}

function insertMunicipalitiesWithHospitalsLinkedToDoctorsCountData(workSheet, startingRow, data) {
  data.forEach((info, index) => {
    const rowIncrementer = index + 1;
    const currentRow = startingRow + rowIncrementer;
  });
}

function insertSpecialisationsCountData(workSheet, startingRow, data) {
  data.forEach((info, index) => {
    const rowIncrementer = index + 1;
    const currentRow = startingRow + rowIncrementer;
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
