function isEduHere(response) {
    let here;
    let away;
    if (response) {
       here = 'block'
       away = 'none'
    }
    else {
       here = 'none'
       away = 'block'
    };
    Array.prototype.map.call(document.getElementsByClassName('here'),
        function(element) {
            element.style.display = here;
        }
    );
    Array.prototype.map.call(document.getElementsByClassName('away'),
        function(element) {
            element.style.display = away;
        }
    );
}

function startCountdown(returnDate) {
    isEduHere(false);
    console.log('Countdown started!');
    let flipdown = new FlipDown(
        returnDate.getTime() / 1000,
        { theme: "dark" }
    )
    .start()
    .ifEnded(() => {
        console.log('Countdown ended!');
        isEduHere(true);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let startDate = new Date("Aug 08, 2025 15:00");
    let returnDate = new Date("Sept 01, 2025 09:00");

    currentDate = new Date();
    isEduHere(true);
    if (startDate <= currentDate && returnDate >= currentDate) {
        startCountdown(returnDate);
    }
    else {
        if (startDate.getTime() > currentDate.getTime()) {
            timeout = (startDate.getTime() - currentDate.getTime())
            setTimeout(
                startCountdown,
                timeout,
                returnDate
            );
            console.log(`Countdown scheduled to start in ${timeout / 1000} seconds!`);
        }
    };
});
