(function(){

  'use strict';

  $(document).ready(initialize);

  var users = [];
  var gadgets = [];

  function initialize(){
    $(document).foundation();
    $('#user').submit(submitUser);
    $('#gadget').submit(submitGadget);
    getUsers();
    getGadgets();
    $('#gadgets').on('click', 'a.prepare', prePurchase);
    $('#gadgets').on('click', 'a.purchase', purchase);
  }

  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //

  function prePurchase(event){

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

    var uniqueUsers = _.uniq(users, function(user){
      return user.name;
    });

    var $selectUser = $('<select>');
    var $optionUser = _.map(uniqueUsers, function(user){
      var $option = $('<option>');
      $option.val(user._id);
      $option.text(user.name);
      return $option;
    });

    $selectUser.append($optionUser);
    $(this).parent().next().next().next().append($selectUser);

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

    var amount = $(this).parent().next().next().text() * 1;
    var numbers = _.range(1, amount + 1);

    var $selectAmt = $('<select>');
    var $optionAmt = _.map(numbers, function(number){
      var $option = $('<option>');
      $option.val(number);
      $option.text(number);
      return $option;
    });

    $selectAmt.append($optionAmt);
    $(this).parent().next().next().next().append($selectAmt);

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

    var $purchaseBtn = $('<a class="purchase button tiny radius" href="#">Purchase</a>');
    $(this).parent().next().next().next().append($purchaseBtn);

    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- //

    event.preventDefault();
  }

  function purchase(event){
    var userId = $(this).prev().prev().val();
    var gadgetId = $(this).parent().parent().data('gadget-id');
    var amount = $(this).prev().val();

    var data = {userId:userId, gadgetId:gadgetId, amount:amount};
    var url = generateUrl('/users/purchase');
    var type = 'PUT';
    var success = updateTables;

    $.ajax({data:data, url:url, type:type, success:success});

    event.preventDefault();
  }

  function updateTables(data){
    var $gRow = $('#gadgets tr[data-gadget-id="'+data.gadgetId+'"]');
    var $uRow = $('#users tr[data-user-id="'+data.user._id+'"]');

    $gRow.children('td:nth-child(4)').empty();

    if(data.remaining > 0){
      $gRow.children('td:nth-child(3)').text(data.remaining);
    }else{
      $gRow.remove();
    }

    $uRow.children('td:nth-child(2)').text(formatCurrency(data.user.balance));
    $uRow.children('td:nth-child(3)').text(data.user.purchases.join(', '));
  }

  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //

  function submitGadget(event){
    var data = $(this).serialize();
    var url = generateUrl('/gadgets');
    var type = 'POST';
    var success = addGadgetToTable;

    $.ajax({data:data, url:url, type:type, success:success});

    event.preventDefault();
  }

  function getGadgets(){
    var url = generateUrl('/gadgets');
    var type = 'GET';
    var success = displayAllGadgets;
    $.ajax({url:url, type:type, success:success});
  }

  function displayAllGadgets(data){
    for(var i = 0; i < data.gadgets.length; i++){
      addGadgetToTable(data.gadgets[i]);
    }
  }

  function addGadgetToTable(gadget){
    gadgets.push(gadget);

    var $row = $('<tr>');
    var $nam = $('<td>');
    var $pri = $('<td>');
    var $amt = $('<td>');
    var $trx = $('<td>');

    $row.attr('data-gadget-id', gadget._id);
    $nam.append('<a style="margin:0px;padding:5px;" class="prepare button tiny radius alert" href="#">'+gadget.name+'</a>');
    $pri.text(formatCurrency(gadget.price));
    $amt.text(gadget.amount);

    $row.append($nam, $pri, $amt, $trx);
    $('#gadgets > tbody').prepend($row);
  }

  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //

  function submitUser(event){
    var data = $(this).serialize();
    var url = generateUrl('/users');
    var type = 'POST';
    var success = addUserToTable;

    $.ajax({data:data, url:url, type:type, success:success});

    event.preventDefault();
  }

  function getUsers(){
    var url = generateUrl('/users');
    var type = 'GET';
    var success = displayAllUsers;
    $.ajax({url:url, type:type, success:success});
  }

  function displayAllUsers(data){
    for(var i = 0; i < data.users.length; i++){
      addUserToTable(data.users[i]);
    }
  }

  function addUserToTable(user){
    users.push(user);

    var $row = $('<tr>');
    var $nam = $('<td>');
    var $bal = $('<td>');
    var $pur = $('<td>');

    $row.attr('data-user-id', user._id);
    $nam.text(user.name);
    $bal.text(formatCurrency(user.balance));
    $pur.text(user.purchases.join(', '));

    $row.append($nam, $bal, $pur);
    $('#users > tbody').prepend($row);
  }

  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //
  // ------------------------------------------------------------------------ //

  function generateUrl(path){
    var url = window.location.origin.replace(/[0-9]{4}/, 4000);
    url += path;
    return url;
  }

  function formatCurrency(number){
    return '$' + number.toFixed(2);
  }

})();

