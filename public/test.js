$(document).ready(function(){

  t = new Thermostat();

  t._powerSave == true ? $(".powerStatus").text("On") : $(".powerStatus").text("Off")

  $(".warning").text(sessionStorage.details);

  $(".temp").text(t.whatIsTemp());

  $(".upButton").click(function(){
    t.up();
    $(".temp").text(t.whatIsTemp());
  })

  $(".downButton").click(function(){
    t.down();
    $(".temp").text(t.whatIsTemp());
  })

  $(".resetButton").click(function(){
    t.reset();
    $(".temp").text(t.whatIsTemp());
  })

  $(".slider").click(function(){
    t.powerSaveToggle();
      if (t._powerSave == true) {
        $(".powerStatus").text("On");
      } else {
        $(".powerStatus").text("Off");
      }
    });

    $(".cityButton").click(function(){
      var x = $(".citySelect option:selected").val()
      var link = "http://api.openweathermap.org/data/2.5/weather?q=" + x + "&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric";

      var the_weather = $.get(link, function(data) {
        $(".weather").text( 'Outside in ' + data.name + ' it is ' + Math.round(data.main.temp) + '°C' );
      });

    });

    var the_weather = $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric", function(data) {
      $(".weather").text( 'Outside in ' + data.name + ' it is ' + Math.round(data.main.temp) + '°C' );
    });


});
