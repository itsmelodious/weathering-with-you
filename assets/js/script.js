
var endDate = new Date("May 27, 2020 00:00:00").getTime()

var x = setInterval(
    function() {
        
        var now = new Date().getTime();
        var dif = endDate - now;

        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dif % (1000 * 60)) / 1000);

        //display days, hours, minutes, seconds

        if (dif >= 0) {
            //if after the end date
            index.getElementById("days").innerHTML = days;
            index.getElementById("hours").innerHTML = hours;
            index.getElementById("minutes").innerHTML = minutes;
            index.getElementById("seconds").innerHTML = seconds;
            //do something 
        } else {
            //display normally
        }
    }, 1000);
