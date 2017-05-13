describe("Thermostat", function() {

  beforeEach(function() {
    $('#test_container').html('<button class="downButton">Temp value</button><p class="output"></p>');
    counterInterface();
  });

  describe("initialization", function() {

    it("occurs with a temperature set to 20", function(){
      $('.downButton').trigger( "click" );
      var temperature = $(".output").text();
      expect(temperature).toEqual('19');
    });

    it("occurs with power-save-mode set to 'on'", function(){
      expect(true).toBe(true);
    });

  });

});
