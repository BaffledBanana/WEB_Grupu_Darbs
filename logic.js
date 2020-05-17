var pareizi = 0
var nepareizi = 0

//array of all questions. [id, type, answer, label]
var questions = [["q1", "radio", "1", "l1"], ["q2","text", "Napoleons Bonaparts", "l2"], ["q3","select", "2", "l3"], ["q4","checkbox", "1,4", "l4"], ["q5","radio", "2", "l5"]]

//helper function to check if an answer is selected. Returns false, if there is no answer
function IsAnswered(q, type){
    if(type == "radio"){
        var radios = document.getElementsByName(q);
        radios.forEach(el =>{
            if(el.checked == true){//at least one radio has been selected, so there is an answer
                return true;
            }
        });
        return false;
    }else if(type == "text"){
        if(document.getElementById(q).value == null){
            return false;
        }else{
            return true;
        }
    }else if(type == "select"){
        return true;
    }else if(type == "checkbox"){
        var checkboxes = document.getElementsByName(q);
        checkboxes.forEach(el => {
            if(el.checked == true){
                return true;
            }
        });
        return false;
    }else{
        alert("Type name incorrect!")
    }
}

//helper function to check if the submited answer is correct. Returns false, if wrong answer
function CheckAnswer(q, type, answer){
    if(type == "radio"){
        var radios = document.getElementsByName(q);
        if(radios[parseInt(answer) - 1].checked == true){
            return true;
        }else{
            return false;
        }
    }else if(type == "text"){
        if(document.getElementById(q).value == answer){
            return true;
        }else{
            return false;
        }
    }else if(type == "select"){
        var select = document.getElementById("mySelect");
        if(select.selectedIndex == parseInt(answer - 1)){
            return true;
        }else{
            return false;
        }
    }else if(type == "checkbox"){
        var answers = answer.split(",");
        var checkboxes = document.getElementsByName(q);

        //check for all checkboxes, that all correct ones are marked and incorrect are not marked
        checkboxes.forEach(el =>{
            answers.forEach(ans =>{
                if(el.value == parseInt(ans)){
                    if(el.checked == false){//should be checked but isnt - wrong
                        return false;
                    }
                }else{
                    if(el.checked == true){//shouldnt be checked but is - wrong
                        return false;
                    }
                }
            })
        })
        return true;
    }else{
        alert("Type name incorrect!")
    }
}

function Submit(){
    questions.forEach(el => {
        if(IsAnswered(el[0], el[1]) == false){
            alert("Kādā jautājumā nav atzīmēta atbilde!")
            break;
        }
    });

    questions.forEach(el =>{
        if(CheckAnswer(el[0],el[1],el[2]) == true){
            pareizi = pareizi + 1;
            document.getElementById(el[4]).innerHTML = 'Pareizi';
            document.getElementById(el[4]).style.color = "green";
        }else{
            nepareizi = nepareizi + 1;
            document.getElementById(el[4]).innerHTML = 'Nepareizi';
            document.getElementById(el[4]).style.color = "red";
        }
    })
}

/* Ievadu parbaude (blakus jautajumam rada NEPAREIZES lejblus sarkana krasā)*/

        function SubmitLegacy(){
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