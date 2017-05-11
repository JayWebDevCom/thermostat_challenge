function Thermostat(){
  this._temp = 20;
  this._powerSave = true;
  this._minTemp = 10;
  this._maxTemp = 25
};

Thermostat.prototype.doChecks = function(){
  if (this._temp < this._minTemp) {
    throw new Error("Too Cold!");
  } else if (this._temp > this._maxTemp) {
    throw new Error("Too Hot!");
  };
};

Thermostat.prototype.powerSaveToggle = function(){
    this._powerSave == true ? this._powerSave = false : this._powerSave = true;
    this.maxTempSetter()
};


Thermostat.prototype.maxTempSetter = function(){
  this.powerSave == true ? this._maxTemp = 25 : this._maxTemp = 32
};


Thermostat.prototype.up = function(temp) {
  (temp) ? this._temp += temp : this._temp ++ ;
  this.doChecks();
};

Thermostat.prototype.down = function(temp) {
  (temp) ? this._temp -= temp : this._temp -- ;
  this.doChecks();
};

Thermostat.prototype.reset = function(temp) {
  (temp) ? this._temp = temp : this._temp = 20
  this.doChecks();
};

module.exports = Thermostat;
