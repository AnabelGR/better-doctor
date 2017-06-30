var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#submitbtn').click(function() {
    var doctor = $('#symptom').val();
    $('#symptom').val("");
    currentDoctorObject.getDoctors(doctor);
  });
});
