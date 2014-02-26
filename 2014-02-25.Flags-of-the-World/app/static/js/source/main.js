(function(){

  'use strict';

  $(document).ready(initialize);

  var counter = 60;
  var timer;

  function initialize(){
    $(document).foundation();
    $('.name').click(clickName);
    $('.icon').click(clickIcon);
    $('#match').click(clickMatch);
    startTimer();
  }

  function clickMatch(){
    var country = $('.name.selected').text();
    var code = $('.icon.selected > .flag').attr('class').slice(10);
    var url = '/match?country='+country+'&code='+code;
    $.getJSON(url, function(payload){
      if(payload.isMatch){
        $('.selected').addClass('matched').removeClass('selected');
        var total = $('.name').length;
        var matches = $('.name.matched').length;
        if(total - matches === 0){
          clearInterval(timer);
          alert('You have won!');
        }
      }
    });
  }

  function clickName(){
    $('.name').removeClass('selected');
    $(this).addClass('selected');
  }

  function clickIcon(){
    $('.icon').removeClass('selected');
    $(this).addClass('selected');
  }

  function startTimer(){
    timer = setInterval(updateClock, 1000);
  }

  function updateClock(){
    counter--;
    $('#clock').text(counter);

    if(!counter){
      clearInterval(timer);
      alert('Time is up!');
    }
  }

})();

