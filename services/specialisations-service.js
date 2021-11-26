const { Doctors } = require("../sample-data/doctors");
const { Specialisations } = require("../sample-data/specialisations");
const DataTitles = require("../enumerators/data-titles");

function getTotalNumberOfDoctorsGroupedBySpecialisation() {
  const doctors = Doctors();
  const specialties = Specialisations();

  const formattedSpecialisations = {
    title: DataTitles.DoctorsCountGroupedBySpecialisation,
    data: []
  };

  specialties.forEach((specialisation) => {
    const doctorsLinkedToSpecialisation = doctors.filter(
      (doctor) => doctor.specialty === specialisation.specialisationKey
    );
    const totalDoctorsLinkedToSpecialisation = doctorsLinkedToSpecialisation.length;

    specialisation.total = totalDoctorsLinkedToSpecialisation;

    formattedSpecialisations.data.push(specialisation);
  });

  return formattedSpecialisations;
}

module.exports = { getTotalNumberOfDoctorsGroupedBySpecialisation };
