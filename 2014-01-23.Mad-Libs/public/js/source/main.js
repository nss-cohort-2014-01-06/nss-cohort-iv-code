(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-libs').click(addLibs);
    $('#mad-libs').on('click', '.word', makeSentence);
  }

  function addLibs(){
    var sentence = $('#words').val();
    var words = sentence.split(' ');
    for(var i = 0; i < words.length; i++){
      var $button = $('<button>');
      $button.addClass('word');
      $button.text(words[i]);
      $('#mad-libs').append($button);
    }
  }

  function makeSentence(){
    var word = this.textContent;
    var sentence = $('#sentence').text() + ' ' + word;
    $('#sentence').text(sentence);
  }

})();

