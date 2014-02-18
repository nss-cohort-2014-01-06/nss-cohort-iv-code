(function(){

  'use strict';

  $(document).ready(init);

  var timer;

  function init(){
    $('#start').click(start);
    $('#stop').click(stop);
    $('#reset').click(reset);
    //setTimeout(alertMe, 5000);
  }

  function start(){
    clearInterval(timer);
    timer = setInterval(makeColorBox, 100);
  }

  function makeColorBox(){
    var $div = $('<div>');
    $div.addClass('box');
    $div.css('background-color', randomColor());
    $('#container').prepend($div);

    $('body').css('background-color', randomColor());
  }

  function stop(){
    clearInterval(timer);
  }

  function reset(){
    $('#container').empty();
    $('body').css('background-color', 'white');
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var blu = Math.floor(Math.random() * 256);
    var grn = Math.floor(Math.random() * 256);
    var alp = Math.random();

    var color = 'rgba('+red+','+grn+','+blu+','+alp+')';

    return color;
  }


  //function alertMe(){
  //  alert('this was called by a timer');
  //}

})();

