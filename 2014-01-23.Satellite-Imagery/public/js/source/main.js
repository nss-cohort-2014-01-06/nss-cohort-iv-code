(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#get-imagery').click(getImagery);
  }

  function getImagery(){
    var zip = $('#zip').val();
    var url = 'http://api.wunderground.com/api/aad218fcd659a15a/satellite/q/'+zip+'.json?callback=?';

    $.getJSON(url, function(data){
      var $images = $('#container img');
      var index = 0;

      for(var property in data.satellite){
        $($images[index]).attr('src', data.satellite[property]);
        index++;
      }
    });
  }

})();

