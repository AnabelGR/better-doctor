var apiKey = require('./../.env').apiKey;

function Doctor(){
}

var doctors = [];

Doctor.prototype.getDoctors = function(medicalIssue) {
  doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(result) {
     console.log(result);
    //  result.data.forEach(function(doctor) {
    //    doctors.push({
    //      first: doc.profile.first_name,
    //      last: doc.profile.last_name
    //    });
    //  });
   $('.showDoctors').append('<p>Doctors nearby who can treat you: </p><li>' + result.data + '</li>');
  }).fail(function(error){
    $('.showDoctors').text('This search returns no results, try a different term.');
  });
  };

exports.doctorModule = Doctor;
