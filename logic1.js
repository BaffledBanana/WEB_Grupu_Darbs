    var slider = document.getElementById("q10");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
/////////////////////////////////////////////////////////////////////////////////////
    // Set the date we're counting down to
    var countDownDate = new Date().getTime()+300000;

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("Timer").innerHTML = minutes + "m " + seconds + "s ";
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("Timer").innerHTML = "Time is out!";
            alert("Time is out");
            location.reload();
        }
    }, 1000);
    var hi="Tests ir pabeigts";

    var reloadBtn = document.getElementById("reload");//'Sākt velreiz' poga
    reloadBtn.style.display = "none";//paslēpt

///////////////////////////////////////////////////////////////////////////////////