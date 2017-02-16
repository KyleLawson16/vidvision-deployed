$(document).ready(function(){
var request;
$('#vv-gate-form').submit(function(event) {
  if (request) {
    request.abort();
  }
  var $form = $(this);
  var $inputs = $form.find('input, select, button, textarea');
  var serializedData = $form.serialize(); $inputs.prop('disabled', true);
  request = $.ajax({ url: 'https://script.google.com/macros/s/AKfycbx8tlCoqt36AifSRFuS8p8BN4Lbyba2pFZl4a9LS-N7iQVP6JQC/exec', type: 'post', data: serializedData});
  request.done(function(response, textStatus, jqXHR) {
    console.log('Hooray, it worked!');
    console.log(response);
    console.log(textStatus);
    console.log(jqXHR);
  });
  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.error('The following error occurred: ' + textStatus, errorThrown);
  });
  request.always(function() {
    $inputs.prop('disabled', false);
  });
  event.preventDefault();
});
});

function submitAnswer1() {
  document.getElementById('vv-selected-answer').value = document.getElementById('vv-answer1').value;
}

function submitAnswer2() {
  document.getElementById('vv-selected-answer').value = document.getElementById('vv-answer2').value;
}

function submitAnswer3() {
  document.getElementById('vv-selected-answer').value = document.getElementById('vv-answer3').value;
}

function submitAnswer4() {
  document.getElementById('vv-selected-answer').value = document.getElementById('vv-answer4').value;
}