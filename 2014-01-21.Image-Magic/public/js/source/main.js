(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-img').click(clickAddImage);
  }

  function clickAddImage(){
    var url = $('#url').val();
    var $div = $('<div>');
    $div.css('background-image', 'url(' + url + ')');
    $('#container').append($div);
  }

})();

