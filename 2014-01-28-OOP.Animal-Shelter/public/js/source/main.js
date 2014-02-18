/* global Animal: false, animalFactory: false */

(function(){

  'use strict';

  $(document).ready(initialize);

  var animals = [];

  function initialize(){
    $('input, textarea').focusin(focusInput);
    $('input, textarea').blur(blurInput);
    $('#add-photo').click(addPhoto);
    $('#add-animal').click(addAnimal);

    animals = animalFactory();
    displayAnimals();
  }

  function createHyperlink(search, value){
    return '<a href="#" data-search="'+search+'" data-value="'+value+'">'+value+'</a>';
  }

  function displayAnimals(){
    _.each(animals, function(animal){
      var $tr = $('<tr>');
      var $name = $('<td>');
      $name.text(animal.name);
      var $species = $('<td>');
      $species.append(createHyperlink('species', animal.species));
      var $gender = $('<td>');
      $gender.append(createHyperlink('gender', animal.gender));
      var $age = $('<td>');
      $age.append(createHyperlink('age', animal.age));
      var $color = $('<td>');
      $color.append(createHyperlink('color', animal.color));
      var $description = $('<td>');
      $description.text(animal.description);
      var $photos = $('<td>');
      _.each(animal.photos, function(photo){
        $photos.append(createThumb(photo));
      });

      $tr.append($name, $species, $gender, $age, $color, $description, $photos);
      $('#animals').append($tr);
    });
  }

  function addAnimal(event){
    var name = $('#name').val();
    var species = $('#species').val();
    var gender = $('#gender').val();
    var age = $('#age').val() * 1;
    var color = $('#color').val();
    var description = $('#description').val();
    var photos = getAnimalPhotos();

    var animal = new Animal(name, age, gender, photos, description, color, species);
    animals.push(animal);

    event.preventDefault();
  }

  function getAnimalPhotos(){
    var $divs = $('#photos > a > div');
    return _.map($divs, function(div){
      return $(div).css('background-image');
    });
  }

  function addPhoto(event){
    var url = $('#photo').val();
    url = 'url(' + url + ')';

    var $a = createThumb(url);
    $('#photos').append($a);

    $('#photo').val('');
    $('#photo').focus();

    event.preventDefault();
  }

  function createThumb(url){
    var $a = $('<a>');
    $a.attr('href', '#');
    $a.addClass('th radius');

    var $div = $('<div>');
    $div.css('background-image', url);
    $div.addClass('photo');

    $a.append($div);

    return $a;
  }

  function focusInput(){
    $(this).css('background-color', '#ffff66');
  }

  function blurInput(){
    $(this).css('background-color', 'white');
  }

})();

