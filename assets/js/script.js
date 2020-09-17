
var endDate = new Date("September 15, 2020 00:00:00").getTime()

var x = setInterval(
    function() {
        var now = new Date().getTime();
        var dif = endDate - now;

        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dif % (1000 * 60)) / 1000);

        // display days, hours, minutes, seconds

        if (dif <= 0) {
            // if after the end date, display the days, hours, minutes, seconds without the negative sign
            days *= -1;
            hours *= -1;
            minutes *= -1;
            seconds *= -1;
            
            document.getElementById("days").innerHTML = days;

            // set number of hours
            if (hours < 10) {
                document.getElementById("hours").innerHTML = "0" + hours;

            } else {
                document.getElementById("hours").innerHTML = hours;
            }
            // set number of minutes
            if (minutes < 10) {
                document.getElementById("minutes").innerHTML = "0" + minutes;

            } else {
                document.getElementById("minutes").innerHTML = minutes;
            }

            if (seconds < 10) {
                document.getElementById("seconds").innerHTML = "0" + seconds;

            } else {
                document.getElementById("seconds").innerHTML = seconds;
            }
        } else {
            //display normally
        }
    }, 1000);
