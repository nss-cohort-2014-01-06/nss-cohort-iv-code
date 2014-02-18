(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-li').click(clickAddLi);
  }

  function clickAddLi(){
    var number = $('#number').val() * 1;
    for(var i = 1; i <= number; i++){
      var li = '<li>' + i + '</li>';
      $('#container').append(li);
    }
  }

})();

