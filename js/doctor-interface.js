var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var doctors = new Doctor();
  $('#find').click(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    var test = doctors.getDoctors(medicalIssue);
    $('#medicalIssue').val(" ");
    $('#search').hide();
    $('#clear').show();

  });
  $('#clear').click(function(event) {
    event.preventDefault();
    $('ul').empty();
    $('#search').show();
    $('#clear').hide();
  });
});
