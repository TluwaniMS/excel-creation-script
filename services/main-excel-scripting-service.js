const { getAllFormattedSampleDoctors } = require("./doctors-service");
const {
  getTotalNumberOfDoctorsGroupedBySpecialisation
} = require("./specialisations-service");
const {
  getTotalHospitalsCountInMunicipalities,
  getTotalDoctorsCountInMunicipalitiesGroupedByHospitals
} = require("./municipalities-service");
const { getTotalDoctorsCountInHospital } = require("./hospitals-service");

function getDataToBeScriptedAndTotalRowsRequired() {
  const doctors = getAllFormattedSampleDoctors();
  const totalDoctorsCountInHospital = getTotalDoctorsCountInHospital();
  const totalHospitalCountInMunicipalities =
    getTotalHospitalsCountInMunicipalities();
  const totalDoctorsCountInMunicipalitiesGroupedByHospital =
    getTotalDoctorsCountInMunicipalitiesGroupedByHospitals();
  const totalDoctorsCountGroupedBySpecialisation =
    getTotalNumberOfDoctorsGroupedBySpecialisation();

  const dataArray = [
    doctors,
    totalDoctorsCountInHospital,
    totalHospitalCountInMunicipalities,
    totalDoctorsCountInMunicipalitiesGroupedByHospital,
    totalDoctorsCountGroupedBySpecialisation
  ];

  const arrayWithObjectsContainingDataAndMetaData =
    formatDataToBeScripted(dataArray);

  return arrayWithObjectsContainingDataAndMetaData;
}

function formatDataToBeScripted(dataArray) {
  const objectWithDataMeta = [];

  dataArray.forEach((data) => {
    const dataLength = data.length;

    const dataObject = {
      rows: dataLength,
      dataSet: data
    };

    objectWithDataMeta.push(dataObject);
  });

  return objectWithDataMeta;
}

module.exports = { getDataToBeScriptedAndTotalRowsRequired };
