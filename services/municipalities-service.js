const { Hospitals } = require("../sample-data/hospitals");
const { Municipalities } = require("../sample-data/municipalities");

function getTotalHospitalsCountInMunicipalities() {
  const formattedMunicipalities = [];
  Municipalities.forEach((municipality) => {
    const hospitalsLinkedToMunicipality = Hospitals.filter(
      (hospital) => hospital.municipality === municipality.municipalityKey
    );
    const totalHospitalsInMunicipality = hospitalsLinkedToMunicipality.length;

    municipality.total = totalHospitalsInMunicipality;
    formattedMunicipalities.push(municipality);
  });

  return formattedMunicipalities;
}

module.exports = { getTotalHospitalsCountInMunicipalities };
