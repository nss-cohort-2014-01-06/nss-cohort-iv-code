(function(){

  'use strict';

  $(document).ready(initialize);

  var timer;
  var words;

  function initialize(){
    $('#start').click(start);
  }

  function start(){
    words = $('#preamble').val();
    stripPunctuation();
    words = _.shuffle(words);
    timer = setInterval(getRandomLetter, 300);
  }

  function stripPunctuation(){
    words = words.split(' ');
    words = _.map(words, function(word){
      return word.split(',').join('').split('.').join('');
    });
  }

  function getRandomLetter(){
    var word;

    if(words.length){
      word = words.pop();
    } else {
      clearInterval(timer);
      return;
    }

    if(word.length % 2 === 0){
      evenWord(word);
    } else {
      oddWord(word);
    }
  }

  function evenWord(word){
    var orig = word;
    word = word.toLowerCase();
    word = word.slice(1) + word[0] + 'a';
    var length = word.length;
    var numbers = _.range(1, length + 1);
    var sum = _.reduce(numbers, function(sum, num){return sum + num;}, 0);
    displayWord(orig, word, sum, '#evens');
  }

  function displayWord(orig, word, num, selector){
    var $box = $('<div>');
    var $lnk = $('<a>');
    var $wrd = $('<span>');
    var $num = $('<span>');

    $box.addClass('box');
    $lnk.attr('href', 'http://www.google.com/search?q=' + orig);
    $wrd.text(word);
    $num.text(num);

    $lnk.append($wrd, $num);
    $box.append($lnk);
    $(selector).append($box);
  }

  function oddWord(word){
    var orig = word;
    word = word.toUpperCase();
    word = word.split('A').join('').split('E').join('').split('I').join('').split('O').join('').split('U').join('');
    var length = word.length;
    if(!length){return;}
    var numbers = _.range(1, length + 1);
    var factorial = _.reduce(numbers, function(sum, num){return sum * num;}, 1);
    displayWord(orig, word, factorial, '#odds');
  }

})();

