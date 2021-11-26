const DataTitles = require("./data-titles");

module.exports = {
  SecondDataInputPreceedingTitles: [DataTitles.Doctors],
  ThirdDataInputPreceedingTitles: [DataTitles.Doctors, DataTitles.DoctorsCountInHospitals],
  FourthDataInputPreceedingTitles: [
    DataTitles.Doctors,
    DataTitles.DoctorsCountInHospitals,
    DataTitles.HospitalsCountInMunicipalities
  ],
  FifthDataInputPreceedingTitles: [
    DataTitles.Doctors,
    DataTitles.DoctorsCountInHospitals,
    DataTitles.HospitalsCountInMunicipalities,
    DataTitles.DoctorsCountInMunicipalitiesGroupedByHospitals
  ]
};
