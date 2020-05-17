 var pareizi = 0
        var nepareizi = 0

/* Ievadu parbaude (blakus jautajumam rada NEPAREIZES lejblus sarkana krasā)*/

        function Submit(){
      /*pirmais jaut. */
            if(document.getElementById('1.1').checked || document.getElementById('1.2').checked || document.getElementById('1.3').checked || document.getElementById('1.4').checked) {
                if (document.querySelector('input[name="q1"]:checked').value == "Ādolfs Hitlers") {
                    pareizi += 1;

                } else {
                    nepareizi += 1;
                    document.getElementById('l1').innerHTML = 'nepareizi';
                    document.getElementById('l1').style.color = "red";
                }
            }else{
                nepareizi += 1;
                document.getElementById('l1').innerHTML = 'nepareizi';
                document.getElementById('l1').style.color = "red";}
   /*otrais jaut.  */

        if(document.getElementById("q2").value=="Napoleons Bonaparts"){
            pareizi+=1;
        }else{
            nepareizi+=1;
            document.getElementById('l2').innerHTML = 'nepareizi';
            document.getElementById('l2').style.color = "red";
        }
/* trešais jaut */
            var e = document.getElementById("q3");
            var strUser = e.options[e.selectedIndex].value;
            if(strUser==1492){
                pareizi+=1;
            }else{
                nepareizi+=1;
                document.getElementById('l3').innerHTML = 'nepareizi';
                document.getElementById('l3').style.color = "red";
            }
            /* ceturtais jautajums */
            var checkedValue = null;
            var inputElements = document.getElementsByClassName('messageCheckbox');
            var ans=0;
            for(var i=0; inputElements[i]; ++i){
                if(inputElements[i].checked){
                    checkedValue = inputElements[i].value;
                    if(checkedValue==1 || checkedValue==4){
                        ans+=1;
                        checkedValue=0;
                    }else{break;}
                }
            }
if(ans==2){
    pareizi+=1;
}else{
    nepareizi+=1;
    document.getElementById('l4').innerHTML = 'nepareizi';
    document.getElementById('l4').style.color = "red";
}
/* Piektais jautajums */
if(document.getElementById('5.1').checked || document.getElementById('5.2').checked || document.getElementById('5.3').checked) {
    if (document.querySelector('input[name="q5"]:checked').value == "Austrumu") {
        pareizi += 1;

    } else {
        nepareizi += 1;
        document.getElementById('l5').innerHTML = 'nepareizi';
        document.getElementById('l5').style.color = "red";
    }
}else{
    nepareizi += 1;
    document.getElementById('l5').innerHTML = 'nepareizi';
    document.getElementById('l5').style.color = "red";
}




/* Rezultatu izvade(pareizes) */
alert("pareizi: " + pareizi);
        }