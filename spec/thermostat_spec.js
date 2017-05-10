describe("Thermostat", function() {
  var Thermostat = require('../lib/thermostat');
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat
  });

  describe("initiation", function() {

    it("occurs with a temperature set to 20", function(){
      expect(thermostat._temp).toBe(20)
    });

    it("occurs with power-save-mode set to 'on'", function(){
      expect(thermostat._powerSave).toBe(true)
      expect(thermostat._maxTemp).toBe(25)
    });

  });

  describe("#up function", function() {

    it('increases temperature by 1 with no parameter passed', function(){
      thermostat.up(1);
      expect(thermostat._temp).toEqual(21)
    });

    it('increases temperature by 5 with relevant parameter', function(){
      thermostat.up(5);
      expect(thermostat._temp).toEqual(25)
    });

  });

  describe("#down function", function() {

    it('temperature can be decreased with a down function', function(){
      thermostat.down();
      expect(thermostat._temp).toBe(19)
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

});
