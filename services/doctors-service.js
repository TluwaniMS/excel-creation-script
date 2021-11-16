const { Doctors } = require("../sample-data/doctors");
const { Hospitals } = require("../sample-data/hospitals");
const { Specialisations } = require("../sample-data/specialisations");

function getAllFormattedSampleDoctors() {
  const formattedDoctors = [];

  Doctors.forEach((doctor) => {
    const hospitalLinkedToDoctor = Hospitals.filter(
      (hospital) => hospital.hospitalKey === doctor.hospital
    );
    const hospitalName = hospitalLinkedToDoctor[0].hospitalName;

    const specialtyLinkedToDoctor = Specialisations.filter(
      (specialty) => specialty.specialisationKey === doctor.specialty
    );
    const specialtyName = specialtyLinkedToDoctor[0].specialisationName;

    doctor.specialty = specialtyName;
    doctor.hospital = hospitalName;

    formattedDoctors.push(doctor);
  });

  return formattedDoctors;
}

module.exports = { getAllFormattedSampleDoctors };
