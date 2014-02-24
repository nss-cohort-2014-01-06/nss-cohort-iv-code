(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#authentication').click(clickAuthentication);
    $('#register').click(clickRegister);
    $('#login').click(clickLogin);
  }

  function clickRegister(event){
    var url = generateUrl('/users');
    var data = $('#user').serialize();
    var type = 'POST';
    var success = displayRegistrationMessage;

    $.ajax({url:url, data:data, type:type, success:success});

    event.preventDefault();
  }

  function displayRegistrationMessage(status){
    if(status.isSuccess){
      alert('You have successfully registered');
    }else{
      alert('The email was already taken');
    }
  }

  function clickLogin(event){
    var url = generateUrl('/users/login');
    var data = $('#user').serialize();
    var type = 'PUT';
    var success = displayLoginMessage;

    $.ajax({url:url, data:data, type:type, success:success});

    event.preventDefault();
  }

  function displayLoginMessage(status){
    console.log(status);
  }

  function clickAuthentication(){
    $('#user').toggleClass('hide');
  }

  function generateUrl(path){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000');
    url += path;
    return url;
  }

})();

