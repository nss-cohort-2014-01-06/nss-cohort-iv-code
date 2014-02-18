(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-color').click(addColor);
    $('#colors').change(paintColor);
  }

  function paintColor(){
    var color = $('#colors').val();
    $('#paint').css('background-color', color);
  }

  function addColor(){
    var color = $('#color').val();
    var $option = $('<option>');
    $option.val(color.toLowerCase());
    $option.text(color.toUpperCase());
    $('#colors').append($option);

    $('#color').val('');
    $('#color').focus();
  }

})();

