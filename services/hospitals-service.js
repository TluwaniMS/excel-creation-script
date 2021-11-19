const { Doctors } = require("../sample-data/doctors");
const { Hospitals } = require("../sample-data/hospitals");
const DataTitles = require("../enumerators/data-titles");

function getTotalDoctorsCountInHospital() {
  const formattedHospitals = [];

  Hospitals.forEach((hospital) => {
    const doctorsLinkedToHospital = Doctors.filter(
      (doctor) => doctor.hospital === hospital.hospitalKey
    );
    const totalDoctors = doctorsLinkedToHospital.length;

    hospital.total = totalDoctors;

    const preparedData = {
      title: DataTitles.DoctorsCountInHospitals,
      data: hospital
    };

    formattedHospitals.push(preparedData);
  });

  return formattedHospitals;
}

module.exports = { getTotalDoctorsCountInHospital };
