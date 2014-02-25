(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(add);
    $('#product').click(product);
  }

  function product(){
    var numbers = $('#numbers').val();
    var url = '/calc/product?numbers=' + numbers;
    $.getJSON(url, function(data){
      $('#product-result').text(data.product);
    });
  }

  function add(){
    var x = $('#a').val();
    var y = $('#b').val();
    var url = '/calc/add?x=' + x + '&y=' + y;
    $.getJSON(url, function(data){
      $('#sum').text(data.sum);
    });
  }

})();

