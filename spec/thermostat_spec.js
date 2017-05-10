describe("Thermostat", function() {
  var Thermostat = require('../lib/thermostat');
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat
  });

  it("initiates with a temperature function set to 20", function(){
    expect(thermostat._temperature).toBe(20)
  });

  it('temperature can be increased with an up function', function(){
    thermostat.up(5);
    expect(thermostat._temperature).toBe(25)
  });

  it('temperature can be decreased with an up function', function(){
    thermostat.down();
    expect(thermostat._temperature).toBe(19)
  });



});
