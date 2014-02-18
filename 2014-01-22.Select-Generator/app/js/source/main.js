(function(){

  'use strict';

  var counter = 0;

  $(document).ready(init);

  function init(){
    $('#add-color').click(addColor);
  }

  function addColor(){
    var color = $('#color').val();
    var $option = $('<option>');
    $option.val(counter);
    $option.text(color);
    $('#colors').append($option);
    counter++;

    $('#color').val('');
    $('#color').focus();
  }

})();

