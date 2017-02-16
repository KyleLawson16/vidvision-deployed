$(document).ready(function(){
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

var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('vv-iframe', {
    events: {
      'onStateChange': onPlayerStateChange
    }
    });
  }
  
  var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(pauseVideo, popUpTime);
    done = true;
  }
}
function pauseVideo() {
  player.pauseVideo();
  document.getElementById('vv-dissapear-container').style.display = '';
}