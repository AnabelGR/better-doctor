var Doctors = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctorList').hide();
  var doctors = new Doctor();
  $('#find').click(function() {
    $('#doctorList').show();
    var medicalIssue = $('#medicalIssue').val();
    var list = doctors.getDoctors(medicalIssue);
    $('#medicalIssue').val("");
    $('#search').hide();
    $('#clear').show();

  });
  $('#clear').click(function() {
    $('#clear').hide();
    $('#doctorList').empty();
    $('#search').show();
  });
});

  $('#doctorList').text("");

  var displayDoctor = function(myDoctors) {
    for(i = 0; i < myDoctors.length; i++ ) {
      $('#doctorList').append(
        "<div class='info'><h3>" + doctor.first + " " + doctor.last + ", " + doctor.title + "</h3><p class='gender'>" + doctor.gender + "</p><p>" + doctor.bio + "</p><hr></div>"
      );
    }
  };
