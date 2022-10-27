
var countDownDate = new Date().getTime();
var x = setInterval(function () {
    var now: number = new Date().getTime();

    var distance: number = countDownDate - now;

    var days: number = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours: number = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes: number = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds: number = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(`${days}days ${hours}hours ${minutes}minutes and ${seconds}seconds remaining...`)
    if (distance < 0) {
        clearInterval(x);
        console.log("Your time is now");
    }
}, 1000);