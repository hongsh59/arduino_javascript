var five = require("johnny-five");
var arduino = new five.Board({port: "COM4"});
arduino.on("ready", function(){
    var led = new five.Led(10);
    led.blink(500);
});
