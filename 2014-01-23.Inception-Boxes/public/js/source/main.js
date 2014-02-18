(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#inception').click(inception);
  }

  function inception(){
    var num = $('#number').val() * 1;
    var $seed = $('#seed');

    for(var i = 0; i < num; i++){
      var $div = createDiv();
      $seed.wrap($div);
      $seed = $('#container > div');
    }
  }

  function createDiv(){
    var $div = $('<div>');
    var border = '1px solid ' + randomColor();
    $div.css('border', border);

    return $div;
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var grn = Math.floor(Math.random() * 256);
    var blu = Math.floor(Math.random() * 256);
    var alp = Math.random();

    return 'rgba('+red+','+grn+','+blu+','+alp+')';
  }


})();

