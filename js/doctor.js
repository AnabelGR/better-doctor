var apiKey = require('./../.env').apiKey;

function Doctors() {
}

function Doctor(first_name, last_name, title, gender, bio){
  this.first_name = first_name;
  this.last_name = last_name;
  this.title = title;
  this.gender = gender;
  this.bio = bio;
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctor) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
    var myDoctors = [];
    var doctorInfo = result.data;
      for(i=0; i < doctorInfo.length; i++) {
        var newDoctor = new Doctor(result.data[i].profile.first_name, result.data[i].profile.last_name, result.data[i].profile.title, result.data[i].profile.gender, result.data[i].profile.bio);
        myDoctors.push(newDoctor);
      }
      displayDoctor(myDoctors);
    })
   .fail(function(error){
    });
};

exports.doctorModule = Doctors;
