function counterInterface() {
  var thermostat = new Thermostat();
  $(".downButton").click(function() {
    thermostat.down();
    $(".output").text(thermostat._temp);
  });
}
