describe("Thermostat", function() {
  var Thermostat = require('../lib/thermostat');
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat
  });

  it("initiates with a temperature function set to 20", function(){
    expect(thermostat.temperature).toBe(20)
  });

});
