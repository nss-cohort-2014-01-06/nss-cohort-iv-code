/* jshint camelcase:false  */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-weather').click(getWeather);
  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/aad218fcd659a15a/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var description = data.current_observation.wind_string;
    var direction = data.current_observation.wind_dir;
    var degrees = data.current_observation.wind_degrees;
    var speed = data.current_observation.wind_mph;
    var gust = data.current_observation.wind_gust_mph;

    var wind = [description, direction, degrees, speed, gust];

    for(var i = 0; i < wind.length; i++){
      var $li = $('<li>');
      $li.text(wind[i]);
      $('#container').append($li);
    }
  }

})();

