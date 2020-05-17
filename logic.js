        var pareizi = 0
        var nepareizi = 0

        //array of all questions. [id, type, answer, label]. radio [atbilde] - pēc kārtas pareizā. checkbox = visas kastītes, kas jāatzīmē, atdalīts ar ",".
        var questions = [["q1", "radio", "1", "l1"], ["q2","text", "Napoleons Bonaparts", "l2"], ["q3","select", "2", "l3"], ["q4","checkbox", "1,4", "l4"], ["q5","radio", "2", "l5"],
            ["q6", "number", "1918", "l6"], ["q7", "radio", "1", "l7"], ["q8", "number", "1920", "l8"],["q9","date","1918-11-18","l9"],["q10","range","1500","l10"]]

        //helper function to check if an answer is selected. Returns false, if there is no answer
        function IsAnswered(q, type){
            if(type == "radio"){
                var radios = document.getElementsByName(q);
                for(i = 0; i < radios.length; i++){
                    if(radios[i].checked == true){//at least one radio has been selected, so there is an answer
                        return true;
                    }
                }
                return false;
            }else if(type == "text"){
                if(document.getElementById(q).value == ""){
                    return false;
                }else{
                    return true;
                }
            }else if(type == "select"){
                return true;
            }else if(type == "checkbox"){
                var checkboxes = document.getElementsByName(q);
                for(i = 0; i < checkboxes.length; i++){
                    if(checkboxes[i].checked == true){
                        return true;
                    }
                }
                return false;
            }else if(type == "number"){
                if(document.getElementById(q).value == ""){
                    return false;
                }else{
                    return true;
                }
            }else if(type == "image"){
                var images = document.getElementsByName(q);
                if(images.selectedIndex == undefined){
                    return false;
                }else{
                    return true;
                }
            }else if(type=="date"){
                if(document.getElementById(q).value == ""){
                    return false;
                }else{
                    return true;
                }
            }
                else if(type=="range"){
                    if(document.getElementById(q).value == ""){
                        return false;
                    }else{
                        return true;
                    }
                }




            else{
                alert("Type name incorrect!")
            }
        }

        //helper function to check if the submited answer is correct. Returns false, if wrong answer
        function CheckAnswer(q, type, answer) {
            if (type == "radio") {
                var radios = document.getElementsByName(q);
                if (radios[parseInt(answer) - 1].checked == true) {
                    return true;
                } else {
                    return false;
                }
            } else if (type == "text") {
                if (document.getElementById(q).value == answer) {
                    return true;
                } else {
                    return false;
                }
            } else if (type == "select") {
                var select = document.getElementById(q);
                if (select.selectedIndex == parseInt(answer - 1)) {
                    return true;
                } else {
                    return false;
                }
            } else if (type == "checkbox") {
                var answers = answer.split(",");
                var checkboxes = document.getElementsByName(q);

                //check for all checkboxes, that all correct ones are marked and incorrect ones are not marked
                for (i = 0; i < checkboxes.length; i++) {
                    var hasAnswer = false;
                    for (j = 0; j < answers.length; j++) {
                        if (checkboxes[i].value == parseInt(answers[j])) {//current checkbox is one of the answers
                            hasAnswer = true;
                            if (checkboxes[i].checked == false) {//should be checked but isnt - wrong
                                return false;
                            } else {//should be checked and is - correct, so move on to the next checkbox
                                break;
                            }
                        }
                    }
                    if (hasAnswer == false && checkboxes[i].checked == true) {//shouldnt be checked but is - wrong
                        return false;
                    }
                }
                return true;
            } else if (type == "number") {
                if (parseInt(document.getElementById(q).value) == parseInt(answer)) {
                    return true;
                } else {
                    return false;
                }
            } else if (type == "image") {
                var images = document.getElementsByName(q);
                if (images.selectedIndex == parseInt(answer - 1)) {
                    return true;
                } else {
                    return false;
                }
            } else if (type == "date") {
                if (document.getElementById(q).value == answer) {
                    return true;
                } else {
                    return false;
                }
            }else if (type == "range") {
                if (document.getElementById(q).value == answer) {
                    return true;
                } else {
                    return false;
                }
            }




            else{
                alert("Type name incorrect!")
            }
        }


        //Apstiprināšanas (pārbaudes) poga nospiesta:
        function Submit(){

            //Checks if all questions have an answer
            /*try{
                for(i = 0; i < questions.length; i++){
                    if(IsAnswered(questions[i][0], questions[i][1]) == false){
                        alert("Kādā jautājumā nav atzīmēta atbilde!")
                        return false;
                    }
                }
            }catch(error){
                console.error(error);
            } */

            var allAnswered = true;

            questions.forEach(el => {
                if(IsAnswered(el[0], el[1]) == false){
                    document.getElementById(el[3]).innerHTML = ' - Nav atbildēts!';
                    document.getElementById(el[3]).style.color = "orange";
                    //alert("Kādā jautājumā nav atzīmēta atbilde!")
                    allAnswered = false;
                }
            });

            //checks if given answer is correct or incorrect. Pievieno tekstu jautājumam, lai zinātu, vai atbildēts pareizi.
            try{
                if(allAnswered){
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
                }

            }catch(error){
                console.error(error);
            }

            //alert("Pareizi (%): " + Math.round((pareizi * 100)/(pareizi+nepareizi)) + "%")
        }
