$(document).ready(function(){

  $('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
  });


  t._powerSave == true ? $(".powerStatus").text("On") : $(".powerStatus").text("Off")

  $(".storage").text(localStorage.weather);

  $(".temp").text(t.whatIsTemp() + '°C');

  $(".upButton").click(function(){
    try {
      t.up();
      $(".temp").text(t.whatIsTemp() + '°C');

      if (t._temp >= t._minTemp && t._temp <= t._maxTemp) {
        $(".warning").text('')
      }

    }
    catch(err) {
      $(".warning").text(err.message);
      $(".temp").text(t.whatIsTemp() + '°C');
    }
  });

  $(".downButton").click(function(){
    try {
      t.down();
      $(".temp").text(t.whatIsTemp() + '°C');

      if (t._temp >= t._minTemp && t._temp <= t._maxTemp) {
        $(".warning").text('');
      }

    }
    catch(err) {
      $(".warning").text(err.message);
      $(".temp").text(t.whatIsTemp() + '°C');
    }
  });

  $(".resetButton").click(function(){
    t.reset();
    $(".temp").text(t.whatIsTemp() + '°C');
  })

  $(".slider").click(function(){
    t.powerSaveToggle();
    if (t._powerSave == true) {
      $(".powerStatus").text("On");
    } else {
      $(".powerStatus").text("Off");
    }
  });


  $(".citySelect").change(function(){
    var x = $(".citySelect option:selected").val()
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + x + "&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric";
    $.get(link, function(data) {
      $(".weather").text( data.name + ': ' + Math.round(data.main.temp) + '°C' );
    });
  });

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric", function(data) {
    $(".weather").text( data.name + ': ' + Math.round(data.main.temp) + '°C' );
  });


});
