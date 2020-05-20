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
            document.getElementById("Timer").innerHTML = "Laiks beidzās!";
            alert("Laiks beidzās");


            var submitBtn = document.getElementById("subbutton");//apstiprināt poga
            submitBtn.style.display = "none";//paslēpt "apstiprināt" pogu
            reloadBtn.style.display = "block";//parādīt "Sākt velreiz"
            window.scrollTo(0,0); //patīt uz lapas augšu

            questions.forEach(el =>{
                if(CheckAnswer(el[0],el[1],el[2]) == true){
                    pareizi = pareizi + 1;
                    document.getElementById(el[3]).innerHTML = ' - Pareizi \u2713 ';
                    document.getElementById(el[3]).style.color = "green";
                }else{
                    nepareizi = nepareizi + 1;
                    document.getElementById(el[3]).innerHTML = ' - Nepareizi X';
                    document.getElementById(el[3]).style.color = "red";
                }
            });

            var results = "<br><p class=\'results\'>Jūs atbildējāt "+Math.round((pareizi * 100)/(pareizi+nepareizi))+"% no jautājumiem pareizi!</p>"
            document.getElementById("footer").insertAdjacentHTML('beforebegin', results);
            alert(hi);
            document.getElementById("subbutton").disabled = true;
            clearInterval(x);
            //location.reload();
        }
    }, 1000);
    var hi="Tests ir pabeigts";

    var reloadBtn = document.getElementById("reload");//'Sākt velreiz' poga
    reloadBtn.style.display = "none";//paslēpt

///////////////////////////////////////////////////////////////////////////////////