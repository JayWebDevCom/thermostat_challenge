function Thermostat(){
  this._temperature = 20
};

Thermostat.prototype.up = function(temp) {
  (temp) ? this._temperature += temp : this._temperature ++ ;
};

Thermostat.prototype.down = function(temp) {
  (temp) ? this._temperature -= temp : this._temperature -- ;
};

module.exports = Thermostat;
