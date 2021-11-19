const { Doctors } = require("../sample-data/doctors");
const { Specialisations } = require("../sample-data/specialisations");

function getTotalNumberOfDoctorsGroupedBySpecialisation() {
  const formattedSpecialisations = [];
  Specialisations.forEach((specialisation) => {
    const doctorsLinkedToSpecialisation = Doctors.filter(
      (doctor) => doctor.specialty === specialisation.specialisationKey
    );
    const totalDoctorsLinkedToSpecialisation =
      doctorsLinkedToSpecialisation.length;

    specialisation.total = totalDoctorsLinkedToSpecialisation;
    formattedSpecialisations.push(specialisation);
  });

  return formattedSpecialisations;
}

module.exports = { getTotalNumberOfDoctorsGroupedBySpecialisation };
