const { Doctors } = require("../sample-data/doctors");
const { Hospitals } = require("../sample-data/hospitals");
const DataTitles = require("../enumerators/data-titles");

function getTotalDoctorsCountInHospital() {
  const formattedHospitals = {
    title: DataTitles.DoctorsCountInHospitals,
    data: []
  };

  Hospitals.forEach((hospital) => {
    const doctorsLinkedToHospital = Doctors.filter(
      (doctor) => doctor.hospital === hospital.hospitalKey
    );
    const totalDoctors = doctorsLinkedToHospital.length;

    hospital.total = totalDoctors;

    formattedHospitals.data.push(hospital);
  });

  return formattedHospitals;
}

module.exports = { getTotalDoctorsCountInHospital };
