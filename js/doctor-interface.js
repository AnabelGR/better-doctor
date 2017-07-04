var Doctor = require('./../js/doctor.js').doctorModule;

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

  doctors.forEach(function(doctor) {
    doctors = [];
  if (doctors.length === 0) {
    $('#doctorList').append("<p>Try different search criteria to widen your search.</p>");
  } else {
  doctors.forEach(function(doctor) {
    $('#doctorList').append(
      "<div class='info'><h3>" + doctor.first + " " + doctor.last + ", " + doctor.title + "</h3><p class='gender'>" + doctor.gender + "</p><p>" + doctor.bio + "</p><hr></div>"
    );
  });
}
