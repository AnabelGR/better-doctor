var apiKey = require('./../.env').apiKey;

function Doctor() {
}

var doctors = [];
Doctor.prototype.getDoctors = function(medicalIssue) {
  doctors = [];
  $('#doctorList').text("");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
    .then(function(result) {
      result.data.forEach(function(doc) {
        doctors.push( {
          first: doc.profile.first_name,
          last: doc.profile.last_name,
          title: doc.profile.title,
          bio: doc.profile.bio
        });
      });
      doctors.forEach(function(doc) {
        if (doc.title != undefined) {
          doc.title = doc.title;
        } else {
          doc.title = "There is no title in the database.";
        }
      });
      doctors.forEach(function(doc) {
        if (doc.bio != "") {
          doc.bio = doc.bio;
        } else {
          doc.bio = "There is no bio in the database.";
        }
      });
      if (doctors.length === 0) {
        $('#doctorList').append("<p>Try different search criteria to widen your search.</p>");
      } else {
        doctors.forEach(function(doc) {
          $('#doctorList').append(
            "<li class='info'><h3 class='doctor'>" + doc.first + " " + doc.last + ", " + doc.title + "</h3><p>" + doc.gender + "</p><p>" + doc.bio + "</p></li>"
          );
        });
      }
    })
   .fail(function(error){
    });
};

exports.doctorModule = Doctor;
