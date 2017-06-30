var apiKey = require('./../.env').apiKey;

function Doctor() {
}

var doctors = [];
Doctor.prototype.getDoctors = function(medicalIssue) {
  doctors = [];
  $('#doctorList').text("");
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
        if (doctors.length === 0) {
          $('#doctorList').append("<p>Try different search criteria to widen your search.</p>");
        } else {
        doctors.forEach(function(doctor) {
          $('#doctorList').append(
            "<div class='info'><h3>" + doctor.first + " " + doctor.last + ", " +doctor.title + "</h3><p class='gender'>" + doctor.gender + "</p><p>" + doctor.bio + "</p><hr></div>"
          );
        });
      }
    })
   .fail(function(error){
    });
};

exports.doctorModule = Doctor;
