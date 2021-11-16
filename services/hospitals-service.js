const { Doctors } = require("../sample-data/doctors");
const { Hospitals } = require("../sample-data/hospitals");

function getTotalDoctorsCountInHospital() {
  const formattedHospitals = [];

  Hospitals.forEach((hospital) => {
    const doctorsLinkedToHospital = Doctors.filter(
      (doctor) => doctor.hospital === hospital.hospitalKey
    );
    const totalDoctors = doctorsLinkedToHospital.length;

    hospital.total = totalDoctors;
    formattedHospitals.push(hospital);
  });

  return formattedHospitals;
}

module.exports = { getTotalDoctorsCountInHospital };
