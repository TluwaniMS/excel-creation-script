const { Doctors } = require("../sample-data/doctors");
const { Specialisations } = require("../sample-data/specialisations");
const DataTitles = require("../enumerators/data-titles");

function getTotalNumberOfDoctorsGroupedBySpecialisation() {
  const formattedSpecialisations = {
    title: DataTitles.DoctorsCountGroupedBySpecialisation,
    data: []
  };
  Specialisations.forEach((specialisation) => {
    const doctorsLinkedToSpecialisation = Doctors.filter(
      (doctor) => doctor.specialty === specialisation.specialisationKey
    );
    const totalDoctorsLinkedToSpecialisation =
      doctorsLinkedToSpecialisation.length;

    specialisation.total = totalDoctorsLinkedToSpecialisation;

    formattedSpecialisations.data.push(specialisation);
  });

  return formattedSpecialisations;
}

module.exports = { getTotalNumberOfDoctorsGroupedBySpecialisation };
