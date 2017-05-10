function Thermostat(){
  this._temp = 20;
  this._powerSave = true;
  this._minTemp = 10;
  this._maxTemp = 25
};

Thermostat.prototype.doChecks = function(){

  if (this._temp < this._minTemp) {
    throw new TypeError("Too Cold!");
  } else if (this._temp > this._maxTemp) {
    throw new TypeError("Too Hot!");
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
  this.doChecks();
  (temp) ? this._temp += temp : this._temp ++ ;
};

Thermostat.prototype.down = function(temp) {
  this.doChecks();
  (temp) ? this._temp -= temp : this._temp -- ;
};

Thermostat.prototype.reset = function(temp) {
  this.doChecks();
  (temp) ? this._temp = temp : this._temp = 20
};

module.exports = Thermostat;


// if (this._powerSave == true ){
//   this._powerSave = false
//   this._maxTemp = 32
// }
// else {
//   this._powerSave = true
//   this._maxTemp = 25
// }
