document.addEventListener('DOMContentLoaded', () => {
    var startDate = new Date("Aug 23, 2021 00:00");
    var returnDate = new Date("Sep 13, 2021 08:00");

    if (startDate <= Date.now()) {
        var flipdown = new FlipDown(
            returnDate.getTime() / 1000 + 86400,
            { theme: "dark" }
        )
        .start()
        .ifEnded(() => {
            Array.prototype.map.call(document.getElementsByClassName('here'),
                function(element) {
                element.style.display = 'block';
                }
            );
            Array.prototype.map.call(document.getElementsByClassName('away'),
                function(element) {
                element.style.display = 'none';
                }
            );
            console.log('The countdown has ended!');
        });
        Array.prototype.map.call(document.getElementsByClassName('here'),
            function(element) {
               element.style.display = 'none';
            }
        );
        Array.prototype.map.call(document.getElementsByClassName('away'),
            function(element) {
               element.style.display = 'block';
            }
        );
        console.log('The countdown has started!');
    };
});
