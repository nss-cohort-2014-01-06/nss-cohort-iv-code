(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-zip').click(addZip);
    $('#get-forecast').click(getForecast);
  }

  function getForecast(){
    var zip = $('#zips').val();
    var url = 'http://api.wunderground.com/api/aad218fcd659a15a/forecast/q/' + zip + '.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
  }

  function addZip(){
    var zip = $('#zip').val();
    var $option = $('<option>');
    $option.val(zip);
    $option.text(zip);
    $('#zips').append($option);

    $('#zip').val('');
    $('#zip').focus();
  }

})();

