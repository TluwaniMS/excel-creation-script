const { Hospitals } = require("../sample-data/hospitals");
const { Municipalities } = require("../sample-data/municipalities");
const { Doctors } = require("../sample-data/doctors");
const DataTitles = require("../enumerators/data-titles");

function getTotalHospitalsCountInMunicipalities() {
  const formattedMunicipalities = [];
  Municipalities.forEach((municipality) => {
    const hospitalsLinkedToMunicipality = Hospitals.filter(
      (hospital) => hospital.municipality === municipality.municipalityKey
    );
    const totalHospitalsInMunicipality = hospitalsLinkedToMunicipality.length;

    municipality.total = totalHospitalsInMunicipality;

    const preparedData = {
      title: DataTitles.HospitalsCountInMunicipalities,
      data: municipality
    };

    formattedMunicipalities.push(preparedData);
  });

  return formattedMunicipalities;
}

function getTotalDoctorsCountInMunicipalitiesGroupedByHospitals() {
  const formattedMunicipalitiesWithDoctorsCountGroupedByHospitals = [];

  Hospitals.forEach((hospital) => {
    const municipalityLinkedToHospital = Municipalities.filter(
      (municipality) => municipality.municipalityKey === hospital.municipality
    );
    const municipalityName = municipalityLinkedToHospital[0].municipalityName;

    const doctorsLinkedToHospital = Doctors.filter(
      (doctor) => doctor.hospital === hospital.hospitalKey
    );
    const totalDoctors = doctorsLinkedToHospital.length;

    hospital.municipality = municipalityName;
    hospital.total = totalDoctors;

    const preparedData = {
      title: DataTitles.DoctorsCountInMunicipalitiesGroupedByHospitals,
      data: hospital
    };

    formattedMunicipalitiesWithDoctorsCountGroupedByHospitals.push(
      preparedData
    );
  });

  return formattedMunicipalitiesWithDoctorsCountGroupedByHospitals;
}

module.exports = {
  getTotalHospitalsCountInMunicipalities,
  getTotalDoctorsCountInMunicipalitiesGroupedByHospitals
};
