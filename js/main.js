document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var returnDate = (new Date("Jan 10, 2021").getTime() / 1000) + (86400 * 2);

  // Set up FlipDown
    var flipdown = new FlipDown(returnDate, {theme: "dark"})

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
});

