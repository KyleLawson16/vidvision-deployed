$.noConflict();
jQuery( document ).ready( function ( $ ){
var request;
$('#vv-gate-form').submit(function(event) {
  if (request) {
    request.abort();
  }
  var $form = $(this);
  var $inputs = $form.find('input, select, button, textarea');
  var serializedData = $form.serialize(); $inputs.prop('disabled', true);
  request = $.ajax({ url: 'https://script.google.com/macros/s/AKfycbzHpV0bYr0oKbFmLR6Xg1dKAAKWfJIafy7qsy7oRiQJXPxZ7v8/exec', type: 'post', data: serializedData});
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
