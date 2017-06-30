var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&user_key=' + apiKey)
   .then(function(result) {
     $('.showDoctors').text("Doctors nearby who can treat you: " + result.doctor);

    }).fail(function(error){
      $('.showDoctors').text("This search returns no results, try a different term.");
    });
};

exports.doctorModule = Doctor;
