(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#one').click(make2Buttons);
    $('#container').on('click', 'button', dynamicClick);
  }

  function make2Buttons(){
    var b2 = '<button id="two">Make One Disappear</button>';
    var b3 = '<button id="three">Make Two Disappear</button>';
    $('#container').append(b2, b3);
  }

  function dynamicClick(){
    switch(this.id){
      case 'two':
        $('#one').detach();
        break;
      case 'three':
        $('#two').detach();
    }
  }

})();

