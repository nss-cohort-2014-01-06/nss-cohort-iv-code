(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#add').click(add);
    $('#can-drink-button').click(canDrink);
    $('#product-button').click(product);
  }

  function one(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function two(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/favcolor?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

  function add(){
    var a = $('#num-1').val();
    var b = $('#num-2').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/sum/'+a+'/'+b+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#sum').text(data.sum);
    });
  }

  function canDrink(){
    var name = $('#name').val();
    var age = $('#age').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/candrink/'+name+'/'+age+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#can-drink-response').text(data.response);
    });
  }

  function product(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/product?numbers='+numbers+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

})();

