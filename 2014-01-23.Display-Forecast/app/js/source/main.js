/* jshint camelcase:false  */

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
    var $box = $('.weather');

    for(var i = 0; i < data.forecast.simpleforecast.forecastday.length; i++){
      var day = data.forecast.simpleforecast.forecastday[i].date.weekday;
      var conditions = data.forecast.simpleforecast.forecastday[i].conditions;
      var icon = data.forecast.simpleforecast.forecastday[i].icon_url;

      $($box[i]).find('h1').text(day);
      $($box[i]).find('h2').text(conditions);
      $($box[i]).find('img').attr('src', icon);
    }
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

