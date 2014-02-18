(function(){

  'use strict';

  $(document).ready(init);

  var random;
  var stats = {wins: 0, total: 0};

  function init(){
    $('#play').click(play);
    $('.cup').click(guess);
  }

  function play(){
    random = Math.floor(Math.random() * 3);
    $('#container').show();
  }

  function guess(){
    var pick = $(this).index();
    stats.total++;

    if(pick === random){
      stats.wins++;
    }

    var score = (stats.wins / stats.total) * 100;
    score = score.toFixed(2);
    $('#score').text(score + '%');
    random = Math.floor(Math.random() * 3);
  }

})();

