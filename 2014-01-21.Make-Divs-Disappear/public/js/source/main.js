(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('.box').click(clickBox);
  }

  function clickBox(){
    $(this).detach();
  }

})();

