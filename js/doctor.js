var apiKey = require('./../.env').apiKey;

function Doctor() {
}

var doctors = [];
Doctor.prototype.getDoctors = function(medicalIssue) {
  doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
    .then(function(result) {
      result.data.forEach(function(doctor) {
        doctors.push( {
          first: doctor.profile.first_name,
          last: doctor.profile.last_name,
          title: doctor.profile.title,
          gender: doctor.profile.gender,
          bio: doctor.profile.bio
        });
      });
      doctors.forEach(function(doctor) {
        if (doctor.bio != "") {
          doctor.bio = doctor.bio;
        } else {
          doctor.bio = "There is no bio in the database.";
        }
        });
    })
   .fail(function(error){
    });
};

exports.doctorModule = Doctor;
