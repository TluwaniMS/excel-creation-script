const { getAllFormattedSampleDoctors } = require("./services/doctors-service");
const {
  getTotalNumberOfDoctorsGroupedBySpeccialisation
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
    getTotalNumberOfDoctorsGroupedBySpeccialisation();
}
