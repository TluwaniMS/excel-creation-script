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

  municipalities.forEach((municipality) => {
    const hospitalsLinkedToMunicipality = hospitals.filter(
      (hospital) => hospital.municipality === municipality.municipalityKey
    );
    const hospitalKeys = hospitalsLinkedToMunicipality.map((hospital) => hospital.hospitalKey);
    const doctorsLinkedToMunicipality = doctors.filter((doctor) => hospitalKeys.includes(doctor.hospital));

    const totalDoctors = doctorsLinkedToMunicipality.length;

    municipality.totalDoctors = totalDoctors;

    formattedMunicipalitiesWithDoctorsCountGroupedByHospitals.data.push(municipality);
  });

  return formattedMunicipalitiesWithDoctorsCountGroupedByHospitals;
}

module.exports = {
  getTotalHospitalsCountInMunicipalities,
  getTotalDoctorsCountInMunicipalitiesGroupedByHospitals
};
