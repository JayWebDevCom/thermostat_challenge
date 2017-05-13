function counterInterface() {
  // $('#add').click(function() {
  //   $('#number').text(counter.getCount());
    var thermostat = new Thermostat();
    $('.downButton').click(function(){
      thermostat.down();
      $(".output").text(thermostat._temp)
    })

  // });
}
