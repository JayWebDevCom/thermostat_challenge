describe("Thermostat", function() {

  function setUpHTMLFixture() {

       setFixtures(
         '<script>thermostat2 = new Thermostat;function thermostatDown(){thermostat2.down();}</script>'
        +'  <input type="text" id="txtMessage">'
        +'  <div id="downButton" onclick="thermostatDown()"></div>'
        +'  <div id="output"></div>'
                );
     }


  var thermostat;


  beforeEach(function(){
    setUpHTMLFixture();
    thermostat = new Thermostat;
  });

  describe("initialization", function() {

    it("occurs with a temperature set to 20", function(){
      expect(thermostat._temp).toBe(20)
    });

    it("occurs with power-save-mode set to 'on'", function(){
      expect(thermostat._powerSave).toBe(true)
      expect(thermostat._maxTemp).toBe(25)
    });

  });

  describe("#up", function() {
    it('increases temperature by 1 with no parameter passed', function(){
      thermostat.up(1);
      expect(thermostat._temp).toEqual(21)
    });

    it('increases temperature by 5 with corresponding parameter', function(){
      thermostat.up(5);
      expect(thermostat._temp).toEqual(25)
    });

  });

  describe("#down", function() {
    it('temperature can be decreased with a down function', function(){
      thermostat.up(5);
      expect(thermostat._temp).toEqual(25)
    });
  });

  describe("#down", function() {
    it('temperature can be decreased with a down function', function(){

      $('#downButton').trigger( "click" );

      $("#output").text(thermostat2._temp);

      var temperature = $('#output').text();

      expect(temperature).toEqual('19')
    });
  });


describe("#click trigger", function() {
    it('is called', function(){
      var spyEvent = spyOnEvent('#downButton', 'click');
      $('#downButton').trigger( "click" );
      expect('click').toHaveBeenTriggeredOn('#downButton');
      expect(spyEvent).toHaveBeenTriggered();
    });
  });


  describe("#powerSaveToggle", function() {

    it("has a default value of true", function(){
      expect(thermostat._powerSave).toBe(true);
    });

    it("changes power saving mode from true to false", function(){
      thermostat.powerSaveToggle();
      expect(thermostat._powerSave).toBe(false);
    });

    it("changes _maxTemp based on powerSave toggle", function(){
      thermostat.powerSaveToggle();
      expect(thermostat._maxTemp).toBe(32);
    });

  });

  describe("#reset", function() {

    it("resets temperature to 20 degrees when the reset function is called", function(){
      thermostat.reset();
      expect(thermostat._temp).toBe(20)
    });

    it("resets temperature to a predefined value when the reset function is called with a parameter", function(){
      thermostat.reset(11);
      expect(thermostat._temp).toBe(11)
    });

  });

  describe("#doCheck", function() {
    it("throws error when temp exceeds max permitted temp", function(){
      expect(function(){
        for(var i=0; i<6; i++ ){
          thermostat.up();
        }
      }).toThrowError("Too Hot!")
    });

    it("throws error when temp exceeds min permitted temp", function(){
      expect(function(){
        for(var i=0; i<11; i++ ){
          thermostat.down();
        }
      }).toThrowError("Too Cold!")
    });

  });



});
