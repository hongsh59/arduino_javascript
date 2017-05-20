var five = require("johnny-five");
var board = new five.Board( {port: "COM4"});
board.on("ready", function() {
  console.log("Ready event. Repl instance auto-initialized!");
  var led = new five.Led(10);
  this.repl.inject({
    // Allow limited on/off control access to the
    // Led instance from the REPL.
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});
