const { getAllFormattedSampleDoctors } = require("./services/doctors-service");
const {
  getTotalNumberOfDoctorsGroupedBySpeccialisation
} = require("./services/specialisations-service");
const {
  getTotalHospitalsCountInMunicipalities,
  getTotalDoctorsCountInMunicipalitiesGroupedByHospitals
} = require("./services/municipalities-service");
const {
  getTotalDoctorsCountInHospital
} = require("./services/hospitals-service");
