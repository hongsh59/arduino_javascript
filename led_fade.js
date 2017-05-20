var five = require("johnny-five");
var board = new five.Board({ port : "COM4"});

board.on("ready", function() {

  var led = new five.Led(10);

  led.fadeIn();

  // Toggle the led after 2 seconds (shown in ms)
  this.wait(5000, function() {
    led.fadeOut();
  });
});
