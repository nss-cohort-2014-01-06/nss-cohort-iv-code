$(document).ready(initialize);

function initialize(){
  // $ means jQuery
  //$('css or jquery selector')
  $('h1').css('color', 'red');
  $('h1').css('font-size', '15px');
  var currentH1Text = $('h1').text();
  console.log(currentH1Text);
  $('h1').text('Welcome to Javascript');

  $('div').css('color', '#ff00ff');
  $('#d2').css('font-size', '9px');
  $('#d3').css('background-color', 'yellow');

  $('.c1').css({'color':'green', 'background-color':'red'}).text('chyld');

  var bgcolor = prompt('What background color do you want?');
  $('#d3').css('background-color', bgcolor);

  var numPs = $('.cp').length;
  console.log(numPs);
}

