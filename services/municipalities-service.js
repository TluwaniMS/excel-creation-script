const { Hospitals } = require("../sample-data/hospitals");
const { Municipalities } = require("../sample-data/municipalities");
const { Doctors } = require("../sample-data/doctors");
const DataTitles = require("../enumerators/data-titles");

function getTotalHospitalsCountInMunicipalities() {
  const municipalities = Municipalities();
  const hospitals = Hospitals();

  const formattedMunicipalities = {
    title: DataTitles.HospitalsCountInMunicipalities,
    data: []
  };

  municipalities.forEach((municipality) => {
    const hospitalsLinkedToMunicipality = hospitals.filter(
      (hospital) => hospital.municipality === municipality.municipalityKey
    );
    const totalHospitalsInMunicipality = hospitalsLinkedToMunicipality.length;

    municipality.total = totalHospitalsInMunicipality;

    formattedMunicipalities.data.push(municipality);
  });

  return formattedMunicipalities;
}

function getTotalDoctorsCountInMunicipalitiesGroupedByHospitals() {
  const municipalities = Municipalities();
  const hospitals = Hospitals();
  const doctors = Doctors();

  const formattedMunicipalitiesWithDoctorsCountGroupedByHospitals = {
    title: DataTitles.DoctorsCountInMunicipalitiesGroupedByHospitals,
    data: []
  };

  hospitals.forEach((hospital) => {
    const municipalityLinkedToHospital = municipalities.filter(
      (municipality) => municipality.municipalityKey === hospital.municipality
    );
    const municipalityName = municipalityLinkedToHospital[0].municipalityName;

    const doctorsLinkedToHospital = doctors.filter((doctor) => doctor.hospital === hospital.hospitalKey);
    const totalDoctors = doctorsLinkedToHospital.length;

    hospital.municipality = municipalityName;
    hospital.totalDe = totalDoctors;

    formattedMunicipalitiesWithDoctorsCountGroupedByHospitals.data.push(hospital);
  });

  return formattedMunicipalitiesWithDoctorsCountGroupedByHospitals;
}

module.exports = {
  getTotalHospitalsCountInMunicipalities,
  getTotalDoctorsCountInMunicipalitiesGroupedByHospitals
};
