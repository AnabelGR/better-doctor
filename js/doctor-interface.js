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
