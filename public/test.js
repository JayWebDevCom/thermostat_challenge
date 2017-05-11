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
});


var the_weather = $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8d768cdf677e80b711b9f48b07da13fc&units=metric", function(data) {
  $(".weather").text( 'Outside it is ' + Math.round( data.main.temp) + '°C' );
});
