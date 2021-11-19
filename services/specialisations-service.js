const { Doctors } = require("../sample-data/doctors");
const { Specialisations } = require("../sample-data/specialisations");
const DataTitles = require("../enumerators/data-titles");

function getTotalNumberOfDoctorsGroupedBySpecialisation() {
  const formattedSpecialisations = [];
  Specialisations.forEach((specialisation) => {
    const doctorsLinkedToSpecialisation = Doctors.filter(
      (doctor) => doctor.specialty === specialisation.specialisationKey
    );
    const totalDoctorsLinkedToSpecialisation =
      doctorsLinkedToSpecialisation.length;

    specialisation.total = totalDoctorsLinkedToSpecialisation;

    const preparedData = {
      title: DataTitles.DoctorsCountGroupedBySpecialisation,
      data: specialisation
    };

    formattedSpecialisations.push(preparedData);
  });

  return formattedSpecialisations;
}

module.exports = { getTotalNumberOfDoctorsGroupedBySpecialisation };
