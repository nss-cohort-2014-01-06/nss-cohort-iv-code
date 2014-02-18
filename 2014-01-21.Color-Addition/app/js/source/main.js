(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-colors').click(clickAddColors);
  }

  function clickAddColors(){
    var colors = $('#colors').val();
    colors = colors.split(', ');
    for(var i = 0; i < colors.length; i++){
      var $div = $('<div>');
      $div.text(i + 1);
      $div.css('background-color', colors[i]);
      $('#container').append($div);
    }

    createSumColor(colors);
  }

  function createSumColor(colors){
    var sum = 0;
    for(var i = 0; i < colors.length; i++){
      sum += (i + 1);
    }

    var red = Math.floor(Math.random() * 256);
    var grn = Math.floor(Math.random() * 256);
    var blu = Math.floor(Math.random() * 256);

    var random = 'rgb('+red+','+grn+','+blu+')';

    var $div = $('<div>');
    $div.text(sum);
    $div.css('background-color', random);
    $('#container').append($div);
  }

})();

