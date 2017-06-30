var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $('#submitbtn').click(function() {
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    currentDoctor.getDoctors(medicalIssue);
  });
});
