const { Doctors } = require("../sample-data/doctors");
const { Hospitals } = require("../sample-data/hospitals");
const { Specialisations } = require("../sample-data/specialisations");
const DataTitles = require("../enumerators/data-titles");

function getAllFormattedSampleDoctors() {
  const doctors = Doctors();
  const specialties = Specialisations();
  const hospitals = Hospitals();

  const formattedDoctors = { title: DataTitles.Doctors, data: [] };

  doctors.forEach((doctor) => {
    const hospitalLinkedToDoctor = hospitals.filter((hospital) => hospital.hospitalKey === doctor.hospital);
    const hospitalName = hospitalLinkedToDoctor[0].hospitalName;

    const specialtyLinkedToDoctor = specialties.filter((specialty) => specialty.specialisationKey === doctor.specialty);
    const specialtyName = specialtyLinkedToDoctor[0].specialisationName;

    doctor.specialty = specialtyName;
    doctor.hospital = hospitalName;

    formattedDoctors.data.push(doctor);
  });

  return formattedDoctors;
}

module.exports = { getAllFormattedSampleDoctors };
