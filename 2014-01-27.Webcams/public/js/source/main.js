(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(addZip);
    $('#get-cam').click(getCam);
    $('#clr-cam').click(clrCam);
  }

  function addZip(){
    var zip = $('#zip').val();
    var $option = $('<option>');
    $option.val(zip);
    $option.text(zip);
    $('select').append($option);
  }

  function getCam(){
    var zip = $('select').val();
    var url = 'http://api.wunderground.com/api/aad218fcd659a15a/webcams/q/'+zip+'.json?callback=?';
    $.getJSON(url, displayCams);
  }

  function clrCam(){
    $('#webcams').empty();
  }

  function displayCams(data){
    for(var i = 0; i < data.webcams.length; i++){
      var neighborhood = data.webcams[i].neighborhood;
      var url = 'url(' + data.webcams[i].WIDGETCURRENTIMAGEURL + ')';

      var $div = $('<div>');
      $div.addClass('cam');
      $div.text(neighborhood);
      $div.css('background-image', url);

      $('#webcams').prepend($div);
    }
  }

})();

