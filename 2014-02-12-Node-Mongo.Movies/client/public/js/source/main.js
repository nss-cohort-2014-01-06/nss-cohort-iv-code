(function(){

  'use strict';

  $(document).ready(initialize);

  var movies = [];

  function initialize(){
    $(document).foundation();
    $('#save').click(saveMovie);
    $('#update').click(updateMovie);
    $('#toggle-form').click(toggleForm);
    $('#movies').on('click', '.studio', filterStudio);
    $('#movies').on('click', '.delete', deleteMovie);
    $('#movies').on('click', '.title', populateMovie);
    getMovies();
  }

  function populateMovie(){
    $('#movie').removeClass('hide');
    $('#save').removeClass('hide').addClass('hide');
    $('#update').removeClass('hide');

    var id = $(this).parent().data('movie-id');
    var movie = _.find(movies, function(movie){return movie._id === id;});

    $('input[name="_id"]').val(movie._id);
    $('input[name="poster"]').val(movie.poster);
    $('input[name="name"]').val(movie.name);
    $('input[name="studio"]').val(movie.studio);
    $('input[name="actors"]').val(movie.actors);
    $('input[name="director"]').val(movie.director);
    $('input[name="year"]').val(movie.year);
    $('input[name="rating"]').val(movie.rating);
    $('input[name="length"]').val(movie.length);
  }

  function deleteMovie(event){
    var $button = $(this);
    var id = $button.closest('.poster').data('movie-id');
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/' + id;
    var type = 'DELETE';
    var success = removeMovie;

    $.ajax({url:url, type:type, success:success});

    event.preventDefault();
  }

  function removeMovie(data){
    if(data.deleted === 1){
      _.remove(movies, function(movie){return movie._id === data.id;});
      $('.poster[data-movie-id="'+data.id+'"]').remove();
    }
  }

  function filterStudio(){
    var studio = this.textContent;
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/query?studio=' + studio;
    $.getJSON(url, displayMovies);
  }

  function getMovies(){
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    $.getJSON(url, displayMovies);
  }

  function displayMovies(data){
    $('#movies').empty();

    for(var i = 0; i < data.movies.length; i++){
      displayMovie(data.movies[i]);
    }
  }

  function displayMovie(movie){
    movies.push(movie);

    var $poster = $('<div>');
    var $title = $('<div>');
    var $description = $('<div>');
    var $footer = $('<div>');

    $poster.addClass('poster');
    var url = 'url("'+movie.poster+'")';
    $poster.css('background-image', url);
    $poster.attr('data-movie-id', movie._id);

    $title.addClass('title');
    $title.text(movie.name);

    var about = 'A film by <span class="studio">'+movie.studio+'</span> staring <span class="actors">'+movie.actors.join(', ')+'</span>';
    $description.addClass('description');
    $description.append(about);

    var $footertxt = $('<div style="float:left; padding:5px;"></div>');
    var $footerbtn = $('<div style="float:right"><a href="#" style="margin:0px;padding:5px;" class="delete button tiny radius">x</a></div>');
    $footer.addClass('footer');
    $footertxt.text(movie.director + ' : ' + movie.year + ' : ' + movie.rating + ' : ' + movie.length);
    $footer.append($footertxt, $footerbtn);

    $poster.append($title, $description, $footer);
    $('#movies').prepend($poster);
  }

  function toggleForm(){
    $('#movie').toggleClass('hide');
  }

  function changeMovie(data){
    if(data.updated === 1){
      _.remove(movies, function(movie){return movie._id === data.id;});
      data.movie._id = data.id;
      movies.push(data.movie);

      var $poster = $('.poster[data-movie-id="'+data.id+'"]');
      $poster.css('background-image', 'url("'+data.movie.poster+'")');
      $poster.find('.title').text(data.movie.name);
      $poster.find('.studio').text(data.movie.studio);
      $poster.find('.actors').text(data.movie.actors.join(', '));
      var footer = data.movie.director + ' : ' + data.movie.year + ' : ' + data.movie.rating + ' : ' + data.movie.length;
      $poster.find('.footer > div:nth-child(1)').text(footer);
    }
  }

  function updateMovie(event){
    var data = $('#movie').serialize();
    var id = $('input[name="_id"]').val();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies/'+id;
    var type = 'PUT';
    var success = changeMovie;

    $.ajax({url:url, type:type, data:data, success:success});

    event.preventDefault();
  }

  function saveMovie(event){
    var data = $('#movie').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});

    event.preventDefault();
  }

  function newMovie(movie){
    $('#movie input').val('');
    displayMovie(movie);
  }

})();

