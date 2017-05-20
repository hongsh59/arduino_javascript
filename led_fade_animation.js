var five = require("johnny-five");
var board = new five.Board({ port : "COM4"});

board.on("ready", function() {

  var led = new five.Led(10);

  led.fade({
    easing: "linear",
    duration: 5000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 250, 25, 150, 100, 125],
    onstop: function() {
      console.log("Animation stopped");
    }
  });

  // Toggle the led after 2 seconds (shown in ms)
  this.wait(7000, function() {
    led.fadeOut();
  });
});
