var five = require("johnny-five");
var arduino = new five.Board( { port : "COM4"});
var light = 0;
arduino.on("ready", function(){
var lightSensor = new five.Sensor({
   pin: "A0",
   freq: 250
 });
lightSensor.on("data", function(){
   light = this.value;
   console.log(light);
 });
});
