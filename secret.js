// import SomeThingIMayNeed from "./resources/myScript"

export const secret = () => {
  /**
   * This is where you can create your "easter egg" effects
   * This `secret` function is called whenever the sequence is triggered
   *
   * Be creative, and have fun!
   */

  confettiBasedExample();
};

// just an example - feel free to remove this function and library
const confettiBasedExample = () => {
  const confetti = require("./resources/confetti.js");
  const end = Date.now() + 1000 * 5;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      return clearInterval(interval);
    }

    confetti({
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      shapes: ["square"],
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 200);
};
